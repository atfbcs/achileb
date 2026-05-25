import { lazy, Suspense } from 'react'
import { HugeiconsIcon } from '@hugeicons/react'
import { Mail01Icon, ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { useTheme } from '@/lib/theme'

const Dither = lazy(() => import('@/components/Dither'))

const CONTACT_MASK =
  'radial-gradient(ellipse 90% 80% at 50% 100%, black 0%, rgba(0,0,0,0.55) 45%, transparent 90%)'

export default function Contact() {
  const { theme } = useTheme()

  return (
    <section id="contact" className="px-3 pt-20 md:pt-28">
      <div className="mx-auto max-w-6xl relative overflow-hidden border border-b-0 border-rail rounded-t-2xl bg-card">
        {/* Inner card surface */}
        <div className="absolute inset-2 bottom-0 rounded-t-xl border border-b-0 border-rail bg-card-inner" aria-hidden />

        {/* Dither glow rising from bottom */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            maskImage: CONTACT_MASK,
            WebkitMaskImage: CONTACT_MASK,
            opacity: theme === 'dark' ? 0.5 : 0.65,
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

        {/* Content */}
        <div className="relative px-6 py-20 md:py-28 lg:py-32 text-center">
          <h2 className="font-display text-[3rem] md:text-[5rem] lg:text-[6rem] font-bold leading-[0.95] tracking-tighter mb-10">
            Got a wild idea?
            <br />
            <span className="text-brand-500">Let's build it.</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-2.5">
            <a href="mailto:hello@achileb.com" className="ts-btn-primary">
              <HugeiconsIcon icon={Mail01Icon} size={15} strokeWidth={1.8} />
              hello@achileb.com
              <HugeiconsIcon icon={ArrowRight02Icon} size={13} strokeWidth={2.2} />
            </a>
            <a
              href="https://cal.eu/achile/30min"
              target="_blank"
              rel="noreferrer"
              className="ts-btn-secondary"
            >
              Book a 30-min call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
