---
title: go_subtitle
year: 2023
role: 作者
tags: [Python, Whisper, FFmpeg, PyPI]
link: https://github.com/RedHeartSecretMan/go_subtitle
---

从音频或视频生成字幕的开源工具，基于 OpenAI Whisper 二次开发，大部分 API 与 Whisper 兼容。已以 `go-subtitle` 发布到 PyPI。

```shell
pip install -U go_subtitle
go_subtitle -i ./data -o ./data/result -mn large --threads 4
```

支持批量处理目录、选择模型尺寸、指定 CPU 线程数，以及翻译为英文。