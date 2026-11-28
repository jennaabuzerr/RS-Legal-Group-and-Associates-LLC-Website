import contact from '../content/contact.json'
import site from '../content/site.json'
import Seo from '../components/seo/Seo.jsx'
import Section from '../components/ui/Section.jsx'
import Heading from '../components/ui/Heading.jsx'
import Button from '../components/ui/Button.jsx'
import PhoneLink from '../components/ui/PhoneLink.jsx'

export default function ThankYou() {
  const { thankYou } = contact
  return (
    <>
      <Seo title={thankYou.seo.title} noindex />
      <Section narrow>
        <Heading level={1} eyebrow="Message sent">{thankYou.heading}</Heading>
        <p className="mt-6 text-lead text-muted">{thankYou.body}</p>
        <p className="mt-4 text-muted">
          {thankYou.urgent} <PhoneLink phone={site.phone} className="font-semibold" />
        </p>
        <div className="mt-10">
          <Button to="/" variant="outline">Back to home</Button>
        </div>
      </Section>
    </>
  )
}