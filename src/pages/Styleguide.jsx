import Seo from '../components/seo/Seo.jsx'
import Section from '../components/ui/Section.jsx'
import Heading from '../components/ui/Heading.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import Prose from '../components/ui/Prose.jsx'
import Placeholder from '../components/ui/Placeholder.jsx'
import ReviewsMarquee from '../components/sections/ReviewsMarquee.jsx'

const demoReviews = Array.from({ length: 5 }, (_, i) => ({
  text: `[Placeholder review ${i + 1}. Real reviews go in src/content/reviews.json.]`,
  author: '[Reviewer]',
  rating: 5,
  source: 'Google',
}))

// Internal reference page for reviewing the design system. Not linked, not indexed,
// excluded from sitemap.xml. Remove the route before launch if preferred.

const swatches = [
  ['navy-950', 'bg-navy-950', 'text-white'],
  ['navy-900', 'bg-navy-900', 'text-white'],
  ['navy-800', 'bg-navy-800', 'text-white'],
  ['navy-700', 'bg-navy-700', 'text-white'],
  ['navy-100', 'bg-navy-100', 'text-navy-900'],
  ['navy-50', 'bg-navy-50', 'text-navy-900'],
  ['burgundy-800', 'bg-burgundy-800', 'text-white'],
  ['burgundy-700 (accent)', 'bg-burgundy-700', 'text-white'],
  ['navy-300', 'bg-navy-300', 'text-navy-900'],
  ['ivory (page)', 'bg-ivory border border-line', 'text-ink'],
  ['ink (text)', 'bg-ink', 'text-white'],
  ['muted (text)', 'bg-muted', 'text-white'],
]

export default function Styleguide() {
  return (
    <>
      <Seo title="Design system" noindex />

      <Section>
        <Heading level={1} size="display" eyebrow="Design system">Navy, ivory and burgundy</Heading>
        <p className="mt-6 max-w-prose text-lead text-muted">
          Serif headings in Source Serif 4, body in Inter. Every text and background pair below meets
          WCAG AA contrast. Press Tab to see the focus ring.
        </p>
      </Section>

      <Section tone="white" labelledBy="colors">
        <Heading id="colors">Colors</Heading>
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {swatches.map(([name, bg, fg]) => (
            <li key={name} className={`flex h-28 items-end rounded-sm p-4 text-sm font-medium ${bg} ${fg}`}>{name}</li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="type">
        <Heading id="type">Typography</Heading>
        <div className="mt-8 space-y-6">
          <p className="font-serif text-display font-semibold text-navy-900">Display heading</p>
          <p className="font-serif text-h1 font-semibold text-navy-900">Heading one</p>
          <p className="font-serif text-h2 font-semibold text-navy-900">Heading two</p>
          <p className="font-serif text-h3 font-semibold text-navy-900">Heading three</p>
          <p className="max-w-prose text-lead text-muted">
            Lead paragraph. <Placeholder>[One or two sentences introducing the firm and who it helps.]</Placeholder>
          </p>
          <Prose>
            <p>
              Body text. <Placeholder>[Practice area description]</Placeholder> Long-form content uses a
              comfortable line length and generous spacing so bios and practice pages are easy to read on any
              screen. <a href="#type">Inline links</a> use the burgundy accent.
            </p>
          </Prose>
        </div>
      </Section>

      <Section tone="white" labelledBy="buttons">
        <Heading id="buttons">Buttons</Heading>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button to="/contact">Free consultation</Button>
          <Button variant="secondary" to="tel:+10000000000">Call [phone]</Button>
          <Button variant="outline" to="/practice-areas">Practice areas</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Section>

      <Section tone="dark" labelledBy="dark">
        <Heading id="dark" eyebrow="On navy">Dark band</Heading>
        <p className="mt-4 max-w-prose text-navy-100">Used for the closing call to action and the footer.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="light" to="/contact">Free consultation</Button>
          <Button variant="outline-light" to="tel:+10000000000">Call [phone]</Button>
        </div>
      </Section>

      <Section labelledBy="marquee">
        <Heading id="marquee">Reviews marquee</Heading>
        <p className="mt-3 mb-8 max-w-prose text-muted">Drifts on its own, pauses on hover or focus, and has a pause button. Still for reduced motion.</p>
        <ReviewsMarquee items={demoReviews} />
      </Section>

      <Section tone="tint" labelledBy="cards">
        <Heading id="cards">Cards</Heading>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <Card key={n}>
              <Heading level={3}>[Practice area {n}]</Heading>
              <p className="mt-3 text-muted">[Short practice area summary]</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
