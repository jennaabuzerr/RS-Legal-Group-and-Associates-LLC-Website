import { Link, useParams } from 'react-router-dom'
import practiceAreas from '../content/practice-areas.json'
import Seo from '../components/seo/Seo.jsx'
import JsonLd from '../components/seo/JsonLd.jsx'
import { faqSchema } from '../lib/schema.js'
import Section from '../components/ui/Section.jsx'
import Heading from '../components/ui/Heading.jsx'
import Prose from '../components/ui/Prose.jsx'
import PageHeader from '../components/sections/PageHeader.jsx'
import FaqList from '../components/sections/FaqList.jsx'
import ConsultationCard from '../components/sections/ConsultationCard.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import NotFound from './NotFound.jsx'

export default function PracticeArea() {
  const { slug } = useParams()
  const area = practiceAreas.items.find((a) => a.slug === slug)
  if (!area) return <NotFound />

  const others = practiceAreas.items.filter((a) => a.slug !== area.slug)

  return (
    <>
      <Seo title={area.seo.title} description={area.seo.description} />
      <JsonLd data={faqSchema(area.faqs ?? [])} />
      <PageHeader
        eyebrow="Practice area"
        title={area.title}
        intro={area.summary}
        breadcrumbs={[{ label: 'Practice Areas', to: '/practice-areas' }, { label: area.title, to: `/practice-areas/${area.slug}` }]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <Prose>{area.body.map((p, i) => <p key={i}>{p}</p>)}</Prose>

            {area.helpWith?.length > 0 && (
              <div className="mt-12">
                <Heading id="help-heading" level={2} size="h3">We can help with</Heading>
                <ul aria-labelledby="help-heading" className="mt-5 grid gap-3 sm:grid-cols-2">
                  {area.helpWith.map((item, i) => (
                    <li key={i} className="flex gap-3 border-l-2 border-burgundy-700 bg-navy-50 px-4 py-3">{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {area.faqs?.length > 0 && (
              <div className="mt-14">
                <Heading level={2}>Frequently asked questions</Heading>
                <div className="mt-6"><FaqList items={area.faqs} /></div>
              </div>
            )}
          </div>

          <div className="space-y-10 lg:col-span-4">
            <div className="lg:sticky lg:top-28"><ConsultationCard /></div>
          </div>
        </div>
      </Section>

      {others.length > 0 && (
        <Section tone="tint" labelledBy="other-heading">
          <Heading id="other-heading" level={2} size="h3">Other practice areas</Heading>
          <ul className="mt-6 flex flex-wrap gap-3">
            {others.map((a) => (
              <li key={a.slug}>
                <Link to={`/practice-areas/${a.slug}`} className="inline-flex min-h-10 items-center rounded-sm border border-line bg-white px-4 font-medium text-navy-900 no-underline hover:border-navy-900">{a.title}</Link>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <CtaBanner heading={practiceAreas.page.cta.heading} body={practiceAreas.page.cta.body} />
    </>
  )
}
