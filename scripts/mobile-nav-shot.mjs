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
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 })
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' })
await page.evaluateHandle('document.fonts.ready')
await new Promise((r) => setTimeout(r, 1500))
await page.screenshot({ path: '/tmp/mobile-nav-closed.jpg', type: 'jpeg', quality: 85, clip: { x: 0, y: 0, width: 390, height: 300 } })

await page.click('[aria-label="Open menu"]')
await new Promise((r) => setTimeout(r, 700))
await page.screenshot({ path: '/tmp/mobile-nav-open.jpg', type: 'jpeg', quality: 85, clip: { x: 0, y: 0, width: 390, height: 500 } })

await browser.close()
console.log('done')
