import puppeteer from 'puppeteer'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const all = [
  { name: 'trapspotter', url: 'https://trapspotter.com' },
  { name: 'leopol', url: 'https://leopol.ai' },
  { name: 'ticketbalie', url: 'https://ticketbalie.com' },
  { name: 'openmail', url: 'https://openmails.dev' },
  { name: 'investeren', url: 'https://investeren.org' },
  { name: 'dazzap', url: 'https://dazzap.com' },
  { name: 'sidestream', url: 'https://sidestream.be' },
]

// `node scripts/screenshot.mjs trapspotter leopol` shoots only those
const only = process.argv.slice(2)
const sites = only.length ? all.filter((s) => only.includes(s.name)) : all

const outDir = path.resolve(process.cwd(), 'public/assets/screenshots')
await mkdir(outDir, { recursive: true })

const COOKIE_SELECTORS = [
  '#onetrust-consent-sdk',
  '#CybotCookiebotDialog',
  '#cookiebanner',
  '#cookie-banner',
  '.cookie-banner',
  '.cookie-consent',
  '.cc-window',
  '.cky-consent-container',
  '[id*="cookie" i]',
  '[class*="cookie" i]',
  '[id*="consent" i]',
  '[class*="consent" i]',
  '[aria-label*="cookie" i]',
]

// Hide cookie popups: known selectors + any fixed/sticky overlay mentioning cookies.
async function hideCookieBanners(page) {
  await page.evaluate((selectors) => {
    // never hide page wrappers that merely carry a cookie-ish class
    const hide = (el) => {
      if (el === document.body || el === document.documentElement) return
      if ((el.textContent ?? '').length > 3000) return
      el.style.setProperty('display', 'none', 'important')
    }
    for (const sel of selectors) document.querySelectorAll(sel).forEach(hide)
    for (const el of document.querySelectorAll('body *')) {
      const pos = getComputedStyle(el).position
      if (pos !== 'fixed' && pos !== 'sticky') continue
      if (el.matches('header, nav, header *, nav *')) continue
      if (/cookie|consent|gdpr|privacyvoorkeur/i.test(el.textContent ?? '')) hide(el)
    }
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  }, COOKIE_SELECTORS)
}

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

for (const site of sites) {
  console.log(`→ ${site.url}`)
  const page = await browser.newPage()
  await page.setUserAgent(
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
  )
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })
  try {
    await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 60000 })
    // small settle delay for animations / late-mounting banners
    await new Promise((r) => setTimeout(r, 2500))
    await hideCookieBanners(page)
    await new Promise((r) => setTimeout(r, 500))
    const file = path.join(outDir, `${site.name}.jpg`)
    await page.screenshot({ path: file, type: 'jpeg', quality: 85 })
    console.log(`  ✓ ${file}`)
  } catch (err) {
    console.log(`  ✗ ${site.name}: ${err.message}`)
  } finally {
    await page.close()
  }
}

await browser.close()
console.log('done.')
