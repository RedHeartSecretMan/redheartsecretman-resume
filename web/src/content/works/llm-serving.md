---
title: vLLM / LMCache 源码研读
year: 2026
role: Fork · 学习
tags: [vLLM, LMCache, KV Cache]
link: https://github.com/RedHeartSecretMan/LMCache
---

2026 年 7 月 fork 了 [vLLM](https://github.com/vllm-project/vllm) 与 [LMCache](https://github.com/LMCache/LMCache)，用于研读推理服务的调度、PagedAttention 与 KV Cache 复用。这两个仓库没有自有提交，研读成果体现在自己实现的 [vllm-oxide](https://github.com/RedHeartSecretMan/vllm-oxide) 中。