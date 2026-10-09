import { Check } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import Ph from '../components/ui/Ph'
import Reveal from '../components/ui/Reveal'
import WhatsAppButton from '../components/ui/WhatsAppButton'
import CallButton from '../components/ui/CallButton'
import Gallery from '../components/sections/Gallery'
import CTASection from '../components/sections/CTASection'
import VehicleCard, { VehiclePhoto } from '../components/cards/VehicleCard'
import { vehicle } from '../data/vehicle'
import { business } from '../config/business'
import { sampleImages } from '../data/images'

export default function Vehicle() {
  return (
    <>
      <Seo
        title="Our Travel Vehicle | Minnal Travels"
        description="See the vehicle Minnal Travels uses for its tours and trips — seating, air conditioning, luggage space and more."
        image={vehicle.image ?? sampleImages.road}
      />
      <PageHeader
        title="Our Travel Vehicle"
        subtitle="Travel in comfort on every trip. Here's everything you need to know about the vehicle you'll be travelling in."
        image={sampleImages.road}
        breadcrumbs={[{ label: 'Our Vehicle' }]}
      />

      <section className="section bg-white">
        <div className="container-x grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <VehiclePhoto vehicle={vehicle} priority className="aspect-[4/3]" />
          </Reveal>

          <Reveal delay={100}>
            <p className="text-sm font-semibold text-amber-600">
              <Ph>{vehicle.type}</Ph>
            </p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              <Ph>{vehicle.model}</Ph>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              <Ph>{vehicle.description}</Ph>
            </p>

            <h3 className="mt-8 mb-4 text-lg font-bold">Vehicle Details</h3>
            <VehicleCard vehicle={vehicle} columns="grid-cols-1 sm:grid-cols-2" />

            {vehicle.features.length > 0 && (
              <>
                <h3 className="mt-8 mb-4 text-lg font-bold">Comfort Features</h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {vehicle.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-whatsapp" aria-hidden="true" /> {f}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h3 className="mt-8 mb-4 text-lg font-bold">Suitable For</h3>
            <ul className="flex flex-wrap gap-2">
              {vehicle.suitableFor.map((s, i) => (
                <li key={i} className="rounded-full bg-navy-50 px-4 py-2 text-sm font-medium text-navy-800">
                  <Ph>{s}</Ph>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton message={business.whatsappMessages.vehicle}>Enquire About Your Trip</WhatsAppButton>
              <CallButton />
            </div>
          </Reveal>
        </div>

        {vehicle.photos.length > 0 && (
          <div className="container-x mt-16">
            <h2 className="mb-6 text-2xl font-extrabold">More Photos</h2>
            <Gallery images={vehicle.photos} columns="columns-2 md:columns-3" />
          </div>
        )}
      </section>

      <CTASection message={business.whatsappMessages.vehicle} />
    </>
  )
}
