import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import ContactSection from '../components/sections/ContactSection'
import FAQ from '../components/sections/FAQ'
import Reveal from '../components/ui/Reveal'
import { generalFaqs } from '../data/content'
import { sampleImages } from '../data/images'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Minnal Travels | Plan Your Trip"
        description="Contact Minnal Travels to plan your tour or trip. Enquire on WhatsApp, call us, or send an enquiry form."
        image={sampleImages.lakeside}
      />
      <PageHeader
        title="Plan Your Trip"
        subtitle="Tell us where you want to go, when, and how many are travelling — we'll take it from there."
        image={sampleImages.lakeside}
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <ContactSection />
      <section className="section bg-white">
        <Reveal className="container-x max-w-3xl">
          <FAQ items={generalFaqs} />
        </Reveal>
      </section>
    </>
  )
}
