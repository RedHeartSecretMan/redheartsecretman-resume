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
