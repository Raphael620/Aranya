## Why

Aranya is forked from cc-haha but the codebase still references "Claude Code Haha", "claude-code-local", and "claude-haha" everywhere — package names, Tauri config, CLI binary, UI text, preload globals. Before any UI or feature work, the branding must be consistently replaced to establish Aranya's identity.

## What Changes

- **BREAKING**: Root `package.json` name changes from `claude-code-local` to `aranya`, bin from `claude-haha` to `aranya`
- **BREAKING**: Desktop `package.json` name changes from `claude-code-desktop` to `aranya-desktop`
- **BREAKING**: Tauri identifier changes from `com.claude-code-haha.desktop` to `com.aranya.desktop`
- **BREAKING**: Tauri productName and window title change from "Claude Code Haha" to "Aranya"
- **BREAKING**: CLI binary renamed from `bin/claude-haha` to `bin/aranya`
- `preload.ts` global constants updated to reference Aranya
- All user-visible "Claude Code Haha" strings in UI components replaced with "Aranya"
- Environment variable prefix changed from `CC_HAHA_*` to `ARANYA_*`
- README.md and README.en.md updated with Aranya branding

## Capabilities

### New Capabilities
- `app-branding`: Application name, identifiers, CLI binary, and preload constants

### Modified Capabilities

(none)

## Impact

- `package.json` (root and desktop) — name, bin, scripts
- `desktop/src-tauri/tauri.conf.json` — productName, identifier, window title
- `bin/claude-haha` → `bin/aranya` — CLI entry script
- `preload.ts` — MACRO global variables
- `src/` — environment variable references (`CC_HAHA_*`)
- `desktop/src/` — UI text references
- `README.md`, `README.en.md`
- `.env.example` — variable names
