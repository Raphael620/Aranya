## Why

The chat area needs to match Aranya's "forest breeze" design language and provide better interaction patterns. The current chat area has:
- A ChatInput at the bottom for sending messages
- AskUserQuestion for AI-initiated questions
- PermissionDialog for tool permission requests

The requirements call for:
- An instant ask box below the message list (quick question input)
- Clear inline approve/reject buttons for permission dialogs
- "Forest breeze" UI style with soft colors and clean typography

## What Changes

- Add an InstantAskBox component below the message list for quick questions
- Enhance PermissionDialog with clear inline approve/reject buttons
- Apply "forest breeze" CSS variables to the chat area (soft backgrounds, rounded corners, clean spacing)

## Capabilities

### New Capabilities
- `chat-area`: Chat area UX — instant ask box, permission buttons, forest breeze styling

### Modified Capabilities

(none)

## Impact

- `desktop/src/components/chat/` — new InstantAskBox component, updated PermissionDialog
- `desktop/src/theme/globals.css` — new CSS variables for forest breeze palette
- `desktop/src/i18n/locales/zh.ts` and `en.ts` — new i18n keys
