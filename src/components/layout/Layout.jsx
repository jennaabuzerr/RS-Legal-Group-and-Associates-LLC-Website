import { Outlet } from 'react-router-dom'
import SkipLink from './SkipLink.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
