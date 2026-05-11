## ADDED Requirements

### Requirement: Terminal inherits workspace directory
When the user opens a terminal panel in the desktop app, the terminal SHALL inherit the current workspace directory.

#### Scenario: Terminal workspace
- **WHEN** the user opens a terminal while working in `/home/user/project`
- **THEN** the terminal starts in `/home/user/project`

### Requirement: Terminal inherits environment variables
The terminal SHALL inherit the parent process environment variables.

#### Scenario: Environment propagation
- **WHEN** the user has custom environment variables set
- **THEN** the spawned terminal process has access to those variables
