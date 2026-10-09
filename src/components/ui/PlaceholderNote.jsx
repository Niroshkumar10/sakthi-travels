import { Info } from 'lucide-react'
import { siteSettings } from '../../config/business'

/** A small notice explaining that a section is awaiting real content. Hidden when notices are switched off. */
export default function PlaceholderNote({ children, className = '' }) {
  if (!siteSettings.showPlaceholderNotices) return null
  return (
    <p
      role="note"
      className={`flex items-start gap-2 rounded-xl border border-amber-300/60 bg-amber-50 px-4 py-3 text-sm text-amber-900 ${className}`}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}
