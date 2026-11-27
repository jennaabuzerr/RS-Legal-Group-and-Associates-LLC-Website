import { Link } from 'react-router-dom'

export default function PracticeAreaGrid({ items, headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((area) => (
        <li key={area.slug} className="bg-white">
          <Link
            to={`/practice-areas/${area.slug}`}
            className="group flex h-full flex-col p-7 no-underline transition-colors hover:bg-navy-50 sm:p-8"
          >
            <H className="text-h3 text-navy-900 group-hover:text-burgundy-700">{area.title}</H>
            <p className="mt-3 flex-1 text-muted">{area.summary}</p>
            <span className="mt-6 text-sm font-semibold text-burgundy-700">
              Learn more<span className="sr-only"> about {area.title}</span> <span aria-hidden="true">→</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
