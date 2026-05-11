## ADDED Requirements

### Requirement: Workspace panel with dual view modes
A workspace panel SHALL provide two browsing modes: "Changed Files" (git status) and "All Files" (full directory tree), switchable via a dropdown menu.

#### Scenario: Changed files view
- **WHEN** the user opens the workspace panel in a git repository
- **THEN** a list of changed files is displayed with status badges (M/A/D/R/U/C/T), file paths, and addition/deletion counts

#### Scenario: All files view
- **WHEN** the user switches to "All Files" view
- **THEN** a lazy-loaded directory tree is displayed with expandable directories and file type badges

#### Scenario: Auto-switch behavior
- **WHEN** the workspace panel opens and there are no changed files
- **THEN** the view automatically switches to "All Files" and loads the root tree

### Requirement: File tree navigation
The directory tree SHALL support expand/collapse, lazy loading of child directories, and file type badges for common extensions (TS, TSX, JS, JSX, JSON, MD, CSS, HTML, IMG, SVG).

#### Scenario: Directory expansion
- **WHEN** the user clicks a directory in the tree
- **THEN** the directory expands to show its children, loaded on-demand from the server

#### Scenario: File type badges
- **WHEN** files are displayed in the tree
- **THEN** each file shows a color-coded badge indicating its type (e.g., TS, MD, CSS)

### Requirement: File filtering
The workspace panel SHALL provide a search/filter input that filters both changed files and tree entries by name or path.

#### Scenario: Filter changed files
- **WHEN** the user types a filter query in the changed files view
- **THEN** only files matching the query (by path or status) are displayed

#### Scenario: Filter tree entries
- **WHEN** the user types a filter query in the all files view
- **THEN** matching files and their parent directories are displayed

### Requirement: File context menu
Right-clicking a file SHALL display a context menu with "Add to Chat" and "Copy Path" options.

#### Scenario: Add file to chat
- **WHEN** the user right-clicks a file and selects "Add to Chat"
- **THEN** the file path is attached as a workspace reference in the chat context

#### Scenario: Copy file path
- **WHEN** the user right-clicks a file and selects "Copy Path"
- **THEN** the file path is copied to the clipboard
