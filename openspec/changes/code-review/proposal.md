# Proposal: Upstream Code Review

## Why
Aranya 基于 cc-haha 和 openhanako。在正式开始改造前，必须彻底理解两个项目的模块结构、API 设计、UI 组件树，避免后期返工。

## What Changes
- 克隆 openhanako 到本地，作为只读参考。
- 分析 cc-haha 的 agent 引擎、协议层、权限系统和桌面入口。
- 分析 openhanako 的 UI 组件布局和状态管理。
- 输出审阅报告，记录关键接口、可复用部分和改造风险点。

## Capabilities
### New Capabilities
- upstream-review: 上游项目代码审阅

## Status: COMPLETED

审阅报告已生成：`openspec/changes/code-review/report.md`

**注意事项：**
- openhanako 仓库不可访问（可能为私有仓库），UI 分析基于现有 desktop 代码完成
- 改造清单已包含 9 个主要领域，按优先级排列
