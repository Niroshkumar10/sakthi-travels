import Img from '../ui/Img'
import Reveal from '../ui/Reveal'
import WhatsAppButton from '../ui/WhatsAppButton'
import CallButton from '../ui/CallButton'
import { sampleImages } from '../../data/images'

export default function CTASection({
  title = 'Planning Your Next Trip?',
  text = "Tell us where you want to go, and let's plan your journey.",
  message,
  image = sampleImages.road,
}) {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-navy-900 px-6 py-14 text-center sm:px-12 sm:py-20">
          <Img image={image} className="absolute inset-0 -z-20" sizes="(min-width: 1280px) 1200px, 100vw" />
          <div className="absolute inset-0 -z-10 bg-navy-950/75" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">{text}</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppButton message={message} />
            <CallButton variant="ghostLight" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
