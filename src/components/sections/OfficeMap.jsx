import { useState } from 'react'
import site from '../../content/site.json'
import { isReal } from '../../lib/schema.js'

/** One-line office address, or '' while any part is still a [placeholder]. */
export function officeAddress() {
  const a = site.address
  const parts = [a.street, a.city, a.state, a.zip]
  if (!parts.every(isReal)) return ''
  return `${a.street}${isReal(a.suite) ? ` ${a.suite}` : ''}, ${a.city}, ${a.state} ${a.zip}`
}

/** Google Maps link that opens directions to the office in a new tab. */
export function directionsUrl() {
  const address = officeAddress()
  return address ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}` : ''
}

/**
 * Map of the office. Google Maps only loads after the visitor clicks "Show map",
 * which keeps the page fast and avoids sending visitor data to Google until they ask.
 * Until the address in site.json is filled in, a labeled placeholder shows instead.
 */
export default function OfficeMap() {
  const [show, setShow] = useState(false)
  const address = officeAddress()
  const frame = 'aspect-[4/3] w-full overflow-hidden rounded-sm border border-line bg-navy-50'

  if (!address) {
    return (
      <div className={`${frame} grid place-items-center p-6 text-center text-sm text-muted`}>
        [Map appears here once the office address is filled in site.json]
      </div>
    )
  }

  if (show) {
    return (
      <div className={frame}>
        <iframe
          title={`Map showing ${site.firmName} at ${address}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
          className="size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={`${frame} grid place-items-center bg-[radial-gradient(circle_at_center,var(--color-navy-100),var(--color-navy-50))] p-6 text-center`}>
      <div>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="mx-auto size-10 text-burgundy-700" fill="currentColor">
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
        </svg>
        <p className="mt-3 text-sm text-muted">{address}</p>
        <button
          type="button"
          onClick={() => setShow(true)}
          className="mt-4 inline-flex min-h-10 items-center rounded-sm border border-navy-900 px-4 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
        >
          Show map
        </button>
        <p className="mt-2 text-xs text-muted">Loads Google Maps</p>
      </div>
    </div>
  )
}
