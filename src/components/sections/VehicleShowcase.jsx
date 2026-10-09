import { ArrowRight } from 'lucide-react'
import Reveal from '../ui/Reveal'
import Ph from '../ui/Ph'
import Button from '../ui/Button'
import WhatsAppButton from '../ui/WhatsAppButton'
import VehicleCard, { VehiclePhoto } from '../cards/VehicleCard'
import { vehicle } from '../../data/vehicle'
import { business } from '../../config/business'

/** Home-page feature for the single travel vehicle. */
export default function VehicleShowcase() {
  return (
    <section className="section overflow-hidden bg-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-last lg:order-first">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-amber-100/60 sm:-inset-6" aria-hidden="true" />
          <VehiclePhoto vehicle={vehicle} />
        </Reveal>

        <Reveal delay={100}>
          <p className="mb-3 text-xs font-bold tracking-[0.18em] text-amber-600 uppercase">Our Travel Vehicle</p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Travel Comfortably</h2>
          <p className="mt-4 text-lg font-semibold text-navy-700">
            <Ph>{vehicle.model}</Ph>
          </p>
          <p className="mt-3 leading-relaxed text-muted">
            <Ph>{vehicle.description}</Ph>
          </p>
          <div className="mt-7">
            <VehicleCard vehicle={vehicle} />
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton message={business.whatsappMessages.vehicle}>Enquire About Your Trip</WhatsAppButton>
            <Button to="/vehicle" variant="outline">
              Vehicle Details <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
