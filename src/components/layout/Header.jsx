import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import site from '../../content/site.json'
import nav from '../../content/navigation.json'
import Button from '../ui/Button.jsx'
import PhoneLink from '../ui/PhoneLink.jsx'
import PhoneIcon from './PhoneIcon.jsx'

const navLinkClass = ({ isActive }) =>
  `relative py-2 text-[0.95rem] font-medium no-underline transition-colors ${
    isActive ? 'text-burgundy-700' : 'text-navy-900 hover:text-burgundy-700'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)
  const panel = useRef(null)
  const { pathname } = useLocation()

  // Close the mobile menu on navigation (state adjusted during render, no effect needed).
  const [lastPath, setLastPath] = useState(pathname)
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpen(false)
  }

  // Escape closes the menu and returns focus to the toggle; Tab stays inside the open menu.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        menuButton.current?.focus()
      }
      if (e.key === 'Tab' && panel.current) {
        const items = [menuButton.current, ...panel.current.querySelectorAll('a, button')]
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ivory">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link to="/" className="font-serif text-lg leading-tight font-semibold text-navy-900 no-underline hover:text-navy-900 sm:text-xl">
          {site.firmName}
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {nav.main.map((item) => (
              <li key={item.to}><NavLink to={item.to} className={navLinkClass}>{item.label}</NavLink></li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <PhoneLink
            phone={site.phone}
            className="inline-flex min-h-10 items-center gap-2 font-semibold text-navy-900 no-underline hover:text-burgundy-700"
          >
            <PhoneIcon />
            <span className="sr-only sm:not-sr-only">{site.phone}</span>
            <span className="sm:hidden">Call</span>
          </PhoneLink>
          <span className="hidden sm:block">
            <Button to="/contact" size="sm">{site.consultationLabel}</Button>
          </span>
          <button
            ref={menuButton}
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-sm text-navy-900 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.75">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={panel}
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto border-t border-line bg-ivory lg:hidden"
      >
        <nav aria-label="Mobile" className="px-4 py-6 sm:px-6">
          <ul className="divide-y divide-line">
            {nav.main.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={({ isActive }) => `block py-4 font-serif text-xl no-underline ${isActive ? 'text-burgundy-700' : 'text-navy-900'}`}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Button to="/contact" size="lg">{site.consultationLabel}</Button>
            <PhoneLink phone={site.phone} className="inline-flex min-h-14 items-center justify-center gap-2 rounded-sm border border-navy-900 text-lg font-semibold text-navy-900 no-underline">
              <PhoneIcon className="size-5" /> {site.phone}
            </PhoneLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
