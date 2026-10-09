import { Link, useParams } from 'react-router-dom'
import { Calendar, Check, Clock, IndianRupee, Info, MapPin, X } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import Ph from '../components/ui/Ph'
import Reveal from '../components/ui/Reveal'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import CallButton from '../components/ui/CallButton'
import PlaceholderNote from '../components/ui/PlaceholderNote'
import Gallery from '../components/sections/Gallery'
import FAQ from '../components/sections/FAQ'
import CTASection from '../components/sections/CTASection'
import TourCard from '../components/cards/TourCard'
import NotFound from './NotFound'
import { getTourBySlug, tours } from '../data/tours'
import { business } from '../config/business'
import { isPlaceholder, tourEnquiryMessage } from '../utils/contact'
import { imageUrl } from '../utils/image'

function Block({ title, children, id }) {
  return (
    <Reveal as="section" aria-labelledby={id} className="card p-6 sm:p-8">
      <h2 id={id} className="text-2xl font-extrabold">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </Reveal>
  )
}

export default function TourDetail() {
  const { slug } = useParams()
  const tour = getTourBySlug(slug)
  if (!tour) return <NotFound />

  const message = tourEnquiryMessage(tour.title)
  const related = tours.filter((t) => t.slug !== tour.slug).slice(0, 3)
  const facts = [
    { icon: MapPin, label: 'Destination', value: tour.destination },
    { icon: Clock, label: 'Duration', value: tour.duration },
    { icon: IndianRupee, label: 'Starting price', value: tour.price },
  ]

  // Structured data — only emitted once the tour has real (non-placeholder) details
  const jsonLd = !isPlaceholder(tour.title)
    ? {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: tour.title,
        description: tour.description,
        image: imageUrl(tour.image),
        provider: { '@type': 'TravelAgency', name: business.name },
        itinerary: tour.placesCovered.filter((p) => !isPlaceholder(p)).map((p) => ({ '@type': 'Place', name: p })),
      }
    : undefined

  return (
    <>
      <Seo
        title={`${tour.title} | Minnal Travels`}
        description={`${tour.title} — ${tour.duration} trip to ${tour.destination} with Minnal Travels. View the itinerary and enquire on WhatsApp.`}
        image={tour.image}
        jsonLd={jsonLd}
      />
      <PageHeader
        title={<Ph>{tour.title}</Ph>}
        image={tour.image}
        breadcrumbs={[{ label: 'Tours & Trips', to: '/tours' }, { label: tour.title }]}
      >
        <ul className="mt-6 flex flex-wrap gap-3">
          {facts.map(({ icon: Icon, label, value }) => (
            <li key={label} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm ring-1 ring-white/20 backdrop-blur-sm">
              <Icon className="h-4 w-4 text-amber-400" aria-hidden="true" />
              <span className="sr-only">{label}:</span>
              <Ph>{value}</Ph>
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <WhatsAppButton message={message}>Enquire About This Trip</WhatsAppButton>
          <CallButton variant="ghostLight" />
        </div>
      </PageHeader>

      <div className="bg-surface py-12 sm:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {isPlaceholder(tour.title) && (
              <PlaceholderNote>
                This is a template tour page. All details below are placeholders to be replaced with the real package
                information in <code>src/data/tours.js</code>.
              </PlaceholderNote>
            )}

            <Block title="Overview" id="overview">
              <p className="text-lg leading-relaxed text-muted">
                <Ph>{tour.overview}</Ph>
              </p>
            </Block>

            <Block title="Places Covered" id="places">
              <ul className="flex flex-wrap gap-2">
                {tour.placesCovered.map((p, i) => (
                  <li key={i} className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-4 py-2 text-sm font-medium text-navy-800">
                    <MapPin className="h-4 w-4 text-amber-600" aria-hidden="true" />
                    <Ph>{p}</Ph>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Day-by-Day Itinerary" id="itinerary">
              <ol className="relative space-y-6 border-l-2 border-amber-200 pl-7">
                {tour.itinerary.map((d) => (
                  <li key={d.day} className="relative">
                    <span className="absolute top-0 -left-[2.4rem] grid h-8 w-8 place-items-center rounded-full bg-amber-500 text-sm font-bold text-navy-950 ring-4 ring-white">
                      {d.day}
                    </span>
                    <h3 className="text-lg font-bold">
                      Day {d.day}
                      {d.title && (
                        <>
                          : <Ph>{d.title}</Ph>
                        </>
                      )}
                    </h3>
                    <p className="mt-1 leading-relaxed text-muted">
                      <Ph>{d.details}</Ph>
                    </p>
                  </li>
                ))}
              </ol>
            </Block>

            <div className="grid gap-6 md:grid-cols-2">
              <Block title="What's Included" id="included">
                <ul className="space-y-3">
                  {tour.inclusions.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-whatsapp" aria-hidden="true" />
                      <Ph>{item}</Ph>
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="What's Not Included" id="excluded">
                <ul className="space-y-3">
                  {tour.exclusions.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <X className="mt-0.5 h-5 w-5 shrink-0 text-red-500" aria-hidden="true" />
                      <Ph>{item}</Ph>
                    </li>
                  ))}
                </ul>
              </Block>
            </div>

            <Block title="Travel Information" id="travel-info">
              <dl className="grid gap-4 sm:grid-cols-2">
                {tour.travelInfo.map((row) => (
                  <div key={row.label} className="rounded-xl bg-surface p-4">
                    <dt className="flex items-center gap-2 text-xs font-semibold tracking-wide text-muted uppercase">
                      <Info className="h-4 w-4 text-amber-600" aria-hidden="true" />
                      {row.label}
                    </dt>
                    <dd className="mt-1 font-semibold text-navy-900">
                      <Ph>{row.value}</Ph>
                    </dd>
                  </div>
                ))}
              </dl>
            </Block>

            {tour.gallery?.length > 0 && (
              <Block title="Gallery" id="tour-gallery">
                <Gallery images={tour.gallery} columns="columns-2 sm:columns-3" />
              </Block>
            )}

            <Reveal>
              <FAQ items={tour.faqs} />
            </Reveal>
          </div>

          {/* Sticky enquiry card */}
          <aside className="lg:col-span-1">
            <div className="card sticky top-28 p-6 sm:p-7">
              <p className="text-xs font-semibold tracking-wide text-muted uppercase">Starting from</p>
              <p className="mt-1 text-2xl font-extrabold text-navy-900">
                <Ph>{tour.price}</Ph>
              </p>
              <ul className="mt-5 space-y-3 border-y border-navy-900/5 py-5 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-amber-600" aria-hidden="true" /> <Ph>{tour.destination}</Ph>
                </li>
                <li className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-amber-600" aria-hidden="true" /> <Ph>{tour.duration}</Ph>
                </li>
              </ul>
              <h2 className="mt-5 text-lg font-bold">Enquire About This Trip</h2>
              <p className="mt-1 text-sm text-muted">
                Send us a WhatsApp message to check availability, pricing and dates.
              </p>
              <div className="mt-5 grid gap-3">
                <WhatsAppButton message={message}>Enquire on WhatsApp</WhatsAppButton>
                <CallButton />
              </div>
              <Link to="/contact" className="mt-4 block text-center text-sm font-semibold text-navy-700 hover:underline">
                Or send a detailed enquiry →
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section bg-white">
          <div className="container-x">
            <h2 className="mb-8 text-3xl font-extrabold">More Tours &amp; Trips</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection title="Ready to plan this trip?" text="Message us on WhatsApp and we'll share the details." message={message} />
    </>
  )
}
