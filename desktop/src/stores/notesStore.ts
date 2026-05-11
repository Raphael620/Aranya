import { create } from 'zustand'
import type { Note } from '../types/note'
import { NOTE_TITLE_MAX_LENGTH, NOTE_CONTENT_MAX_LENGTH } from '../types/note'
import { loadNotes, saveNotes, generateNoteId } from '../lib/notesStorage'

type NotesStore = {
  notes: Note[]
  searchQuery: string
  editingNote: Note | null

  loadNotes: () => void
  createNote: (title: string, content: string) => Note | null
  updateNote: (id: string, title: string, content: string) => Note | null
  deleteNote: (id: string) => void
  setSearchQuery: (query: string) => void
  setEditingNote: (note: Note | null) => void
  getFilteredNotes: () => Note[]
}

export const useNotesStore = create<NotesStore>((set, get) => ({
  notes: [],
  searchQuery: '',
  editingNote: null,

  loadNotes: () => {
    const notes = loadNotes()
    set({ notes })
  },

  createNote: (title: string, content: string) => {
    if (title.length > NOTE_TITLE_MAX_LENGTH) return null
    if (content.length > NOTE_CONTENT_MAX_LENGTH) return null

    const now = new Date().toISOString()
    const newNote: Note = {
      id: generateNoteId(),
      title,
      content,
      createdAt: now,
      updatedAt: now,
    }

    const notes = [newNote, ...get().notes]
    saveNotes(notes)
    set({ notes })
    return newNote
  },

  updateNote: (id: string, title: string, content: string) => {
    if (title.length > NOTE_TITLE_MAX_LENGTH) return null
    if (content.length > NOTE_CONTENT_MAX_LENGTH) return null

    const notes = get().notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          title,
          content,
          updatedAt: new Date().toISOString(),
        }
      }
      return note
    })

    saveNotes(notes)
    set({ notes })
    return notes.find((n) => n.id === id) ?? null
  },

  deleteNote: (id: string) => {
    const notes = get().notes.filter((note) => note.id !== id)
    saveNotes(notes)
    set({ notes, editingNote: null })
  },

  setSearchQuery: (query: string) => {
    set({ searchQuery: query })
  },

  setEditingNote: (note: Note | null) => {
    set({ editingNote: note })
  },

  getFilteredNotes: () => {
    const { notes, searchQuery } = get()
    if (!searchQuery) return notes

    const query = searchQuery.toLowerCase()
    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(query) ||
        note.content.toLowerCase().includes(query),
    )
  },
}))
