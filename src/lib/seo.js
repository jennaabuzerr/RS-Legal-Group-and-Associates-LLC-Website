import site from '../content/site.json'

/** Public site URL without trailing slash, from VITE_SITE_URL (set in Vercel). */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://www.example.com').replace(/\/$/, '')

export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : '/' + path}`

/** "Page | Firm" unless the page title already includes the firm name. */
export function pageTitle(title) {
  if (!title) return site.firmName
  return title.includes(site.firmName) ? title : `${title} | ${site.firmName}`
}
