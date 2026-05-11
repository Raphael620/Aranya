## 1. Brand Identity (高优先级) ✅

- [x] 1.1 Update root `package.json`: name → `aranya`, bin → `aranya`
- [x] 1.2 Update `desktop/package.json`: name → `aranya-desktop`
- [x] 1.3 Update Tauri config: identifier → `com.aranya.desktop`, appName → `Aranya`
- [x] 1.4 Rename `bin/claude-haha` → `bin/aranya` and update script references
- [x] 1.5 Replace all "Claude Code Haha" / "claude-haha" strings in UI components with "Aranya"
- [x] 1.6 Update README.md and README.en.md with Aranya branding
- [x] 1.7 Verify build succeeds after branding changes

## 2. Sidebar Layout (高优先级) ✅

- [x] 2.1 Move settings button to bottom of sidebar
- [x] 2.2 Move archive button to right of new conversation button
- [x] 2.3 Rename "任务计划" to "定时任务" in sidebar
- [x] 2.4 Add search bar component at bottom of sidebar with workspace selector and session search
- [x] 2.5 Remove channel/频道 navigation entry from sidebar
- [x] 2.6 Add i18n keys for new sidebar text (zh.ts + en.ts)

## 3. Permission System (中优先级) ✅

- [x] 3.1 Create permission mode mapping layer in settingsStore (4 Aranya → 6 cc-haha)
- [x] 3.2 Update PermissionModeSelector component to show 4 Aranya modes
- [x] 3.3 Add mode descriptions with i18n keys (zh.ts + en.ts)
- [x] 3.4 Update default permission mode to "询问" (Ask)

## 4. AI Persona System (中优先级) ✅

- [x] 4.1 Define persona type interfaces (Araja, Arana, Arama)
- [x] 4.2 Create persona definitions with system prompt templates
- [x] 4.3 Add persona state to chatStore (per-session persona)
- [x] 4.4 Create PersonaSelector component for settings and chat header
- [x] 4.5 Inject persona prompt into system context at session creation
- [x] 4.6 Add i18n keys for persona names and descriptions

## 5. Settings Page (中优先级) ✅

- [x] 5.1 Remove first-run onboarding wizard component
- [x] 5.2 Create diagnostics panel component for security page
- [x] 5.3 Wire diagnostics panel to permission state and recent decisions
- [x] 5.4 Optimize settings page layout with consistent spacing

## 6. Chat Area (高优先级) ✅

- [x] 6.1 Create InstantAskBox component below message list
- [x] 6.2 Integrate ask box with chat message submission
- [x] 6.3 Add inline approve/reject buttons to PermissionDialog
- [x] 6.4 Apply "forest breeze" CSS variables for chat area (soft colors, rounded corners)
- [x] 6.5 Ensure dark mode support for new chat area styles

## 7. i18n (持续) ✅

- [x] 7.1 Add all new UI keys to `desktop/src/i18n/locales/zh.ts`
- [x] 7.2 Add all new UI keys to `desktop/src/i18n/locales/en.ts`
- [x] 7.3 Verify language switcher works with new keys

## 8. Notes Feature (低优先级) ✅

- [x] 8.1 Define Note TypeScript interface (title, content, timestamp, tags)
- [x] 8.2 Create note storage module (localStorage or file-based)
- [x] 8.3 Create NoteComposer component
- [x] 8.4 Add note attachment to chat message flow
- [x] 8.5 Add i18n keys for Notes UI

## 9. CLI Integration (低优先级) ✅

- [x] 9.1 Verify terminal spawning inherits workspace directory
- [x] 9.2 Verify terminal spawning inherits environment variables
- [x] 9.3 Fix any issues found in verification

## 10. Workspace Browsing (openhanako 参考) ✅

- [x] 10.1 Implement WorkspacePanel with dual view modes (Changed Files / All Files)
- [x] 10.2 Implement file tree with lazy loading and expand/collapse
- [x] 10.3 Implement file filtering by name/path
- [x] 10.4 Implement file context menu (Add to Chat, Copy Path)

## 11. File Preview (openhanako 参考) ✅

- [x] 11.1 Implement multi-tab preview system with tab bar
- [x] 11.2 Implement code preview with syntax highlighting and line commenting
- [x] 11.3 Implement diff preview for changed files
- [x] 11.4 Implement markdown preview with rendered documents
- [x] 11.5 Implement image preview (PNG, JPG, GIF, SVG)
- [x] 11.6 Implement large file handling with truncation and expand/collapse
- [x] 11.7 Implement breadcrumb navigation with Add to Chat button

## 12. Toolbar (openhanako 参考) ✅

- [x] 12.1 Implement TabBar with session tabs and drag-and-drop reordering
- [x] 12.2 Implement terminal toggle button
- [x] 12.3 Implement workspace toggle button
- [x] 12.4 Implement window controls (Windows)
- [x] 12.5 Implement tab overflow scroll
