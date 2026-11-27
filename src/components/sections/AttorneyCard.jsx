import { Link } from 'react-router-dom'
import Photo from '../ui/Photo.jsx'

export default function AttorneyCard({ attorney, headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <article className="group">
      <Link to={`/attorneys/${attorney.slug}`} className="block no-underline">
        <Photo
          src={attorney.photo}
          alt={attorney.photoAlt}
          label="[Professional headshot]"
          width={600}
          height={750}
          className="aspect-[4/5] w-full rounded-sm"
        />
        <H className="mt-5 text-h3 text-navy-900 group-hover:text-burgundy-700">{attorney.name}</H>
        <p className="mt-1 text-sm font-medium tracking-wide text-burgundy-700">{attorney.title}</p>
        <p className="mt-3 text-muted">{attorney.summary}</p>
      </Link>
    </article>
  )
}
