## ADDED Requirements

### Requirement: Archive button next to new conversation
An archive button SHALL be positioned to the right of the "new conversation" button in the sidebar header area.

#### Scenario: Archive button visible
- **WHEN** the user views the sidebar
- **THEN** an archive button is visible to the right of the new conversation button

#### Scenario: Archive button click
- **WHEN** the user clicks the archive button
- **THEN** the archived sessions view is opened (or a "coming soon" toast if not yet implemented)

### Requirement: Search bar at bottom of sidebar
The search bar (containing ProjectFilter and search input) SHALL be positioned at the bottom of the sidebar, above the settings button.

#### Scenario: Search bar position
- **WHEN** the user views the expanded sidebar
- **THEN** the search bar is located at the bottom, above the settings button

#### Scenario: Search functionality preserved
- **WHEN** the user types in the search bar at the bottom
- **THEN** the session list filters to matching sessions

### Requirement: Settings button remains at bottom
The settings button SHALL remain at the very bottom of the sidebar.

#### Scenario: Settings position
- **WHEN** the user views the sidebar
- **THEN** the settings button is at the very bottom
