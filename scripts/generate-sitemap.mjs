// Runs after the static build. Writes dist/sitemap.xml from every prerendered page
// that is not marked noindex, and dist/robots.txt pointing at it.
import { copyFileSync, existsSync, readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const DIST = 'dist'
const SITE_URL = (process.env.VITE_SITE_URL || 'https://www.example.com').replace(/\/$/, '')

const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f)
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : []
})

const urls = walk(DIST)
  .filter((file) => !/<meta[^>]+name="robots"[^>]+noindex/i.test(readFileSync(file, 'utf8')))
  .map((file) => '/' + relative(DIST, file).replace(/\\/g, '/').replace(/(^|\/)index\.html$/, '').replace(/\.html$/, ''))
  .filter((path) => path !== '/404')
  .sort()

const today = new Date().toISOString().slice(0, 10)
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${SITE_URL}${u === '/' ? '/' : u.replace(/\/$/, '')}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`
writeFileSync(join(DIST, 'sitemap.xml'), xml)
writeFileSync(join(DIST, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
// Vercel serves dist/404.html for unknown URLs.
if (existsSync(join(DIST, '404/index.html'))) copyFileSync(join(DIST, '404/index.html'), join(DIST, '404.html'))

console.log(`sitemap.xml: ${urls.length} URLs`)
