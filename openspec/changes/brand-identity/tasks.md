## 1. Package Configuration

- [x] 1.1 Update root `package.json`: name → `aranya`, bin → `{ "aranya": "./bin/aranya" }`, update script references
- [x] 1.2 Update `desktop/package.json`: name → `aranya-desktop`

## 2. Tauri Configuration

- [x] 2.1 Update `desktop/src-tauri/tauri.conf.json`: productName → `Aranya`, identifier → `com.aranya.desktop`, window title → `Aranya`

## 3. CLI Binary

- [x] 3.1 Rename `bin/claude-haha` → `bin/aranya`
- [x] 3.2 Update environment variable references in `bin/aranya`: `CC_HAHA_*` → `ARANYA_*`

## 4. Preload and Globals

- [x] 4.1 Update `preload.ts`: change `CLAUDE_CODE_LOCAL_*` env vars to `ARANYA_*`
- [x] 4.2 Update `preload.ts`: set `MACRO.PACKAGE_URL` to `aranya`

## 5. Source Code Cleanup

- [x] 5.1 Grep and replace `CC_HAHA_*` environment variable references in `src/` → `ARANYA_*`
- [x] 5.2 Grep and replace `claude-haha` / `Claude Code Haha` / `claude-code-local` strings in `src/` and `desktop/src/` (excluding lock files and release notes)
- [x] 5.3 Update `.env.example` with new variable names

## 6. Documentation

- [x] 6.1 Update `README.md` with Aranya branding
- [x] 6.2 Update `README.en.md` with Aranya branding

## 7. Verification

- [x] 7.1 Run `tsc --noEmit` in desktop to verify type checking passes
- [x] 7.2 Grep source for any remaining legacy branding strings
