import { useNotesStore } from '../../stores/notesStore'
import { useTranslation } from '../../i18n'
import type { Note } from '../../types/note'

export function NoteList() {
  const t = useTranslation()
  const {
    searchQuery,
    setSearchQuery,
    setEditingNote,
    getFilteredNotes,
  } = useNotesStore()

  const notes = getFilteredNotes()

  const handleCreateNew = () => {
    setEditingNote({
      id: '',
      title: '',
      content: '',
      createdAt: '',
      updatedAt: '',
    })
  }

  const handleEditNote = (note: Note) => {
    setEditingNote(note)
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
          {t('notes.title')}
        </h2>
        <button
          onClick={handleCreateNew}
          className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-white bg-[var(--color-brand)] hover:opacity-90 rounded-lg transition-opacity"
        >
          <span className="material-symbols-outlined text-[16px]">add</span>
          {t('notes.createNew')}
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b border-[var(--color-border)]">
        <div className="relative">
          <span className="material-symbols-outlined text-[18px] text-[var(--color-text-tertiary)] absolute left-3 top-1/2 -translate-y-1/2">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('notes.searchPlaceholder')}
            className="w-full pl-9 pr-4 py-2 text-sm bg-[var(--color-surface-container-low)] border border-[var(--color-border)] rounded-lg text-[var(--color-text-primary)] placeholder:text-[var(--color-text-tertiary)] focus:outline-none focus:border-[var(--color-brand)]"
          />
        </div>
      </div>

      {/* Notes list */}
      <div className="flex-1 overflow-y-auto">
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <span className="material-symbols-outlined text-[48px] text-[var(--color-text-tertiary)] mb-3">
              description
            </span>
            <p className="text-sm text-[var(--color-text-tertiary)]">
              {searchQuery ? t('notes.noResults') : t('notes.empty')}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-[var(--color-border)]">
            {notes.map((note) => (
              <button
                key={note.id}
                onClick={() => handleEditNote(note)}
                className="w-full px-4 py-3 text-left hover:bg-[var(--color-surface-hover)] transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-[var(--color-text-primary)] truncate">
                      {note.title || t('notes.untitled')}
                    </h3>
                    <p className="mt-1 text-xs text-[var(--color-text-tertiary)] line-clamp-2">
                      {note.content || t('notes.noContent')}
                    </p>
                  </div>
                  <span className="text-xs text-[var(--color-text-tertiary)] whitespace-nowrap">
                    {new Date(note.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
