import { Link } from 'react-router-dom'
import { Zap } from 'lucide-react'
import { business } from '../../config/business'

/**
 * Text logo ("Minnal" means lightning — hence the bolt).
 * To use an image logo instead, place it in /public (e.g. /logo.svg) and swap the markup below.
 */
export default function Logo({ light = false, className = '' }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-2.5 ${className}`} aria-label={`${business.name} — Home`}>
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-500 text-navy-950 shadow-sm transition group-hover:rotate-[-6deg]">
        <Zap className="h-5 w-5 fill-current" aria-hidden="true" />
      </span>
      <span className="leading-none whitespace-nowrap">
        <span className={`block text-lg font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}>
          Minnal Travels
        </span>
        <span className={`block text-[11px] font-semibold tracking-[0.2em] uppercase ${light ? 'text-white/70' : 'text-muted'}`}>
          {business.tagline}
        </span>
      </span>
    </Link>
  )
}
