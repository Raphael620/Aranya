## ADDED Requirements

### Requirement: Reference notes in chat
The system SHALL allow users to manually inject notes into the AI context during a chat session.

#### Scenario: Reference notes button
- **WHEN** user is in a chat session
- **THEN** a "Reference Notes" button is available in the chat input area

#### Scenario: Select notes to reference
- **WHEN** user clicks the "Reference Notes" button
- **THEN** system displays a dropdown or modal with a list of all available notes

#### Scenario: Inject selected notes
- **WHEN** user selects one or more notes to reference
- **THEN** system appends the selected notes' content to the user's message as context

### Requirement: Note context format
The system SHALL format referenced notes in a clear, structured way for the AI to understand.

#### Scenario: Note context formatting
- **WHEN** notes are injected into the AI context
- **THEN** each note is formatted as:
```
[Note: <title>]
<content>
```

#### Scenario: Multiple notes reference
- **WHEN** user references multiple notes
- **THEN** each note is separated by a blank line and clearly labeled

### Requirement: AI awareness of notes
The system SHALL NOT automatically poll or check for new notes. Notes are only available when explicitly referenced by the user.

#### Scenario: No automatic note checking
- **WHEN** user sends a message without referencing notes
- **THEN** AI does not have access to any notes

#### Scenario: Notes only when referenced
- **WHEN** user references notes in a message
- **THEN** AI can only see the specifically referenced notes, not all notes

### Requirement: Note reference indication
The system SHALL indicate to the user which notes have been referenced in a message.

#### Scenario: Visual indication
- **WHEN** user sends a message with referenced notes
- **THEN** the message display shows which notes were referenced (e.g., with a note icon or badge)

#### Scenario: Note reference in message history
- **WHEN** user views message history
- **THEN** messages with referenced notes clearly indicate which notes were included
