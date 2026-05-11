export type PersonaId = 'araja' | 'arana' | 'arama'

export interface Persona {
  id: PersonaId
  nameKey: string
  descriptionKey: string
  systemPrompt: string
}

export interface PersonaState {
  personaId: PersonaId
}
