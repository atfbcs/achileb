import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 200, deviceScaleFactor: 2 })

await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 30000 })
await page.evaluateHandle('document.fonts.ready')
await new Promise((r) => setTimeout(r, 500))

await page.screenshot({ path: '/tmp/nav-logo.jpg', type: 'jpeg', quality: 85, clip: { x: 0, y: 0, width: 600, height: 90 } })

// favicon — render it as standalone
await page.setViewport({ width: 256, height: 256, deviceScaleFactor: 2 })
await page.goto('http://localhost:5173/favicon.svg', { waitUntil: 'networkidle0' })
await page.screenshot({ path: '/tmp/favicon-preview.jpg', type: 'jpeg', quality: 90 })

await browser.close()
console.log('done')
