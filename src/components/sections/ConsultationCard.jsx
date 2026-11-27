import site from '../../content/site.json'
import Button from '../ui/Button.jsx'
import PhoneLink from '../ui/PhoneLink.jsx'

/** Sidebar call-to-action used on practice area and attorney pages. */
export default function ConsultationCard({ heading = 'Talk with an attorney' }) {
  return (
    <aside aria-labelledby="consult-heading" className="on-dark rounded-sm bg-navy-900 p-7 text-navy-100">
      <h2 id="consult-heading" className="text-h3 text-white">{heading}</h2>
      <p className="mt-3">Schedule a {site.consultationLabel.toLowerCase()} to discuss your situation.</p>
      <div className="mt-6 grid gap-3">
        <Button to="/contact" variant="light">{site.consultationLabel}</Button>
        <PhoneLink phone={site.phone} className="text-center font-semibold text-white no-underline hover:underline" />
      </div>
    </aside>
  )
}
