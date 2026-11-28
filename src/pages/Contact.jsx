import contact from '../content/contact.json'
import Seo from '../components/seo/Seo.jsx'
import Section from '../components/ui/Section.jsx'
import PageHeader from '../components/sections/PageHeader.jsx'
import ContactForm from '../components/forms/ContactForm.jsx'

export default function Contact() {
  return (
    <>
      <Seo title={contact.seo.title} description={contact.seo.description} />

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
            <div className="lg:col-span-5">Details go here</div>
        </div>
      </Section>
    </>
  )
}
        
      
   
