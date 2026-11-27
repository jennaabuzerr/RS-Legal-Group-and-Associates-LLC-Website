import { Link } from 'react-router-dom'
import JsonLd from '../seo/JsonLd.jsx'
import { breadcrumbSchema } from '../../lib/schema.js'

/** Visible breadcrumb trail plus BreadcrumbList structured data. Last item is the current page. */
export default function Breadcrumbs({ items }) {
  const trail = [{ label: 'Home', to: '/' }, ...items]
  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Breadcrumb" className="text-sm">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted">
          {trail.map((item, i) => {
            const last = i === trail.length - 1
            return (
              <li key={item.to} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" className="text-ink">{item.label}</span>
                ) : (
                  <>
                    <Link to={item.to} className="text-muted no-underline hover:text-burgundy-700 hover:underline">{item.label}</Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
