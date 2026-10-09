/**
 * ============================================================
 *  OUR TRAVEL VEHICLE
 * ============================================================
 *  Minnal Travels currently operates ONE vehicle. This is a
 *  single object (not a list) on purpose.
 *
 *  image: until a real photo of the actual vehicle is supplied,
 *  leave it as null — the site shows a clearly-labelled
 *  "Vehicle photo coming soon" panel instead of a stock car photo
 *  (a stock photo would misrepresent the real vehicle).
 *
 *  To add the real photo: put it at /public/images/vehicle/main.jpg and set
 *    image: { src: '/images/vehicle/main.jpg', alt: '[Vehicle model] — exterior', sample: false }
 *  Extra photos (interior, luggage space…) go in `photos` the same way.
 * ============================================================
 */

export const vehicle = {
  model: '[VEHICLE MODEL]',
  type: '[VEHICLE TYPE — e.g. SUV / MUV / Tempo Traveller]',
  description:
    '[VEHICLE DESCRIPTION — a short line about the vehicle, e.g. how it is maintained and what makes it comfortable for trips.]',
  image: null,
  photos: [],
  specs: {
    seating: '[SEATING CAPACITY]',
    ac: '[YES/NO]',
    luggage: '[LUGGAGE CAPACITY]',
    driverIncluded: '[YES/NO]',
  },
  // Only list comfort features that are actually available, e.g. ['Reclining seats', 'Music system']
  features: [],
  // Trip types this vehicle suits, e.g. ['Family trips', 'Weekend getaways', 'Airport transfers']
  suitableFor: ['[SUITABLE TRIP TYPE]', '[SUITABLE TRIP TYPE]', '[SUITABLE TRIP TYPE]'],
}
