import contact from '../content/contact.json'
import practiceAreas from '../content/practice-areas.json'
import attorneys from '../content/attorneys.json'
import Seo from '../components/seo/Seo.jsx'
import JsonLd from '../components/seo/JsonLd.jsx'
import Section from '../components/ui/Section.jsx'
import PageHeader from '../components/sections/PageHeader.jsx'
import ContactDetails from '../components/sections/ContactDetails.jsx'
import ContactForm from '../components/forms/ContactForm.jsx'
import { legalServiceSchema } from '../lib/schema.js'

export default function Contact() {
  return (
    <>
      <Seo title={contact.seo.title} description={contact.seo.description} />
      <JsonLd data={legalServiceSchema({ practiceAreas: practiceAreas.items, attorneys: attorneys.items })} />

      <PageHeader
        eyebrow="Contact us"
        title={contact.heading}
        intro={contact.intro}
        breadcrumbs={[{ label: 'Contact', to: '/contact' }]}
      />

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactDetails />
          </div>
        </div>
      </Section>
    </>
  )
}
