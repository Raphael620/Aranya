## ADDED Requirements

### Requirement: Chinese and English locale support
All new UI text SHALL have both `zh-CN` and `en-US` translations in the locale files.

#### Scenario: Locale file completeness
- **WHEN** a developer adds a new UI string
- **THEN** both `zh.ts` and `en.ts` locale files contain the corresponding key

### Requirement: Language switcher
The language switcher in settings SHALL allow switching between Chinese and English.

#### Scenario: Switch language
- **WHEN** the user selects "English" in the language settings
- **THEN** all UI text switches to English immediately

#### Scenario: Language persistence
- **WHEN** the user selects Chinese and restarts the app
- **THEN** the app launches in Chinese
