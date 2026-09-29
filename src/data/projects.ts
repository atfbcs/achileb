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
  appStore?: string
  playStore?: string
  nda?: boolean
}

export const liveProjects: Project[] = [
  {
    slug: 'trapspotter',
    name: 'Trapspotter',
    tagline: 'Your smart copilot for a safe & carefree drive',
    description:
      'Community-powered driving app — avoid traffic, prevent unexpected fines, and drive safer with real-time alerts across Belgium, the Netherlands, France, Germany and Luxembourg. 40K+ active users, 4.2M+ alerts processed. iOS / Android / web.',
    year: '2025',
    role: 'Chief Engineer',
    stack: ['React', 'Capacitor', 'Supabase', 'MapLibre', 'RevenueCat'],
    url: 'https://trapspotter.com',
    image: '/assets/screenshots/trapspotter.jpg',
    favicon: '/assets/favicons/trapspotter.png',
    accent: '#ff3d00',
    appStore: 'https://apps.apple.com/be/app/trapspotter/id6763530472',
    playStore: 'https://play.google.com/store/apps/details?id=com.trapspotter.app',
  },
  {
    slug: 'leopol',
    name: 'Leopol',
    tagline: 'Know what’s coming, long before you get there',
    description:
      'The new Trapspotter — calm, timely warnings for speed cameras, average-speed zones, mobile checks and road hazards in five countries. Free to use, Pro at €4.95/month. Site in NL / FR / EN.',
    year: '2026',
    role: 'Chief Engineer',
    stack: ['Next.js 16', 'React 19', 'Tailwind 4', 'Capacitor', 'Supabase'],
    url: 'https://leopol.ai',
    image: '/assets/screenshots/leopol.jpg',
    favicon: '/assets/favicons/leopol.png',
    accent: '#0a0a0a',
    appStore: 'https://apps.apple.com/app/apple-store/id6763530472?pt=128824147&ct=leopol&mt=8',
    playStore:
      'https://play.google.com/store/apps/details?id=com.trapspotter.app&referrer=utm_source%3Dleopol.ai%26utm_medium%3Dwebsite',
  },
  {
    slug: 'ticketbalie',
    name: 'Ticketbalie',
    tagline: 'Sell tickets. Without the hassle.',
    description:
      'Ticketing platform for organisers in Belgium and the Netherlands — set up an event in minutes, get paid directly and scan at the door. Organiser dashboard with design editor, email campaigns, inbox, finances and webshop.',
    year: '2025',
    role: 'Co-founder · Chief Engineer',
    stack: ['React', 'Vite', 'Supabase', 'Stripe Connect', 'Mapbox'],
    url: 'https://ticketbalie.com',
    image: '/assets/screenshots/ticketbalie.jpg',
    favicon: '/assets/favicons/ticketbalie.png',
    accent: '#10b981',
  },
  {
    slug: 'openmail',
    name: 'OpenMail',
    tagline: 'Your mail. Your servers. Your rules.',
    description:
      'Open-source (MIT) email you host yourself — a real inbox and newsletter sender on your own Supabase and Resend. Threading, folders, search, attachments, audiences, campaigns and an optional AI compose helper.',
    year: '2025',
    role: 'Co-founder · Chief Engineer',
    stack: ['React 19', 'Supabase', 'Resend', 'Tiptap'],
    url: 'https://openmails.dev',
    image: '/assets/screenshots/openmail.jpg',
    favicon: '/assets/favicons/openmail-circle.svg',
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
    tagline: 'A product studio in Ghent — software that keeps running',
    description:
      'We design, build and run software, automation and AI — for our own products and for our clients. One team, from the first call to the support afterwards.',
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
    slug: 'nurbanspace',
    name: 'Nurban Space',
    tagline: 'Space-saving, modular furniture',
    description:
      'Ground-up rebuild of the Webflow site on a new design system — 95 statically prerendered routes, a filterable catalogue and 46 product pages, plus an interactive 3D configurator for materials, colours and dimensions.',
    year: '2026',
    role: 'Chief Engineer',
    stack: ['Next.js 16', 'Tailwind 4', 'Three.js'],
    url: 'https://nurbanspace.com',
    accent: '#06b6d4',
  },
  {
    slug: 'compactsolutions',
    name: 'Compact Solutions',
    tagline: 'The future of space saving',
    description:
      'Site and dealer portal for a Belgian manufacturer of wall beds, space-saving furniture and kitchens — dealer sign-up with approval flow, orders and a gated downloads library.',
    year: '2026',
    role: 'Chief Engineer',
    stack: ['Next.js 16', 'Supabase', 'R3F'],
    url: 'https://compactsolutions.be',
    accent: '#10b981',
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
    url: 'https://houseoftalents.be',
    accent: '#a855f7',
  },
  {
    slug: 'wintercircus',
    name: 'Wintercircus',
    tagline: 'Innovation, events, food & community · Ghent',
    description:
      'Work for the iconic Ghent venue — including identity and site for Bar Bassie and Tribune, the bar and restaurant inside the Wintercircus.',
    year: '2026',
    role: 'Chief Engineer',
    stack: ['Next.js', 'Sanity'],
    url: 'https://wintercircus.be',
    accent: '#dc2626',
  },
  {
    slug: 'touzani',
    name: 'FC Touzani',
    tagline: 'One upload, every channel',
    description:
      'Publishing studio for Soufiane Touzani’s YouTube network — upload a video once, fan it out to every connected channel and track each upload from queued to live, with one-click retry.',
    year: '2026',
    role: 'Chief Engineer',
    stack: ['React Router 7', 'Supabase', 'Tailwind 4'],
    url: 'https://touzanifc.com',
    accent: '#0d9488',
  },
  {
    // client name withheld under NDA — keep it out of this file
    slug: 'nda-influencer',
    name: 'Confidential client',
    tagline: 'Influencer collaborations, from proposal to performance',
    description:
      'Workspace for the full creator-partnership lifecycle — proposal, negotiation, contract & e-signature, payment, content and performance — paired with paid-media analytics and AI-assisted email.',
    year: '2026',
    role: 'Chief Engineer',
    stack: ['React 19', 'Supabase', 'TanStack Query'],
    nda: true,
    accent: '#f97316',
  },
]
