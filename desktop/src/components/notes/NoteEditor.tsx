import { useState, useEffect } from 'react'
import { useNotesStore } from '../../stores/notesStore'
import { useTranslation } from '../../i18n'
import type { Note } from '../../types/note'
import { NOTE_TITLE_MAX_LENGTH, NOTE_CONTENT_MAX_LENGTH } from '../../types/note'

type Props = {
  note: Note | null
  onClose: () => void
}

export function NoteEditor({ note, onClose }: Props) {
  const t = useTranslation()
  const { createNote, updateNote, deleteNote } = useNotesStore()
  const [title, setTitle] = useState(note?.title ?? '')
  const [content, setContent] = useState(note?.content ?? '')
  const [error, setError] = useState<string | null>(null)

  const isNew = !note

  useEffect(() => {
    if (note) {
      setTitle(note.title)
      setContent(note.content)
    }
  }, [note])

  const handleSave = () => {
    if (!title.trim()) {
      setError(t('notes.error.titleRequired'))
      return
    }

    if (isNew) {
      const result = createNote(title.trim(), content.trim())
      if (!result) {
        setError(t('notes.error.createFailed'))
        return
      }
    } else {
      const result = updateNote(note!.id, title.trim(), content.trim())
      if (!result) {
        setError(t('notes.error.updateFailed'))
        return
      }
    }

    onClose()
  }

  const handleDelete = () => {
    if (note && window.confirm(t('notes.confirmDelete'))) {
      deleteNote(note.id)
      onClose()
    }
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
          {isNew ? t('notes.createNew') : t('notes.edit')}
        </h2>
        <div className="flex items-center gap-2">
          {!isNew && (
            <button
              onClick={handleDelete}
              className="px-3 py-1.5 text-sm text-[var(--color-error)] hover:bg-[var(--color-error)]/10 rounded-lg transition-colors"
            >
              {t('notes.delete')}
            </button>
          )}
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-sm text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-hover)] rounded-lg transition-colors"
          >
            {t('common.cancel')}
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-1.5 text-sm font-medium text-white bg-[var(--color-brand)] hover:opacity-90 rounded-lg transition-opacity"
          >
            {t('common.save')}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {error && (
          <div className="px-3 py-2 text-sm text-[var(--color-error)] bg-[var(--color-error)]/10 rounded-lg">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
            {t('notes.title')}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
              setError(null)
            }}
            maxLength={NOTE_TITLE_MAX_LENGTH}
            placeholder={t('notes.titlePlaceholder')}
            className="w-full px-3 py-2 text-sm bg-[var(--color-surface-container-low)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-brand)]"
          />
          <div className="mt-1 text-xs text-[var(--color-text-tertiary)] text-right">
            {title.length}/{NOTE_TITLE_MAX_LENGTH}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">
            {t('notes.content')}
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength={NOTE_CONTENT_MAX_LENGTH}
            placeholder={t('notes.contentPlaceholder')}
            rows={12}
            className="w-full px-3 py-2 text-sm bg-[var(--color-surface-container-low)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-brand)] resize-none"
          />
          <div className="mt-1 text-xs text-[var(--color-text-tertiary)] text-right">
            {content.length}/{NOTE_CONTENT_MAX_LENGTH}
          </div>
        </div>
      </div>
    </div>
  )
}
