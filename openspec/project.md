# Project: Aranya

## 技术栈
- **桌面框架**：Tauri 2.x (Rust 后端 + WebView 前端)
- **前端**：React 18 + TypeScript (严格模式)
- **状态管理**：React Context + useReducer（继承自 cc-haha 的架构）
- **构建/运行时**：Bun (替代 Node.js 和 npm)
- **格式化**：Biome（如果不统一可后续替换为 Prettier）
- **AI 引擎**：内嵌 Claude Code 智能体 (基于 cc-haha 的 claude-code-sdk 封装)

## 项目结构（继承自 cc-haha）
- `apps/desktop/` – Tauri 桌面应用入口（需最大幅度改造）
- `packages/` – 共享库（agent-core, ui-components, utils 等）
- `openspec/` – 规范驱动开发文件

## 设计约束
- 所有代码必须是 TypeScript，严禁 .js 文件。
- 组件和模块必须显式声明 Props 类型。
- 任何 API 调用必须经过封装层，支持 openai 和 anthropic 协议。
- 权限调用遵循 cc-haha 的四种模式（手动确认、自动执行等）。

## 上游依赖处理
- cc-haha：作为基座，复制其全部代码。重点保留 agent 引擎、权限系统和协议适配层。
- openhanako：作为 UI 设计和界面功能参考，不直接复制代码。其视觉风格、布局和交互逻辑需在新 UI 中体现。参考范围包括：主界面工作空间浏览、Markdown/文件预览、设置页面功能、工具栏功能性组件。
- open-cowork：研究其上下文管理和提示词设计，作为后期功能增强的可选参考。

## 关键功能改造（与原始 cc-haha 的差异）
- 删除频道功能，强化 1 对 1 对话。
- 「笺」改为人类主动投递的备忘录，AI 不自动巡查。
- 左侧栏调整：
  - 对话右方的设置按钮移到最底部（原归档按钮位置）。
  - 归档按钮放到新增对话按钮右边。
  - “任务计划”更名为“定时任务”。
  - 下方新增“搜索对话”栏，包含工作空间选择和会话搜索。
- 对话区增加即时询问框、确认按钮等交互组件，参照 cc-haha 实现。
- 权限系统覆盖四种模式：自动执行、通知、询问、手动。
- 人格改为：
  - 兰拉迦 (Araja)：专业办公助理（后期注入 open-cowork 的办公能力）
  - 兰拉娜 (Arana)：活泼生活伙伴
  - 兰罗摩 (Arama)：理性导师/观察者
- 命令行集成：
  - 审阅阶段验证 cc-haha 终端能否继承工作空间和环境变量。
  - 若可行则完整实现；否则保留按钮，后续再开发。
- 设置页面改造：
  - 移除 openhanako 的首次安装引导。
  - “使用电脑”功能参考 cc-haha 彻底实现。
  - 安全页新增诊断面板（参考 cc-haha）。
- open-cowork 整合路径：
  - 独立研究其上下文压缩和提示词优化。
  - 初步注入 Araja 人格，评估后可能上升为全局 agent 策略。

## 许可证
Apache License 2.0，版权署名 AraLumine。
