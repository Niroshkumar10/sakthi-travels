import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import QuickContact from './QuickContact'
import LocalBusinessSchema from '../ui/LocalBusinessSchema'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function PageFallback() {
  return <div className="min-h-screen bg-navy-900" aria-busy="true" />
}

export default function Layout() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-amber-500 px-4 py-2 font-semibold text-navy-950 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <LocalBusinessSchema />
      <Navbar />
      <main id="main">
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <QuickContact />
    </>
  )
}
