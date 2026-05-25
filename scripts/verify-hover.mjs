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

await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 30000 })
await page.evaluateHandle('document.fonts.ready')
await new Promise((r) => setTimeout(r, 1500))

// scroll to first work card to find Visit Trapspotter btn
await page.evaluate(() => document.querySelector('#work')?.scrollIntoView({ behavior: 'instant', block: 'start' }))
await new Promise((r) => setTimeout(r, 1500))

// find the Visit button
const visitBtn = await page.evaluateHandle(() => {
  return [...document.querySelectorAll('a')].find((a) => a.textContent.includes('Visit Trapspotter'))
})
if (visitBtn) {
  const box = await visitBtn.asElement().boundingBox()
  if (box) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
    await new Promise((r) => setTimeout(r, 600))
    await page.screenshot({ path: '/tmp/hover-visit.jpg', type: 'jpeg', quality: 85 })
  }
}

// scroll to contact
await page.evaluate(() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'instant', block: 'start' }))
await new Promise((r) => setTimeout(r, 1500))

const bookBtn = await page.evaluateHandle(() => {
  return [...document.querySelectorAll('a')].find((a) => a.textContent.includes('Book a 30-min'))
})
if (bookBtn) {
  const box = await bookBtn.asElement().boundingBox()
  if (box) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
    await new Promise((r) => setTimeout(r, 600))
    await page.screenshot({ path: '/tmp/hover-book.jpg', type: 'jpeg', quality: 85 })
  }
}

await browser.close()
console.log('done')
