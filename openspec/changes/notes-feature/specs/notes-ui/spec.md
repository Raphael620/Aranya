## ADDED Requirements

### Requirement: Notes sidebar navigation
The system SHALL add a "Notes" (笺) button in the sidebar navigation, positioned after the "Archive" button.

#### Scenario: Notes button visibility
- **WHEN** user views the sidebar
- **THEN** a "Notes" button is visible with a note icon

#### Scenario: Notes button click
- **WHEN** user clicks the "Notes" button
- **THEN** system opens the Notes panel in the main content area

### Requirement: Notes panel
The system SHALL display a Notes panel with the following features:
- List of all notes with title and preview
- "New Note" button to create a new note
- Search functionality to filter notes
- Sort options (by date created or updated)

#### Scenario: Notes panel layout
- **WHEN** user opens the Notes panel
- **THEN** system displays a list of notes with title, content preview (first 100 characters), and last updated timestamp

#### Scenario: Create new note
- **WHEN** user clicks "New Note" button
- **THEN** system opens a note editor with empty title and content fields

### Requirement: Note editor
The system SHALL provide a note editor with:
- Title input field (max 200 characters)
- Content textarea (max 10000 characters)
- Save button
- Cancel button
- Delete button (for existing notes)

#### Scenario: Edit existing note
- **WHEN** user selects a note from the list
- **THEN** system opens the note editor with the note's current title and content

#### Scenario: Save note
- **WHEN** user clicks "Save" button in the note editor
- **THEN** system validates the input, saves the note, and returns to the notes list

#### Scenario: Cancel editing
- **WHEN** user clicks "Cancel" button in the note editor
- **THEN** system discards changes and returns to the notes list

#### Scenario: Delete note confirmation
- **WHEN** user clicks "Delete" button in the note editor
- **THEN** system displays a confirmation dialog before permanently deleting the note

### Requirement: Notes search
The system SHALL allow users to search notes by title or content.

#### Scenario: Search notes
- **WHEN** user enters a search query in the search box
- **THEN** system filters the notes list to show only notes matching the query in title or content

### Requirement: Notes i18n
The system SHALL support Chinese and English translations for all Notes-related UI elements.

#### Scenario: Language switching
- **WHEN** user switches the application language
- **THEN** all Notes UI elements update to display in the selected language
