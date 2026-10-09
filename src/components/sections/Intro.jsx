import { ArrowRight, Compass, MessageCircle, Route } from 'lucide-react'
import Img from '../ui/Img'
import Button from '../ui/Button'
import Reveal from '../ui/Reveal'
import { sampleImages } from '../../data/images'
import { about } from '../../data/content'

const steps = [
  { icon: Compass, text: 'Choose a tour or tell us your destination' },
  { icon: MessageCircle, text: 'Enquire on WhatsApp or call us' },
  { icon: Route, text: 'Sit back and enjoy the journey' },
]

export default function Intro() {
  return (
    <section className="section bg-white">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <Img
            image={sampleImages.planning}
            className="aspect-[4/3] rounded-3xl shadow-(--shadow-card-hover)"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute -right-3 -bottom-6 hidden w-56 rounded-2xl bg-navy-900 p-5 text-white shadow-xl sm:block lg:-right-8">
            <p className="text-sm font-semibold text-amber-400">Tours &amp; Trips</p>
            <p className="mt-1 text-sm text-white/80">Comfortable journeys, planned around you.</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <p className="mb-3 text-xs font-bold tracking-[0.18em] text-amber-600 uppercase">About Minnal Travels</p>
          <h2 className="text-3xl font-extrabold sm:text-4xl">Your Journey Starts Here</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{about.intro}</p>
          <p className="mt-4 leading-relaxed text-muted">
            Whether it is a short weekend getaway or a longer trip with family and friends, we take care of the travel so
            you can focus on enjoying the places and the people you are with.
          </p>
          <ul className="mt-8 space-y-4">
            {steps.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-medium text-ink">{text}</span>
              </li>
            ))}
          </ul>
          <Button to="/about" variant="navy" className="mt-9">
            Learn More <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
