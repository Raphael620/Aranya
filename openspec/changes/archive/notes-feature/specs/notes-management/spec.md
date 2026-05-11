## ADDED Requirements

### Requirement: Note data model
The system SHALL store notes with the following properties:
- id: unique identifier (string)
- title: note title (string, max 200 characters)
- content: note content (string, max 10000 characters)
- createdAt: creation timestamp (ISO 8601 string)
- updatedAt: last update timestamp (ISO 8601 string)

#### Scenario: Create a new note
- **WHEN** user creates a new note with title and content
- **THEN** system generates a unique ID and timestamps, stores the note in localStorage

#### Scenario: Note size limits
- **WHEN** user attempts to create a note with title exceeding 200 characters
- **THEN** system rejects the operation and displays an error message

#### Scenario: Note content size limits
- **WHEN** user attempts to create a note with content exceeding 10000 characters
- **THEN** system rejects the operation and displays an error message

### Requirement: Note CRUD operations
The system SHALL provide the following operations:
- Create: Add a new note
- Read: Retrieve a note by ID or list all notes
- Update: Modify an existing note's title or content
- Delete: Remove a note permanently

#### Scenario: List all notes
- **WHEN** user requests to view all notes
- **THEN** system returns all notes sorted by updatedAt in descending order

#### Scenario: Update a note
- **WHEN** user updates a note's title or content
- **THEN** system updates the updatedAt timestamp and saves changes to localStorage

#### Scenario: Delete a note
- **WHEN** user deletes a note
- **THEN** system permanently removes the note from localStorage

### Requirement: Note storage
The system SHALL store notes in localStorage under the key `aranya-notes`.

#### Scenario: Persist notes across sessions
- **WHEN** user closes and reopens the application
- **THEN** all previously created notes are still available

#### Scenario: Storage limit handling
- **WHEN** localStorage approaches its size limit (~5-10MB)
- **THEN** system displays a warning to the user about storage usage
