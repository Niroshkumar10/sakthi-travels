import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Img from '../ui/Img'
import Ph from '../ui/Ph'

/** Image-led destination card. Links to the Tours page filtered by this destination. */
export default function DestinationCard({ destination, headingLevel: H = 'h3', className = '' }) {
  return (
    <Link
      to={`/tours?destination=${destination.slug}`}
      className={`group relative block overflow-hidden rounded-2xl shadow-(--shadow-card) ${className}`}
      aria-label={`Explore trips to ${destination.name}`}
    >
      <Img
        image={destination.image}
        className="aspect-[4/5] sm:aspect-[3/4]"
        imgClassName="transition duration-700 group-hover:scale-105"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        maxWidth={960}
        badgePosition="top-left"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
        <H className="text-xl font-bold text-white sm:text-2xl">
          <Ph>{destination.name}</Ph>
        </H>
        <p className="mt-2 line-clamp-2 text-sm text-white/85">
          <Ph>{destination.description}</Ph>
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400">
          Explore Trips
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
