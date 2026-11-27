import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Styleguide from './pages/Styleguide.jsx'

// Every route here is prerendered to its own static HTML file at build time.
// Dynamic routes (practice areas, attorneys) will add getStaticPaths() built from src/content.
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'styleguide', element: <Styleguide /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
