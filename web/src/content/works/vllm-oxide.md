---
title: vllm-oxide
year: 2026
role: 作者
tags: [Rust, CUDA, Candle, LLM 推理]
link: https://github.com/RedHeartSecretMan/vllm-oxide
---

用 Rust 写的大语言模型推理引擎，基于 [Candle](https://github.com/huggingface/candle) 和自定义 CUDA kernel，架构参考 nano-vllm 与 vLLM。2026 年 7 月开始，近 300 次提交，已发布 v0.1.0 与 v0.2.0。

## v0.2.0 支持范围

| 方面 | 内容 |
| --- | --- |
| 模型与执行 | Qwen3-0.6B、BF16、单张 CUDA GPU、同步离线生成 |
| 请求处理 | 连续批处理、分块预填充、稳定请求 ID、按输入顺序返回 |
| KV Cache | 分页存储、共享前缀缓存、写时复制、重算抢占 |
| 采样 | greedy、temperature、top-k、top-p、惩罚项、EOS 与长度停止 |

## 实测

在固定的 RTX 4080 / WSL2 负载下，中位解码吞吐为单请求 **29.76 token/s**、四请求 **115.82 token/s**。这组数据只代表该硬件和负载，不表示与 vLLM 性能持平。

数值、行为和 CUDA 公共接口都与参考实现对照验证；GitHub CI 覆盖编译、格式、Clippy、Rust 测试和依赖检查。