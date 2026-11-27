/**
 * Wraps unfilled content. In development it shows a dashed outline so missing
 * copy is obvious before launch; in production builds it renders plain text.
 * Text in [square brackets] anywhere on the site means "fill me in".
 */
export default function Placeholder({ children, block = false }) {
  const Tag = block ? 'div' : 'span'
  if (!import.meta.env.DEV) return <Tag>{children}</Tag>
  return (
    <Tag className="rounded-sm outline-2 outline-offset-2 outline-burgundy-600/50 outline-dashed" title="Placeholder content">
      {children}
    </Tag>
  )
}
