import type { Note } from '../types/note'

const STORAGE_KEY = 'aranya-notes'

export function loadNotes(): Note[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    if (!data) return []
    return JSON.parse(data) as Note[]
  } catch {
    return []
  }
}

export function saveNotes(notes: Note[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
}

export function generateNoteId(): string {
  return `note_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}
