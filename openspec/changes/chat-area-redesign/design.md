## Context

The chat area is rendered by `ActiveSession.tsx` which contains:
- `MessageList` — renders user/assistant messages, tool calls, permission dialogs
- `ChatInput` — the main composer at the bottom
- `SessionTaskBar` — task status bar

The `AskUserQuestion` component handles AI-initiated questions with options. The `PermissionDialog` handles tool permission requests with approve/reject buttons.

## Goals / Non-Goals

**Goals:**
- Add an instant ask box below the message list for quick user questions
- Ensure PermissionDialog has clear, prominent approve/reject buttons
- Apply "forest breeze" CSS variables for soft, clean styling

**Non-Goals:**
- Changing the message rendering logic
- Modifying the WebSocket protocol
- Rewriting the ChatInput component

## Decisions

### D1: InstantAskBox as a lightweight input

**Decision**: Create a new `InstantAskBox` component that appears below the message list. It's a simple text input that sends the message directly to the AI without the full ChatInput features (attachments, slash commands, etc.).

**Rationale**: The full ChatInput is at the bottom and has many features. The instant ask box provides a quick way to type a question without scrolling down or dealing with the full composer.

### D2: Forest breeze CSS variables

**Decision**: Add new CSS variables with `--aranya-` prefix for the forest breeze palette:
- `--aranya-bg-soft`: Soft background for message bubbles
- `--aranya-border-soft`: Gentle border color
- `--aranya-shadow-soft`: Subtle shadow
- `--aranya-radius-lg`: Large rounded corners

**Rationale**: Using namespaced variables prevents conflicts with existing theme variables and allows gradual migration.

## Risks / Trade-offs

**[Risk] InstantAskBox may confuse users** → Users might not understand why there are two input areas. Mitigation: Style the instant ask box differently (more minimal) and position it clearly below the message list.

**[Risk] CSS variable conflicts** → New variables could conflict with existing ones. Mitigation: Use `--aranya-` prefix to namespace.
