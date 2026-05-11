## ADDED Requirements

### Requirement: Three persona definitions
The system SHALL support three AI personas:
- **兰拉迦 (Araja)**: Professional office assistant — formal, efficient, task-oriented
- **兰拉娜 (Arana)**: Lively life companion — casual, friendly, expressive
- **兰罗摩 (Arama)**: Rational mentor/observer — thoughtful, analytical, measured

#### Scenario: Default persona
- **WHEN** the user creates a new session without selecting a persona
- **THEN** the default persona is Araja (professional office assistant)

#### Scenario: Persona characteristics
- **WHEN** the user selects Arana as the persona
- **THEN** the AI responds in a casual, friendly tone

### Requirement: Persona selector UI
A persona selector SHALL be available in the chat header area.

#### Scenario: Select persona
- **WHEN** the user clicks the persona indicator in the chat header
- **THEN** a dropdown with three persona options is displayed

#### Scenario: Persona change
- **WHEN** the user selects a different persona
- **THEN** the session's persona is updated

### Requirement: Persona prompt injection
The selected persona's personality instructions SHALL be injected into the system prompt at session creation time.

#### Scenario: Persona in system prompt
- **WHEN** a new chat session is created with Arama selected
- **THEN** the system prompt includes Arama's personality instructions

### Requirement: Persona state persistence
The selected persona SHALL persist per session and be restored when the session is reopened.

#### Scenario: Persona persists
- **WHEN** the user selects Arana for session A
- **THEN** reopening session A uses Arana
