## ADDED Requirements

### Requirement: Instant ask box below message list
An instant ask box SHALL be displayed below the message list, allowing users to quickly type questions without using the full ChatInput.

#### Scenario: Ask box visible
- **WHEN** the user is viewing an active chat session
- **THEN** an instant ask input box is visible below the message list

#### Scenario: Submit from ask box
- **WHEN** the user types a question in the ask box and presses Enter
- **THEN** the message is sent to the AI assistant

#### Scenario: Ask box is minimal
- **WHEN** the user views the instant ask box
- **THEN** it displays as a simple text input without attachment or slash command features

### Requirement: Permission dialog has inline approve/reject buttons
The PermissionDialog SHALL display clear approve and reject buttons inline with the permission request.

#### Scenario: Permission pending
- **WHEN** the AI requests permission for a tool call
- **THEN** inline Approve and Reject buttons are displayed

#### Scenario: Approve click
- **WHEN** the user clicks the Approve button
- **THEN** the tool call is executed

#### Scenario: Reject click
- **WHEN** the user clicks the Reject button
- **THEN** the tool call is rejected

### Requirement: Forest breeze styling
The chat area SHALL use "forest breeze" CSS variables for soft, clean styling.

#### Scenario: Message bubbles
- **WHEN** messages are displayed
- **THEN** they use soft background colors and rounded corners

#### Scenario: Permission dialog
- **WHEN** a permission dialog is displayed
- **THEN** it uses gentle borders and subtle shadows
