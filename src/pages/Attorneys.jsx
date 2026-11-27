import attorneys from '../content/attorneys.json'
import Seo from '../components/seo/Seo.jsx'
import Section from '../components/ui/Section.jsx'
import PageHeader from '../components/sections/PageHeader.jsx'
import AttorneyGrid from '../components/sections/AttorneyGrid.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'

export default function Attorneys() {
  const { page } = attorneys
  return (
    <>
      <Seo title={page.seo.title} description={page.seo.description} />
      <PageHeader eyebrow="Our attorneys" title={page.heading} intro={page.intro} breadcrumbs={[{ label: 'Attorneys', to: '/attorneys' }]} />
      <Section>
        <AttorneyGrid items={attorneys.items} headingLevel={2} />
      </Section>
      <CtaBanner heading={page.cta.heading} body={page.cta.body} />
    </>
  )
}
