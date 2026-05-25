import puppeteer from 'puppeteer'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const sites = [
  { name: 'trapspotter', url: 'https://trapspotter.com' },
  { name: 'ticketbalie', url: 'https://ticketbalie.com' },
  { name: 'superstream', url: 'https://superstream.co' },
  { name: 'investeren', url: 'https://investeren.org' },
  { name: 'dazzap', url: 'https://dazzap.com' },
  { name: 'sidestream', url: 'https://sidestream.be' },
]

const outDir = path.resolve(process.cwd(), 'public/assets/screenshots')
await mkdir(outDir, { recursive: true })

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

for (const site of sites) {
  console.log(`→ ${site.url}`)
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })
  try {
    await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 45000 })
    // small settle delay for animations
    await new Promise((r) => setTimeout(r, 1500))
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
