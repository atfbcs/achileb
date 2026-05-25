import { lazy, Suspense } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRight01Icon } from '@hugeicons/core-free-icons'
import { SiApple } from 'react-icons/si'
import type { Project } from '@/data/projects'

const Dither = lazy(() => import('@/components/Dither'))

function hexToFloat(hex: string): [number, number, number] {
  const v = hex.replace('#', '')
  const norm = v.length === 3 ? v.split('').map((c) => c + c).join('') : v
  return [
    parseInt(norm.slice(0, 2), 16) / 255,
    parseInt(norm.slice(2, 4), 16) / 255,
    parseInt(norm.slice(4, 6), 16) / 255,
  ]
}

const CORNER_MASK =
  'radial-gradient(ellipse 100% 100% at 100% 0%, black 0%, rgba(0,0,0,0.65) 30%, rgba(0,0,0,0.3) 60%, transparent 95%)'

function GooglePlayLogo({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M3.609 1.814L13.792 12 3.609 22.186a1.21 1.21 0 0 1-.354-.866V2.68c0-.415.173-.685.354-.866z" fill="#00C2DF" />
      <path d="M13.792 12l3.408-3.408L4.787 1.394c-.428-.241-.802-.241-1.178.42L13.792 12z" fill="#FFC100" />
      <path d="M17.2 8.592l3.36 1.92c1.034.59 1.034 1.59 0 2.18l-3.36 1.94L13.792 12l3.408-3.408z" fill="#00D853" />
      <path d="M3.609 22.186c.376.241.75.241 1.178 0l12.413-7.198-3.408-3.408L3.609 22.186z" fill="#EE4326" />
    </svg>
  )
}

const cornerColor: Record<string, string> = {
  trapspotter: '#ef4444', // red
  ticketbalie: '#3b82f6', // blue
  superstream: '#475569', // dark gray
  investeren: '#22c55e', // green
  dazzap: '#a855f7', // purple
}

const RAINBOW =
  'conic-gradient(from 180deg at 50% 50%, #ff5b1f, #facc15, #22c55e, #06b6d4, #8b5cf6, #ec4899, #ff5b1f)'

export default function ProjectCard({ project }: { project: Project }) {
  const isRainbow = project.slug === 'sidestream'
  const color = cornerColor[project.slug] ?? project.accent ?? '#ff5b1f'
  const hasStore = Boolean(project.appStore || project.playStore)

  return (
    <article className="ts-card p-2 relative overflow-hidden">
      {/* Corner dither / rainbow glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 size-96 opacity-70"
        style={{ maskImage: CORNER_MASK, WebkitMaskImage: CORNER_MASK }}
      >
        <Suspense
          fallback={
            <div
              className="absolute inset-0 blur-3xl"
              style={isRainbow ? { background: RAINBOW } : { background: color }}
            />
          }
        >
          <Dither
            waveColor={hexToFloat(color)}
            waveColorLow={hexToFloat(color).map((c) => c * 0.45) as [number, number, number]}
            waveSpeed={0.02}
            waveFrequency={3}
            waveAmplitude={0.3}
            colorNum={isRainbow ? 8 : 5}
            pixelSize={2}
            enableMouseInteraction={false}
            mouseRadius={1}
            rainbow={isRainbow}
          />
        </Suspense>
      </div>

      <div className="relative grid lg:grid-cols-2 gap-2 items-stretch">
        <a
          href={project.url ?? '#'}
          target={project.url ? '_blank' : undefined}
          rel="noreferrer"
          className="group/img relative overflow-hidden rounded-[14px] border border-rail bg-card-inner aspect-16/10 lg:aspect-auto"
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover/img:scale-[1.03]"
            />
          ) : (
            <div
              className="flex h-full w-full items-end p-8"
              style={{
                background: `linear-gradient(135deg, ${project.accent}25, transparent 70%)`,
              }}
            >
              <span className="font-display text-5xl font-bold tracking-tight" style={{ color: project.accent }}>
                {project.name}
              </span>
            </div>
          )}
        </a>

        <div className="ts-card-inner p-7 md:p-8 lg:p-9 flex flex-col">
          <div className="flex items-baseline gap-3 mb-4 text-[13px]">
            <span className="font-display font-bold tabular-nums text-ink text-[15px]">
              {project.year}
            </span>
            <span className="h-3 w-px bg-rail self-center" />
            <span className="text-ink-2">{project.role}</span>
          </div>

          <h3 className="font-display text-[1.75rem] md:text-[2rem] font-bold leading-[1.05] mb-3">
            {project.name}
          </h3>
          <p className="text-[15px] text-ink-2 leading-relaxed mb-4">{project.tagline}</p>
          <p className="text-[14px] text-ink-3 leading-relaxed mb-6">{project.description}</p>

          <div className="mt-auto flex flex-wrap gap-1.5 mb-5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-[11px] text-ink-3 px-2 py-1 rounded-md border border-rail bg-card"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="flex items-stretch gap-2 flex-nowrap">
            {project.url && (
              hasStore ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ts-btn-secondary shrink-0 py-2! px-3.5! text-[12.5px]!"
                >
                  Visit
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={13} strokeWidth={2} />
                </a>
              ) : (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ts-btn-secondary self-start"
                >
                  Visit {project.name}
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} strokeWidth={2} />
                </a>
              )
            )}
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noreferrer"
                aria-label="Download on the App Store"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#0a0a0a] border border-white/10 px-3 py-2 text-white transition hover:bg-[#1a1a1a]"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10), 0 1px 2px rgba(10,13,18,0.12)' }}
              >
                <SiApple size={16} aria-hidden />
                <span className="flex flex-col leading-none text-left">
                  <span className="text-[8px] uppercase tracking-[0.12em] text-white/70">Download on</span>
                  <span className="text-[12px] font-semibold mt-0.5">App Store</span>
                </span>
              </a>
            )}
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noreferrer"
                aria-label="Get it on Google Play"
                className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#0a0a0a] border border-white/10 px-3 py-2 text-white transition hover:bg-[#1a1a1a]"
                style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.10), 0 1px 2px rgba(10,13,18,0.12)' }}
              >
                <GooglePlayLogo size={16} />
                <span className="flex flex-col leading-none text-left">
                  <span className="text-[8px] uppercase tracking-[0.12em] text-white/70">Get it on</span>
                  <span className="text-[12px] font-semibold mt-0.5">Google Play</span>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
