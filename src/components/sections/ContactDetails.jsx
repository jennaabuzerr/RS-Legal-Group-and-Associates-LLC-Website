import site from '../../content/site.json'
import PhoneLink from '../ui/PhoneLink.jsx'
import OfficeMap, { directionsUrl } from './OfficeMap.jsx'

const label = 'font-sans text-sm font-semibold tracking-[0.12em] text-navy-300 uppercase'

/** Contact page sidebar: phone, email, address, hours and map, all from site.json. */
export default function ContactDetails() {
  const a = site.address
  const directions = directionsUrl()
  return (
    <aside aria-labelledby="details-heading" className="space-y-8">
      <div className="on-dark rounded-sm bg-navy-900 p-7 text-navy-100 sm:p-8">
        <h2 id="details-heading" className="text-h3 text-white">Reach us directly</h2>

        <dl className="mt-6 space-y-6">
          <div>
            <dt className={label}>Phone</dt>
            <dd className="mt-1">
              <PhoneLink phone={site.phone} className="text-xl font-semibold text-white no-underline hover:underline" />
            </dd>
          </div>

          <div>
            <dt className={label}>Email</dt>
            <dd className="mt-1">
              <a href={`mailto:${site.email}`} className="break-words text-white no-underline hover:text-white hover:underline">{site.email}</a>
            </dd>
          </div>

          <div>
            <dt className={label}>Office</dt>
            <dd className="mt-1">
              <address className="not-italic leading-7">
                {a.street}{a.suite ? `, ${a.suite}` : ''}<br />
                {a.city}, {a.state} {a.zip}
              </address>
              {directions && (
                <a href={directions} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-white hover:text-white">
                  Get directions<span className="sr-only"> (opens Google Maps in a new tab)</span>
                </a>
              )}
            </dd>
          </div>

          <div>
            <dt className={label}>Office hours</dt>
            <dd className="mt-2">
              <ul className="space-y-1">
                {site.hours.map((h) => (
                  <li key={h.days} className="flex flex-wrap justify-between gap-x-4">
                    <span>{h.days}</span>
                    <span className="text-white">{h.open ? `${h.open} – ${h.close}` : h.note}</span>
                  </li>
                ))}
              </ul>
              {site.hoursNote && <p className="mt-3 text-sm text-navy-300">{site.hoursNote}</p>}
            </dd>
          </div>
        </dl>
      </div>

      <OfficeMap />
    </aside>
  )
}
