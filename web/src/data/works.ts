// 作品集数据（双语）。5 大板块 → 点击展开作品详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.jsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'05'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: 'Works',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '核心特性',
    visitLabel: '查看 GitHub 仓库',
    detailPlaceholder: '项目详情与架构说明',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'ad',
        no: '01',
        title: '大模型推理系统',
        tagline: 'Rust · CUDA · KV Cache',
        items: [
          {
            name: 'vllm-oxide · Rust 大模型推理引擎',
            meta: 'v0.2.0',
            tags: ['Rust', 'CUDA', 'Paged Attention'],
            link: 'https://github.com/RedHeartSecretMan/vllm-oxide',
            slug: 'vllm-oxide',
          },
          {
            name: 'vLLM & LMCache 推理与缓存研究',
            meta: 'LLM Serving',
            tags: ['Continuous Batching', 'KV Cache'],
            link: 'https://github.com/RedHeartSecretMan/LMCache',
            slug: 'llm-serving',
          },
        ],
        awards: ['Continuous Batching', 'Paged KV Cache', 'Prefix Caching'],
        footer: 'Rust · Candle · Custom CUDA Kernels · BF16 Correctness Gates',
      },
      {
        id: 'maker',
        no: '02',
        title: 'Agent 智能体工程',
        tagline: 'Evidence-First · 确定性工作流',
        items: [
          {
            name: 'dag-skill · 多智能体 DAG 协同编排',
            meta: 'Multi-Agent',
            tags: ['Spec & Ticket', 'CAS 集成', '证据审查'],
            link: 'https://github.com/RedHeartSecretMan/dag-skill',
            slug: 'dag-skill',
          },
          {
            name: 'a-share-research-skill · 证据驱动 A 股研究',
            meta: 'v0.4.0',
            tags: ['Python 3.12+', '数据谱系', 'Fail-Closed'],
            link: 'https://github.com/RedHeartSecretMan/a-share-research-skill',
            slug: 'a-share-research-skill',
          },
          {
            name: 'archify · 可验证架构与时序图生成',
            meta: 'Agent Skill',
            tags: ['Architecture', 'HTML Motion'],
            link: 'https://github.com/RedHeartSecretMan/archify',
            slug: 'archify',
          },
        ],
        footer: '显式契约 · 证据驱动审查 · 确定性 CLI · 失败关闭（Fail-Closed）',
      },
      {
        id: 'product',
        no: '03',
        title: '多模态与开源工具',
        tagline: 'PyPI · Whisper · 音视频处理',
        items: [
          {
            name: 'go_subtitle · 音视频自动字幕生成与翻译',
            meta: 'PyPI Package',
            tags: ['Python', 'Whisper', 'FFmpeg'],
            link: 'https://github.com/RedHeartSecretMan/go_subtitle',
            slug: 'go-subtitle',
          },
          {
            name: 'PotPlayer Ollama 本地大模型实时字幕翻译',
            meta: 'Local LLM',
            tags: ['Ollama', 'PotPlayer'],
            link: 'https://github.com/RedHeartSecretMan/PotPlayer_ollama_Translate',
            slug: 'potplayer-ollama',
          },
        ],
        footer: 'PyTorch · OpenAI Whisper · FFmpeg · Ollama Local Inference',
      },
      {
        id: 'graphics',
        no: '04',
        title: '3D 视觉与底层基建',
        tagline: '3D Detection · C/C++ · 工程笔记',
        items: [
          {
            name: 'MMDetection3D · 三维目标检测探索',
            meta: '3D Vision',
            tags: ['PointCloud', 'Autonomous Driving'],
            link: 'https://github.com/RedHeartSecretMan/mmdetection3d',
            slug: 'mmdetection3d',
          },
          {
            name: 'CCppProject & LearnNoteBook · 算法与工程体系',
            meta: 'Foundations',
            tags: ['C/C++', 'Python', 'Notes'],
            link: 'https://github.com/RedHeartSecretMan/CCppProject',
            slug: 'foundations',
          },
        ],
        footer: 'C/C++ · CUDA · Python · Computer Vision · Engineering Methodology',
      },
    ],
  },
  en: {
    title: 'Works',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Highlights',
    visitLabel: 'View on GitHub',
    detailPlaceholder: 'Project architecture & details',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'ad',
        no: '01',
        title: 'LLM Inference Systems',
        tagline: 'Rust · CUDA · KV Cache',
        items: [
          {
            name: 'vllm-oxide · Rust LLM Inference Engine',
            meta: 'v0.2.0',
            tags: ['Rust', 'CUDA', 'Paged Attention'],
            link: 'https://github.com/RedHeartSecretMan/vllm-oxide',
            slug: 'vllm-oxide',
          },
          {
            name: 'vLLM & LMCache Serving Research',
            meta: 'LLM Serving',
            tags: ['Continuous Batching', 'KV Cache'],
            link: 'https://github.com/RedHeartSecretMan/LMCache',
            slug: 'llm-serving',
          },
        ],
        awards: ['Continuous Batching', 'Paged KV Cache', 'Prefix Caching'],
        footer: 'Rust · Candle · Custom CUDA Kernels · BF16 Correctness Gates',
      },
      {
        id: 'maker',
        no: '02',
        title: 'Agent Engineering',
        tagline: 'Evidence-First · Deterministic Workflows',
        items: [
          {
            name: 'dag-skill · Multi-Agent DAG Orchestration',
            meta: 'Multi-Agent',
            tags: ['Spec & Ticket', 'CAS Integration', 'Code Review'],
            link: 'https://github.com/RedHeartSecretMan/dag-skill',
            slug: 'dag-skill',
          },
          {
            name: 'a-share-research-skill · Evidence-First Research CLI',
            meta: 'v0.4.0',
            tags: ['Python 3.12+', 'Data Lineage', 'Fail-Closed'],
            link: 'https://github.com/RedHeartSecretMan/a-share-research-skill',
            slug: 'a-share-research-skill',
          },
          {
            name: 'archify · Verifiable Architecture Diagrams',
            meta: 'Agent Skill',
            tags: ['Architecture', 'HTML Motion'],
            link: 'https://github.com/RedHeartSecretMan/archify',
            slug: 'archify',
          },
        ],
        footer: 'Explicit Contracts · Evidence-Backed Review · Deterministic CLI · Fail-Closed',
      },
      {
        id: 'product',
        no: '03',
        title: 'Multimodal & Open Source',
        tagline: 'PyPI · Whisper · Media Processing',
        items: [
          {
            name: 'go_subtitle · Automated Subtitle Generator',
            meta: 'PyPI Package',
            tags: ['Python', 'Whisper', 'FFmpeg'],
            link: 'https://github.com/RedHeartSecretMan/go_subtitle',
            slug: 'go-subtitle',
          },
          {
            name: 'PotPlayer Ollama Real-Time Subtitle Translation',
            meta: 'Local LLM',
            tags: ['Ollama', 'PotPlayer'],
            link: 'https://github.com/RedHeartSecretMan/PotPlayer_ollama_Translate',
            slug: 'potplayer-ollama',
          },
        ],
        footer: 'PyTorch · OpenAI Whisper · FFmpeg · Ollama Local Inference',
      },
      {
        id: 'graphics',
        no: '04',
        title: '3D Vision & Foundations',
        tagline: '3D Detection · C/C++ · Engineering Notes',
        items: [
          {
            name: 'MMDetection3D · 3D Object Detection',
            meta: '3D Vision',
            tags: ['PointCloud', 'Autonomous Driving'],
            link: 'https://github.com/RedHeartSecretMan/mmdetection3d',
            slug: 'mmdetection3d',
          },
          {
            name: 'CCppProject & LearnNoteBook · Systems & Notes',
            meta: 'Foundations',
            tags: ['C/C++', 'Python', 'Notes'],
            link: 'https://github.com/RedHeartSecretMan/CCppProject',
            slug: 'foundations',
          },
        ],
        footer: 'C/C++ · CUDA · Python · Computer Vision · Engineering Methodology',
      },
    ],
  },
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
// 缺图时左栏用大编号渐变占位，放入图片后自动点亮。
export const SECTION_COVERS: Record<string, string> = {
  ad: `${import.meta.env.BASE_URL}works/covers/ad.jpg`,
  maker: `${import.meta.env.BASE_URL}works/covers/maker.jpg`,
  product: `${import.meta.env.BASE_URL}works/covers/product.jpg`,
  graphics: `${import.meta.env.BASE_URL}works/covers/graphics.jpg`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
