import SectionTitle from '../ui/SectionTitle'
import TestimonialCard from '../cards/TestimonialCard'
import Reveal from '../ui/Reveal'
import PlaceholderNote from '../ui/PlaceholderNote'
import Button from '../ui/Button'
import { GoogleIcon } from '../ui/BrandIcons'
import { testimonials } from '../../data/testimonials'
import { business } from '../../config/business'
import { googleProfileConfigured } from '../../utils/contact'

export default function Testimonials() {
  const allPlaceholders = testimonials.every((t) => t.placeholder)

  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionTitle
          eyebrow="Testimonials"
          title="What Our Travelers Say"
          subtitle="Experiences shared by people who have travelled with us."
        />
        {allPlaceholders && (
          <PlaceholderNote className="mx-auto mb-8 max-w-2xl">
            Customer reviews will be added here once provided. No reviews are shown until they are genuine.
          </PlaceholderNote>
        )}
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <TestimonialCard testimonial={t} />
            </Reveal>
          ))}
        </div>
        {googleProfileConfigured() && (
          <div className="mt-10 text-center">
            <Button href={business.googleBusinessProfileUrl} variant="outline" external>
              <GoogleIcon className="h-5 w-5" /> Read our Google Reviews
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
