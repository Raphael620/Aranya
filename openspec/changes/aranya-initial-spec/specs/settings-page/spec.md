## ADDED Requirements

### Requirement: No first-run onboarding wizard
The settings page SHALL NOT display a first-run installation wizard or onboarding flow.

#### Scenario: First launch
- **WHEN** the user launches Aranya for the first time
- **THEN** no onboarding wizard is displayed; the user goes directly to the main interface

### Requirement: 13-tab settings layout
The settings page SHALL use a left-side tab navigation with 13 categories: Providers, Permissions, General, Adapters, Terminal, MCP, Agents, Skills, Plugins, Computer Use, Activity, Diagnostics, About.

#### Scenario: Settings navigation
- **WHEN** the user opens the settings page
- **THEN** a left-side tab list displays all 13 setting categories with clear labels

#### Scenario: Tab switching
- **WHEN** the user clicks a tab
- **THEN** the corresponding settings content is displayed in the right panel

### Requirement: Provider management
The settings page SHALL allow users to configure LLM providers with preset-based configuration, API key management, and connectivity testing.

#### Scenario: Add provider
- **WHEN** the user creates a new provider
- **THEN** a form appears with preset selection, base URL, API format, auth strategy, and model mappings

#### Scenario: Test provider
- **WHEN** the user tests a provider connection
- **THEN** a connectivity check is performed and the result is displayed

### Requirement: Permission mode selector
The settings page SHALL display four permission modes (Auto, Notify, Ask, Manual) with clear descriptions.

#### Scenario: Select permission mode
- **WHEN** the user selects a permission mode
- **THEN** the mode is saved and applied to all subsequent tool calls

### Requirement: General settings
The settings page SHALL provide controls for: theme (light/dark), UI language, response language, effort level, thinking toggle, desktop notifications, web fetch preflight, web search configuration, and H5 remote access.

#### Scenario: Theme toggle
- **WHEN** the user switches between light and dark theme
- **THEN** the entire application UI updates to the selected theme

#### Scenario: Language switch
- **WHEN** the user switches between English and Chinese
- **THEN** all UI text updates to the selected language

### Requirement: Diagnostics panel
A diagnostics panel SHALL be added to the security settings page, showing current permission state, active rules, and recent permission decisions.

#### Scenario: View diagnostics
- **WHEN** the user navigates to the diagnostics settings page
- **THEN** a diagnostics panel displays system health, log statistics, recent events, and export options

### Requirement: Activity heatmap
The settings page SHALL display a GitHub-style contribution heatmap showing token usage over the past 52 weeks.

#### Scenario: View activity
- **WHEN** the user navigates to the activity settings page
- **THEN** a heatmap is displayed with per-day tooltips showing session count and token usage

### Requirement: Computer use settings
The settings page SHALL provide computer use configuration including Python environment setup, macOS permissions, and app authorization.

#### Scenario: Configure computer use
- **WHEN** the user navigates to the computer use settings page
- **THEN** they can configure Python paths, check macOS permissions, and authorize specific apps
