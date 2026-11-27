import about from '../content/about.json'
import attorneys from '../content/attorneys.json'
import Seo from '../components/seo/Seo.jsx'
import Section from '../components/ui/Section.jsx'
import Heading from '../components/ui/Heading.jsx'
import Prose from '../components/ui/Prose.jsx'
import Card from '../components/ui/Card.jsx'
import PageHeader from '../components/sections/PageHeader.jsx'
import AttorneyGrid from '../components/sections/AttorneyGrid.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'

export default function About() {
  return (
    <>
      <Seo title={about.seo.title} description={about.seo.description} />

      <PageHeader
        eyebrow="About the firm"
        title={about.heading}
        intro={about.intro}
        breadcrumbs={[{ label: 'About', to: '/about' }]}
      />

      <Section tone="white">
        <Prose>
          {about.story.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </Prose>
      </Section>

      <Section labelledBy="values-heading">
        <Heading id="values-heading" level={2}>Our values</Heading>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {about.values.map((value, i) => (
            <Card key={i}>
              <Heading level={3}>{value.title}</Heading>
              <p className="mt-3 text-muted">{value.body}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="white" labelledBy="team-heading">
        <Heading id="team-heading" level={2}>Our attorneys</Heading>
        <div className="mt-10">
          <AttorneyGrid items={attorneys.items} />
        </div>
      </Section>

      <CtaBanner heading={about.cta.heading} body={about.cta.body} />
    </>
  )
}