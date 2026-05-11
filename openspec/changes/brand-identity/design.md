## Context

The codebase is forked from cc-haha and retains all original branding. The branding surface spans:
- Root `package.json` (name, bin, scripts)
- Desktop `package.json` (name)
- `desktop/src-tauri/tauri.conf.json` (productName, identifier, window title)
- `bin/claude-haha` (CLI entry script filename)
- `preload.ts` (MACRO globals)
- `src/` environment variables (`CC_HAHA_*`)
- `desktop/src/` UI components (user-visible strings)
- `.env.example` (variable names)
- `README.md`, `README.en.md`

## Goals / Non-Goals

**Goals:**
- Replace all user-visible "Claude Code Haha" / "claude-haha" references with "Aranya"
- Update package identifiers and CLI binary name
- Update Tauri application identity
- Update environment variable prefix from `CC_HAHA_*` to `ARANYA_*`

**Non-Goals:**
- Changing application icons (separate task)
- Modifying the agent engine or tool behavior
- Changing API endpoints or WebSocket protocol
- Updating release notes (historical records)

## Decisions

### D1: Environment variable prefix migration

**Decision**: Rename all `CC_HAHA_*` environment variables to `ARANYA_*`.

**Rationale**: Consistency with the new brand. The env vars are used in `preload.ts`, `bin/claude-haha`, and scattered across `src/`. A prefix change is clean and unambiguous.

**Alternative considered**: Keep `CC_HAHA_*` for backward compatibility → rejected because this is a fresh fork, no existing users to break.

### D2: CLI binary rename

**Decision**: Rename `bin/claude-haha` to `bin/aranya` and update all script references in `package.json`.

**Rationale**: The binary name is the primary user-facing CLI interface. It must match the product name.

### D3: Tauri identifier change

**Decision**: Change identifier from `com.claude-code-haha.desktop` to `com.aranya.desktop`.

**Rationale**: The Tauri identifier is used for app data directories, updater, and OS-level identification. It must be unique and match the brand.

## Risks / Trade-offs

**[Risk] Missed references** → Some references may be in binary files or generated code. Mitigation: use grep to find all occurrences, verify build after changes.

**[Risk] Script breakage** → Renaming the CLI binary breaks any scripts that reference `claude-haha`. Mitigation: update all references in `package.json` scripts and document the rename.

## Migration Plan

1. Rename `bin/claude-haha` → `bin/aranya`
2. Update `package.json` (root): name, bin, scripts
3. Update `desktop/package.json`: name
4. Update `desktop/src-tauri/tauri.conf.json`: productName, identifier, window title
5. Update `preload.ts`: env var names
6. Grep and replace all `CC_HAHA_*` → `ARANYA_*` in source
7. Grep and replace all UI-visible "Claude Code Haha" → "Aranya"
8. Update README files
9. Update `.env.example`
10. Verify build: `bun run build` and `tsc --noEmit`

## Open Questions

- Should we add a compatibility shim that maps old `CC_HAHA_*` env vars to new `ARANYA_*` ones? (Likely no, since this is a fresh fork)
