import { useState } from 'react'

function Stars({ rating = 5 }) {
  return (
    <p className="flex gap-0.5 text-burgundy-700" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} aria-hidden="true" viewBox="0 0 20 20" className={`size-4 ${i < rating ? 'fill-current' : 'fill-line'}`}>
          <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </p>
  )
}

function ReviewCard({ review }) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col rounded-sm border border-line bg-white p-6 sm:w-[22rem]">
      <Stars rating={review.rating} />
      <blockquote className="mt-4 flex-1 text-ink">
        <p>“{review.text}”</p>
      </blockquote>
      <figcaption className="mt-5 text-sm">
        <span className="font-semibold text-navy-900">{review.author}</span>
        {review.source && <span className="text-muted"> · {review.source}</span>}
      </figcaption>
    </figure>
  )
}

/**
 * Review cards that drift sideways in an endless loop.
 * Accessibility (WCAG 2.2.2): pauses on hover and keyboard focus, has a visible
 * Pause/Play button, and does not move at all for prefers-reduced-motion
 * (the row becomes a normal horizontally scrollable list instead).
 * The list is rendered twice for a seamless loop; the copy is hidden from
 * screen readers so each review is announced once.
 */
export default function ReviewsMarquee({ items, secondsPerCard = 7 }) {
  const [paused, setPaused] = useState(false)
  if (!items?.length) return null
  const duration = `${items.length * secondsPerCard}s`

  return (
    <div className="reviews-marquee group/marquee relative" data-paused={paused || undefined}>
      <div className="reviews-viewport overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <div className="reviews-track flex w-max gap-6 py-2" style={{ '--marquee-duration': duration }}>
          <ul className="flex gap-6" aria-label="Client reviews">
            {items.map((r, i) => <li key={i}><ReviewCard review={r} /></li>)}
          </ul>
          <ul className="reviews-copy flex gap-6" aria-hidden="true">
            {items.map((r, i) => <li key={i}><ReviewCard review={r} /></li>)}
          </ul>
        </div>
      </div>
      <div className="reviews-controls mt-6 flex justify-end">
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          className="inline-flex min-h-10 items-center gap-2 rounded-sm border border-line bg-white px-4 text-sm font-semibold text-navy-900 hover:border-navy-900"
        >
          <svg aria-hidden="true" viewBox="0 0 20 20" className="size-4 fill-current">
            {paused ? <path d="M6 4l10 6-10 6V4z" /> : <path d="M5 4h3v12H5zM12 4h3v12h-3z" />}
          </svg>
          {paused ? 'Play reviews' : 'Pause reviews'}
        </button>
      </div>
    </div>
  )
}
