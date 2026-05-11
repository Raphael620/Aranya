## ADDED Requirements

### Requirement: Tab bar with session management
A top-level tab bar SHALL display open sessions (chat, settings, scheduled tasks, terminal) with drag-and-drop reordering and close buttons.

#### Scenario: Session tabs
- **WHEN** the user opens multiple sessions
- **THEN** each session appears as a tab in the tab bar with a close button

#### Scenario: Drag-and-drop reorder
- **WHEN** the user drags a tab
- **THEN** the tab can be reordered within the tab bar

#### Scenario: Tab context menu
- **WHEN** the user right-clicks a tab
- **THEN** a context menu shows: Close, Close Others, Close Left, Close Right, Close All

### Requirement: Terminal toggle button
The tab bar SHALL include a terminal toggle button that opens/closes the terminal panel or creates a new terminal tab.

#### Scenario: Toggle terminal
- **WHEN** the user clicks the terminal button in the tab bar
- **THEN** the terminal panel opens or closes

### Requirement: Workspace toggle button
The tab bar SHALL include a workspace toggle button that shows/hides the workspace file browser panel, visible only when a session tab is active.

#### Scenario: Toggle workspace
- **WHEN** the user clicks the workspace button while a chat session is active
- **THEN** the workspace panel opens or closes

#### Scenario: Workspace button hidden for non-session tabs
- **WHEN** the active tab is a settings or scheduled tasks tab
- **THEN** the workspace toggle button is not visible

### Requirement: Window controls
On Windows, the tab bar SHALL display native window controls (minimize, maximize, close).

#### Scenario: Windows window controls
- **WHEN** the application runs on Windows
- **THEN** window control buttons are displayed in the tab bar

### Requirement: Overflow scroll
When tabs exceed the available width, scroll left/right buttons SHALL appear to navigate the tab bar.

#### Scenario: Tab overflow
- **WHEN** more tabs are open than can fit in the tab bar width
- **THEN** scroll buttons appear on the left and right edges of the tab bar
