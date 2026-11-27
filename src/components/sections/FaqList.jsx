/** Accessible accordion using native <details>: works with keyboard and without JavaScript. */
export default function FaqList({ items, headingLevel = 3 }) {
  const H = `h${headingLevel}`
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((faq, i) => (
        <details key={i} className="group py-1">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <H className="font-serif text-xl font-semibold text-navy-900">{faq.question}</H>
            <span aria-hidden="true" className="mt-1 shrink-0 text-2xl leading-none text-burgundy-700 transition-transform group-open:rotate-45">+</span>
          </summary>
          <div className="max-w-prose pb-6 text-lg text-ink"><p>{faq.answer}</p></div>
        </details>
      ))}
    </div>
  )
}
