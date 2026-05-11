## Context

The sidebar component is in `desktop/src/components/layout/Sidebar.tsx` (~550 lines). Current layout:
- Header: brand icon + "Claude Code Haha" + GitHub link + collapse button
- Nav section: New Session button, Scheduled Tasks button
- Search section (top): ProjectFilter + search input
- Session list: grouped by time
- Footer: Settings button

The requirements call for:
1. Archive button next to new conversation button
2. Search bar at bottom (above settings)

## Goals / Non-Goals

**Goals:**
- Move search bar from top to bottom of sidebar
- Add archive button in the header nav section
- Maintain all existing functionality (search, project filter, session list)

**Non-Goals:**
- Changing the session list behavior
- Modifying the context menu or rename functionality
- Changing the mobile drawer behavior

## Decisions

### D1: Search bar position

**Decision**: Move the entire search section (ProjectFilter + search input) to the bottom of the sidebar, above the settings button.

**Rationale**: This matches the Aranya layout spec. The search bar at the bottom creates a clear separation: navigation at top, content in middle, search/actions at bottom.

### D2: Archive button placement

**Decision**: Add an archive button as a NavItem next to the new conversation button.

**Rationale**: The archive button provides quick access to archived sessions. Placing it next to new session makes it easily discoverable.

## Risks / Trade-offs

**[Risk] Search bar at bottom may feel unintuitive** → Users expect search at top. Mitigation: The bottom placement is per Aranya's design spec; can be adjusted later if user feedback is negative.

**[Risk] Archive functionality may not exist yet** → Need to verify if archive API exists in sessionStore. Mitigation: If not, add a placeholder button that shows a toast "Coming soon".
