import { ArrowRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import DestinationCard from '../cards/DestinationCard'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import PlaceholderNote from '../ui/PlaceholderNote'
import { destinations } from '../../data/destinations'
import { isPlaceholder } from '../../utils/contact'

export default function DestinationsSection({ limit = 6 }) {
  const list = destinations.slice(0, limit)
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <SectionTitle
          eyebrow="Destinations"
          title="Explore Destinations"
          subtitle="Find a place you'd love to visit, then explore the trips available there."
        />
        {list.some((d) => isPlaceholder(d.name)) && (
          <PlaceholderNote className="mx-auto mb-8 max-w-2xl">
            Destination names and photos are placeholders until Minnal Travels confirms the destinations it serves.
          </PlaceholderNote>
        )}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 80}>
              <DestinationCard destination={d} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/destinations" variant="outline">
            All Destinations <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
