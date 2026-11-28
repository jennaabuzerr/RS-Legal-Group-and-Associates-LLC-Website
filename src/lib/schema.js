import site from '../content/site.json'
import { SITE_URL, absoluteUrl } from './seo.js'

// Builders for schema.org structured data. Unfilled [placeholder] values are
// dropped so search engines never see bracketed text.

export const isReal = (v) => v != null && v !== '' && !/^\[.*\]$/.test(String(v).trim())
const isEmpty = (v) =>
  v === undefined ||
  (Array.isArray(v) && v.length === 0) ||
  (v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).every((k) => k === '@type'))

/** Recursively drops placeholders, empty arrays and objects left with only an @type. */
const clean = (obj) => {
  if (Array.isArray(obj)) return obj.map(clean).filter((v) => !isEmpty(v))
  if (obj && typeof obj === 'object') {
    const out = {}
    for (const [k, v] of Object.entries(obj)) {
      const c = k === '@type' || k === '@context' ? v : clean(v)
      if (!isEmpty(c)) out[k] = c
    }
    return out
  }
  return isReal(obj) ? obj : undefined
}

const ORG_ID = `${SITE_URL}/#firm`

const dayMap = {
  'Monday – Friday': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  'Saturday – Sunday': ['Saturday', 'Sunday'],
  Monday: ['Monday'], Tuesday: ['Tuesday'], Wednesday: ['Wednesday'], Thursday: ['Thursday'],
  Friday: ['Friday'], Saturday: ['Saturday'], Sunday: ['Sunday'],
}
const to24h = (t) => {
  const m = String(t).match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i)
  if (!m) return undefined
  let h = Number(m[1]) % 12
  if (m[3].toUpperCase() === 'PM') h += 12
  return `${String(h).padStart(2, '0')}:${m[2]}`
}

/** LegalService (a LocalBusiness subtype): address, geo, phone, hours, service area. */
export function legalServiceSchema({ practiceAreas = [], attorneys = [] } = {}) {
  const a = site.address
  return clean({
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': ORG_ID,
    name: site.firmName,
    legalName: site.legalName,
    url: SITE_URL,
    telephone: site.phone,
    email: site.email,
    image: absoluteUrl('/images/og-default.jpg'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: [a.street, a.suite].filter(isReal).join(', '),
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: 'US',
    },
    geo: site.geo.latitude != null ? { '@type': 'GeoCoordinates', latitude: site.geo.latitude, longitude: site.geo.longitude } : undefined,
    areaServed: site.serviceArea,
    openingHoursSpecification: site.hours
      .filter((h) => h.open && to24h(h.open) && to24h(h.close))
      .map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: dayMap[h.days] ?? h.days, opens: to24h(h.open), closes: to24h(h.close) })),
    knowsAbout: practiceAreas.map((p) => p.title),
    employee: attorneys.map((p) => ({ '@id': `${SITE_URL}/attorneys/${p.slug}#person` })),
    sameAs: site.social.map((s) => s.url),
  })
}

/** Attorney bio page: a Person who works for the firm. */
export function attorneySchema(attorney) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/attorneys/${attorney.slug}#person`,
    name: attorney.name,
    jobTitle: attorney.title,
    image: attorney.photo ? absoluteUrl(attorney.photo) : undefined,
    url: absoluteUrl(`/attorneys/${attorney.slug}`),
    worksFor: { '@id': ORG_ID },
    alumniOf: (attorney.education ?? []).map((e) => ({ '@type': 'EducationalOrganization', name: e.school })),
    memberOf: (attorney.memberships ?? []).map((m) => ({ '@type': 'Organization', name: m })),
    knowsAbout: attorney.practiceAreas,
  })
}

export function breadcrumbSchema(items) {
  return clean({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.label, item: absoluteUrl(item.to) })),
  })
}

export function faqSchema(faqs) {
  const real = faqs.filter((f) => isReal(f.question) && isReal(f.answer))
  if (!real.length) return undefined
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: real.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  }
}
