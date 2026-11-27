import Container from './Container.jsx'

const tones = {
  light: 'bg-ivory',
  white: 'bg-white',
  tint: 'bg-navy-50',
  dark: 'on-dark bg-navy-900 text-navy-50 [&_h1]:text-white [&_h2]:text-white [&_h3]:text-white',
}

/** Page band with consistent vertical rhythm. `tone` sets the background. */
export default function Section({ tone = 'light', narrow = false, className = '', id, labelledBy, children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`py-16 sm:py-20 lg:py-24 ${tones[tone]} ${className}`}>
      <Container narrow={narrow} className="reveal">{children}</Container>
    </section>
  )
}
