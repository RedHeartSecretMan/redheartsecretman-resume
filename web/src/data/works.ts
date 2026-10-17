// 作品集数据（双语）。4 大板块 → 点击展开作品详情。
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

const GH = 'https://github.com/RedHeartSecretMan'

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: 'Works',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '关键词',
    visitLabel: '查看仓库',
    detailPlaceholder: '详情见 GitHub 仓库',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 个项目`,
    sections: [
      {
        id: 'ad',
        no: '01',
        title: '推理系统',
        tagline: 'Rust · CUDA · KV Cache',
        items: [
          {
            name: 'vllm-oxide',
            meta: 'v0.2.0 · 作者',
            tags: ['Rust', 'CUDA'],
            link: `${GH}/vllm-oxide`,
            slug: 'vllm-oxide',
          },
          {
            name: 'vLLM / LMCache 源码研读',
            meta: 'Fork',
            tags: ['推理服务', 'KV Cache'],
            link: `${GH}/LMCache`,
            slug: 'llm-serving',
          },
        ],
        awards: ['连续批处理', '分页 KV Cache', '前缀缓存'],
        footer: 'Candle · 自定义 CUDA kernel · BF16 · 参考实现对照',
      },
      {
        id: 'maker',
        no: '02',
        title: 'Agent Skills',
        tagline: '证据优先 · 确定性',
        items: [
          {
            name: 'a-share-research-skill',
            meta: 'v0.4.0 · 作者',
            tags: ['Python', '数据谱系'],
            link: `${GH}/a-share-research-skill`,
            slug: 'a-share-research-skill',
          },
          {
            name: 'dag-skill',
            meta: 'v0.4.2 · 作者',
            tags: ['多 Agent', 'Git'],
            link: `${GH}/dag-skill`,
            slug: 'dag-skill',
          },
          {
            name: 'archify',
            meta: 'Fork',
            tags: ['架构图'],
            link: `${GH}/archify`,
            slug: 'archify',
          },
        ],
        footer: '显式契约 · 失败关闭 · 独立评审 · 可复现',
      },
      {
        id: 'product',
        no: '03',
        title: '音视频工具',
        tagline: 'Whisper · Ollama',
        items: [
          {
            name: 'go_subtitle',
            meta: 'PyPI · 作者',
            tags: ['Python', 'Whisper'],
            link: `${GH}/go_subtitle`,
            slug: 'go-subtitle',
          },
          {
            name: 'PotPlayer × Ollama 字幕翻译',
            meta: 'Fork · 改进',
            tags: ['Ollama'],
            link: `${GH}/PotPlayer_ollama_Translate`,
            slug: 'potplayer-ollama',
          },
        ],
        footer: 'Whisper · FFmpeg · Ollama 本地推理',
      },
      {
        id: 'graphics',
        no: '04',
        title: '视觉与笔记',
        tagline: '3D 检测 · 学习笔记',
        items: [
          {
            name: 'MMDetection3D 实验',
            meta: 'Fork',
            tags: ['3D 检测'],
            link: `${GH}/mmdetection3d`,
            slug: 'mmdetection3d',
          },
          {
            name: 'LearnNoteBook',
            meta: '笔记',
            tags: ['机器学习', '算法', '光学'],
            link: `${GH}/LearnNoteBook`,
            slug: 'foundations',
          },
        ],
        footer: 'PyTorch · 机器学习 · 数据结构与算法 · 光学相位恢复',
      },
    ],
  },
  en: {
    title: 'Works',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Keywords',
    visitLabel: 'View repository',
    detailPlaceholder: 'See the GitHub repository for details',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} projects`,
    sections: [
      {
        id: 'ad',
        no: '01',
        title: 'Inference Systems',
        tagline: 'Rust · CUDA · KV Cache',
        items: [
          {
            name: 'vllm-oxide',
            meta: 'v0.2.0 · Author',
            tags: ['Rust', 'CUDA'],
            link: `${GH}/vllm-oxide`,
            slug: 'vllm-oxide',
          },
          {
            name: 'Reading vLLM / LMCache',
            meta: 'Fork',
            tags: ['Serving', 'KV Cache'],
            link: `${GH}/LMCache`,
            slug: 'llm-serving',
          },
        ],
        awards: ['Continuous batching', 'Paged KV cache', 'Prefix caching'],
        footer: 'Candle · Custom CUDA kernels · BF16 · Reference-checked',
      },
      {
        id: 'maker',
        no: '02',
        title: 'Agent Skills',
        tagline: 'Evidence-first · Deterministic',
        items: [
          {
            name: 'a-share-research-skill',
            meta: 'v0.4.0 · Author',
            tags: ['Python', 'Provenance'],
            link: `${GH}/a-share-research-skill`,
            slug: 'a-share-research-skill',
          },
          {
            name: 'dag-skill',
            meta: 'v0.4.2 · Author',
            tags: ['Multi-agent', 'Git'],
            link: `${GH}/dag-skill`,
            slug: 'dag-skill',
          },
          {
            name: 'archify',
            meta: 'Fork',
            tags: ['Diagrams'],
            link: `${GH}/archify`,
            slug: 'archify',
          },
        ],
        footer: 'Explicit contracts · Fail closed · Fresh review · Reproducible',
      },
      {
        id: 'product',
        no: '03',
        title: 'Media Tools',
        tagline: 'Whisper · Ollama',
        items: [
          {
            name: 'go_subtitle',
            meta: 'PyPI · Author',
            tags: ['Python', 'Whisper'],
            link: `${GH}/go_subtitle`,
            slug: 'go-subtitle',
          },
          {
            name: 'PotPlayer × Ollama Translation',
            meta: 'Fork · Improved',
            tags: ['Ollama'],
            link: `${GH}/PotPlayer_ollama_Translate`,
            slug: 'potplayer-ollama',
          },
        ],
        footer: 'Whisper · FFmpeg · Local Ollama inference',
      },
      {
        id: 'graphics',
        no: '04',
        title: 'Vision & Notes',
        tagline: '3D detection · Study notes',
        items: [
          {
            name: 'MMDetection3D Experiments',
            meta: 'Fork',
            tags: ['3D detection'],
            link: `${GH}/mmdetection3d`,
            slug: 'mmdetection3d',
          },
          {
            name: 'LearnNoteBook',
            meta: 'Notes',
            tags: ['ML', 'Algorithms', 'Optics'],
            link: `${GH}/LearnNoteBook`,
            slug: 'foundations',
          },
        ],
        footer: 'PyTorch · Machine learning · Algorithms · Optical phase retrieval',
      },
    ],
  },
}

// 板块配图（横向画廊每张卡片左侧的整高封面）。留空时显示大编号渐变占位；
// 放入 public/works/covers/<id>.jpg 后在此登记即可点亮。
export const SECTION_COVERS: Record<string, string> = {}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
