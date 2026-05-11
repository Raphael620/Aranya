## 1. Persona Definitions

- [x] 1.1 Create persona type interface in `desktop/src/types/persona.ts`
- [x] 1.2 Create persona definitions with system prompts in `desktop/src/config/personas.ts`
- [x] 1.3 Add i18n keys for persona names and descriptions

## 2. Chat Store Integration

- [x] 2.1 Add persona state to chatStore (per-session persona ID)
- [x] 2.2 Add setPersona action to chatStore
- [x] 2.3 Set default persona to Araja on session creation

## 3. Persona Selector Component

- [x] 3.1 Create PersonaSelector component
- [x] 3.2 Integrate PersonaSelector into ActiveSession header
- [x] 3.3 Wire persona selection to chatStore

## 4. System Prompt Injection

- [x] 4.1 Inject persona prompt into system context at session creation

## 5. Verification

- [x] 5.1 Run type checking (tsc --noEmit)
