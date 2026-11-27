import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center gap-2 rounded-sm font-sans font-semibold no-underline ' +
  'transition-colors duration-150 disabled:cursor-not-allowed disabled:border-line disabled:bg-line disabled:text-muted'

const variants = {
  primary: 'bg-burgundy-700 text-white hover:bg-burgundy-800 hover:text-white',
  secondary: 'bg-navy-900 text-white hover:bg-navy-800 hover:text-white',
  outline: 'border border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
  // For use on navy backgrounds
  light: 'bg-white text-navy-900 hover:bg-navy-100 hover:text-navy-900',
  'outline-light': 'border border-white/70 text-white hover:bg-white hover:text-navy-900',
}

const sizes = {
  sm: 'min-h-10 px-4 text-sm',
  md: 'min-h-12 px-6 text-base',
  lg: 'min-h-14 px-8 text-lg',
}

/**
 * Renders a router <Link> for internal paths, <a> for external/tel:/mailto:,
 * or <button> when no `to` is given. Minimum 40px tall for touch targets.
 */
export default function Button({ to, variant = 'primary', size = 'md', className = '', children, ...props }) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`
  if (!to) return <button type="button" className={cls} {...props}>{children}</button>
  if (/^(https?:|tel:|mailto:)/.test(to)) return <a href={to} className={cls} {...props}>{children}</a>
  return <Link to={to} className={cls} {...props}>{children}</Link>
}
