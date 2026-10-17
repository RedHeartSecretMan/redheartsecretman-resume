---
title: dag-skill
year: 2026
role: 作者
tags: [Python, 多 Agent, Git]
link: https://github.com/RedHeartSecretMan/dag-skill
---

在 Git 项目中协调执行已批准的 Spec-and-Ticket 依赖图。Coordinator Agent 负责调度、验收与集成；每个 Execution Agent 一次只处理一个 Ticket，从实现、验证到评审与修复。

2026 年 8 月开始，已发布 v0.1.0 至 v0.4.2。

## 设计要点

- `.dag/definition-index.json` 是唯一的 DAG 定义索引，由内置脚本确定性校验。
- 每个新的候选提交都重新评审；集成分支通过 compare-and-swap 推进并回读核对。
- Execution Agent 只返回 `Ready for Acceptance`、`Needs Decision`、`Externally Blocked` 三种结果。