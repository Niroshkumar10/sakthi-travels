import { Quote, Star } from 'lucide-react'
import Ph from '../ui/Ph'

export default function TestimonialCard({ testimonial }) {
  const { name, trip, quote, rating, placeholder } = testimonial
  return (
    <figure
      className={`card flex h-full flex-col p-6 sm:p-7 ${placeholder ? 'border-2 border-dashed border-navy-200 shadow-none' : ''}`}
    >
      <Quote className="h-8 w-8 text-amber-500" aria-hidden="true" />
      {rating && !placeholder && (
        <div className="mt-3 flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-navy-200'}`} aria-hidden="true" />
          ))}
        </div>
      )}
      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
        <Ph>{quote}</Ph>
      </blockquote>
      <figcaption className="mt-6 border-t border-navy-900/5 pt-4">
        <p className="font-semibold text-navy-900">
          <Ph>{name}</Ph>
        </p>
        {trip && (
          <p className="text-sm text-muted">
            <Ph>{trip}</Ph>
          </p>
        )}
      </figcaption>
    </figure>
  )
}
