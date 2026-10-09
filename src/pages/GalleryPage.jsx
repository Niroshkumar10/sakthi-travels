import { useState } from 'react'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import PlaceholderNote from '../components/ui/PlaceholderNote'
import Gallery from '../components/sections/Gallery'
import CTASection from '../components/sections/CTASection'
import { galleryCategories, galleryImages } from '../data/gallery'
import { sampleImages } from '../data/images'

export default function GalleryPage() {
  const [category, setCategory] = useState('all')
  const tabs = [{ id: 'all', label: 'All' }, ...galleryCategories]
  const images = category === 'all' ? galleryImages : galleryImages.filter((img) => img.category === category)

  return (
    <>
      <Seo
        title="Gallery | Minnal Travels"
        description="Photos from Minnal Travels tours and trips — destinations, travel moments and our vehicle."
        image={sampleImages.stars}
      />
      <PageHeader
        title="Gallery"
        subtitle="Views, places and moments from the road."
        image={sampleImages.stars}
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="section bg-surface">
        <div className="container-x">
          {galleryImages.some((img) => img.sample) && (
            <PlaceholderNote className="mb-8">
              Photos marked "Sample photo" are stock images (Unsplash) used as placeholders. They are not photos of
              Minnal Travels trips, customers or vehicle.
            </PlaceholderNote>
          )}

          <div role="group" aria-label="Filter photos by category" className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setCategory(t.id)}
                aria-pressed={category === t.id}
                className={`min-h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition ${
                  category === t.id ? 'bg-navy-900 text-white' : 'bg-white text-navy-900 ring-1 ring-navy-900/10 hover:bg-navy-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {images.length ? (
            <Gallery key={category} images={images} />
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-navy-200 bg-white p-12 text-center">
              <p className="font-semibold text-navy-900">Photos coming soon</p>
              <p className="mt-1 text-sm text-muted">Photos for this category will be added shortly.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
