import { HugeiconsIcon } from '@hugeicons/react'
import {
  Mail01Icon,
  GithubIcon,
  NewTwitterIcon,
  LinkedinIcon,
  ArrowUp02Icon,
  ArrowRight02Icon,
} from '@hugeicons/core-free-icons'
import { Wordmark } from '@/components/Logo'
import { liveProjects } from '@/data/projects'

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
  return (
    <footer className="border-t border-rail bg-surface">
      <div className="mx-auto max-w-6xl px-5 md:px-8 pt-14 pb-10 md:pt-20 md:pb-12">
        {/* Top — brand + statement + status */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12 pb-12 border-b border-rail">
          <div className="flex items-start gap-4 max-w-xl">
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

          <a
            href="#contact"
            className="group self-start shrink-0 inline-flex items-stretch overflow-hidden rounded-2xl border border-rail bg-card transition-all hover:border-rail-strong hover:shadow-sm"
          >
            <span className="flex items-center gap-2.5 px-4 py-3 border-r border-rail">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
              </span>
              <span className="text-[12.5px] font-semibold text-ink">Available</span>
            </span>
            <span className="flex flex-col justify-center px-4 py-2">
              <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-3">
                Booking
              </span>
              <span className="font-display text-[14px] font-bold tabular-nums text-ink leading-tight">
                Q1 — Q2 · 2026
              </span>
            </span>
            <span className="flex items-center px-3 border-l border-rail bg-card-inner text-ink-2 transition-all group-hover:bg-brand-500 group-hover:text-white">
              <HugeiconsIcon icon={ArrowRight02Icon} size={14} strokeWidth={2.2} />
            </span>
          </a>
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
