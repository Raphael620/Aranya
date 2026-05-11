# AGENTS.md for Aranya

You are assisting with the development of Aranya, a Tauri‑based AI desktop assistant.
Follow these rules strictly:

## Process
- Before any code change, follow the OpenSpec workflow: explore → propose → implement → archive.
- Start by reading `openspec/project.md` to understand project conventions.
- Use `/opsx:explore` for research, `/opsx:propose <change-id>` for new work.
- All proposals must go through human review (you may suggest, but the user decides).

## Coding Standards
- Output only TypeScript. No `.js` files, no `any` unless explicitly allowed.
- Use `interface` instead of `type` for object shapes when possible.
- All React components must have explicit React.FC or Props interface.
- Follow cc-haha’s existing project structure; do not introduce new top‑level folders without a proposal.
- Bun is the default package runner; do not use npm or yarn.

## UI Development
- Reference the visual style and interface functionality of the `openhanako` project (clone it locally but never import it).
- openhanako 参考范围：主界面工作空间浏览、Markdown/文件预览、设置页面功能、工具栏功能性组件。
- Focus on clean layout, soft colors, and minimalistic “forest breeze” aesthetics.
- The main interaction metaphor is “Notes” (笺) – users actively send notes to the AI, not vice‑versa.

## Communication
- When in doubt, ask for clarification before coding.
- Present progress succinctly after each task completion.
- Before archiving a change, confirm with the user.
