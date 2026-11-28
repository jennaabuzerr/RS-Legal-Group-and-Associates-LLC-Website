import practiceAreas from '../../content/practice-areas.json'
import contact from '../../content/contact.json'
import FormField from './FormField.jsx'
import Button from '../ui/Button.jsx'

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <FormField id="name" label="Full name" autoComplete="name" required />

      <div className="grid gap-6 sm:grid-cols-2">
        <FormField id="email" label="Email" type="email" autoComplete="email" required />
        <FormField id="phone" label="Phone" type="tel" autoComplete="tel" />
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
      />

      <label className="flex gap-3 text-sm text-ink">
        <input type="checkbox" name="acknowledge" required className="mt-1 size-4 shrink-0 accent-burgundy-700" />
        <span>{contact.notice}</span>
      </label>

      <Button type="submit" size="lg">Send message</Button>
    </form>
  )
}