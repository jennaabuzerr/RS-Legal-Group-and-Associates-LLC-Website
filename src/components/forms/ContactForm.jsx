import { useState } from 'react'
import practiceAreas from '../../content/practice-areas.json'
import contact from '../../content/contact.json'
import FormField from './FormField.jsx'
import Button from '../ui/Button.jsx'
import validateContact from '../../lib/validateContact.js'
import { useNavigate } from 'react-router-dom'
import sendInquiry from '../../lib/sendInquiry.js'
import site from '../../content/site.json'

export default function ContactForm() {
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState('')
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))
    const found = validateContact(data)
    setErrors(found)

    const firstBad = Object.keys(found)[0]
    if (firstBad) {
      event.currentTarget.elements[firstBad].focus()
      return
    }
    
    setSending(true)
    setSendError('')
    try {
      await sendInquiry(data)
      navigate('/contact/thank-you')
    } catch (err) {
      setSendError(err.message)
      setSending(false)
    }
  }

  return (
    <form className="space-y-6" noValidate onSubmit={handleSubmit}>
      <FormField id="name" label="Full name" autoComplete="name" required error={errors.name} />

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="email" label="Email" type="email" autoComplete="email" required error={errors.email} />
        <FormField id="phone" label="Phone" type="tel" autoComplete="tel" error={errors.phone} />
      </div>

      <FormField id="practiceArea" label="What can we help with?" as="select" defaultValue="">
        <option value="" disabled>Choose one</option>
        {practiceAreas.items.map((area) => (
          <option key={area.slug} value={area.title}>{area.title}</option>
        ))}
        <option value="Other">Something else</option>
      </FormField>

      <FormField
        id="message"
        label="Briefly, how can we help?"
        as="textarea"
        rows={5}
        hint="A few sentences is plenty. Please don't include confidential details."
        required
        error={errors.message}
      />

      <div>
        {/* Honeypot: hidden from people, but spam bots fill it in and Web3Forms rejects those. */}
        <input 
            type="checkbox" 
            name="botcheck" 
            className="hidden" 
            tabIndex={-1} 
            autoComplete="off" 
            aria-hidden="true" />  
        <label className="flex gap-3 text-sm text-ink">
          <input
            type="checkbox"
            name="acknowledge"
            required
            aria-invalid={errors.acknowledge ? true : undefined}
            aria-describedby={errors.acknowledge ? 'acknowledge-error' : undefined}
            className="mt-1 size-4 shrink-0 accent-burgundy-700"
          />
          <span>{contact.notice}</span>
        </label>
        {errors.acknowledge && <p id="acknowledge-error" className="mt-2 text-sm font-medium text-burgundy-700">{errors.acknowledge}</p>}
      </div>

        {sendError && (
        <p role="alert" className="rounded-sm border border-burgundy-700 bg-white p-4 text-sm text-burgundy-800">
          {sendError} Please try again, or call us at {site.phone}.
        </p>
        )}

      <Button type="submit" size="lg" disabled={sending}>
        {sending ? 'Sending…' : 'Send message'}
      </Button>
    </form>
  )
}