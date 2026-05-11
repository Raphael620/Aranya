## Why

Aranya needs a persona system that gives users a choice of three distinct AI personalities:
- **兰拉迦 (Araja)**: Professional office assistant — formal, efficient, task-oriented
- **兰拉娜 (Arana)**: Lively life companion — casual, friendly, expressive
- **兰罗摩 (Arama)**: Rational mentor/observer — thoughtful, analytical, measured

This allows users to choose an interaction style that suits their needs and mood.

## What Changes

- Define persona type interfaces and persona definitions with system prompt templates
- Add persona state to chatStore (per-session persona selection)
- Create a PersonaSelector component for settings and chat header
- Inject persona prompt into system context at session creation
- Add i18n keys for persona names and descriptions

## Capabilities

### New Capabilities
- `ai-persona`: Persona system — definitions, switching, prompt injection, state persistence

### Modified Capabilities

(none)

## Impact

- `desktop/src/types/persona.ts` — new type definitions
- `desktop/src/config/personas.ts` — persona definitions with system prompts
- `desktop/src/stores/chatStore.ts` — persona state per session
- `desktop/src/components/chat/PersonaSelector.tsx` — new component
- `desktop/src/i18n/locales/zh.ts` and `en.ts` — new i18n keys
