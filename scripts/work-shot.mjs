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
await page.setViewport({ width: 1440, height: 2400, deviceScaleFactor: 1 })
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' })
await page.evaluateHandle('document.fonts.ready')
await new Promise((r) => setTimeout(r, 2000))
await page.evaluate(() => document.querySelector('#work')?.scrollIntoView({ block: 'start', behavior: 'instant' }))
await new Promise((r) => setTimeout(r, 1500))
await page.screenshot({ path: '/tmp/work-cards.jpg', type: 'jpeg', quality: 85, fullPage: false })
await browser.close()
console.log('done')
