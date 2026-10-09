import { ArrowRight } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Gallery from './Gallery'
import Button from '../ui/Button'
import PlaceholderNote from '../ui/PlaceholderNote'
import { homeGalleryImages } from '../../data/gallery'

export default function GalleryPreview() {
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <SectionTitle
          eyebrow="Gallery"
          title="Moments From the Journey"
          subtitle="A glimpse of the views, places and moments that make travel memorable."
        />
        {homeGalleryImages.some((img) => img.sample) && (
          <PlaceholderNote className="mx-auto mb-8 max-w-2xl">
            These are sample stock photos. They will be replaced with real photos from Minnal Travels trips.
          </PlaceholderNote>
        )}
        <Gallery images={homeGalleryImages} />
        <div className="mt-10 text-center">
          <Button to="/gallery" variant="outline">
            View Full Gallery <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
