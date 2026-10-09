import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Img from './Img'

/** Banner used at the top of inner pages, with breadcrumb. */
export default function PageHeader({ title, subtitle, image, breadcrumbs = [], children }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pt-28 pb-16 text-white sm:pt-36 sm:pb-20">
      {image && (
        <Img
          image={image}
          priority
          className="absolute inset-0 -z-20"
          sizes="100vw"
          badgePosition="bottom-right"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950/85" />
      <div className="container-x">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-white/70">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            {breadcrumbs.map((b) => (
              <li key={b.label} className="flex items-center gap-1">
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                {b.to ? (
                  <Link to={b.to} className="hover:text-white">{b.label}</Link>
                ) : (
                  <span aria-current="page" className="text-white">{b.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
