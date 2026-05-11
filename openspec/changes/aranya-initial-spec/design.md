## Context

Aranya is a Tauri 2 desktop AI assistant forked from cc-haha. The codebase has three layers:
- **CLI/Server** (`src/`): Bun runtime, Ink TUI, Commander.js, 40+ agent tools
- **Desktop** (`desktop/`): React 18 + Vite + Tailwind CSS + Zustand (18+ stores)
- **Adapters** (`adapters/`): IM platform integrations (Telegram, Feishu, WeChat, DingTalk)

The code review identified 9 areas requiring change. The desktop UI layer needs the most work; the CLI engine and API surface should remain largely untouched.

## Goals / Non-Goals

**Goals:**
- Establish a clean, minimal "forest breeze" design language distinct from cc-haha
- Implement 3 AI personas with distinct personality prompts
- Map cc-haha's 6 permission modes to Aranya's 4 intuitive modes
- Restructure sidebar layout per the Aranya interaction model
- Support Chinese and English for all new UI text

**Non-Goals:**
- Rewriting the agent engine or tool system
- Changing the sidecar HTTP/WebSocket API protocol
- Implementing the full "Notes" (笺) data model (deferred to a later change)
- Modifying the Rust/Tauri backend beyond branding identifiers
- Adding new IM adapter integrations

## Decisions

### D1: Incremental UI migration over full rewrite

**Decision**: Modify existing React components in-place rather than building a new component library.

**Rationale**: The desktop UI has 18+ Zustand stores and deep component trees. A full rewrite would take weeks and risk breaking the working chat flow. In-place modification preserves existing behavior while layering Aranya's design on top.

**Alternatives considered**:
- Full rewrite with a new component library → too risky, too much surface area
- Shadow DOM isolation → adds complexity without clear benefit for a desktop app

### D2: CSS variable theme extension

**Decision**: Extend the existing CSS variable system (`desktop/src/theme/globals.css`) with Aranya-specific tokens for the "forest breeze" palette.

**Rationale**: The theme system already uses CSS custom properties. Adding Aranya tokens (greens, warm neutrals, soft shadows) alongside existing variables allows gradual migration and easy rollback.

### D3: Persona injection via system prompt layer

**Decision**: Inject persona-specific instructions into the system prompt at the chat initialization layer, not in the agent engine.

**Rationale**: The agent engine (`src/`) is shared infrastructure. Persona logic belongs in the desktop layer where the user makes the selection. The `chatStore` already constructs system context — adding a persona block there is the least invasive approach.

### D4: Permission mode mapping as a thin adapter

**Decision**: Create a mapping layer in `desktop/src/stores/settingsStore.ts` that translates Aranya's 4 user-facing modes to cc-haha's internal 6 modes.

**Rationale**: The permission engine (`src/utils/permissions/`) is complex and well-tested. A thin mapping preserves the engine's correctness while giving users a simpler mental model.

**Mapping**:
| Aranya Mode | cc-haha Mode | Behavior |
|---|---|---|
| 自动执行 (Auto) | `bypassPermissions` | Allow everything except security checks |
| 通知 (Notify) | `acceptEdits` | Auto-allow file edits, ask for shell commands |
| 询问 (Ask) | `default` | Ask for every tool use |
| 手动 (Manual) | `plan` | Read-only, no writes or executions |

### D5: i18n via existing locale system

**Decision**: Use the existing i18n framework (`desktop/src/i18n/`) and add Aranya-specific keys to `zh.ts` and `en.ts`.

**Rationale**: The i18n infrastructure is already in place. No reason to introduce a new system.

## Risks / Trade-offs

**[Risk] chatStore complexity** → The chatStore is ~1400 lines. Persona and permission changes touch this store. Mitigation: add persona as a separate slice with clear boundaries; test chat flow end-to-end after each change.

**[Risk] CSS variable conflicts** → Extending the theme system could cause visual regressions. Mitigation: use namespaced variable names (`--aranya-*`) and test both light/dark themes.

**[Risk] Permission mapping edge cases** → Some cc-haha tools have custom permission logic (e.g., BashTool). The thin mapping may not cover all cases. Mitigation: audit tool-specific permission checks during implementation.

**[Risk] openhanako unavailability** → The UI reference project is not accessible. Mitigation: design based on the "forest breeze" aesthetic described in project.md and the code review findings. The following openhanako functional areas have been addressed: workspace browsing (WorkspacePanel), file preview (code/diff/markdown/image), settings page (13 tabs), and toolbar (TabBar with terminal/workspace toggles).

## Migration Plan

1. **Phase 1 — Brand & Layout**: Replace branding, restructure sidebar, apply theme tokens
2. **Phase 2 — Core Features**: Permission mapping, persona system, settings page
3. **Phase 3 — Polish**: i18n completion, chat area UX, Notes feature foundation, workspace browsing refinement, file preview enhancement, toolbar functionality

Each phase should be independently deployable. Rollback is git revert per change.

## Open Questions

- What specific colors compose the "forest breeze" palette? (Needs design input)
- Should personas persist per-session or be a global setting? (Likely per-session)
- How does the "Notes" feature interact with the existing chat input? (Deferred to Notes spec)
