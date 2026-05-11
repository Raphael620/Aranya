## ADDED Requirements

### Requirement: Settings button at bottom
The settings button SHALL be positioned at the very bottom of the sidebar, in the position originally occupied by the archive button.

#### Scenario: Sidebar layout
- **WHEN** the user views the sidebar
- **THEN** the settings button appears at the bottom of the sidebar

### Requirement: Archive button next to new conversation
The archive button SHALL be positioned to the right of the "new conversation" button at the top of the sidebar.

#### Scenario: Archive button placement
- **WHEN** the user views the sidebar header area
- **THEN** the archive button is visible to the right of the new conversation button

### Requirement: Scheduled tasks renamed
The "任务计划" (Task Planner) entry SHALL be renamed to "定时任务" (Scheduled Tasks).

#### Scenario: Menu label
- **WHEN** the user views the sidebar menu
- **THEN** the scheduled tasks entry displays "定时任务"

### Requirement: Search bar at bottom of sidebar
A search bar SHALL be placed in the lower section of the sidebar, containing a workspace selector and session search input.

#### Scenario: Search functionality
- **WHEN** the user types in the sidebar search bar
- **THEN** the session list filters to matching sessions

#### Scenario: Workspace selector
- **WHEN** the user clicks the workspace selector in the search bar
- **THEN** a dropdown of available workspaces is displayed

### Requirement: Channel entry removed
The channel/频道 feature entry SHALL be removed from the sidebar.

#### Scenario: No channel entry
- **WHEN** the user views the sidebar
- **THEN** no channel-related navigation entry is visible
