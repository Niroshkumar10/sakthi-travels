import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

// Home loads immediately; other pages are code-split and loaded on demand.
const About = lazy(() => import('./pages/About'))
const Tours = lazy(() => import('./pages/Tours'))
const TourDetail = lazy(() => import('./pages/TourDetail'))
const Destinations = lazy(() => import('./pages/Destinations'))
const Vehicle = lazy(() => import('./pages/Vehicle'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const Contact = lazy(() => import('./pages/Contact'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/tours', element: <Tours /> },
      { path: '/tours/:slug', element: <TourDetail /> },
      { path: '/destinations', element: <Destinations /> },
      { path: '/vehicle', element: <Vehicle /> },
      { path: '/gallery', element: <GalleryPage /> },
      { path: '/contact', element: <Contact /> },
      { path: '/privacy-policy', element: <Legal type="privacy" /> },
      { path: '/terms', element: <Legal type="terms" /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
