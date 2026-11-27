import { Link } from 'react-router-dom'
import site from '../../content/site.json'
import nav from '../../content/navigation.json'
import PhoneLink from '../ui/PhoneLink.jsx'

export default function Footer() {
  const a = site.address
  const year = new Date().getFullYear()
  return (
    <footer className="on-dark bg-navy-950 text-navy-100">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-serif text-xl font-semibold text-white">{site.firmName}</p>
          <p className="mt-3 max-w-sm text-navy-300">{site.tagline}</p>
          <address className="mt-6 not-italic leading-7">
            {a.street}{a.suite ? `, ${a.suite}` : ''}<br />
            {a.city}, {a.state} {a.zip}
          </address>
          <p className="mt-4 space-y-1">
            <PhoneLink phone={site.phone} className="block font-semibold text-white no-underline hover:underline" />
            <a href={`mailto:${site.email}`} className="block text-white no-underline hover:underline">{site.email}</a>
          </p>
        </div>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-[0.12em] text-white uppercase">Office hours</h2>
          <dl className="mt-4 space-y-2 text-sm">
            {site.hours.map((h) => (
              <div key={h.days}>
                <dt className="text-navy-300">{h.days}</dt>
                <dd>{h.open ? `${h.open} – ${h.close}` : h.note}</dd>
              </div>
            ))}
          </dl>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-sans text-sm font-semibold tracking-[0.12em] text-white uppercase">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.main.map((item) => (
              <li key={item.to}><Link to={item.to} className="text-navy-100 no-underline hover:text-white hover:underline">{item.label}</Link></li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-content px-4 py-8 text-sm leading-6 text-navy-300 sm:px-6 lg:px-8">
          <p className="max-w-4xl">{site.footerDisclaimer}</p>
          <p className="mt-3 max-w-4xl">
            The information on this website is for general information only and is not legal advice. Contacting
            the firm through this website does not create an attorney-client relationship.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>© {year} {site.copyrightHolder}. All rights reserved.</p>
            <ul className="flex gap-6">
              {nav.legal.map((item) => (
                <li key={item.to}><Link to={item.to} className="text-navy-100 no-underline hover:text-white hover:underline">{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
