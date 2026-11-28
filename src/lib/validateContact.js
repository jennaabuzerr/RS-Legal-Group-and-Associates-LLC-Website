// Returns an object of { fieldName: 'error message' }. Empty object = valid.
export default function validateContact(data) {
  const errors = {}
  if (!data.name?.trim()) errors.name = 'Please enter your name.'
  if (!data.email?.trim()) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Please enter a valid email, like name@example.com.'
  if (data.phone && data.phone.replace(/\D/g, '').length < 10) errors.phone = 'Please enter a 10-digit phone number, or leave it blank.'
  if (!data.message?.trim()) errors.message = 'Please tell us briefly how we can help.'
  if (!data.acknowledge) errors.acknowledge = 'Please confirm you have read this notice.'
  return errors
}