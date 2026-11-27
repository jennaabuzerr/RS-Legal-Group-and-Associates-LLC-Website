import practiceAreas from '../content/practice-areas.json'
import Seo from '../components/seo/Seo.jsx'
import Section from '../components/ui/Section.jsx'
import PageHeader from '../components/sections/PageHeader.jsx'
import PracticeAreaGrid from '../components/sections/PracticeAreaGrid.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'

export default function PracticeAreas() {
  const { page } = practiceAreas
  return (
    <>
      <Seo title={page.seo.title} description={page.seo.description} />
      <PageHeader eyebrow="Practice areas" title={page.heading} intro={page.intro} breadcrumbs={[{ label: 'Practice Areas', to: '/practice-areas' }]} />
      <Section>
        <PracticeAreaGrid items={practiceAreas.items} headingLevel={2} />
      </Section>
      <CtaBanner heading={page.cta.heading} body={page.cta.body} />
    </>
  )
}
