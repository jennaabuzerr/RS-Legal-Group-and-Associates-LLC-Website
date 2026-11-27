import home from '../content/home.json'
import site from '../content/site.json'
import practiceAreas from '../content/practice-areas.json'
import attorneys from '../content/attorneys.json'
import Seo from '../components/seo/Seo.jsx'
import JsonLd from '../components/seo/JsonLd.jsx'
import { legalServiceSchema } from '../lib/schema.js'
import Section from '../components/ui/Section.jsx'
import Heading from '../components/ui/Heading.jsx'
import Button from '../components/ui/Button.jsx'
import Hero from '../components/sections/Hero.jsx'
import TrustBar from '../components/sections/TrustBar.jsx'
import PracticeAreaGrid from '../components/sections/PracticeAreaGrid.jsx'
import AttorneyGrid from '../components/sections/AttorneyGrid.jsx'
import ProcessSteps from '../components/sections/ProcessSteps.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import reviews from '../content/reviews.json'
import ReviewsMarquee from '../components/sections/ReviewsMarquee.jsx'

export default function Home() {
  return (
    <>
      <Seo title={home.seo.title} description={home.seo.description} />
      <JsonLd data={legalServiceSchema({ practiceAreas: practiceAreas.items, attorneys: attorneys.items })} />

      <Hero {...home.hero} />
      <TrustBar items={site.trustSignals} />

      <Section labelledBy="pa-heading">
        <div className="mb-10 max-w-2xl">
          <Heading id="pa-heading" eyebrow={home.practiceAreas.eyebrow}>{home.practiceAreas.heading}</Heading>
          <p className="mt-4 text-lead text-muted">{home.practiceAreas.intro}</p>
        </div>
        <PracticeAreaGrid items={practiceAreas.items} />
        <div className="mt-8">
          <Button to="/practice-areas" variant="outline">All practice areas</Button>
        </div>
      </Section>

      <Section tone="white" labelledBy="intro-heading">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Heading id="intro-heading" eyebrow={home.intro.eyebrow}>{home.intro.heading}</Heading>
          </div>
          <div className="space-y-5 text-lg text-ink lg:col-span-7">
            {home.intro.body.map((p, i) => <p key={i}>{p}</p>)}
            <p><Button to={home.intro.link.to} variant="outline">{home.intro.link.label}</Button></p>
          </div>
        </div>
      </Section>

      <Section labelledBy="att-heading">
        <div className="mb-10 max-w-2xl">
          <Heading id="att-heading" eyebrow={home.attorneys.eyebrow}>{home.attorneys.heading}</Heading>
          <p className="mt-4 text-lead text-muted">{home.attorneys.intro}</p>
        </div>
        <AttorneyGrid items={attorneys.items} />
      </Section>

      <Section tone="dark" labelledBy="process-heading">
        <div className="mb-12 max-w-2xl">
          <Heading id="process-heading" eyebrow={home.process.eyebrow}>{home.process.heading}</Heading>
        </div>
        <ProcessSteps steps={home.process.steps} />
      </Section>

      {reviews.show && (
        <Section tone="tint" labelledBy="reviews-heading">
          <div className="mb-12 max-w-2xl">
            <Heading id="reviews-heading" eyebrow={reviews.eyebrow}>{reviews.heading}</Heading>
          </div>
          <ReviewsMarquee items={reviews.items} />
          <p className="mt-8 text-center text-lg">{reviews.disclaimer}</p>
          {reviews.link.url && <Button href={reviews.link.url} variant="outline">{reviews.link.label}</Button>}
        </Section>
      )}
      <CtaBanner {...home.cta} />
    </>
  )
}
