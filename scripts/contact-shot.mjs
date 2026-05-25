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
await page.evaluate(() => document.querySelector('#contact')?.scrollIntoView({ block: 'center', behavior: 'instant' }))
await new Promise((r) => setTimeout(r, 2000))
await page.screenshot({ path: '/tmp/contact.jpg', type: 'jpeg', quality: 85 })
await browser.close()
console.log('done')
