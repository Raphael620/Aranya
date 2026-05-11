import { useState, useRef, useEffect } from 'react'
import { useTranslation } from '../../i18n'
import { useNotesStore } from '../../stores/notesStore'
import { useNoteChatContextStore } from '../../stores/noteChatContextStore'
import type { Note } from '../../types/note'

type NoteSelectorProps = {
  sessionId: string
  onClose: () => void
}

export function NoteSelector({ sessionId, onClose }: NoteSelectorProps) {
  const t = useTranslation()
  const notes = useNotesStore((s) => s.notes)
  const addReference = useNoteChatContextStore((s) => s.addReference)
  const existingRefs = useNoteChatContextStore((s) => s.referencesBySession[sessionId] ?? [])
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredNotes = search.trim()
    ? notes.filter((note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase()),
      )
    : notes

  const existingNoteIds = new Set(existingRefs.map((ref) => ref.noteId))

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [onClose])

  const handleSelect = (note: Note) => {
    addReference(sessionId, note)
    onClose()
  }

  return (
    <div
      ref={containerRef}
      className="absolute bottom-full left-0 z-50 mb-2 max-h-[320px] w-[300px] overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-container-lowest)] shadow-[var(--shadow-dropdown)]"
    >
      <div className="border-b border-[var(--color-border)] px-3 py-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('notes.searchPlaceholder')}
          autoFocus
          className="w-full bg-transparent text-sm text-[var(--color-text-primary)] outline-none placeholder:text-[var(--color-text-tertiary)]"
        />
      </div>
      <div className="max-h-[260px] overflow-y-auto">
        {filteredNotes.length === 0 ? (
          <div className="px-4 py-6 text-center text-sm text-[var(--color-text-tertiary)]">
            {notes.length === 0 ? t('notes.empty') : t('notes.noResults')}
          </div>
        ) : (
          filteredNotes.map((note) => {
            const isReferenced = existingNoteIds.has(note.id)
            return (
              <button
                key={note.id}
                onClick={() => !isReferenced && handleSelect(note)}
                disabled={isReferenced}
                className={`flex w-full items-start gap-3 px-4 py-2.5 text-left transition-colors ${
                  isReferenced
                    ? 'cursor-default opacity-50'
                    : 'hover:bg-[var(--color-surface-hover)]'
                }`}
              >
                <span className="material-symbols-outlined mt-0.5 text-[16px] text-[var(--color-text-tertiary)]">
                  {isReferenced ? 'check' : 'sticky_note_2'}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium text-[var(--color-text-primary)]">
                    {note.title || t('notes.untitled')}
                  </div>
                  {note.content && (
                    <div className="mt-0.5 truncate text-xs text-[var(--color-text-tertiary)]">
                      {note.content.slice(0, 80)}
                    </div>
                  )}
                </div>
              </button>
            )
          })
        )}
      </div>
    </div>
  )
}
