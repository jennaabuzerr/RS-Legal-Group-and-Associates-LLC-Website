import { Link } from 'react-router-dom'

export default function PracticeAreaGrid({ items, headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <ul className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {items.map((area, i) => (
        <li key={area.slug} className="reveal bg-white" style={{ '--reveal-delay': `${i * 80}ms` }}>
          <Link
            to={`/practice-areas/${area.slug}`}
            className="group relative flex h-full flex-col p-7 no-underline transition-colors duration-300 hover:bg-navy-50 sm:p-8 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:origin-left before:scale-x-0 before:bg-burgundy-700 before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            <H className="text-h3 text-navy-900 transition-colors group-hover:text-burgundy-700">{area.title}</H>
            <p className="mt-3 flex-1 text-muted">{area.summary}</p>
            <span className="mt-6 text-sm font-semibold text-burgundy-700">
              Learn more<span className="sr-only"> about {area.title}</span> <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
