import Container from '../ui/Container.jsx'

/** Short credibility facts (years, bar admissions, memberships). Hidden when empty. */
export default function TrustBar({ items = [] }) {
  if (!items.length) return null
  return (
    <section aria-label="Firm credentials" className="bg-white">
      <Container>
        <dl className="grid grid-cols-2 divide-line py-10 sm:py-12 lg:grid-cols-4 lg:divide-x">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col-reverse px-2 py-4 text-center lg:px-6">
              <dt className="mt-1 text-sm text-muted">{item.label}</dt>
              <dd className="font-serif text-h3 font-semibold text-navy-900">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
