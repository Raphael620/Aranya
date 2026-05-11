export interface Note {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
}

export const NOTE_TITLE_MAX_LENGTH = 200
export const NOTE_CONTENT_MAX_LENGTH = 10000
