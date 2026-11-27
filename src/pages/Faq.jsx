import faq from '../content/faq.json'
import { faqSchema } from '../lib/schema.js'
import Seo from '../components/seo/Seo.jsx'
import JsonLd from '../components/seo/JsonLd.jsx'
import Section from '../components/ui/Section.jsx'
import PageHeader from '../components/sections/PageHeader.jsx'
import FaqList from '../components/sections/FaqList.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'

export default function Faq() {
  return (
    <>
      <Seo title={faq.seo.title} description={faq.seo.description} />

      <PageHeader 
        eyebrow="FAQ"
        title={faq.heading}
        intro={faq.intro}
        breadcrumbs={[{ label: 'FAQ', to: '/faq' }]}
      />

      <Section tone="white" narrow>
        <FaqList items={faq.items} headingLevel={2} />
      </Section>

      <JsonLd data={faqSchema(faq.items)} />

      <CtaBanner heading={faq.cta.heading} body={faq.cta.body} />
    </>
  )
}