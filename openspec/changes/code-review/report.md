# Aranya 上游代码审阅报告

> 审阅日期：2026-05-11
> 审阅范围：cc-haha (Aranya 基座) + desktop (Tauri 桌面应用)

## 一、项目架构总览

Aranya 是一个基于 Bun + Tauri 2 的 AI 桌面助手，继承自 cc-haha（Claude Code 的本地化版本）。架构分为三层：

1. **CLI/Server 层** (`src/`)：Bun 运行时，Ink 终端 UI，Commander.js 命令系统，40+ Agent 工具，26 个服务模块
2. **Desktop 层** (`desktop/`)：Tauri 2 桌面应用，React 18 + Vite + Tailwind CSS，Zustand 状态管理，18+ stores
3. **适配器层** (`adapters/`)：IM 平台集成（Telegram、飞书、微信、钉钉）

## 二、Agent 引擎分析

### 2.1 启动流程

```
bin/claude-haha (bash)
  → bun ./src/entrypoints/cli.tsx
    → preload.ts (MACRO 全局变量)
    → cli.tsx main() (快速路径路由)
      → src/main.tsx → main()
        → init() (配置、TLS、OAuth、feature flags)
        → run() (Commander 程序)
          → 交互模式: launchRepl() → <App><REPL /></App>
          → 无头模式: runHeadless() via QueryEngine
          → MCP 模式: src/entrypoints/mcp.ts
```

### 2.2 关键接口

| 模块 | 文件 | 职责 |
|------|------|------|
| Tool 系统 | `src/Tool.ts`, `src/tools.ts` | 40+ 工具的注册、权限检查、执行 |
| Command 系统 | `src/commands.ts` | 80+ 命令的注册（slash commands） |
| Context 系统 | `src/context.ts` | 系统上下文（git 状态）+ 用户上下文（CLAUDE.md） |
| 服务层 | `src/services/` | API 客户端、MCP、OAuth、分析、压缩等 26 个服务 |
| 状态管理 | `src/state/AppStateStore.ts` | 全局不可变应用状态 |
| Task 系统 | `src/Task.ts` | 后台任务抽象（bash、agent、workflow 等） |

### 2.3 执行模式

- **交互模式**：Ink TUI 终端界面
- **无头模式** (`-p/--print`)：通过 QueryEngine 执行
- **MCP 服务器模式**：通过 stdio 暴露工具
- **SDK 模式**：TypeScript/Python SDK 调用
- **Bridge/Remote 模式**：远程控制
- **Daemon 模式**：后台守护进程

## 三、桌面通信 API 分析

### 3.1 双通道通信架构

| 通道 | 用途 | 实现 |
|------|------|------|
| Tauri `invoke` | 原生桌面功能 | Rust 后端直接处理 |
| HTTP REST + WebSocket | 业务逻辑 | Sidecar Node.js 服务器 |

### 3.2 Tauri 命令（12 个）

| 命令 | 功能 |
|------|------|
| `get_server_url` | 获取 sidecar 服务器动态端口 URL |
| `restart_adapters_sidecar` | 重启 IM 适配器 |
| `prepare_for_update_install` | 更新前准备 |
| `cancel_update_install` | 取消更新 |
| `terminal_spawn/write/resize/kill` | 原生 PTY 终端管理（4 个） |
| `macos_notification_*` | macOS 通知（3 个） |
| `open_windows_notification_settings` | Windows 通知设置 |

### 3.3 前端 API 模块

- `sessions.ts`：会话 CRUD、消息、git 信息、工作空间
- `settings.ts`：用户设置、权限模式
- `providers.ts`：LLM 提供商管理
- `mcp.ts`：MCP 服务器管理
- `websocket.ts`：实时聊天流式传输（14+ 消息类型）
- `terminal.ts`：终端管理（通过 Tauri invoke）

### 3.4 状态管理（Zustand Stores）

| Store | 职责 |
|-------|------|
| `chatStore` | 会话聊天状态、WebSocket 连接、消息流（~1400 行，最大） |
| `sessionStore` | 会话列表 CRUD、项目过滤 |
| `settingsStore` | 全局设置（模型、权限模式、语言等） |
| `uiStore` | 主题、侧边栏、活动视图、模态框 |
| `tabStore` | 标签页管理（多会话 UI） |
| `providerStore` | LLM 提供商管理 |
| `workspacePanelStore` | 工作空间面板状态 |
| `terminalPanelStore` | 终端面板状态 |
| 其他 10+ stores | 适配器、MCP、插件、技能、任务等 |

## 四、权限系统分析

### 4.1 六种权限模式

| 模式 | 行为 | 桌面 UI 暴露 |
|------|------|-------------|
| `default` | 每次工具使用都询问用户 | ✅ |
| `acceptEdits` | 自动允许工作目录内的文件编辑 | ✅ |
| `plan` | 只读模式，禁止写入/执行 | ✅ |
| `bypassPermissions` | 允许除安全检查外的一切操作 | ✅ |
| `dontAsk` | 拒绝所有需要询问的操作 | ❌（类型定义中存在） |
| `auto` | AI 分类器决定允许/拒绝 | ❌（内部，feature flag 控制） |

### 4.2 权限检查流水线

```
Step 1: 规则检查（bypass-immune）
  1a. deny 规则 → 拒绝
  1b. ask 规则 → 询问
  1c. tool.checkPermissions() → 工具自定义逻辑
  1d. 需要用户交互 → 强制询问
  1e. 安全检查（.git/、.claude/ 等）→ bypass-immune

Step 2: 模式检查
  2a. bypassPermissions 模式 → 允许通过 step 1 的一切
  2b. allow 规则匹配 → 允许

Step 3: 默认
  passthrough → 转为 ask
```

### 4.3 关键文件

- `src/types/permissions.ts`：类型定义
- `src/utils/permissions/permissions.ts`：核心权限流水线
- `src/utils/permissions/permissionSetup.ts`：模式初始化
- `src/tools/BashTool/bashPermissions.ts`：Bash 特殊权限逻辑
- `desktop/src/components/controls/PermissionModeSelector.tsx`：桌面 UI 选择器
- `desktop/src/components/chat/PermissionDialog.tsx`：内联权限审批卡片

## 五、桌面 UI 组件树分析

### 5.1 整体布局

```
AppShell
├── Sidebar（可折叠侧边栏）
│   ├── 品牌标识
│   ├── 新建会话按钮
│   ├── 定时任务按钮
│   ├── 项目过滤器
│   ├── 搜索输入框
│   ├── 会话列表（按时间分组）
│   └── 设置按钮
│
├── TabBar（可拖拽标签栏）
│   ├── TabItem[]（会话/设置/定时任务/终端）
│   ├── 工具栏按钮（终端、工作空间）
│   └── 窗口控制（Windows）
│
└── ContentRouter（内容路由）
    ├── EmptySession（首页/新建会话）
    │   ├── Hero 区域
    │   └── Composer 面板（.glass-panel）
    │
    ├── ActiveSession（聊天视图）
    │   ├── MessageList
    │   │   ├── UserMessage
    │   │   ├── AssistantMessage
    │   │   ├── ThinkingBlock
    │   │   ├── ToolCallBlock / ToolCallGroup
    │   │   ├── PermissionDialog
    │   │   └── StreamingIndicator
    │   ├── ChatInput
    │   ├── SessionTaskBar
    │   ├── WorkspacePanel（可选）
    │   └── TerminalSettings（可选，停靠）
    │
    ├── Settings（13 个标签页）
    └── ScheduledTasks
```

### 5.2 主题系统

- CSS 变量驱动（颜色、阴影、圆角、字体）
- 亮色/暗色主题切换（`data-theme` 属性）
- 自托管字体：Inter（正文）、Manrope（标题）、JetBrains Mono（代码）
- Material Symbols 图标系统（可变权重 100-700）
- `.glass-panel` 毛玻璃效果

### 5.3 关键设计模式

1. **CSS 变量主题**：所有颜色/阴影通过 CSS 自定义属性
2. **Zustand 状态管理**：18+ stores，细粒度 selector 减少重渲染
3. **移动端/桌面端双布局**：`useMobileViewport()` + `isTauriRuntime()`
4. **Portal 覆盖层**：模态框、下拉菜单使用 `createPortal`
5. **标签页导航**：持久化标签系统（localStorage）
6. **自适应消息渲染**：根据内容结构选择"气泡"或"文档"布局
7. **可调整面板**：工作空间（垂直）和终端（水平）支持拖拽调整

## 六、改造清单

基于审阅结果，以下是 Aranya 相对于 cc-haha 需要改造的关键领域：

### 6.1 品牌与身份改造 [高优先级]

- [ ] 将 "Claude Code Haha" 品牌替换为 "Aranya"
- [ ] 更新 Tauri 应用标识符（`com.claude-code-haha.desktop` → `com.aranya.desktop`）
- [ ] 更新 `package.json` 中的包名和版本
- [ ] 替换所有 UI 中的品牌文本（Sidebar、EmptySession、About 页面等）
- [ ] 更新应用图标和启动画面

### 6.2 左侧栏改造 [高优先级]

- [ ] 设置按钮移到最底部（原归档按钮位置）
- [ ] 归档按钮放到新增对话按钮右边
- [ ] "任务计划"更名为"定时任务"
- [ ] 下方新增"搜索对话"栏（包含工作空间选择和会话搜索）
- [ ] 删除频道功能入口

### 6.3 对话区改造 [高优先级]

- [ ] 增加即时询问框（AskUserQuestion 增强）
- [ ] 确认按钮交互优化
- [x] 对话区 UI 风格向 openhanako 靠拢（已实现 forest breeze 风格）

### 6.4 AI 人格系统 [中优先级]

- [ ] 实现三种人格定义：兰拉迦 (Araja)、兰拉娜 (Arana)、兰罗摩 (Arama)
- [ ] 人格选择器 UI（设置页面或对话区）
- [ ] 人格对应的 system prompt 注入
- [ ] 人格切换的状态管理

### 6.5 权限系统适配 [中优先级]

- [ ] 确认四种权限模式映射：
  - 自动执行 → `bypassPermissions`
  - 通知 → `acceptEdits`（部分）
  - 询问 → `default`
  - 手动 → `plan`
- [ ] 权限设置页面 UI 调整
- [ ] 权限模式描述文案本地化

### 6.6 设置页面改造 [中优先级]

- [ ] 移除首次安装引导
- [ ] "使用电脑"功能参考 cc-haha 完整实现
- [ ] 安全页新增诊断面板
- [ ] 设置页面布局优化

### 6.7 "笺"功能 [低优先级]

- [ ] 设计"笺"交互模型（人类主动投递的备忘录）
- [ ] AI 不自动巡查
- [ ] 笺的数据模型和存储

### 6.8 命令行集成 [低优先级]

- [ ] 验证 cc-haha 终端能否继承工作空间和环境变量
- [ ] 若可行则完整实现；否则保留按钮，后续开发

### 6.9 国际化 [持续]

- [ ] 确保所有新增 UI 文本支持中英文
- [ ] 更新 `desktop/src/i18n/locales/en.ts` 和 `zh.ts`

## 七、技术风险与建议

### 7.1 风险

1. **openhanako 不可访问**：无法获取 UI 参考实现，已基于 forest breeze 美学自行设计。openhanako 的功能参考范围（工作空间浏览、文件预览、设置页面、工具栏）已在现有代码中实现。
2. **chatStore 复杂度**：1400 行的 Zustand store，改造需谨慎避免引入 bug
3. **Rust 后端**：`lib.rs` 54K 行，修改原生功能需 Rust 知识
4. **WebSocket 协议**：14+ 消息类型，新增功能需确保协议兼容

### 7.2 建议

1. **渐进式改造**：先完成品牌和 UI 布局改造，再添加新功能
2. **保持 API 兼容**：sidecar 服务器的 HTTP/WebSocket API 尽量保持不变
3. **测试覆盖**：每个改造点都应有对应的测试用例
4. **设计先行**：在没有 openhanako 的情况下，已基于 forest breeze 美学完成 Aranya 的 UI 实现

## 八、可复用部分

以下 cc-haha 模块可以直接复用，无需改造：

- Agent 引擎核心（`src/main.tsx`, `src/Tool.ts`, `src/tools.ts`）
- 权限系统核心（`src/utils/permissions/`）
- MCP 服务（`src/services/mcp/`）
- API 客户端（`desktop/src/api/`）
- WebSocket 管理器（`desktop/src/api/websocket.ts`）
- 终端管理（`desktop/src/api/terminal.ts` + Tauri 命令）
- 工作空间面板（`desktop/src/components/workspace/`）
- 共享组件库（`desktop/src/components/shared/`）
- 主题系统框架（`desktop/src/theme/globals.css`）
- i18n 框架（`desktop/src/i18n/`）
