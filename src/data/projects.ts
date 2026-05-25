export type Project = {
  slug: string
  name: string
  tagline: string
  description: string
  year: string
  role: string
  stack: string[]
  url?: string
  image?: string
  favicon?: string
  accent?: string
}

export const liveProjects: Project[] = [
  {
    slug: 'trapspotter',
    name: 'Trapspotter',
    tagline: 'Your smart copilot for a safe & carefree drive',
    description:
      'Community-powered driving app — avoid traffic, prevent unexpected fines, and drive safer with real-time alerts. 40K+ active users, 2M+ alerts shared. iOS / Android / web.',
    year: '2025',
    role: 'Chief Engineer',
    stack: ['React', 'Capacitor', 'Supabase', 'MapLibre', 'RevenueCat'],
    url: 'https://trapspotter.com',
    image: '/assets/screenshots/trapspotter.jpg',
    favicon: '/assets/favicons/trapspotter.png',
    accent: '#ff3d00',
  },
  {
    slug: 'ticketbalie',
    name: 'Ticketbalie',
    tagline: 'Sell tickets. Without the hassle.',
    description:
      'Event management made simple — sell tickets, scan entry, and manage events end-to-end. Stripe Connect payouts, QR scanning, multi-language (EN/NL), guest management.',
    year: '2025',
    role: 'Co-founder · Chief Engineer',
    stack: ['React', 'Vite', 'Supabase', 'Stripe Connect', 'Mapbox'],
    url: 'https://ticketbalie.com',
    image: '/assets/screenshots/ticketbalie.jpg',
    favicon: '/assets/favicons/ticketbalie.png',
    accent: '#10b981',
  },
  {
    slug: 'superstream',
    name: 'Superstream',
    tagline: 'A modern, Gmail-like mailbox system',
    description:
      'Gmail-inspired email client with real-time updates, rich-text composition (Tiptap), threading, attachments and video/PDF generation via Remotion.',
    year: '2025',
    role: 'Co-founder · Chief Engineer',
    stack: ['React 19', 'Supabase', 'Tiptap', 'Resend', 'Remotion'],
    url: 'https://superstream.co',
    image: '/assets/screenshots/superstream.jpg',
    favicon: '/assets/favicons/superstream.png',
    accent: '#8b5cf6',
  },
  {
    slug: 'investeren',
    name: 'Investeren.org',
    tagline: 'Smart investing starts here',
    description:
      'Track stocks, crypto, ETFs, forex — 9 asset classes with real-time market data, portfolio tracking, AI insights and community-powered news.',
    year: '2025',
    role: 'Co-founder · Chief Engineer',
    stack: ['Next.js 15', 'Supabase', 'Recharts', 'Lightweight Charts'],
    url: 'https://investeren.org',
    image: '/assets/screenshots/investeren.jpg',
    favicon: '/assets/favicons/investeren.png',
    accent: '#facc15',
  },
  {
    slug: 'dazzap',
    name: 'Dazzap',
    tagline: 'Streaming infrastructure for live experiences',
    description:
      'Full streaming platform with chat, real-time data, QR-driven flows, PDF export and content management. WhatsApp Business integration for customer ops.',
    year: '2025',
    role: 'Chief Engineer',
    stack: ['React 19', 'Vite', 'Supabase', 'Stripe', 'Radix UI'],
    url: 'https://dazzap.com',
    image: '/assets/screenshots/dazzap.jpg',
    favicon: '/assets/favicons/dazzap.png',
    accent: '#ec4899',
  },
  {
    slug: 'sidestream',
    name: 'Sidestream',
    tagline: 'Studio for side-quests & weekend builds',
    description:
      'The umbrella brand for experiments, prototypes and tools shipped in public — where most of these live products started.',
    year: '2025',
    role: 'Co-founder · Chief Engineer',
    stack: ['Various'],
    url: 'https://sidestream.be',
    image: '/assets/screenshots/sidestream.jpg',
    favicon: '/assets/favicons/sidestream.png',
    accent: '#06b6d4',
  },
]

export const caseStudies: Project[] = [
  {
    slug: 'prado',
    name: 'Prado',
    tagline: 'Manage influencer collaborations from proposal to performance',
    description:
      'Full-stack dashboard for the entire influencer campaign workflow — discovery, briefs, contracts, and performance analytics — in one interface.',
    year: '2026',
    role: 'Chief Engineer',
    stack: ['React 19', 'Vite', 'Supabase', 'TanStack Query', 'Tiptap'],
    accent: '#f97316',
  },
  {
    slug: 'houseoftalents',
    name: 'House of Talents',
    tagline: 'AI-powered content & social media automation',
    description:
      'Generate, curate and schedule social content across platforms from a single dashboard. AI cuts production time; the feed stays consistently active.',
    year: '2025',
    role: 'Chief Engineer',
    stack: ['React 18', 'Vite', 'Supabase', 'Three.js', 'Radix UI'],
    accent: '#a855f7',
  },
  {
    slug: 'lodicy',
    name: 'Lodicy',
    tagline: 'Direct-booking microsites for independent hosts',
    description: 'Direct-booking microsite system for independent lodging operators.',
    year: '2025',
    role: 'Chief Engineer',
    stack: ['Next.js', 'Stripe', 'Postgres'],
    accent: '#10b981',
  },
  {
    slug: 'nurbanspace',
    name: 'NURBAN Configurator',
    tagline: 'Interactive 3D builder for urban furniture',
    description:
      'Real-time 3D configurator — customise materials, colours and dimensions of urban furniture pieces with instant previews. Lets customers prototype before ordering.',
    year: '2026',
    role: 'Chief Engineer',
    stack: ['React 19', 'Vite', 'Three.js', 'R3F', 'Zustand'],
    accent: '#06b6d4',
  },
  {
    slug: 'zoutegrandprix',
    name: 'Zoute Grand Prix',
    tagline: 'A classic-car event, on the web',
    description: 'Race weekend platform — schedule, drivers, live coverage and ticketing.',
    year: '2025',
    role: 'Chief Engineer',
    stack: ['Next.js', 'Sanity'],
    accent: '#eab308',
  },
  {
    slug: 'aslgroup',
    name: 'ASL Group',
    tagline: 'Aviation services group',
    description: 'Corporate site rebuild and operations microsites across business units.',
    year: '2025',
    role: 'Chief Engineer',
    stack: ['Next.js', 'Headless CMS'],
    accent: '#3b82f6',
  },
  {
    slug: 'flesjesfabriek',
    name: 'Flesjesfabriek',
    tagline: 'Small-batch beverages, big-batch tooling',
    description: 'D2C storefront, custom-label flow and fulfilment back-office.',
    year: '2026',
    role: 'Chief Engineer',
    stack: ['Shopify Hydrogen', 'Remix'],
    accent: '#f43f5e',
  },
  {
    slug: 'keizerfest',
    name: 'Keizerfest 2026',
    tagline: 'Free three-day city festival · Keizerpark Gent',
    description:
      'Multilingual (NL/EN/FR) event site with live crowdfunding progress, four sub-festival schedules, partner showcase and embedded Ticketbalie checkout.',
    year: '2026',
    role: 'Chief Engineer',
    stack: ['HTML', 'Tailwind', 'Ticketbalie', 'Iconify'],
    accent: '#fb923c',
  },
  {
    slug: 'bar-bassie',
    name: 'Bar Bassie & Tribune',
    tagline: 'Wintercircus, Ghent — bar & tribune brand',
    description:
      'Identity & site for Bar Bassie and Tribune, the bar/restaurant inside the Wintercircus venue in Ghent.',
    year: '2026',
    role: 'Chief Engineer',
    stack: ['Next.js', 'Sanity'],
    accent: '#dc2626',
  },
]
