import { sampleImages as img } from './images'

/**
 * ============================================================
 *  TOUR PACKAGES
 * ============================================================
 *  Each object below is one tour package. All six are
 *  PLACEHOLDERS — replace them with the real packages, and
 *  delete any you don't need, or copy one to add more.
 *
 *  Field guide:
 *   slug            URL part: /tours/<slug>. Lowercase, hyphens only, unique.
 *   title           Package name shown on cards and the detail page.
 *   destination     Display name of the destination.
 *   destinationSlug Must match a `slug` in destinations.js (links the two).
 *   duration        e.g. '3 Days / 2 Nights'.
 *   price           Starting price as display text, e.g. '₹ 12,500 per person',
 *                   or 'Price on request'. Keep as placeholder until confirmed.
 *   tripTypes       Categories used by the Tours page filter, e.g. ['Family Trips', 'Weekend Trips'].
 *                   Only categories that appear here are shown in the filter.
 *   featured        true = shown in "Popular Tours & Trips" on the Home page.
 *   image           Main photo. gallery = extra photos for the detail page.
 * ============================================================
 */

const placeholderTour = (n, image, gallery) => ({
  slug: `tour-package-${n}`,
  title: `[TOUR PACKAGE NAME ${n}]`,
  destination: `[DESTINATION ${n}]`,
  destinationSlug: `destination-${n}`,
  duration: '[X Days / X Nights]',
  price: '[TOUR PRICE]',
  tripTypes: [],
  featured: true,
  image,
  gallery,
  description: '[SHORT TOUR DESCRIPTION — one or two sentences that summarise the trip.]',
  overview:
    '[TOUR OVERVIEW — describe the trip in a short paragraph: what travellers will see and do, who the trip suits, and what makes it enjoyable.]',
  placesCovered: ['[PLACE 1]', '[PLACE 2]', '[PLACE 3]', '[PLACE 4]'],
  itinerary: [
    { day: 1, title: '[DAY 1 TITLE]', details: '[ITINERARY DETAILS]' },
    { day: 2, title: '[DAY 2 TITLE]', details: '[ITINERARY DETAILS]' },
    { day: 3, title: '[DAY 3 TITLE]', details: '[ITINERARY DETAILS]' },
  ],
  inclusions: ['[INCLUDED ITEM — e.g. transport in our vehicle]', '[INCLUDED ITEM]', '[INCLUDED ITEM]'],
  exclusions: ['[NOT INCLUDED ITEM — e.g. entry tickets]', '[NOT INCLUDED ITEM]', '[NOT INCLUDED ITEM]'],
  travelInfo: [
    { label: 'Pickup point', value: '[PICKUP LOCATION]' },
    { label: 'Best time to travel', value: '[BEST SEASON]' },
    { label: 'Group size', value: '[GROUP SIZE]' },
    { label: 'Things to carry', value: '[THINGS TO CARRY]' },
  ],
  faqs: [
    { question: '[TOUR-SPECIFIC QUESTION]', answer: '[ANSWER]' },
    { question: '[TOUR-SPECIFIC QUESTION]', answer: '[ANSWER]' },
  ],
})

export const tours = [
  placeholderTour(1, img.mistyHills, [img.mistyHills, img.forest, img.dawnHills]),
  placeholderTour(2, img.backwaters, [img.backwaters, img.houseboat, img.lakeside]),
  placeholderTour(3, img.heritage, [img.heritage, img.monument, img.streetWalk]),
  placeholderTour(4, img.beach, [img.beach, img.lakeside, img.road]),
  placeholderTour(5, img.mountains, [img.mountains, img.stars, img.camping]),
  placeholderTour(6, img.lake, [img.lake, img.valley, img.road]),
]

export const getTourBySlug = (slug) => tours.find((t) => t.slug === slug)
export const getToursByDestination = (destinationSlug) =>
  tours.filter((t) => t.destinationSlug === destinationSlug)
export const featuredTours = tours.filter((t) => t.featured)
