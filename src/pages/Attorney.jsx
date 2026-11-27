import { Link, useParams } from 'react-router-dom'
import attorneys from '../content/attorneys.json'
import practiceAreas from '../content/practice-areas.json'
import Seo from '../components/seo/Seo.jsx'
import JsonLd from '../components/seo/JsonLd.jsx'
import { attorneySchema } from '../lib/schema.js'
import Container from '../components/ui/Container.jsx'
import Section from '../components/ui/Section.jsx'
import Breadcrumbs from '../components/ui/Breadcrumbs.jsx'
import Prose from '../components/ui/Prose.jsx'
import Photo from '../components/ui/Photo.jsx'
import ConsultationCard from '../components/sections/ConsultationCard.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import NotFound from './NotFound.jsx'

function CredentialList({ title, items }) {
  if (!items?.length) return null
  return (
    <div>
      <h2 className="font-sans text-sm font-semibold tracking-[0.12em] text-navy-900 uppercase">{title}</h2>
      <ul className="mt-3 space-y-2 text-ink">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

export default function Attorney() {
  const { slug } = useParams()
  const person = attorneys.items.find((a) => a.slug === slug)
  if (!person) return <NotFound />

  const areas = practiceAreas.items.filter((p) => person.practiceAreas.includes(p.title))
  const education = (person.education ?? []).map((e) => [e.degree, e.school, e.year].filter(Boolean).join(', '))

  return (
    <>
      <Seo
        title={person.seo?.title ?? `${person.name}, ${person.title}`}
        description={person.seo?.description ?? person.summary}
        image={person.photo ?? undefined}
        type="profile"
      />
      <JsonLd data={attorneySchema(person)} />

      <header className="border-b border-line bg-ivory">
        <Container className="py-10 sm:py-14 lg:py-16">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: 'Attorneys', to: '/attorneys' }, { label: person.name, to: `/attorneys/${person.slug}` }]} />
          </div>
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5 lg:col-span-4">
              <Photo src={person.photo} alt={person.photoAlt} label="[Professional headshot]" priority width={600} height={750} className="aspect-[4/5] w-full rounded-sm" />
            </div>
            <div className="md:col-span-7 lg:col-span-8">
              <p className="eyebrow mb-3">{person.title}</p>
              <h1 className="text-h1">{person.name}</h1>
              <p className="mt-5 max-w-2xl text-lead text-muted">{person.summary}</p>
              {person.email && (
                <p className="mt-6"><a href={`mailto:${person.email}`} className="font-semibold">{person.email}</a></p>
              )}
            </div>
          </div>
        </Container>
      </header>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <Prose>{person.bio.map((p, i) => <p key={i}>{p}</p>)}</Prose>
          </div>
          <div className="space-y-8 lg:col-span-4">
            {areas.length > 0 && (
              <div>
                <h2 className="font-sans text-sm font-semibold tracking-[0.12em] text-navy-900 uppercase">Practice areas</h2>
                <ul className="mt-3 space-y-2">
                  {areas.map((a) => <li key={a.slug}><Link to={`/practice-areas/${a.slug}`}>{a.title}</Link></li>)}
                </ul>
              </div>
            )}
            <CredentialList title="Education" items={education} />
            <CredentialList title="Bar admissions" items={person.barAdmissions} />
            <CredentialList title="Memberships" items={person.memberships} />
            <ConsultationCard heading={`Talk with ${person.name}`} />
          </div>
        </div>
      </Section>

      <CtaBanner heading={attorneys.page.cta.heading} body={attorneys.page.cta.body} />
    </>
  )
}
