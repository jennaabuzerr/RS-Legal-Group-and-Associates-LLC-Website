export default function Card({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`rounded-sm border border-line bg-white p-6 sm:p-8 ${className}`}>
      {children}
    </Tag>
  )
}
