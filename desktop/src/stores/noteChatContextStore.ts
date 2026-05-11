import { create } from 'zustand'
import type { Note } from '../types/note'

export type NoteChatReference = {
  id: string
  noteId: string
  title: string
  content: string
}

type NoteChatContextStore = {
  referencesBySession: Record<string, NoteChatReference[] | undefined>
  addReference: (sessionId: string, note: Note) => void
  removeReference: (sessionId: string, referenceId: string) => void
  clearReferences: (sessionId: string) => void
  clearSession: (sessionId: string) => void
}

export function formatNoteReferencePrompt(references: NoteChatReference[]) {
  if (references.length === 0) return ''
  const lines = [
    'Referenced notes:',
    ...references.map((ref) => {
      const titleLine = `- ${ref.title}`
      const contentLines = ref.content.split('\n').map((line) => `  ${line}`)
      return [titleLine, ...contentLines].join('\n')
    }),
  ]
  return lines.join('\n')
}

export const useNoteChatContextStore = create<NoteChatContextStore>((set) => ({
  referencesBySession: {},

  addReference: (sessionId, note) =>
    set((state) => {
      const reference: NoteChatReference = {
        id: `note:${note.id}`,
        noteId: note.id,
        title: note.title,
        content: note.content,
      }
      const existing = state.referencesBySession[sessionId] ?? []
      const withoutDuplicate = existing.filter((item) => item.noteId !== note.id)
      return {
        referencesBySession: {
          ...state.referencesBySession,
          [sessionId]: [...withoutDuplicate, reference],
        },
      }
    }),

  removeReference: (sessionId, referenceId) =>
    set((state) => {
      const existing = state.referencesBySession[sessionId] ?? []
      return {
        referencesBySession: {
          ...state.referencesBySession,
          [sessionId]: existing.filter((ref) => ref.id !== referenceId),
        },
      }
    }),

  clearReferences: (sessionId) =>
    set((state) => ({
      referencesBySession: {
        ...state.referencesBySession,
        [sessionId]: [],
      },
    })),

  clearSession: (sessionId) =>
    set((state) => {
      if (!(sessionId in state.referencesBySession)) return state
      const { [sessionId]: _removed, ...rest } = state.referencesBySession
      return { referencesBySession: rest }
    }),
}))
