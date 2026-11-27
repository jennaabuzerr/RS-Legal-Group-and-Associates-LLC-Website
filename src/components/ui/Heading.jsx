const sizes = {
  display: 'text-display',
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
}

/**
 * Semantic level (`level`) and visual size (`size`) are set separately,
 * so the heading outline stays correct while the look stays consistent.
 */
export default function Heading({ level = 2, size, eyebrow, id, className = '', children }) {
  const Tag = `h${level}`
  const visual = sizes[size ?? (level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3')]
  return (
    <>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Tag id={id} className={`${visual} ${className}`}>{children}</Tag>
    </>
  )
}
