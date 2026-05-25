import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiStripe,
  SiVercel,
  SiCloudflare,
  SiNodedotjs,
  SiThreedotjs,
  SiFramer,
  SiShopify,
  SiMapbox,
  SiCapacitor,
  SiResend,
  SiRevenuecat,
  SiReactquery,
  SiZod,
  SiRadixui,
  SiShadcnui,
  SiSentry,
  SiBun,
  SiHono,
  SiDrizzle,
  SiLottiefiles,
  SiTrpc,
} from 'react-icons/si'

const logos = [
  { Icon: SiReact, label: 'React' },
  { Icon: SiTypescript, label: 'TypeScript' },
  { Icon: SiNextdotjs, label: 'Next.js' },
  { Icon: SiVite, label: 'Vite' },
  { Icon: SiTailwindcss, label: 'Tailwind' },
  { Icon: SiShadcnui, label: 'shadcn/ui' },
  { Icon: SiRadixui, label: 'Radix' },
  { Icon: SiFramer, label: 'Framer Motion' },
  { Icon: SiReactquery, label: 'TanStack Query' },
  { Icon: SiZod, label: 'Zod' },
  { Icon: SiSupabase, label: 'Supabase' },
  { Icon: SiPostgresql, label: 'Postgres' },
  { Icon: SiDrizzle, label: 'Drizzle' },
  { Icon: SiHono, label: 'Hono' },
  { Icon: SiTrpc, label: 'tRPC' },
  { Icon: SiBun, label: 'Bun' },
  { Icon: SiNodedotjs, label: 'Node' },
  { Icon: SiStripe, label: 'Stripe' },
  { Icon: SiRevenuecat, label: 'RevenueCat' },
  { Icon: SiResend, label: 'Resend' },
  { Icon: SiCapacitor, label: 'Capacitor' },
  { Icon: SiMapbox, label: 'Mapbox' },
  { Icon: SiThreedotjs, label: 'Three.js' },
  { Icon: SiLottiefiles, label: 'Lottie' },
  { Icon: SiSentry, label: 'Sentry' },
  { Icon: SiVercel, label: 'Vercel' },
  { Icon: SiCloudflare, label: 'Cloudflare' },
  { Icon: SiShopify, label: 'Shopify' },
]

export default function Marquee() {
  const doubled = [...logos, ...logos]
  return (
    <section data-section="marquee" className="bg-surface border-y border-rail py-8 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap items-center">
        {doubled.map(({ Icon, label }, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex items-center gap-2.5 px-7 text-ink-3 hover:text-ink transition-colors"
            aria-label={label}
            title={label}
          >
            <Icon size={20} aria-hidden />
            <span className="text-[14px] font-medium">{label}</span>
          </span>
        ))}
      </div>
    </section>
  )
}
