import site from '../content/site.json'

const ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Sends a contact-form inquiry to the firm's inbox through Web3Forms.
 * This is the only place that knows *where* inquiries go, so switching to
 * Clio later means changing just this file.
 * Resolves on success; throws an Error with a friendly message on failure.
 */
export default async function sendInquiry(data) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
  if (!accessKey) throw new Error('The contact form is not set up yet (missing Web3Forms key).')

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New website inquiry from ${data.name}`,
      from_name: `${site.firmName} website`,
      botcheck: data.botcheck ?? '',
      name: data.name,
      email: data.email,
      phone: data.phone || 'Not given',
      practice_area: data.practiceArea || 'Not chosen',
      message: data.message,
    }),
  })

  const result = await response.json().catch(() => ({}))
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Something went wrong sending your message.')
  }
}