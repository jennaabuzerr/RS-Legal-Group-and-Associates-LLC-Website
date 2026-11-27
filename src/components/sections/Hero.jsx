import site from '../../content/site.json'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import Photo from '../ui/Photo.jsx'

export default function Hero({ eyebrow, heading, subheading, image, imageAlt }) {
  const tel = `tel:${site.phone.replace(/[^\d+]/g, '')}`
  return (
    <section aria-labelledby="hero-heading" className="border-b border-line bg-ivory">
      <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
        <div className="lg:col-span-7">
          {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
          <h1 id="hero-heading" className="text-display">{heading}</h1>
          <p className="mt-6 max-w-xl text-lead text-muted">{subheading}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" size="lg">{site.consultationLabel}</Button>
            <Button to={tel} variant="outline" size="lg">Call {site.phone}</Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Photo
            src={image}
            alt={imageAlt}
            label="[Hero photo: the attorneys, the office, or the city]"
            priority
            width={800}
            height={960}
            className="aspect-[4/3] w-full rounded-sm lg:aspect-[5/6]"
          />
        </div>
      </Container>
    </section>
  )
}
