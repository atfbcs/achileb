import { lazy, Suspense } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Mail01Icon,
  GithubIcon,
  NewTwitterIcon,
  LinkedinIcon,
  ArrowUp02Icon,
} from '@hugeicons/core-free-icons'
import { Wordmark } from '@/components/Logo'
import { useTheme } from '@/lib/theme'
import { liveProjects } from '@/data/projects'

const Dither = lazy(() => import('@/components/Dither'))

const FOOTER_MASK =
  'radial-gradient(ellipse 60% 80% at 50% 0%, black 0%, rgba(0,0,0,0.5) 35%, transparent 75%)'

const social = [
  { icon: GithubIcon, label: 'GitHub', href: 'https://github.com/atfbcs' },
  { icon: NewTwitterIcon, label: 'X / Twitter', href: 'https://x.com/achileb' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/achilebatier/' },
]

const colophon = [
  ['Built with', 'React 19 · Vite · Tailwind v4'],
  ['Motion', 'Framer Motion'],
  ['Hosted on', 'Vercel'],
  ['Last updated', new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })],
] as const

const sectionLabel =
  'mb-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-ink-3'
const linkBase =
  'inline-flex items-center gap-2 text-[13.5px] text-ink-2 hover:text-ink transition-colors'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="relative overflow-hidden border-t border-rail bg-surface">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage: FOOTER_MASK,
          WebkitMaskImage: FOOTER_MASK,
          opacity: theme === 'dark' ? 0.4 : 0.55,
        }}
        aria-hidden
      >
        <Suspense fallback={null}>
          <Dither
            key={theme}
            waveColor={[1.0, 0.5, 0.22]}
            waveColorLow={theme === 'dark' ? [0.55, 0.22, 0.08] : [0.85, 0.4, 0.12]}
            waveSpeed={0.025}
            waveFrequency={3}
            waveAmplitude={0.32}
            colorNum={5}
            pixelSize={2}
            enableMouseInteraction={false}
            mouseRadius={1}
          />
        </Suspense>
      </div>
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-14 pb-10 md:pt-20 md:pb-12">
        {/* Top — brand + statement */}
        <div className="flex items-start gap-4 max-w-xl pb-12 border-b border-rail">
          <Wordmark className="h-10 w-10 text-ink shrink-0" />
          <div>
            <p className="font-display text-[1.5rem] md:text-[1.75rem] font-bold leading-[1.1] tracking-tight text-ink">
              I ship web products end&nbsp;to&nbsp;end.
            </p>
            <p className="mt-2 text-[14px] text-ink-3">
              Chief Engineer · founder · based in Ghent, Belgium.
            </p>
          </div>
        </div>

        {/* Middle — columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 py-12">
          {/* Products */}
          <div>
            <p className={sectionLabel}>Live products</p>
            <ul className="space-y-2.5">
              {liveProjects.map((p) => (
                <li key={p.slug}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className={linkBase}
                  >
                    {p.favicon && (
                      <span className="grid h-4 w-4 place-items-center overflow-hidden rounded-sm bg-white">
                        <img src={p.favicon} alt="" className="h-full w-full object-contain" />
                      </span>
                    )}
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sitemap */}
          <div>
            <p className={sectionLabel}>Sitemap</p>
            <ul className="space-y-2.5">
              <li><a className={linkBase} href="#work">Work</a></li>
              <li><a className={linkBase} href="#studies">Case studies</a></li>
              <li><a className={linkBase} href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className={sectionLabel}>Connect</p>
            <ul className="space-y-2.5">
              <li>
                <a className={linkBase} href="mailto:hello@achileb.com">
                  <HugeiconsIcon icon={Mail01Icon} size={14} strokeWidth={1.6} />
                  hello@achileb.com
                </a>
              </li>
              {social.map((s) => (
                <li key={s.label}>
                  <a className={linkBase} href={s.href} target="_blank" rel="noreferrer">
                    <HugeiconsIcon icon={s.icon} size={14} strokeWidth={1.6} />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colophon */}
          <div>
            <p className={sectionLabel}>Colophon</p>
            <ul className="space-y-2.5">
              {colophon.map(([k, v]) => (
                <li key={k} className="text-[13px] leading-snug">
                  <span className="block text-ink-3">{k}</span>
                  <span className="text-ink-2">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 pt-8 border-t border-rail md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
            <span>© {new Date().getFullYear()} Achile B.</span>
            <span className="text-ink-4">·</span>
            <span>All rights reserved</span>
          </div>
          <div className="flex items-center gap-5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-3">
            <span>Ghent · BE · 51.05°N</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
            >
              Back to top
              <HugeiconsIcon icon={ArrowUp02Icon} size={12} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
