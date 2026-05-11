import type { Note } from '../types/note'
import { useNotesStore } from '../stores/notesStore'

export const notesApi = {
  list: (): Note[] => {
    return useNotesStore.getState().notes
  },

  get: (id: string): Note | undefined => {
    return useNotesStore.getState().notes.find((n) => n.id === id)
  },

  create: (title: string, content: string): Note | null => {
    return useNotesStore.getState().createNote(title, content)
  },

  update: (id: string, title: string, content: string): Note | null => {
    return useNotesStore.getState().updateNote(id, title, content)
  },

  delete: (id: string): void => {
    useNotesStore.getState().deleteNote(id)
  },

  search: (query: string): Note[] => {
    useNotesStore.getState().setSearchQuery(query)
    return useNotesStore.getState().getFilteredNotes()
  },
}
