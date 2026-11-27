import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Adds `is-visible` to every `.reveal` element as it scrolls into view.
 * Content is fully visible without JavaScript and for reduced-motion users:
 * elements are only hidden when <html> has the `motion` class (see index.html).
 */
export default function useReveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.is-visible)')
    if (!('IntersectionObserver' in window) || !document.documentElement.classList.contains('motion')) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          io.unobserve(e.target)
        }
      }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
}
