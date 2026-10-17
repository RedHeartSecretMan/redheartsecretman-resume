---
title: vllm-oxide · Rust + CUDA 大模型推理引擎
year: 2026
role: 独立作者 / 系统架构与实现
tags: [Rust, CUDA, Candle, Paged Attention, Continuous Batching]
link: https://github.com/RedHeartSecretMan/vllm-oxide
---

`vllm-oxide` 是一个使用 **Rust** 编写、基于 **Candle** 与自定义 **CUDA Kernels** 构建的大语言模型推理引擎，架构设计汲取了 `vLLM` 与 `nano-vllm` 的核心思想。

## 核心特性（v0.2.0）

- **连续批处理调度（Continuous Batching）**：支持单次生成调用内的动态请求批处理、Chunked Prefill、稳定 Request ID 与按输入顺序确定性返回。
- **分页 KV 缓存（Paged KV Cache）**：实现显存块分页管理、共享前缀缓存（Prefix Caching）、写时复制（Copy-on-Write）与重计算抢占（Recompute Preemption）。
- **灵活采样策略**：支持 Greedy、Temperature、Top-K、Top-P、Presence / Frequency / Repetition 惩罚及 EOS / Token 上限截断。
- **严格正确性门禁**：在 RTX 4080（WSL2 / BF16）上基于 `Qwen3-0.6B` 与参考实现建立完整的数值、行为与吞吐基准验证（单请求中位解码吞吐 29.76 token/s，4 并发 115.82 token/s）。

*** Add File: C:\Users\WangHao\Documents\ChatGPT\Everythings\sen-3d-resume\web\src\content\works\llm-serving.md
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

*** Add File: C:\Users\WangHao\Documents\ChatGPT\Everythings\sen-3d-resume\web\src\content\works\dag-skill.md
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

*** Add File: C:\Users\WangHao\Documents\ChatGPT\Everythings\sen-3d-resume\web\src\content\works\a-share-research-skill.md
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

*** Add File: C:\Users\WangHao\Documents\ChatGPT\Everythings\sen-3d-resume\web\src\content\works\archify.md
---
title: archify · 可验证架构、时序与数据流图生成技能
year: 2026
role: 开源维护与定制
tags: [Agent Skill, Architecture Diagram, Self-Contained HTML]
link: https://github.com/RedHeartSecretMan/archify
---

`archify` 是一个面向工程架构可视化的 Agent Skill，用于生成自包含、带交互动效且支持高清导出的系统架构图、工作流图、时序图、数据流图与生命周期图。

*** Add File: C:\Users\WangHao\Documents\ChatGPT\Everythings\sen-3d-resume\web\src\content\works\go-subtitle.md
---
title: go_subtitle · 音视频自动字幕生成与多语种翻译
year: 2025
role: 独立作者 / PyPI 开源包维护者
tags: [Python, OpenAI Whisper, FFmpeg, PyPI]
link: https://github.com/RedHeartSecretMan/go_subtitle
---

`go_subtitle` 是一个已发布至 **PyPI** 的开源命令行与 Python 库工具，基于 **OpenAI Whisper** 与 **FFmpeg**，支持从音频或视频目录中批量提取音轨、识别语音并生成时间轴字幕。

## 快速使用

- **一键安装**：`pip install -U go_subtitle`
- **双模式调用**：既可通过 CLI 命令 `go_subtitle -i ./data -o ./result -mn large` 批量生成字幕，也可在 Python 代码中兼容调用 Whisper 解码管线。

*** Add File: C:\Users\WangHao\Documents\ChatGPT\Everythings\sen-3d-resume\web\src\content\works\potplayer-ollama.md
---
title: PotPlayer Ollama · 本地大模型实时字幕翻译
year: 2026
role: 开源贡献与定制
tags: [Ollama, Local LLM, PotPlayer, Subtitle Translation]
link: https://github.com/RedHeartSecretMan/PotPlayer_ollama_Translate
---

将 **PotPlayer** 播放器与本地运行的 **Ollama** 大语言模型无缝对接，实现离线、低延迟、高上下文准确度的外语视频实时字幕翻译。

*** Add File: C:\Users\WangHao\Documents\ChatGPT\Everythings\sen-3d-resume\web\src\content\works\mmdetection3d.md
---
title: MMDetection3D · 三维点云与多模态目标检测
year: 2024
role: 算法研究与工程实践
tags: [3D Vision, PointCloud, PyTorch, Autonomous Driving]
link: https://github.com/RedHeartSecretMan/mmdetection3d
---

围绕三维点云（LiDAR）与多模态融合场景，基于 `MMDetection3D` 探索室内外 3D 目标检测、BEV 感知与底层算子部署流程。

*** Add File: C:\Users\WangHao\Documents\ChatGPT\Everythings\sen-3d-resume\web\src\content\works\foundations.md
---
title: CCppProject & LearnNoteBook · 系统编程与工程知识库
year: 2024
role: 独立作者
tags: [C/C++, Python, JavaScript, Engineering Notes]
link: https://github.com/RedHeartSecretMan/CCppProject
---

长期维护的跨语言工程实践仓库与结构化学习笔记体系，涵盖 `CCppProject`、`PythonProject`、`JavaScriptProject` 与 `LearnNoteBook`，记录从底层内存管理、并发编程到现代 AI 系统工程的演进轨迹。
