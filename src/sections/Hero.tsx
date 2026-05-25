import { lazy, Suspense } from 'react'
import { NAV_OFFSET } from '@/components/Nav'
import { useTheme } from '@/lib/theme'

const Dither = lazy(() => import('@/components/Dither'))

const HERO_MASK =
  'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 30%, black 100%)'

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section
      className="relative overflow-hidden bg-canvas border-b border-rail"
      style={{ paddingTop: NAV_OFFSET, paddingBottom: '0.5rem' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          maskImage: HERO_MASK,
          WebkitMaskImage: HERO_MASK,
          opacity: theme === 'dark' ? 0.45 : 0.3,
        }}
        aria-hidden
      >
        <Suspense fallback={null}>
          <Dither
            key={theme}
            waveColor={[1.0, 0.5, 0.22]}
            waveColorLow={theme === 'dark' ? [0.55, 0.22, 0.08] : [0.98, 0.7, 0.5]}
            waveSpeed={0.025}
            waveFrequency={3}
            waveAmplitude={0.28}
            colorNum={6}
            pixelSize={1}
            enableMouseInteraction={false}
            mouseRadius={1}
          />
        </Suspense>
      </div>
    </section>
  )
}
