import Container from '../ui/Container.jsx'
import Breadcrumbs from '../ui/Breadcrumbs.jsx'

/** Title band at the top of every inner page. */
export default function PageHeader({ eyebrow, title, intro, breadcrumbs }) {
  return (
    <header className="border-b border-line bg-ivory">
      <Container className="py-10 sm:py-14 lg:py-16">
        {breadcrumbs && <div className="mb-8"><Breadcrumbs items={breadcrumbs} /></div>}
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="max-w-3xl text-h1">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lead text-muted">{intro}</p>}
      </Container>
    </header>
  )
}
