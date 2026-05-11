## ADDED Requirements

### Requirement: Root package.json uses Aranya branding
The root `package.json` SHALL have `name` set to `aranya` and `bin` set to `{ "aranya": "./bin/aranya" }`.

#### Scenario: Package name
- **WHEN** a developer inspects the root `package.json`
- **THEN** the `name` field is `aranya`

#### Scenario: CLI binary entry
- **WHEN** a developer inspects the root `package.json`
- **THEN** the `bin` field maps `aranya` to `./bin/aranya`

### Requirement: Desktop package.json uses Aranya branding
The `desktop/package.json` SHALL have `name` set to `aranya-desktop`.

#### Scenario: Desktop package name
- **WHEN** a developer inspects `desktop/package.json`
- **THEN** the `name` field is `aranya-desktop`

### Requirement: Tauri config uses Aranya identity
The `desktop/src-tauri/tauri.conf.json` SHALL have `productName` set to `Aranya`, `identifier` set to `com.aranya.desktop`, and window title set to `Aranya`.

#### Scenario: Tauri product name
- **WHEN** the application is built with Tauri
- **THEN** the product name is `Aranya`

#### Scenario: Tauri identifier
- **WHEN** the application is installed
- **THEN** the app data directory uses `com.aranya.desktop` as the identifier

#### Scenario: Window title
- **WHEN** the application window opens
- **THEN** the window title displays `Aranya`

### Requirement: CLI binary named aranya
The CLI entry script SHALL be located at `bin/aranya`.

#### Scenario: CLI invocation
- **WHEN** a user runs the CLI
- **THEN** the binary is invoked as `aranya`

### Requirement: Preload globals reference Aranya
The `preload.ts` SHALL set `MACRO.PACKAGE_URL` to `aranya` and use `ARANYA_*` environment variable prefix.

#### Scenario: Package URL constant
- **WHEN** the preload script executes
- **THEN** `MACRO.PACKAGE_URL` is `aranya`

#### Scenario: Environment variables
- **WHEN** the preload script reads environment variables
- **THEN** it uses `ARANYA_VERSION`, `ARANYA_BUILD_TIME`, etc.

### Requirement: No legacy branding in source
No source file (excluding `package-lock.json`, `bun.lock`, and release notes) SHALL contain the strings "claude-code-haha", "claude-haha", "claude-code-local", or "Claude Code Haha".

#### Scenario: Clean source
- **WHEN** a developer greps the source for legacy branding
- **THEN** no matches are found in source files

### Requirement: UI displays Aranya
All user-visible text in the desktop UI SHALL display "Aranya" instead of "Claude Code Haha".

#### Scenario: Sidebar brand
- **WHEN** the user views the sidebar
- **THEN** the brand name displays "Aranya"

#### Scenario: About page
- **WHEN** the user views the About section
- **THEN** the application name is "Aranya"
