import { sampleImages as img } from './images'

/**
 * ============================================================
 *  PHOTO GALLERY
 * ============================================================
 *  All current photos are SAMPLE stock images (Unsplash) — they
 *  are not from Minnal Travels' trips. Replace them with real
 *  photos taken on Minnal Travels trips.
 *
 *  category must be one of the ids in galleryCategories.
 *  For a real photo:  { ...photo object..., category: 'trips' }
 *  e.g. { src: '/images/gallery/trip-01.jpg', alt: 'Family at the viewpoint', sample: false, category: 'trips' }
 * ============================================================
 */

export const galleryCategories = [
  { id: 'trips', label: 'Our Trips' },
  { id: 'destinations', label: 'Destinations' },
  { id: 'vehicle', label: 'Vehicle' },
  { id: 'moments', label: 'Travel Moments' },
]

export const galleryImages = [
  { ...img.dawnHills, category: 'destinations' },
  { ...img.backwaters, category: 'destinations' },
  { ...img.traveler, category: 'moments' },
  { ...img.heritage, category: 'destinations' },
  { ...img.road, category: 'trips' },
  { ...img.stars, category: 'moments' },
  { ...img.lakeside, category: 'destinations' },
  { ...img.camping, category: 'moments' },
  { ...img.planning, category: 'trips' },
  { ...img.houseboat, category: 'destinations' },
  { ...img.streetWalk, category: 'moments' },
  { ...img.valley, category: 'trips' },
  // Vehicle photos: add real photos of the actual vehicle here with category: 'vehicle'.
]

// Images shown in "Moments From the Journey" on the Home page
export const homeGalleryImages = galleryImages.slice(0, 8)
