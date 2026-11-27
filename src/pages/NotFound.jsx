import { Head } from 'vite-react-ssg'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>Page not found</h1>
      <Link to="/">Return home</Link>
    </>
  )
}
