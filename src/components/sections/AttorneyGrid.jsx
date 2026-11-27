import AttorneyCard from './AttorneyCard.jsx'

export default function AttorneyGrid({ items, headingLevel }) {
  return (
    <div className={`grid gap-10 sm:grid-cols-2 ${items.length > 2 ? 'lg:grid-cols-3' : 'lg:max-w-4xl'}`}>
      {items.map((a) => <AttorneyCard key={a.slug} attorney={a} headingLevel={headingLevel} />)}
    </div>
  )
}
