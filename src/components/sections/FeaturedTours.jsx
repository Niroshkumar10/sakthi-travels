import { ArrowRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import TourCard from '../cards/TourCard'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import PlaceholderNote from '../ui/PlaceholderNote'
import { featuredTours } from '../../data/tours'
import { isPlaceholder } from '../../utils/contact'

export default function FeaturedTours({ limit = 6 }) {
  const list = featuredTours.slice(0, limit)
  const anyPlaceholder = list.some((t) => isPlaceholder(t.title))

  return (
    <section className="section bg-surface" aria-labelledby="featured-tours">
      <div className="container-x">
        <SectionTitle
          eyebrow="Tour Packages"
          title={<span id="featured-tours">Popular Tours &amp; Trips</span>}
          subtitle="Handpicked journeys for families, friends and travellers. Choose a trip and enquire on WhatsApp for availability and pricing."
        />
        {anyPlaceholder && (
          <PlaceholderNote className="mx-auto mb-8 max-w-2xl">
            Tour packages, destinations and prices shown here are placeholders and will be replaced with Minnal Travels'
            actual packages.
          </PlaceholderNote>
        )}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tour, i) => (
            <Reveal key={tour.slug} delay={(i % 3) * 80}>
              <TourCard tour={tour} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/tours" variant="navy">
            View All Tours <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
