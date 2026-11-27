import site from '../../content/site.json'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'

export default function CtaBanner({ heading, body }) {
  const tel = `tel:${site.phone.replace(/[^\d+]/g, '')}`
  return (
    <section aria-labelledby="cta-heading" className="bg-white">
      <Container className="py-16 sm:py-20">
        <div className="flex flex-col gap-8 border-y border-line py-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="cta-heading" className="text-h2">{heading}</h2>
            <p className="mt-4 text-lead text-muted">{body}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button to="/contact" size="lg">{site.consultationLabel}</Button>
            <Button to={tel} variant="outline" size="lg">Call {site.phone}</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
