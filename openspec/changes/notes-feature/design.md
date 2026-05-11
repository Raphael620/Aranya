## Context

Aranya is a Tauri 2 desktop application with a React frontend and Zustand state management. The application already has a sidebar with session management, a chat interface, and various settings panels. The "Notes" (笺) feature will add a new capability for users to manually create and manage notes that can be referenced by the AI during conversations.

Current state:
- Sidebar has navigation for sessions, settings, and other features
- Chat system uses WebSocket for real-time communication
- State management uses Zustand stores
- i18n system supports Chinese and English

## Goals / Non-Goals

**Goals:**
- Allow users to create, read, update, and delete notes
- Store notes persistently in the application
- Provide a clean UI for managing notes
- Allow users to manually inject notes into AI context
- Support Chinese and English i18n

**Non-Goals:**
- AI automatically polling or checking for new notes
- Real-time synchronization of notes across devices
- Rich text formatting (plain text only for now)
- Note sharing between users

## Decisions

### 1. Data Model

**Decision**: Store notes as plain text with metadata (id, title, content, createdAt, updatedAt)

**Rationale**: Simple data model that's easy to store and retrieve. No need for complex formatting or structure.

**Alternatives considered**:
- Rich text with Markdown: Rejected for simplicity
- Structured notes with tags/categories: Deferred to future iteration

### 2. Storage Mechanism

**Decision**: Use localStorage for note storage

**Rationale**: Simple, client-side storage that doesn't require backend changes. Notes are user-specific and don't need server synchronization.

**Alternatives considered**:
- Server-side storage: Rejected to avoid backend complexity
- IndexedDB: Overkill for simple note storage

### 3. UI Integration

**Decision**: Add a "Notes" tab in the sidebar navigation

**Rationale**: Consistent with existing sidebar navigation pattern. Easy to access without leaving the main chat view.

**Alternatives considered**:
- Dedicated page: Rejected to maintain quick access
- Modal dialog: Rejected for better usability

### 4. Context Injection

**Decision**: Add a "Reference Notes" button in the chat input area

**Rationale**: Gives users explicit control over when notes are injected into the AI context.

**Alternatives considered**:
- Automatic injection: Rejected per requirements (AI should not auto-check)
- Slash command: Could be added as future enhancement

## Risks / Trade-offs

**[Risk]** localStorage has size limits (~5-10MB)
→ **Mitigation**: Implement note size limits and cleanup warnings

**[Risk]** No server backup of notes
→ **Mitigation**: Add export/import functionality in future iteration

**[Risk]** Notes not available across devices
→ **Mitigation**: Document this limitation; consider sync in future

## Migration Plan

This is a new feature with no migration needed. Notes will be stored in localStorage and will persist across application restarts.

## Open Questions

1. Should notes support Markdown formatting?
2. What is the maximum note size limit?
3. Should there be a search functionality for notes?
