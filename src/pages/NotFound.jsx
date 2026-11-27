import Seo from '../components/seo/Seo.jsx'
import Section from '../components/ui/Section.jsx'
import Heading from '../components/ui/Heading.jsx'
import Button from '../components/ui/Button.jsx'


export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" noindex />
      <Section narrow>
        <Heading level={1} eyebrow="404">We couldn’t find that page</Heading>
        <p className="mt-5 text-lead text-muted">The page may have moved. These links may help.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/">Home</Button>
          <Button to="/practice-areas" variant="outline">Practice areas</Button>
          <Button to="/contact" variant="outline">Contact</Button>
        </div>
      </Section>
    </>
  )
}
