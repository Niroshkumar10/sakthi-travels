import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import Img from '../components/ui/Img'
import Ph from '../components/ui/Ph'
import Reveal from '../components/ui/Reveal'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import PlaceholderNote from '../components/ui/PlaceholderNote'
import CTASection from '../components/sections/CTASection'
import { destinations } from '../data/destinations'
import { getToursByDestination } from '../data/tours'
import { sampleImages } from '../data/images'
import { isPlaceholder } from '../utils/contact'

export default function Destinations() {
  return (
    <>
      <Seo
        title="Minnal Travels | Travel Destinations"
        description="Discover the destinations covered by Minnal Travels tours and trips. See highlights and available tours, and enquire on WhatsApp."
        image={sampleImages.backwaters}
      />
      <PageHeader
        title="Discover Beautiful Destinations"
        subtitle="Explore the places we travel to, see what makes each one special, and find a trip that suits you."
        image={sampleImages.backwaters}
        breadcrumbs={[{ label: 'Destinations' }]}
      />

      <section className="section bg-surface">
        <div className="container-x space-y-10 sm:space-y-14">
          {destinations.some((d) => isPlaceholder(d.name)) && (
            <PlaceholderNote>
              Destinations shown are placeholders. Only destinations confirmed by Minnal Travels will be listed.
            </PlaceholderNote>
          )}

          {destinations.map((d, i) => {
            const available = getToursByDestination(d.slug)
            return (
              <Reveal
                as="article"
                key={d.slug}
                id={d.slug}
                aria-labelledby={`${d.slug}-title`}
                className="card grid scroll-mt-28 overflow-hidden lg:grid-cols-2"
              >
                <Img
                  image={d.image}
                  className={`aspect-[16/10] lg:aspect-auto lg:min-h-full ${i % 2 ? 'lg:order-last' : ''}`}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="p-6 sm:p-10">
                  <h2 id={`${d.slug}-title`} className="text-2xl font-extrabold sm:text-3xl">
                    <Ph>{d.name}</Ph>
                  </h2>
                  <p className="mt-3 leading-relaxed text-muted">
                    <Ph>{d.description}</Ph>
                  </p>

                  <h3 className="mt-6 text-sm font-bold tracking-wider text-navy-900 uppercase">Highlights</h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {d.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" aria-hidden="true" />
                        <Ph>{h}</Ph>
                      </li>
                    ))}
                  </ul>

                  <h3 className="mt-6 text-sm font-bold tracking-wider text-navy-900 uppercase">Available Tours</h3>
                  {available.length ? (
                    <ul className="mt-3 space-y-2">
                      {available.map((t) => (
                        <li key={t.slug}>
                          <Link
                            to={`/tours/${t.slug}`}
                            className="group flex items-center justify-between gap-3 rounded-xl bg-surface px-4 py-3 text-sm font-semibold text-navy-900 transition hover:bg-navy-50"
                          >
                            <span>
                              <Ph>{t.title}</Ph> · <span className="font-normal text-muted"><Ph>{t.duration}</Ph></span>
                            </span>
                            <ArrowRight className="h-4 w-4 shrink-0 transition group-hover:translate-x-1" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-muted">Contact us to ask about trips to this destination.</p>
                  )}

                  <div className="mt-7">
                    <WhatsAppButton
                      message={`Hello Minnal Travels, I would like to know about trips to ${d.name}. Please share the details.`}
                    >
                      Enquire Now
                    </WhatsAppButton>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <CTASection title="Have a destination in mind?" />
    </>
  )
}
