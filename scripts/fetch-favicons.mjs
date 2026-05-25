import { writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { load } from 'cheerio'

const sites = [
  { slug: 'trapspotter', url: 'https://trapspotter.com' },
  { slug: 'ticketbalie', url: 'https://ticketbalie.com' },
  { slug: 'superstream', url: 'https://superstream.co' },
  { slug: 'investeren', url: 'https://investeren.org' },
  { slug: 'dazzap', url: 'https://dazzap.com' },
  { slug: 'sidestream', url: 'https://sidestream.be' },
]

const outDir = path.resolve(process.cwd(), 'public/assets/favicons')
await mkdir(outDir, { recursive: true })

async function fetchBest(url) {
  const u = new URL(url)
  try {
    const res = await fetch(url, {
      headers: { 'user-agent': 'Mozilla/5.0 PortfolioFaviconBot' },
    })
    const html = await res.text()
    const $ = load(html)
    const candidates = []
    $('link[rel~="icon"], link[rel="apple-touch-icon"], link[rel="shortcut icon"]').each(
      (_, el) => {
        const href = $(el).attr('href')
        const sizes = $(el).attr('sizes') || ''
        const rel = ($(el).attr('rel') || '').toLowerCase()
        if (!href) return
        const sizeNum = parseInt(sizes.split('x')[0]) || 0
        const isApple = rel.includes('apple') ? 100 : 0
        const isSvg = href.endsWith('.svg') ? 200 : 0
        const score = sizeNum + isApple + isSvg
        candidates.push({ href, score })
      },
    )
    candidates.sort((a, b) => b.score - a.score)
    const targets = candidates.map((c) => new URL(c.href, url).toString())
    targets.push(new URL('/favicon.svg', u.origin).toString())
    targets.push(new URL('/favicon.png', u.origin).toString())
    targets.push(new URL('/favicon.ico', u.origin).toString())
    targets.push(`https://www.google.com/s2/favicons?domain=${u.hostname}&sz=128`)

    for (const t of targets) {
      try {
        const r = await fetch(t)
        if (!r.ok) continue
        const ct = r.headers.get('content-type') || ''
        const buf = Buffer.from(await r.arrayBuffer())
        if (buf.length < 100) continue
        let ext = 'png'
        if (ct.includes('svg') || t.endsWith('.svg')) ext = 'svg'
        else if (ct.includes('icon') || t.endsWith('.ico')) ext = 'ico'
        return { buf, ext, source: t }
      } catch {}
    }
    throw new Error('no favicon found')
  } catch (e) {
    // last resort
    const r = await fetch(`https://www.google.com/s2/favicons?domain=${u.hostname}&sz=128`)
    const buf = Buffer.from(await r.arrayBuffer())
    return { buf, ext: 'png', source: 'google-s2', fallback: e.message }
  }
}

for (const s of sites) {
  process.stdout.write(`→ ${s.url} … `)
  try {
    const { buf, ext, source, fallback } = await fetchBest(s.url)
    const file = path.join(outDir, `${s.slug}.${ext}`)
    await writeFile(file, buf)
    console.log(`${ext} from ${source}${fallback ? ` (fallback: ${fallback})` : ''}`)
  } catch (e) {
    console.log(`✗ ${e.message}`)
  }
}
