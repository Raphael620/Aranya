## Why

The sidebar layout needs to match Aranya's interaction model. The current sidebar has the search bar at the top and no archive button visible. The requirements specify:
- Settings button at bottom (already done)
- Archive button to the right of new conversation button (missing)
- Search bar at bottom of sidebar (currently at top)
- No channel entry (already clean)

## What Changes

- Move the search bar (with ProjectFilter and search input) from the top of the sidebar to the bottom, above the settings button
- Add an archive button next to the new conversation button in the sidebar header
- Update sidebar brand text from "Claude Code Haha" to "Aranya" (if not already done by brand-identity change)

## Capabilities

### New Capabilities
- `sidebar-layout`: Sidebar layout restructuring — button order, search bar position, archive button

### Modified Capabilities

(none)

## Impact

- `desktop/src/components/layout/Sidebar.tsx` — main sidebar component
- `desktop/src/i18n/locales/zh.ts` and `en.ts` — new i18n keys for archive button
