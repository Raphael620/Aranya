# Aranya - Claude Code 协作原则与计划

## 项目定位
AI 桌面助手，以秋风般清爽的 UI 融合 Claude Code 的强大引擎。
基础代码复制自 cc-haha，桌面技术栈为 Tauri，全量 TypeScript，尽量剔除 JS。

## 开发哲学
- 代码即规范：基于 cc-haha 复刻，改造 desktop 和部分核心模块。
- UI 以 openhanako 的视觉语言为标杆，融入 Aranya 的“笺”交互。
- 所有工作遵循 OpenSpec 流程：审阅 → 提案 → 实施 → 归档。

## 立即执行的计划
1. 克隆 openhanako，将其作为 UI 参考库，不直接引入。
2. 完整审阅 cc-haha 和 openhanako 代码，生成审阅报告 (openspec 变更记录)。
3. 基于审阅创建 “Aranya 初始架构” 提案，定义模块改造清单。
4. 按任务逐步实现：UI 重构、引擎确认、协议适配、三种人格、笺系统、权限等。

## 约束
- 永远使用 TypeScript，尽量不引入 .js 文件。
- 构建工具使用 bun。
- 保持 Aranya 的“清爽交互，强大内芯”原则。
