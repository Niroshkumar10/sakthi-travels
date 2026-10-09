/**
 * SAMPLE IMAGE LIBRARY
 * ------------------------------------------------------------
 * These are free-to-use stock photos from Unsplash
 * (https://unsplash.com/license). They are NOT photos of
 * Minnal Travels' trips, customers, or vehicle, and are shown
 * with a "Sample photo" badge on the site.
 *
 * When real photos are available:
 *  1. Put them in /public/images/ (e.g. /public/images/tours/ooty.jpg)
 *     — ideally resized to ~1600px wide and compressed (WebP/JPG, < 300 KB).
 *  2. Use an object like:  { src: '/images/tours/ooty.jpg', alt: 'Describe the photo', sample: false }
 *     in the relevant data file (tours.js, destinations.js, gallery.js, vehicle.js).
 */

const unsplash = (id, alt) => ({
  src: `https://images.unsplash.com/photo-${id}`,
  alt,
  sample: true, // shows the "Sample photo" badge
  remote: true, // enables responsive srcset generation via Unsplash's resizing service
})

export const sampleImages = {
  hero: unsplash('1506905925346-21bda4d32df4', 'Sample photo: mountain landscape at sunrise above the clouds'),
  mountains: unsplash('1464822759023-fed622ff2c3b', 'Sample photo: snow-capped mountain peaks'),
  beach: unsplash('1507525428034-b723cf961d3e', 'Sample photo: calm beach with turquoise water'),
  valley: unsplash('1469474968028-56623f02e42e', 'Sample photo: sunlit valley with hills'),
  lake: unsplash('1476514525535-07fb3b4ae5f1', 'Sample photo: lake surrounded by mountains'),
  lakeside: unsplash('1501785888041-af3ef285b470', 'Sample photo: lakeside view at golden hour'),
  planning: unsplash('1488646953014-85cb44e25828', 'Sample photo: map and travel essentials laid out for trip planning'),
  road: unsplash('1500530855697-b586d89ba3ee', 'Sample photo: open road through scenic countryside'),
  mistyHills: unsplash('1470071459604-3b5ec3a7fe05', 'Sample photo: misty green hills'),
  forest: unsplash('1441974231531-c6227db76b6e', 'Sample photo: sunlight through a green forest'),
  roadTrip: unsplash('1449965408869-eaa3f722e40d', 'Sample photo: driving along a road at dusk'),
  monument: unsplash('1524492412937-b28074a5d7da', 'Sample photo: historic white marble monument'),
  heritage: unsplash('1477587458883-47145ed94245', 'Sample photo: ornate pink sandstone palace facade'),
  backwaters: unsplash('1602216056096-3b40cc0c9944', 'Sample photo: houseboat on backwaters lined with palm trees'),
  houseboat: unsplash('1593693397690-362cb9666fc2', 'Sample photo: houseboat cruising on a calm river'),
  stars: unsplash('1519681393784-d120267933ba', 'Sample photo: starry night sky over mountains'),
  dawnHills: unsplash('1500534314209-a25ddb2bd429', 'Sample photo: layered misty hills at dawn'),
  camping: unsplash('1504280390367-361c6d9f38f4', 'Sample photo: tent camping under the trees'),
  traveler: unsplash('1530521954074-e64f6810b32d', 'Sample photo: traveller with a backpack'),
  streetWalk: unsplash('1527631746610-bca00a040d60', 'Sample photo: traveller with a backpack walking down a narrow street'),
}
