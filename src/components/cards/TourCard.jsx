import { Link } from 'react-router-dom'
import { Clock, MapPin, ArrowRight } from 'lucide-react'
import Img from '../ui/Img'
import Ph from '../ui/Ph'
import { WhatsAppIcon } from '../ui/BrandIcons'
import { tourEnquiryMessage, whatsappUrl } from '../../utils/contact'

export default function TourCard({ tour, headingLevel: H = 'h3' }) {
  const href = `/tours/${tour.slug}`
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-(--shadow-card-hover)">
      <Link to={href} className="block" tabIndex={-1} aria-hidden="true">
        <Img
          image={tour.image}
          className="aspect-[4/3]"
          imgClassName="transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          maxWidth={960}
        />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-amber-600" aria-hidden="true" />
            <Ph>{tour.destination}</Ph>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-amber-600" aria-hidden="true" />
            <Ph>{tour.duration}</Ph>
          </span>
        </div>
        <H className="text-lg font-bold sm:text-xl">
          <Link to={href} className="hover:text-navy-600">
            <Ph>{tour.title}</Ph>
          </Link>
        </H>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted">
          <Ph>{tour.description}</Ph>
        </p>
        <div className="mt-auto pt-5">
          <p className="text-xs font-medium tracking-wide text-muted uppercase">Starting from</p>
          <p className="text-lg font-bold text-navy-900">
            <Ph>{tour.price}</Ph>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link
              to={href}
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border border-navy-900/15 px-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-50"
            >
              View Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href={whatsappUrl(tourEnquiryMessage(tour.title))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full bg-whatsapp px-3 text-sm font-semibold text-white transition hover:bg-whatsapp-dark"
              aria-label={`Enquire on WhatsApp about ${tour.title}`}
            >
              <WhatsAppIcon className="h-4 w-4" /> Enquire Now
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
