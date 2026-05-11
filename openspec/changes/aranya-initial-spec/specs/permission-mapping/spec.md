## ADDED Requirements

### Requirement: Four permission modes
The system SHALL expose exactly four permission modes to the user:
- **自动执行 (Auto)**: Automatically execute all operations except security-critical checks
- **通知 (Notify)**: Auto-allow file edits, notify for shell commands and other operations
- **询问 (Ask)**: Ask for confirmation before every tool use
- **手动 (Manual)**: Read-only mode, reject all write and execute operations

#### Scenario: Default mode
- **WHEN** the user first installs Aranya
- **THEN** the default permission mode is "询问" (Ask)

#### Scenario: Mode description
- **WHEN** the user views the permission settings
- **THEN** each mode displays a clear description of its behavior

### Requirement: Internal mode mapping
The four user-facing modes SHALL map to cc-haha's internal permission modes:
- 自动执行 → `bypassPermissions`
- 通知 → `acceptEdits`
- 询问 → `default`
- 手动 → `plan`

#### Scenario: Auto mode behavior
- **WHEN** the user selects "自动执行" mode
- **THEN** the internal permission mode is set to `bypassPermissions`

#### Scenario: Manual mode behavior
- **WHEN** the user selects "手动" mode
- **THEN** the internal permission mode is set to `plan` (read-only)

### Requirement: Permission mode selector UI
The permission mode selector SHALL display the four Aranya modes with localized descriptions.

#### Scenario: Permission selector in settings
- **WHEN** the user navigates to the security/permissions section of settings
- **THEN** four radio-button options are displayed with mode names and descriptions
