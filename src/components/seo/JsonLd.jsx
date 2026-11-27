import { Head } from 'vite-react-ssg'

/** Structured data (schema.org JSON-LD) for search engines. */
export default function JsonLd({ data }) {
  const items = (Array.isArray(data) ? data : [data]).filter(Boolean)
  return (
    <Head>
      {items.map((item, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(item)}</script>
      ))}
    </Head>
  )
}
