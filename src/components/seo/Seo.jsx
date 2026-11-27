import { Head } from 'vite-react-ssg'
import { useLocation } from 'react-router-dom'
import site from '../../content/site.json'
import { absoluteUrl, pageTitle } from '../../lib/seo.js'

/**
 * Per-page <head>: unique title and description, canonical URL, Open Graph and
 * Twitter tags. Rendered into each page's static HTML at build time.
 */
export default function Seo({ title, description, image = '/images/og-default.jpg', type = 'website', noindex = false }) {
  const { pathname } = useLocation()
  const fullTitle = pageTitle(title)
  const url = absoluteUrl(pathname)
  const img = absoluteUrl(image)
  return (
    <Head>
      <html lang="en" />
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <meta property="og:site_name" content={site.firmName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={img} />
    </Head>
  )
}
