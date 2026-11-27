export default function Card({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`rounded-sm border border-line bg-white p-6 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgb(18_33_59/0.25)] sm:p-8 ${className}`}>
      {children}
    </Tag>
  )
}
