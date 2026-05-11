## ADDED Requirements

### Requirement: Application name is Aranya
All user-visible text SHALL display "Aranya" as the application name. The internal package name SHALL be "aranya".

#### Scenario: Sidebar brand display
- **WHEN** the user opens the desktop application
- **THEN** the sidebar header displays "Aranya" as the application name

#### Scenario: About page
- **WHEN** the user navigates to the About section
- **THEN** the application name is displayed as "Aranya" with version information

### Requirement: Tauri application identifier updated
The Tauri application identifier SHALL be `com.aranya.desktop`.

#### Scenario: Application identity
- **WHEN** the application is built with Tauri
- **THEN** the bundle identifier is `com.aranya.desktop`

### Requirement: Package metadata updated
The root `package.json` name SHALL be `aranya` and the desktop `package.json` name SHALL be `aranya-desktop`.

#### Scenario: Package identity
- **WHEN** a developer inspects `package.json`
- **THEN** the name field reflects the Aranya brand

### Requirement: CLI binary renamed
The CLI binary SHALL be named `aranya` instead of `claude-haha`.

#### Scenario: CLI invocation
- **WHEN** a user runs the CLI binary
- **THEN** the binary is invoked as `aranya`
