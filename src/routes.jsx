import Layout from './components/layout/Layout.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Styleguide from './pages/Styleguide.jsx'
import PracticeAreas from './pages/PracticeAreas.jsx'
import PracticeArea from './pages/PracticeArea.jsx'
import practiceAreas from './content/practice-areas.json'

// Every route here is prerendered to its own static HTML file at build time.
// Dynamic routes (practice areas, attorneys) will add getStaticPaths() built from src/content.
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'practice-areas', element: <PracticeAreas /> },
      {
        path: 'practice-areas/:slug',
        element: <PracticeArea />,
        getStaticPaths: () => practiceAreas.items.map((a) => `practice-areas/${a.slug}`),
      },
      { path: 'styleguide', element: <Styleguide /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]
