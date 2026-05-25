import { useState, useEffect } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Sun03Icon,
  Moon02Icon,
  ArrowRight02Icon,
  Menu02Icon,
  Cancel01Icon,
  Mail01Icon,
  Megaphone02Icon,
} from '@hugeicons/core-free-icons'
import { Wordmark } from '@/components/Logo'
import { useTheme } from '@/lib/theme'
import { cn } from '@/lib/cn'

export const NAV_OFFSET = '4.5rem'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Studies', href: '#studies' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
        <div
          className={cn(
            'mx-auto flex items-center justify-between gap-3 rounded-2xl border border-rail bg-card/85 backdrop-blur-xl pl-3 pr-2 py-2 transition-all duration-300',
            'shadow-[0_1px_2px_rgba(10,13,18,0.04),0_8px_24px_-12px_rgba(10,13,18,0.08)]',
            'lg:grid lg:grid-cols-[1fr_auto_1fr]',
            scrolled ? 'max-w-3xl' : 'max-w-6xl',
          )}
        >
          <a href="#top" aria-label="achile" className="shrink-0 lg:justify-self-start">
            <Wordmark className="h-8 w-8 text-ink" />
          </a>

          <ul className="hidden lg:flex items-center gap-1 text-[13.5px] lg:justify-self-center">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg text-ink-2 hover:text-ink hover:bg-card-inner font-medium transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5 lg:justify-self-end">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-2 hover:text-ink hover:bg-card-inner transition-colors"
            >
              <HugeiconsIcon
                icon={theme === 'dark' ? Sun03Icon : Moon02Icon}
                size={16}
                strokeWidth={1.8}
              />
            </button>
            <a
              href="#contact"
              className="group relative hidden sm:inline-flex items-center gap-2 overflow-hidden rounded-xl bg-brand-500 px-4 py-2 text-[13px] font-semibold text-white border border-brand-600 transition-all hover:bg-brand-600"
              style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.22), 0 1px 2px rgba(10,13,18,0.1)' }}
            >
              {/* Shimmer sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                }}
              />
              <HugeiconsIcon
                icon={Megaphone02Icon}
                size={14}
                strokeWidth={1.8}
                className="relative transition-transform group-hover:-rotate-12"
              />
              <span className="relative">Let's talk</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-rail text-ink hover:bg-card-inner transition-colors"
            >
              <HugeiconsIcon
                icon={open ? Cancel01Icon : Menu02Icon}
                size={16}
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-canvas/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-3 top-19 ts-card p-2 animate-fade-up">
            <div className="ts-card-inner p-2">
              <ul className="space-y-0.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium text-ink hover:bg-card transition-colors"
                    >
                      {l.label}
                      <HugeiconsIcon
                        icon={ArrowRight02Icon}
                        size={16}
                        strokeWidth={2}
                        className="text-ink-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="mailto:hello@achileb.com"
              onClick={() => setOpen(false)}
              className="ts-btn-primary w-full mt-2"
            >
              <HugeiconsIcon icon={Mail01Icon} size={14} strokeWidth={1.8} />
              hello@achileb.com
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
