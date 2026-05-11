## ADDED Requirements

### Requirement: Instant ask box
An inline question input box SHALL be displayed in the chat area, allowing users to quickly type questions without focusing the main composer.

#### Scenario: Ask box visible
- **WHEN** the user is viewing an active chat session
- **THEN** an instant ask input box is visible below the message list

#### Scenario: Submit from ask box
- **WHEN** the user types a question in the ask box and presses Enter
- **THEN** the message is sent to the AI assistant

### Requirement: Confirmation buttons for tool calls
Tool call results that require user confirmation SHALL display clear approve/reject buttons inline with the message.

#### Scenario: Tool call pending approval
- **WHEN** the AI requests permission for a tool call
- **THEN** inline Approve and Reject buttons are displayed with the permission dialog

#### Scenario: Approve tool call
- **WHEN** the user clicks the Approve button
- **THEN** the tool call is executed and the result is displayed

### Requirement: Forest breeze UI style
The chat area SHALL use the "forest breeze" design language: soft colors, clean typography, minimal borders, and generous spacing.

#### Scenario: Message rendering
- **WHEN** messages are displayed in the chat area
- **THEN** they use soft background colors, rounded corners, and clean typography

#### Scenario: Dark mode support
- **WHEN** the user switches to dark mode
- **THEN** the forest breeze theme adapts with appropriate dark palette colors
