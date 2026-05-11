## Why

Aranya is a new AI desktop assistant forked from cc-haha. Before implementing any UI or feature changes, we need a formal architecture spec that defines the target state, establishes module boundaries, and creates a shared vocabulary for all subsequent changes. Without this spec, individual feature changes risk inconsistency and rework.

## What Changes

- Define Aranya's target architecture across three layers: CLI/Server, Desktop (Tauri), and Adapters
- Establish the "forest breeze" design system: CSS variable-driven themes, soft colors, clean layout
- Define the AI persona system (Araja, Arana, Arama) with their roles and prompt injection points
- Specify the permission mode mapping from cc-haha's 6 modes to Aranya's 4 modes
- Define the sidebar layout contract: button ordering, search bar, archive placement
- Specify the "Notes" (笺) interaction model: human-initiated memo delivery, no AI auto-patrol
- Establish i18n requirements: all new UI text must support zh-CN and en-US
- Document the chat area UX: instant ask box, confirmation buttons, message rendering

## Capabilities

### New Capabilities
- `brand-identity`: Application branding — name, identifiers, icons, splash screen
- `sidebar-layout`: Left sidebar structure — button order, search bar, session list
- `chat-area`: Conversation area UX — message rendering, ask box, confirm buttons
- `ai-persona`: Persona system — Araja/Arana/Arama definitions, switching, prompt injection
- `permission-mapping`: Permission mode adaptation — 4-mode mapping from cc-haha's 6 modes
- `settings-page`: Settings page layout — remove onboarding, add diagnostics panel
- `notes-feature`: "笺" (Notes) system — human-initiated memo delivery model
- `cli-integration`: Terminal workspace inheritance — environment and workspace propagation
- `i18n`: Internationalization — zh-CN and en-US for all UI text

### Modified Capabilities

(none — this is the initial spec, no existing specs to modify)

## Impact

- **Desktop UI**: All major components (Sidebar, ChatArea, Settings, EmptySession) will be restructured
- **State Management**: Zustand stores (uiStore, settingsStore, chatStore) need persona and permission extensions
- **CLI layer**: Minor changes for workspace/env inheritance in terminal spawning
- **i18n**: New locale files for all UI-facing text
- **No breaking API changes**: The sidecar HTTP/WebSocket API and Tauri commands remain compatible
