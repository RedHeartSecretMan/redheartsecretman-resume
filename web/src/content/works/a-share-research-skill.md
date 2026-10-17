---
title: a-share-research-skill
year: 2026
role: 作者
tags: [Python, Agent Skill, 数据谱系]
link: https://github.com/RedHeartSecretMan/a-share-research-skill
---

让每个研究数字都带着身份、时点、来源和计算谱系的 A 股研究 Skill。它把自然语言问题路由到确定性 Python CLI，由 CLI 返回版本化 JSON，再由 Agent 形成可核验的中文研究材料。

2026 年 8 月开始，约 250 次提交，已发布 v0.1.0 至 v0.4.0。

## 设计要点

- 唯一公共入口 `run --request`，提供 12 类窄研究任务与 6 个固定研究方案。
- 名称、简称和裸代码只是线索；身份歧义或交易所冲突时失败关闭。
- 来源失败不静默切换，也不会被改写成“没有记录”。
- 结果分为 `supported`、`limited`、`blocked`，并保留冲突、覆盖和限制。