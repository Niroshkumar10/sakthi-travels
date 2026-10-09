import { sampleImages as img } from './images'

/**
 * ============================================================
 *  DESTINATIONS
 * ============================================================
 *  PLACEHOLDERS ONLY. Do not list a destination here until
 *  Minnal Travels confirms they run trips there.
 *
 *   slug        Unique, lowercase, hyphenated. Tours link to a
 *               destination via tour.destinationSlug === slug.
 *   name        Display name.
 *   description One or two sentences.
 *   highlights  Short list of things to see / do.
 *   image       Photo object ({ src, alt, sample }).
 *
 *  "Available tours" on each destination are worked out
 *  automatically from tours.js — nothing to maintain here.
 * ============================================================
 */

const placeholderDestination = (n, image) => ({
  slug: `destination-${n}`,
  name: `[DESTINATION ${n}]`,
  description: '[SHORT DESTINATION DESCRIPTION — what makes this place worth visiting.]',
  highlights: ['[HIGHLIGHT 1]', '[HIGHLIGHT 2]', '[HIGHLIGHT 3]'],
  image,
})

export const destinations = [
  placeholderDestination(1, img.mistyHills),
  placeholderDestination(2, img.backwaters),
  placeholderDestination(3, img.heritage),
  placeholderDestination(4, img.beach),
  placeholderDestination(5, img.mountains),
  placeholderDestination(6, img.lake),
]

export const getDestinationBySlug = (slug) => destinations.find((d) => d.slug === slug)
