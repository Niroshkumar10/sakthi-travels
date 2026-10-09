import { ArrowRight } from 'lucide-react'
import Img from '../ui/Img'
import Button from '../ui/Button'
import WhatsAppButton from '../ui/WhatsAppButton'
import CallButton from '../ui/CallButton'
import { sampleImages } from '../../data/images'

export default function Hero({ image = sampleImages.hero }) {
  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-navy-950 pt-28 pb-16 sm:items-center sm:pb-24">
      <Img image={image} priority className="absolute inset-0 -z-20" sizes="100vw" maxWidth={2000} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950/90 via-navy-950/55 to-navy-950/40" />

      <div className="container-x">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] text-amber-400 uppercase ring-1 ring-white/20 backdrop-blur-sm">
            Minnal Travels · Tours &amp; Trips
          </p>
          <h1 className="text-5xl leading-[1.05] font-extrabold text-white sm:text-6xl lg:text-7xl">
            Explore More.
            <br />
            <span className="text-amber-400">Travel Better.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Discover memorable journeys with Minnal Travels — your trusted travel partner for comfortable and enjoyable
            tours and trips.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button to="/tours" variant="primary">
              Explore Tours <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <WhatsAppButton />
            <CallButton variant="ghostLight" />
          </div>
        </div>
      </div>
    </section>
  )
}
