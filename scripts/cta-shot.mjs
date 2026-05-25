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
await page.setViewport({ width: 1440, height: 200, deviceScaleFactor: 2 })
await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' })
await page.evaluateHandle('document.fonts.ready')
await new Promise((r) => setTimeout(r, 1500))

// idle nav shot
await page.screenshot({ path: '/tmp/cta-idle.jpg', type: 'jpeg', quality: 90, clip: { x: 1000, y: 0, width: 440, height: 100 } })

// hover state
const btn = await page.evaluateHandle(() => [...document.querySelectorAll('a')].find(a => a.textContent.includes("Let's talk")))
if (btn) {
  const box = await btn.asElement().boundingBox()
  if (box) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2)
    await new Promise((r) => setTimeout(r, 350))  // mid-shimmer
    await page.screenshot({ path: '/tmp/cta-hover.jpg', type: 'jpeg', quality: 90, clip: { x: 1000, y: 0, width: 440, height: 100 } })
  }
}

await browser.close()
console.log('done')
