import { beforeEach, describe, expect, it } from 'vitest'
import {
  formatNoteReferencePrompt,
  useNoteChatContextStore,
} from './noteChatContextStore'
import type { Note } from '../types/note'

const initialState = useNoteChatContextStore.getInitialState()

const sampleNote: Note = {
  id: 'note-1',
  title: 'Project Goals',
  content: 'Build a desktop app with Tauri and React.',
  createdAt: '2026-05-01T00:00:00.000Z',
  updatedAt: '2026-05-01T00:00:00.000Z',
}

const sampleNote2: Note = {
  id: 'note-2',
  title: 'API Notes',
  content: 'REST endpoints:\n- GET /sessions\n- POST /messages',
  createdAt: '2026-05-02T00:00:00.000Z',
  updatedAt: '2026-05-02T00:00:00.000Z',
}

describe('noteChatContextStore', () => {
  beforeEach(() => {
    useNoteChatContextStore.setState(initialState, true)
  })

  it('adds a note reference to a session', () => {
    const store = useNoteChatContextStore.getState()
    store.addReference('session-1', sampleNote)

    const refs = useNoteChatContextStore.getState().referencesBySession['session-1']
    expect(refs).toHaveLength(1)
    expect(refs![0].noteId).toBe('note-1')
    expect(refs![0].title).toBe('Project Goals')
    expect(refs![0].content).toBe('Build a desktop app with Tauri and React.')
  })

  it('deduplicates note references by noteId', () => {
    const store = useNoteChatContextStore.getState()
    store.addReference('session-1', sampleNote)
    store.addReference('session-1', sampleNote)

    const refs = useNoteChatContextStore.getState().referencesBySession['session-1']
    expect(refs).toHaveLength(1)
  })

  it('allows multiple different notes per session', () => {
    const store = useNoteChatContextStore.getState()
    store.addReference('session-1', sampleNote)
    store.addReference('session-1', sampleNote2)

    const refs = useNoteChatContextStore.getState().referencesBySession['session-1']
    expect(refs).toHaveLength(2)
    expect(refs![0].noteId).toBe('note-1')
    expect(refs![1].noteId).toBe('note-2')
  })

  it('removes a specific note reference', () => {
    const store = useNoteChatContextStore.getState()
    store.addReference('session-1', sampleNote)
    store.addReference('session-1', sampleNote2)
    store.removeReference('session-1', 'note:note-1')

    const refs = useNoteChatContextStore.getState().referencesBySession['session-1']
    expect(refs).toHaveLength(1)
    expect(refs![0].noteId).toBe('note-2')
  })

  it('clears all references for a session', () => {
    const store = useNoteChatContextStore.getState()
    store.addReference('session-1', sampleNote)
    store.addReference('session-1', sampleNote2)
    store.clearReferences('session-1')

    const refs = useNoteChatContextStore.getState().referencesBySession['session-1']
    expect(refs).toHaveLength(0)
  })

  it('clears session data entirely', () => {
    const store = useNoteChatContextStore.getState()
    store.addReference('session-1', sampleNote)
    store.clearSession('session-1')

    expect(useNoteChatContextStore.getState().referencesBySession['session-1']).toBeUndefined()
  })

  it('isolates references between sessions', () => {
    const store = useNoteChatContextStore.getState()
    store.addReference('session-1', sampleNote)
    store.addReference('session-2', sampleNote2)

    const refs1 = useNoteChatContextStore.getState().referencesBySession['session-1']
    const refs2 = useNoteChatContextStore.getState().referencesBySession['session-2']
    expect(refs1).toHaveLength(1)
    expect(refs2).toHaveLength(1)
    expect(refs1![0].noteId).toBe('note-1')
    expect(refs2![0].noteId).toBe('note-2')
  })

  it('formats note references into a prompt string', () => {
    const prompt = formatNoteReferencePrompt([
      {
        id: 'note:note-1',
        noteId: 'note-1',
        title: 'Project Goals',
        content: 'Build a desktop app with Tauri and React.',
      },
    ])

    expect(prompt).toContain('Referenced notes:')
    expect(prompt).toContain('- Project Goals')
    expect(prompt).toContain('Build a desktop app with Tauri and React.')
  })

  it('formats multi-line note content with indentation', () => {
    const prompt = formatNoteReferencePrompt([
      {
        id: 'note:note-2',
        noteId: 'note-2',
        title: 'API Notes',
        content: 'REST endpoints:\n- GET /sessions\n- POST /messages',
      },
    ])

    expect(prompt).toContain('- API Notes')
    expect(prompt).toContain('  REST endpoints:')
    expect(prompt).toContain('  - GET /sessions')
    expect(prompt).toContain('  - POST /messages')
  })

  it('returns empty string for empty references', () => {
    expect(formatNoteReferencePrompt([])).toBe('')
  })
})
