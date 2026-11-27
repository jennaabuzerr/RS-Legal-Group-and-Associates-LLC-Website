export default function Container({ as: Tag = 'div', narrow = false, className = '', children }) {
  return (
    <Tag className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${narrow ? 'max-w-prose' : 'max-w-content'} ${className}`}>
      {children}
    </Tag>
  )
}
