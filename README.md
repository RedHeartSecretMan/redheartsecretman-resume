<h1 align="center">王昊 Wang Hao · 3D Résumé</h1>

<p align="center"><b>滚动即运镜的 3D 个人简历与作品集。</b></p>

<p align="center">
  <a href="https://redheartsecretman.github.io/wanghao-3d-resume/">在线访问</a> ·
  <a href="https://github.com/RedHeartSecretMan">GitHub</a>
</p>

<p align="center">
  <a href="https://redheartsecretman.github.io/wanghao-3d-resume/"><img src="docs/preview.jpg" alt="首屏：3D 人物与 About Wang Hao 介绍" width="800"></a>
</p>

我是王昊，一名 AI 系统工程师，按「What → Why → How」思考问题。这个网页把履历放进一个 3D 场景里：向下滚动时，镜头依次推到每段经历，最后进入作品画廊。

## 内容

| 部分 | 内容 |
| --- | --- |
| About | AI 系统工程师，关注可靠、可解释、可复现的 AI 系统 |
| 履历 | 学习笔记 → go_subtitle → 视觉与本地大模型工具 → vllm-oxide → Agent Skills |
| 作品 | 推理系统、Agent Skills、音视频工具、视觉与笔记四个板块 |

代表项目：

- [vllm-oxide](https://github.com/RedHeartSecretMan/vllm-oxide)：Rust + CUDA 大模型推理引擎
- [a-share-research-skill](https://github.com/RedHeartSecretMan/a-share-research-skill)：证据优先的 A 股研究 Skill
- [dag-skill](https://github.com/RedHeartSecretMan/dag-skill)：多 Agent 协同执行 Spec-and-Ticket DAG
- [go_subtitle](https://github.com/RedHeartSecretMan/go_subtitle)：音视频字幕生成工具（PyPI）

## 本地运行

前端应用在 [`web/`](web) 下，需要 Node.js 20+。

```bash
cd web
npm install
npm run dev        # http://localhost:5173
npm run build      # 类型检查 + 打包到 dist/
```

## 修改内容

路径相对 `web/`：

| 内容 | 文件 |
| --- | --- |
| 首屏介绍与角标 | `src/App.tsx` |
| 履历时间轴 | `src/ui/Resume.tsx` |
| 作品画廊 | `src/data/works.ts` |
| 作品详情 | `src/content/works/<slug>.md` |
| 镜头停靠点 | `src/data/focusPoints.ts`（数量须与履历条数一致） |
| 灯光、景深、背景等画面参数 | `src/scene/Scene.tsx` 各组件顶部的常量 |

## 部署

推送到 `main` 后，[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 会构建 `web/` 并发布到 GitHub Pages。`vite.config.ts` 使用 `base: './'`，产物也可以放到任意静态托管或子目录。

## 技术栈

React 18 · TypeScript · @react-three/fiber · @react-three/drei · @react-three/postprocessing · three · framer-motion · zustand · Vite

## 许可

代码采用 [MIT](LICENSE)。简历与作品文案、第三方素材的说明见 [`NOTICE`](NOTICE)。