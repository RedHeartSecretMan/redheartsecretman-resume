import { motion } from 'framer-motion'
import { ZooopLogo } from './ZooopLogo'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/RedHeartSecretMan',
  },
]

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeGroup {
  heading?: string
  logo?: string
  logoImg?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  logo?: { src: string; alt: string }
  points?: string[]
  groups?: ResumeGroup[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Résumé',
    entries: [
      {
        period: '2020 – 2023',
        place: 'Systems & Algorithm Foundations',
        role: 'C / C++ · Python · Computer Vision & Deep Learning',
        points: [
          'Built solid foundations in systems programming, data structures, and deep learning architectures',
          'Maintained open-source engineering notes and cross-language algorithm repositories',
        ],
      },
      {
        period: '2023 – 2024',
        place: 'Multimodal AI & 3D Perception',
        role: 'AIGC · Whisper Speech · 3D Object Detection',
        points: [
          'Created go_subtitle (published on PyPI) for automated audio/video subtitle generation & translation via Whisper',
          'Explored 3D vision (MMDetection3D), Stable Diffusion workflows, and local LLM media translation',
        ],
      },
      {
        period: '2025',
        place: 'High-Throughput LLM Serving & KV Cache',
        role: 'vLLM · LMCache · GPU Systems',
        points: [
          'Deep-dived into high-throughput LLM serving, continuous batching, and distributed KV cache layers',
          'Focused on GPU kernel efficiency, memory hierarchy optimization, and numerical correctness gates',
        ],
      },
      {
        period: '2026',
        place: 'Rust + CUDA LLM Inference Engine',
        role: 'Creator of vllm-oxide',
        groups: [
          {
            heading: 'vllm-oxide',
            sub: 'Rust + Candle + Custom CUDA Kernels',
            link: 'https://github.com/RedHeartSecretMan/vllm-oxide',
            items: [
              'Implemented continuous batching, paged KV cache, shared-prefix caching, and copy-on-write preemption',
              'Validated BF16 inference on RTX 4080 with strict reference correctness gates',
            ],
          },
        ],
      },
      {
        period: '2026 – Now',
        place: 'Evidence-First Agent Systems',
        role: 'Creator of dag-skill & a-share-research-skill',
        groups: [
          {
            heading: 'RedHeartSecretMan',
            sub: 'What → Why → How',
            link: 'https://github.com/RedHeartSecretMan',
            items: [
              'dag-skill: Spec-and-Ticket DAG multi-agent orchestration with evidence-backed review & CAS integration',
              'a-share-research-skill: Deterministic financial research CLI with explicit provenance & fail-closed identity',
            ],
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
  zh: {
    title: 'Résumé',
    entries: [
      {
        period: '2020 – 2023',
        place: '系统编程与算法筑基',
        role: 'C / C++ · Python · 深度学习与计算机视觉',
        points: [
          '深耕系统编程、数据结构与深度学习底层机制，构建跨语言工程代码库与技术笔记体系',
          '践行「What → Why → How」工程方法论，坚持以契约和证据驱动系统设计',
        ],
      },
      {
        period: '2023 – 2024',
        place: '多模态 AI 与 3D 视觉探索',
        role: 'AIGC · 语音识别 · 3D 目标检测',
        points: [
          '开源并发布 PyPI 工具包 go_subtitle：基于 Whisper 实现音视频自动字幕提取与多语种翻译',
          '探索 3D 视觉感知（MMDetection3D）、扩散生成模型与本地大模型实时字幕翻译工具链',
        ],
      },
      {
        period: '2025',
        place: '高吞吐大模型推理与缓存架构',
        role: 'vLLM · LMCache · GPU 系统优化',
        points: [
          '深入研究高吞吐 LLM 推理引擎架构、Continuous Batching 调度与分布式 KV Cache 加速层',
          '聚焦 CUDA 算子优化、显存分页管理以及与参考实现对齐的数值正确性门禁',
        ],
      },
      {
        period: '2026',
        place: 'Rust + CUDA 大模型推理引擎',
        role: 'vllm-oxide 作者',
        groups: [
          {
            heading: 'vllm-oxide',
            sub: 'Rust + Candle + 自定义 CUDA 算子',
            link: 'https://github.com/RedHeartSecretMan/vllm-oxide',
            items: [
              '使用 Rust 从零构建支持 Continuous Batching、Paged KV Cache、Prefix Caching 与 CoW 抢占的推理引擎',
              '在单卡 RTX 4080 完成 BF16 实测验证，建立严格的数值、行为与性能基准门禁',
            ],
          },
        ],
      },
      {
        period: '2026 – 至今',
        place: '证据驱动的智能体工程体系',
        role: 'dag-skill & a-share-research-skill 作者',
        groups: [
          {
            heading: 'RedHeartSecretMan',
            sub: 'What → Why → How',
            link: 'https://github.com/RedHeartSecretMan',
            items: [
              'dag-skill：基于 Spec-and-Ticket DAG 的多智能体协同调度、证据审查与 CAS 集成协议',
              'a-share-research-skill：具备显式数据溯源、失败关闭身份校验与可复现估值谱系的确定性研究工具',
            ],
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Group({ group }: { group: ResumeGroup }) {
  const heading =
    group.logo === 'zooop' ? (
      <a
        className="zooop-logo-link"
        href={group.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ZOOOP"
      >
        <ZooopLogo className="zooop-logo" animated />
      </a>
    ) : group.link ? (
      <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
        {group.heading}
      </a>
    ) : (
      <span>{group.heading}</span>
    )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
        {group.logoImg && (
          <span className="tl-group-logo">
            <img src={group.logoImg} alt={group.heading || ''} loading="lazy" />
          </span>
        )}
        {heading}
        {group.sub && <span className="tl-group-sub">{group.sub}</span>}
      </div>
      {group.items && (
        <ul className="tl-points">
          {group.items.map((it, i) => (
            <li key={i}>{it}</li>
          ))}
        </ul>
      )}
      {group.links && (
        <div className="tl-logos">
          {group.links.map((l) => {
            const Icon = SOCIAL_ICONS[l.id as keyof typeof SOCIAL_ICONS]
            return (
              <a
                key={l.id}
                className="tl-logo"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                title={l.label}
              >
                <Icon />
              </a>
            )
          })}
        </div>
      )}
    </motion.div>
  )
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          {entry.logo && (
            <span className="tl-logo-chip">
              <img src={entry.logo.src} alt={entry.logo.alt} loading="lazy" />
            </span>
          )}
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
        {entry.groups && entry.groups.map((g, i) => <Group key={i} group={g} />)}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
