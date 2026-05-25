import { HugeiconsIcon } from '@hugeicons/react'
import {
  Mail01Icon,
  GithubIcon,
  NewTwitterIcon,
  LinkedinIcon,
  ArrowUpRight01Icon,
} from '@hugeicons/core-free-icons'

const channels = [
  { icon: GithubIcon, label: 'GitHub', handle: '@atfbcs', href: 'https://github.com/atfbcs' },
  { icon: NewTwitterIcon, label: 'X / Twitter', handle: '@achileb', href: 'https://x.com/achileb' },
  { icon: LinkedinIcon, label: 'LinkedIn', handle: '/in/achilebatier', href: 'https://www.linkedin.com/in/achilebatier/' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="ts-card p-2">
          <div className="ts-card-inner p-7 md:p-12 lg:p-16 text-center">
            <h2 className="font-display text-[2.25rem] md:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.02] mb-4 max-w-3xl mx-auto">
              Got a wild idea?{' '}
              <span className="text-brand-500">Let's build it.</span>
            </h2>

            <p className="text-[16px] md:text-[17px] text-ink-2 leading-relaxed mb-8 max-w-xl mx-auto">
              Founder collabs, client work, or just a quick hello — fastest reply
              by email.
            </p>

            <div className="flex flex-wrap justify-center gap-2.5 mb-10">
              <a href="mailto:hello@achileb.com" className="ts-btn-primary">
                <HugeiconsIcon icon={Mail01Icon} size={16} strokeWidth={1.8} />
                hello@achileb.com
              </a>
              <a href="https://cal.eu/achile/30min" target="_blank" rel="noreferrer" className="ts-btn-secondary">
                Book a 30-min call
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-2 max-w-2xl mx-auto">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-rail bg-card px-4 py-3 text-left transition hover:border-rail-strong"
                >
                  <div className="flex items-center gap-3">
                    <HugeiconsIcon icon={c.icon} size={16} strokeWidth={1.6} className="text-ink-2 group-hover:text-ink" />
                    <div>
                      <div className="text-[13px] font-medium text-ink">{c.label}</div>
                      <div className="text-[11px] font-mono text-ink-3">{c.handle}</div>
                    </div>
                  </div>
                  <HugeiconsIcon icon={ArrowUpRight01Icon} size={14} strokeWidth={2} className="text-ink-3 transition group-hover:text-brand-500 group-hover:rotate-12" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
