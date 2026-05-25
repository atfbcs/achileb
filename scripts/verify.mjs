import puppeteer from 'puppeteer'

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })

const errors = []
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`))
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(`console.error: ${m.text()}`)
})

await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 30000 })
await new Promise((r) => setTimeout(r, 1500))

await page.screenshot({ path: '/tmp/portfolio-top.jpg', type: 'jpeg', quality: 80 })

// scroll halfway, screenshot, then to bottom
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2))
await new Promise((r) => setTimeout(r, 1000))
await page.screenshot({ path: '/tmp/portfolio-mid.jpg', type: 'jpeg', quality: 80 })

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await new Promise((r) => setTimeout(r, 1000))
await page.screenshot({ path: '/tmp/portfolio-bottom.jpg', type: 'jpeg', quality: 80 })

const heading = await page.evaluate(() => {
  const h1 = document.querySelector('h1')
  return h1 ? h1.innerText : null
})

await browser.close()

console.log('H1:', heading)
console.log('Errors:', errors.length === 0 ? 'none' : errors)
