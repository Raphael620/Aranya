# Phase 3: Polish & Verification

## Context

Phase 1 (Brand & Layout) and Phase 2 (Core Features) are complete. The openhanako functional reference scope (workspace browsing, file preview, settings page, toolbar) is already implemented in the codebase. Phase 3 focuses on verification, polish, and closing any remaining gaps.

## What's Already Done

- Brand identity: Aranya branding throughout
- Sidebar layout: settings at bottom, archive next to new conversation, search bar, channel removed
- Chat area: instant ask box, confirmation buttons, forest breeze styling
- AI persona: Araja/Arana/Arama with system prompt injection
- Permission mapping: 4 Aranya modes → 6 cc-haha modes
- Settings page: 13 tabs fully implemented
- Notes feature: CRUD with sidebar integration
- CLI integration: terminal spawning verified
- i18n: Chinese and English for all new UI text
- Workspace browsing: WorkspacePanel with dual views, file tree, filtering
- File preview: code/diff/markdown/image with multi-tab system
- Toolbar: TabBar with terminal/workspace toggles

## Remaining Work

1. **Code verification**: Ensure all desktop and server code compiles and tests pass
2. **Spec alignment**: Verify implementation matches specs (already done - specs updated)
3. **Polish**: Any visual or interaction rough edges
4. **Documentation**: Update project docs to reflect current state

## Goals

- Verify `bun run check:desktop` passes
- Verify `bun run check:server` passes
- Fix any compilation or test failures
- Commit and push all changes
