import { MessageCircle, Route, ShieldCheck, Sofa, Sparkles, Users } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Reveal from '../ui/Reveal'
import { whyChooseUs } from '../../data/content'

const icons = { MessageCircle, Route, ShieldCheck, Sofa, Sparkles, Users }

export default function WhyChooseUs({ title = 'Why Travel With Minnal Travels?' }) {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Why Choose Us"
          title={title}
          subtitle="Simple, friendly and comfortable — the way travel should feel."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = icons[item.icon] ?? Sparkles
            return (
              <Reveal
                key={item.title}
                delay={(i % 3) * 80}
                className="card group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-(--shadow-card-hover) sm:p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-50 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-navy-950">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
