## ADDED Requirements

### Requirement: Multi-tab preview system
The workspace panel SHALL support multiple open preview tabs with a tab bar, allowing users to view several files simultaneously.

#### Scenario: Open file preview
- **WHEN** the user clicks a file in the workspace tree
- **THEN** a new preview tab opens showing the file content

#### Scenario: Multiple tabs
- **WHEN** the user opens multiple files
- **THEN** each file appears as a separate tab in the preview area with close buttons

#### Scenario: Tab context menu
- **WHEN** the user right-clicks a preview tab
- **THEN** a context menu shows: Close, Close Others, Close Left, Close Right, Close All

### Requirement: Code preview with syntax highlighting
Code files SHALL be displayed with syntax highlighting (via Prism), line numbers, and clickable line numbers for inline commenting.

#### Scenario: Syntax highlighting
- **WHEN** the user opens a code file (e.g., .ts, .tsx, .js)
- **THEN** the file content is displayed with syntax highlighting and line numbers

#### Scenario: Line commenting
- **WHEN** the user clicks a line number in a code preview
- **THEN** an inline comment editor opens, allowing the user to submit a code-comment reference to the chat

### Requirement: Diff preview
Changed files SHALL display a unified diff view with add/remove coloring and inline syntax highlighting.

#### Scenario: View diff
- **WHEN** the user clicks a changed file in the "Changed Files" view
- **THEN** a diff preview opens showing added lines (green), removed lines (red), and context lines

### Requirement: Markdown preview
Markdown files SHALL be rendered as formatted documents with proper typography, code blocks, and mermaid diagram support.

#### Scenario: Rendered markdown
- **WHEN** the user opens a .md file
- **THEN** the markdown content is rendered as a formatted document with headings, lists, code blocks, and tables

### Requirement: Image preview
Image files (PNG, JPG, GIF, SVG) SHALL be displayed as visual previews.

#### Scenario: Image display
- **WHEN** the user opens an image file
- **THEN** the image is displayed in the preview area

### Requirement: Large file handling
Previews SHALL handle large files gracefully with truncation and expand/collapse controls.

#### Scenario: Large file truncation
- **WHEN** the user opens a file with more than 2000 lines
- **THEN** the preview is truncated with a "Show all loaded lines" toggle

#### Scenario: Very large file fallback
- **WHEN** the user opens a file with more than 5000 lines
- **THEN** a plain-text fallback is used instead of syntax highlighting

### Requirement: Breadcrumb navigation
The preview header SHALL display a breadcrumb showing the repository name and path segments, with an "Add to Chat" button.

#### Scenario: Breadcrumb display
- **WHEN** a file preview is open
- **THEN** the header shows the full path as clickable breadcrumb segments

#### Scenario: Add to chat from preview
- **WHEN** the user clicks "Add to Chat" in the preview header
- **THEN** the file is attached as a workspace reference in the chat context
