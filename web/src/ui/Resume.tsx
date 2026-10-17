import { motion } from 'framer-motion'
import { SOCIAL_ICONS } from './SocialIcons'
import { FOCUS_POINTS } from '../data/focusPoints'

const GH = 'https://github.com/RedHeartSecretMan'

const SOCIAL_LINKS = [{ id: 'github', label: 'GitHub', href: GH }]

// 履历数据（双语）。版本、提交量与性能数据取自各仓库 README / Release（2026-10）。
interface ResumeGroup {
  heading?: string
  sub?: string
  link?: string
  items?: string[]
  links?: { id: string; label: string; href: string }[]
}
interface ResumeEntry {
  period: string
  place: string
  role?: string
  points?: string[]
  groups?: ResumeGroup[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Résumé',
    entries: [
      {
        period: '2022 – 2023',
        place: 'Notes & Foundations',
        role: 'Machine learning · Algorithms · Optics',
        points: [
          'Built a long-running notebook on ML, data structures & algorithms, and paper walkthroughs',
          'Wrote topic notes on optical phase retrieval, Zernike polynomials, and color spaces',
        ],
        groups: [{ heading: 'LearnNoteBook', sub: 'Markdown · Jupyter', link: `${GH}/LearnNoteBook` }],
      },
      {
        period: '2023',
        place: 'go_subtitle',
        role: 'Author · subtitle generator',
        points: [
          'Generates subtitles from audio / video in batch with Whisper and FFmpeg, including English translation',
          'Published to PyPI as go-subtitle, usable from the CLI or as a Python API',
        ],
        groups: [{ heading: 'Repository ↗', sub: 'Python · Whisper', link: `${GH}/go_subtitle` }],
      },
      {
        period: '2024 – 2026',
        place: 'Vision & Local LLM Tooling',
        role: 'MMDetection3D · Ollama',
        points: [
          'Ran 3D object detection experiments on an MMDetection3D fork',
          'Moved a PotPlayer subtitle-translation plugin to the native Ollama API with sliding-window context',
        ],
        groups: [
          { heading: 'PotPlayer_ollama_Translate', sub: 'AngelScript', link: `${GH}/PotPlayer_ollama_Translate` },
        ],
      },
      {
        period: '2026.07 – Now',
        place: 'vllm-oxide',
        role: 'Author · Rust LLM inference engine',
        points: [
          'Candle + custom CUDA kernels: continuous batching, chunked prefill, paged KV cache, prefix caching, recompute preemption',
          'Qwen3-0.6B BF16 on RTX 4080: 29.76 tok/s decode for 1 request, 115.82 tok/s across 4',
          'Nearly 300 commits, released v0.1.0 → v0.2.0 with reference-checked correctness gates',
        ],
        groups: [{ heading: 'Repository ↗', sub: 'Rust · CUDA', link: `${GH}/vllm-oxide` }],
      },
      {
        period: '2026.08 – Now',
        place: 'Evidence-First Agent Skills',
        role: 'Author',
        groups: [
          {
            heading: 'a-share-research-skill',
            sub: 'v0.4.0',
            link: `${GH}/a-share-research-skill`,
            items: [
              '12 research tasks and 6 fixed workflows behind a single deterministic run --request CLI',
              'Ambiguous identities fail closed; source failures never switch sources silently',
            ],
          },
          {
            heading: 'dag-skill',
            sub: 'v0.4.2',
            link: `${GH}/dag-skill`,
            items: [
              'Coordinator / Execution agents deliver approved Spec-and-Ticket DAGs',
              'Each candidate gets fresh code review; integration advances by compare-and-swap',
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
        period: '2022 – 2023',
        place: '学习笔记与知识体系',
        role: '机器学习 · 数据结构与算法 · 光学',
        points: [
          '长期整理机器学习主线 / 支线、数据结构与算法、论文串讲等系统笔记',
          '专题记录光学相位恢复、Zernike 多项式、色彩空间等研究内容',
        ],
        groups: [{ heading: 'LearnNoteBook', sub: 'Markdown · Jupyter', link: `${GH}/LearnNoteBook` }],
      },
      {
        period: '2023',
        place: 'go_subtitle',
        role: '作者 · 音视频字幕生成工具',
        points: [
          '基于 Whisper 与 FFmpeg，从音频或视频批量生成字幕，支持英文翻译',
          '以 go-subtitle 发布到 PyPI，提供命令行与 Python API 两种用法',
        ],
        groups: [{ heading: '查看仓库 ↗', sub: 'Python · Whisper', link: `${GH}/go_subtitle` }],
      },
      {
        period: '2024 – 2026',
        place: '视觉与本地大模型工具',
        role: 'MMDetection3D · Ollama',
        points: [
          '在 MMDetection3D 分支上开展三维目标检测实验',
          '将 PotPlayer 字幕翻译插件迁移到 Ollama 原生 API，并加入滑动窗口上下文',
        ],
        groups: [
          { heading: 'PotPlayer_ollama_Translate', sub: 'AngelScript', link: `${GH}/PotPlayer_ollama_Translate` },
        ],
      },
      {
        period: '2026.07 – 至今',
        place: 'vllm-oxide',
        role: '作者 · Rust 大模型推理引擎',
        points: [
          '基于 Candle 与自定义 CUDA kernel，实现连续批处理、分块预填充、分页 KV Cache、前缀缓存与重算抢占',
          'Qwen3-0.6B BF16 在 RTX 4080 上单请求解码 29.76 token/s，4 请求 115.82 token/s',
          '近 300 次提交，发布 v0.1.0 → v0.2.0，以参考实现对照建立正确性门禁',
        ],
        groups: [{ heading: '查看仓库 ↗', sub: 'Rust · CUDA', link: `${GH}/vllm-oxide` }],
      },
      {
        period: '2026.08 – 至今',
        place: '证据优先的 Agent Skills',
        role: '作者',
        groups: [
          {
            heading: 'a-share-research-skill',
            sub: 'v0.4.0',
            link: `${GH}/a-share-research-skill`,
            items: [
              '12 类研究任务与 6 个固定方案，统一由确定性 CLI run --request 执行',
              '证券身份有歧义时失败关闭，来源失败不静默切换，结果保留完整谱系',
            ],
          },
          {
            heading: 'dag-skill',
            sub: 'v0.4.2',
            link: `${GH}/dag-skill`,
            items: [
              'Coordinator / Execution Agent 分工交付已批准的 Spec-and-Ticket DAG',
              '每个候选提交独立评审，集成分支以 compare-and-swap 推进',
            ],
            links: SOCIAL_LINKS,
          },
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
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
  const heading = group.link ? (
    <a className="about-link" href={group.link} target="_blank" rel="noopener noreferrer">
      {group.heading}
    </a>
  ) : (
    <span>{group.heading}</span>
  )

  return (
    <motion.div className="tl-group" variants={itemV}>
      <div className="tl-group-head">
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
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
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
