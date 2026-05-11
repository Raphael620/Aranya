## Why

Aranya needs a "Notes" (笺) feature that allows humans to manually add notes/memos that the AI can reference during conversations. Unlike automatic context gathering, this feature is human-initiated - users explicitly add notes that they want the AI to consider. The AI does not automatically poll or check for new notes.

## What Changes

- Add a new "Notes" (笺) panel in the sidebar or as a dedicated view
- Implement a data model for storing notes with metadata (title, content, timestamps)
- Create CRUD operations for notes (create, read, update, delete)
- Add UI components for viewing and managing notes
- Integrate notes into the AI's context when requested by the user
- Add i18n support for Chinese and English

## Capabilities

### New Capabilities

- `notes-management`: CRUD operations for notes including data model, storage, and API endpoints
- `notes-ui`: User interface components for viewing, creating, editing, and deleting notes
- `notes-context-integration`: Mechanism to inject notes into AI context when requested

### Modified Capabilities

- None

## Impact

- New Zustand store for notes state management
- New API module for notes CRUD operations
- New UI components in the sidebar or dedicated view
- Updates to i18n locale files for Chinese and English translations
- Potential updates to the chat system to reference notes when requested
