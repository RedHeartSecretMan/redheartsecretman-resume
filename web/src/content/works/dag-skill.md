---
title: dag-skill · 多智能体 Spec-and-Ticket DAG 协同编排
year: 2026
role: 独立作者 / 协议与工具链设计
tags: [Multi-Agent, Spec & Ticket, Git Worktree, Code Review, CAS]
link: https://github.com/RedHeartSecretMan/dag-skill
---

`dag-skill` 是面向 Git 工程项目的确定性多智能体协同调度技能（Agent Skill），通过 **Coordinator Agent** 与单票据 **Execution Agent** 分离架构，管控复杂软件需求从 Spec 到 Ticket DAG 的全生命周期交付。

## 核心机制

- **定义绑定与校验**：通过 `validate_definition_index.py` 确定性校验 `.dag/definition-index.json` 与输入 Blob，杜绝执行期漂移。
- **工作区隔离与 TDD 闭环**：每个 Ticket 分配独立分支与 Worktree，强制执行 `$tdd` 实现、目标门禁验证与 `$code-review` 独立审查。
- **原子化 CAS 集成转移**：通过 `promote_local_transition.py` 核验冻结证据并以 Compare-And-Swap（CAS）推进集成分支，支持本地或远端镜像安全恢复。
