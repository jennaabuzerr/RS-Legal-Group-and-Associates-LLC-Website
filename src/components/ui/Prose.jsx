/** Long-form text (bios, practice area bodies, legal pages). */
export default function Prose({ className = '', children }) {
  return (
    <div
      className={
        'max-w-prose text-lg leading-relaxed text-ink ' +
        '[&_p]:mb-5 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-h2 [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:text-h3 ' +
        '[&_ul]:mb-5 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_a]:underline ' +
        className
      }
    >
      {children}
    </div>
  )
}
