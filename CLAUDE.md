# CLAUDE.md

Conventions for AI coding assistants working in this repo. This is Wang Hao's scroll-driven 3D resume, built with React Three Fiber + TypeScript: a fixed 3D background (a character model whose camera moves with scroll) plus scrollable HTML content in front (About, resume, works).

## Layout

The front-end app is in [`web/`](web). Every code and asset path below is relative to `web/`, and npm commands run inside `web/`. `LICENSE`, `NOTICE`, and this file sit at the repo root.

## Commands

```bash
cd web
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + bundle to dist/
npm run preview    # preview the build output
npm run typecheck  # tsc -b
npm run lint       # ESLint (`any` is allowed in scene code)
```

There are no tests. After editing, run `npm run build` and check the page in a browser.

## Architecture

- Pure front-end SPA: `index.html` -> `src/main.tsx` -> `src/App.tsx`. No backend, no router.
- 3D background: `src/scene/Scene.tsx` loads `public/models/me.glb` and scrubs its camera animation with scroll, with auto-focus depth of field and eyes that follow the cursor. Lighting comes from `src/scene/Env.tsx` (`public/textures/env.hdr`).
- Scroll content: `Hero` in `App.tsx` (copy in `COPY`) -> `src/ui/Resume.tsx` -> `src/ui/Works.tsx`.
- Overlays: `LoadingScreen`, `NoiseOverlay`, plus scroll darkening, the frosted right rail, and the hero frame in `App.tsx`.
- Global state: `src/store.ts` (zustand).
- Post-processing order in `Scene.tsx`: DepthOfField -> Bloom -> SMAA.
- `base: './'` in `vite.config.ts`; public assets are joined with `import.meta.env.BASE_URL`.

## Content

- About: `COPY` in `App.tsx`.
- Resume: `RESUME` in `src/ui/Resume.tsx`. Keep facts verifiable against the linked repositories.
- Works list: `src/data/works.ts`. Details: one `src/content/works/<slug>.md` per item (frontmatter spec in `src/data/workDocs.ts`), linked by `slug`.
- Media for works go in `public/works/<slug>/` (gitignored) and are referenced with `/works/...` paths.

## 3D model contract

`Scene.tsx` looks up objects in the glb by name:

- A camera with an animation clip named `CameraAction` (24 fps). Frame 0 is the hero, frame `50*k` is resume node k, and the last frame is the works section.
- `focus-0` (or `focus-start`): hero focus anchor.
- One empty per resume entry, listed in `src/data/focusPoints.ts` (`FOCUS_POINTS`). The count must match the entries in `Resume.tsx`.
- `focus-works` (optional): works focus anchor.
- Meshes whose names contain `eye`: eyes that follow the cursor.
- Meshes named `sticker*` are hidden at load time.

## TypeScript

`strict` is on. `App`, `ui`, `data`, and `store` are fully typed; the imperative Three.js code in `Scene.tsx` uses a few `any`s. Keep that style and make sure `npm run typecheck` passes.