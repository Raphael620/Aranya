## Context

The chat system uses `chatStore` to manage sessions and messages. System prompts are injected at session creation time. The persona system needs to:
1. Store persona selection per session
2. Inject persona-specific instructions into the system prompt
3. Provide a UI for selecting personas

## Goals / Non-Goals

**Goals:**
- Define three personas with distinct personality traits
- Store persona selection per session in chatStore
- Inject persona prompt into system context
- Provide PersonaSelector component

**Non-Goals:**
- Changing the agent engine or tool behavior
- Modifying the WebSocket protocol
- Adding persona-specific UI themes

## Decisions

### D1: Persona definitions in config file

**Decision**: Create `desktop/src/config/personas.ts` with persona definitions including system prompt templates.

**Rationale**: Centralizing persona definitions makes them easy to maintain and extend. Each persona has a name, description, and system prompt template.

### D2: Per-session persona state

**Decision**: Store the selected persona ID in the chatStore session state.

**Rationale**: Users may want different personas for different sessions. Storing it per session allows this flexibility.

### D3: System prompt injection

**Decision**: Inject persona instructions into the system prompt at session creation time, before sending to the AI.

**Rationale**: This is the least invasive approach. The persona prompt is prepended to the existing system context.

## Risks / Trade-offs

**[Risk] Persona prompt may conflict with existing system prompt** → Mitigation: Persona prompt is designed to be additive, not overriding. It sets tone and style, not capabilities.

**[Risk] Users may forget which persona is active** → Mitigation: Display persona indicator in chat header.
