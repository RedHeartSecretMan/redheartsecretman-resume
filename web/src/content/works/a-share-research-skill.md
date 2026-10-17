---
title: a-share-research-skill · 证据驱动的 A 股确定性研究工具
year: 2026
role: 独立作者 / 数据谱系与契约架构
tags: [Python 3.12+, Evidence-First, Data Provenance, Fail-Closed]
link: https://github.com/RedHeartSecretMan/a-share-research-skill
---

`a-share-research-skill`（`$a-share-research`）坚持 **「让每个研究数字都带着身份、时点、来源和计算谱系」**，将自然语言投研问题路由至确定性 Python CLI，输出版本化 JSON 证据包。

## 核心能力（v0.4.0）

- **失败关闭（Fail-Closed）身份解析**：证券简称或裸代码仅作线索，遇到跨交易所冲突或歧义时显式阻断，绝不静默切换数据源（No Silent Source Switch）。
- **全谱系覆盖**：涵盖 12 类窄研究任务（证券身份、双源行情走势、ETF 与期权、盘中快照、分时复盘、同口径估值比较、研报 F10、资金事件、市场信号）与 6 个预置研究方案。
- **诚实披露**：严格区分 `supported`、`limited` 与 `blocked` 状态，完整保留双源冲突、缺失分区与来源错误审计记录。
