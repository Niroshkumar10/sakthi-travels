import Seo from '../components/ui/Seo'
import Hero from '../components/sections/Hero'
import Intro from '../components/sections/Intro'
import FeaturedTours from '../components/sections/FeaturedTours'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import DestinationsSection from '../components/sections/DestinationsSection'
import VehicleShowcase from '../components/sections/VehicleShowcase'
import GalleryPreview from '../components/sections/GalleryPreview'
import Testimonials from '../components/sections/Testimonials'
import CTASection from '../components/sections/CTASection'

export default function Home() {
  return (
    <>
      <Seo
        title="Minnal Travels | Tours & Trips"
        description="Discover memorable journeys with Minnal Travels. Explore our tours and trips, view destinations and enquire on WhatsApp to plan your journey."
      />
      <Hero />
      <Intro />
      <FeaturedTours />
      <WhyChooseUs />
      <DestinationsSection />
      <VehicleShowcase />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}
