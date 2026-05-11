import { useEffect } from 'react'
import { useNotesStore } from '../../stores/notesStore'
import { NoteList } from './NoteList'
import { NoteEditor } from './NoteEditor'

export function NotesPanel() {
  const { editingNote, setEditingNote, loadNotes } = useNotesStore()

  useEffect(() => {
    loadNotes()
  }, [loadNotes])

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[var(--color-surface)]">
      <div className="flex-1 overflow-hidden">
        {editingNote ? (
          <NoteEditor
            note={editingNote}
            onClose={() => setEditingNote(null)}
          />
        ) : (
          <NoteList />
        )}
      </div>
    </div>
  )
}
