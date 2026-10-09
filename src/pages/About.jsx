import { Target } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import Img from '../components/ui/Img'
import Ph from '../components/ui/Ph'
import Reveal from '../components/ui/Reveal'
import SectionTitle from '../components/ui/SectionTitle'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import CTASection from '../components/sections/CTASection'
import { about } from '../data/content'
import { sampleImages } from '../data/images'

export default function About() {
  return (
    <>
      <Seo
        title="About Minnal Travels | Tours & Trips"
        description="Learn about Minnal Travels — a travel service focused on comfortable, well-planned tours and trips and memorable travel experiences."
        image={sampleImages.valley}
      />
      <PageHeader
        title="About Minnal Travels"
        subtitle={about.intro}
        image={sampleImages.valley}
        breadcrumbs={[{ label: 'About' }]}
      />

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="mb-3 text-xs font-bold tracking-[0.18em] text-amber-600 uppercase">Our Story</p>
            <h2 className="text-3xl font-extrabold sm:text-4xl">How Minnal Travels Began</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {about.story.map((p, i) => (
                <p key={i}>
                  <Ph>{p}</Ph>
                </p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <Img image={sampleImages.road} className="aspect-[4/3] rounded-3xl shadow-(--shadow-card-hover)" sizes="(min-width: 1024px) 50vw, 100vw" />
          </Reveal>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-surface">
        <div className="container-x">
          <SectionTitle
            eyebrow="Our Approach"
            title="Simple Planning, Comfortable Travel"
            subtitle="A straightforward way of working, so every trip feels easy from the first message to the drive home."
          />
          <ol className="grid gap-5 md:grid-cols-3">
            {about.approach.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 80} className="card p-7">
                <span className="text-4xl font-extrabold text-amber-500">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <WhyChooseUs title="Why Travel With Us" />

      {/* Mission */}
      <section className="section bg-navy-900">
        <Reveal className="container-x max-w-3xl text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-amber-500 text-navy-950">
            <Target className="h-7 w-7" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-white sm:text-4xl">Our Mission</h2>
          <p className="mt-5 text-xl leading-relaxed text-white/85">
            <Ph>{about.mission}</Ph>
          </p>
        </Reveal>
      </section>

      <CTASection />
    </>
  )
}
