/**
 * Label + input + hint + error, wired together for screen readers.
 * Pass `as="textarea"` or `as="select"` for other field types.
 */
export default function FormField({ id, label, as: Tag = 'input', hint, error, required, children, ...props }) {
  const hintId = hint ? `${id}-hint` : undefined
  const errorId = error ? `${id}-error` : undefined
  return (
    <div>
      <label htmlFor={id} className="block font-semibold text-navy-900">
        {label} {required && <span className="text-burgundy-700">*</span>}
      </label>
      {hint && <p id={hintId} className="mt-1 text-sm text-muted">{hint}</p>}
      <Tag
        id={id}
        name={id}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={[hintId, errorId].filter(Boolean).join(' ') || undefined}
        className={`mt-2 block w-full rounded-sm border bg-white px-4 py-3 text-ink ${error ? 'border-burgundy-700' : 'border-line'}`}
        {...props}
      >
        {children}
      </Tag>
      {error && <p id={errorId} className="mt-2 text-sm font-medium text-burgundy-700">{error}</p>}
    </div>
  )
}