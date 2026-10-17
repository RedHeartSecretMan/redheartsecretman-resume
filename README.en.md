<h1 align="center">Wang Hao · 3D Résumé</h1>

<p align="center"><b>A scroll-driven 3D resume and portfolio.</b></p>

<p align="center">
  <a href="https://redheartsecretman.github.io/wanghao-3d-resume/">Live site</a> ·
  <a href="https://github.com/RedHeartSecretMan">GitHub</a> ·
  <a href="README.md">简体中文</a>
</p>

<p align="center">
  <a href="https://redheartsecretman.github.io/wanghao-3d-resume/"><img src="docs/preview.jpg" alt="Hero: the 3D character beside the About Wang Hao intro" width="800"></a>
</p>

I'm Wang Hao (王昊), an AI systems engineer who works through problems as What -> Why -> How. This site puts my resume inside a 3D scene: as you scroll, the camera moves to each chapter and finally into the works gallery.

## Contents

| Section | What's there |
| --- | --- |
| About | AI systems engineer focused on reliable, explainable and reproducible AI systems |
| Resume | Study notes -> go_subtitle -> vision and local-LLM tools -> vllm-oxide -> Agent Skills |
| Works | Inference systems, Agent Skills, audio/video tools, vision and notes |

Highlights:

- [vllm-oxide](https://github.com/RedHeartSecretMan/vllm-oxide): an LLM inference engine in Rust + CUDA
- [a-share-research-skill](https://github.com/RedHeartSecretMan/a-share-research-skill): an evidence-first A-share research skill
- [dag-skill](https://github.com/RedHeartSecretMan/dag-skill): multi-agent execution of a Spec-and-Ticket DAG
- [go_subtitle](https://github.com/RedHeartSecretMan/go_subtitle): subtitle generation for audio and video (on PyPI)

## Run locally

The front-end app lives in [`web/`](web) and needs Node.js 20+.

```bash
cd web
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + bundle to dist/
```

## Editing content

Paths are relative to `web/`:

| Content | File |
| --- | --- |
| Hero intro and corner labels | `src/App.tsx` |
| Resume timeline | `src/ui/Resume.tsx` |
| Works gallery | `src/data/works.ts` |
| Work detail pages | `src/content/works/<slug>.md` (template: `example.md`) |
| Camera stops | `src/data/focusPoints.ts` (count must match the resume entries) |
| Lights, depth of field, background | Constants at the top of each component in `src/scene/Scene.tsx` |

## Model and tutorials

| Resource | Purpose |
| --- | --- |
| [`blender/wanghao.blend`](blender/wanghao.blend) | Source for the character, face stickers and camera animation; export it to `web/public/models/me.glb` |
| [`tutor/`](tutor) | Tutorials in Chinese: intro3d model export, cursor-following eyes, AI stickers, deployment |

When replacing the model, keep the `CameraAction` clip (24 fps), the `focus-0` to `focus-5` and `focus-works` empties, and meshes whose names contain `eye`. Without them the camera path and eye tracking stop working.

## Deploy

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds `web/` and publishes it to GitHub Pages. `vite.config.ts` uses `base: './'`, so the build also works on any static host or in a subdirectory.

## Tech stack

React 18 · TypeScript · @react-three/fiber · @react-three/drei · @react-three/postprocessing · three · framer-motion · zustand · Vite

## License

Code is under [MIT](LICENSE). See [`NOTICE`](NOTICE) for personal content and third-party assets.
