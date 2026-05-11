## ADDED Requirements

### Requirement: Notes are human-initiated memos
The "笺" (Notes) feature SHALL be a mechanism for users to proactively send structured memos to the AI. The AI SHALL NOT automatically patrol or retrieve notes.

#### Scenario: User creates a note
- **WHEN** the user creates a new note
- **THEN** the note is stored and can be manually attached to a chat message

#### Scenario: No auto-retrieval
- **WHEN** notes exist in the system
- **THEN** the AI does not automatically read or reference them unless explicitly provided by the user

### Requirement: Note data model
A note SHALL have: title, content (markdown), creation timestamp, and optional tags.

#### Scenario: Note structure
- **WHEN** the user creates a note with title "Meeting Notes" and content "Discuss Q3 roadmap"
- **THEN** the note is stored with title, content, timestamp, and empty tags

### Requirement: Note attachment to chat
The user SHALL be able to attach one or more notes to a chat message as context.

#### Scenario: Attach note to message
- **WHEN** the user selects a note and sends it with a message
- **THEN** the note content is included in the message context for the AI
