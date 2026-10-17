---
title: vLLM & LMCache · 高吞吐推理与缓存层研究
year: 2025
role: 系统研究与优化
tags: [vLLM, LMCache, KV Cache, GPU Systems]
link: https://github.com/RedHeartSecretMan/LMCache
---

围绕大规模语言模型在线服务（LLM Serving）的高吞吐与低延迟瓶颈，深入剖析并实践 **vLLM** 与 **LMCache** 的核心调度机制与显存层次结构。

## 关键方向

- **PagedAttention 与块管理**：研究非连续显存物理块映射、碎片消除与多请求前缀共享机制。
- **跨层级 KV Cache 卸载与复用（LMCache）**：探索长上下文与多轮对话场景下的 KV Cache 压缩、传输与快速恢复。
- **工程演进**：将核心调度与算子设计沉淀并迁移至纯 Rust 实现的 `vllm-oxide` 引擎中。
