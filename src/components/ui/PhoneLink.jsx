/** Click-to-call link. `phone` is the display string; digits are extracted for tel:. */
export default function PhoneLink({ phone, className = '', children }) {
  const digits = String(phone).replace(/[^\d+]/g, '')
  if (!digits) return <span className={className}>{children ?? phone}</span>
  return (
    <a href={`tel:${digits}`} className={className}>
      {children ?? phone}
    </a>
  )
}
