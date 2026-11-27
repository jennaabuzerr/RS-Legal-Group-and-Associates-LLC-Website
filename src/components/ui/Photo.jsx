/**
 * Responsive, lazy-loaded image. Until a real photo is supplied (src is null),
 * renders a labeled neutral block at the same size so layouts can be reviewed.
 */
export default function Photo({ src, alt, label, className = '', priority = false, width, height }) {
  if (!src) {
    return (
      <div role="img" aria-label={alt || label} className={`flex items-center justify-center bg-navy-100 p-6 text-center text-sm text-muted ${className}`}>
        <span>{label || '[Photo]'}</span>
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : undefined}
      decoding="async"
      className={`object-cover ${className}`}
    />
  )
}
