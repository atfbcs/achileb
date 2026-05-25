import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--enable-webgl',
    '--ignore-gpu-blocklist',
    '--enable-unsafe-swiftshader',
    '--use-angle=swiftshader',
  ],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })

const errors = []
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`))
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(`console.error: ${m.text()}`)
})

async function loadWithTheme(theme) {
  await page.evaluateOnNewDocument((t) => {
    try {
      localStorage.setItem('achile-theme', t)
    } catch {}
  }, theme)
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 30000 })
  await page.evaluateHandle('document.fonts.ready')
  await new Promise((r) => setTimeout(r, 2000))
}

async function shotSection(file, scrollTo) {
  if (scrollTo) {
    await page.evaluate((sel) => {
      const el = document.querySelector(sel)
      if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' })
    }, scrollTo)
    await new Promise((r) => setTimeout(r, 1200))
  }
  await page.screenshot({ path: file, type: 'jpeg', quality: 85 })
}

// Dark
await loadWithTheme('dark')
await shotSection('/tmp/v3-dark-hero.jpg')
await shotSection('/tmp/v3-dark-marquee.jpg', '[data-section="marquee"]')
await shotSection('/tmp/v3-dark-work.jpg', '#work')
await shotSection('/tmp/v3-dark-studies.jpg', '#studies')
await shotSection('/tmp/v3-dark-about.jpg', '#about')
await shotSection('/tmp/v3-dark-contact.jpg', '#contact')

// Light
await loadWithTheme('light')
await shotSection('/tmp/v3-light-hero.jpg')
await shotSection('/tmp/v3-light-marquee.jpg', '[data-section="marquee"]')
await shotSection('/tmp/v3-light-work.jpg', '#work')
await shotSection('/tmp/v3-light-studies.jpg', '#studies')
await shotSection('/tmp/v3-light-about.jpg', '#about')
await shotSection('/tmp/v3-light-contact.jpg', '#contact')

await browser.close()
console.log('Errors:', errors.length === 0 ? 'none' : errors.slice(0, 5))
