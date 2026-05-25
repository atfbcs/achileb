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
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' })
await page.evaluateHandle('document.fonts.ready')
await new Promise((r) => setTimeout(r, 2000))

// 1. project card with cursor hover for spotlight
await page.evaluate(() => document.querySelector('#work')?.scrollIntoView({ block: 'start', behavior: 'instant' }))
await new Promise((r) => setTimeout(r, 1200))

// hover over first card
const card = await page.evaluateHandle(() => document.querySelector('#work article'))
if (card) {
  const box = await card.asElement().boundingBox()
  if (box) {
    // move cursor to center-ish of card
    await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.5, { steps: 8 })
    await new Promise((r) => setTimeout(r, 800))
  }
}
await page.screenshot({ path: '/tmp/eff-card-spotlight.jpg', type: 'jpeg', quality: 85 })

// 2. studies section dot grid
await page.evaluate(() => document.querySelector('#studies')?.scrollIntoView({ block: 'start', behavior: 'instant' }))
await new Promise((r) => setTimeout(r, 1200))
await page.screenshot({ path: '/tmp/eff-studies.jpg', type: 'jpeg', quality: 85 })

// 3. footer with dither
await page.evaluate(() => document.querySelector('footer')?.scrollIntoView({ block: 'end', behavior: 'instant' }))
await new Promise((r) => setTimeout(r, 1500))
await page.screenshot({ path: '/tmp/eff-footer.jpg', type: 'jpeg', quality: 85 })

await browser.close()
console.log('done')
