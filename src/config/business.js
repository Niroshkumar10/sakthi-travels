/**
 * ============================================================
 *  MINNAL TRAVELS — CENTRAL BUSINESS CONFIGURATION
 * ============================================================
 *  Every piece of business contact information used on the
 *  website comes from this file. Replace each "[PLACEHOLDER]"
 *  with the real value, keeping it identical to the verified
 *  Google Business Profile (name, address, phone, hours).
 *
 *  Any value still wrapped in [SQUARE BRACKETS] is treated as
 *  "not yet provided": it is highlighted on the site, and the
 *  related link (call / WhatsApp / map / social) falls back to
 *  a safe behaviour instead of a broken link.
 * ============================================================
 */

export const business = {
  name: 'Minnal Travels',
  tagline: 'Tours & Trips',
  shortDescription:
    'Minnal Travels focuses on comfortable and enjoyable tours and trips. Tell us where you want to go, and we will help you plan your journey.',

  // Phone in international format, e.g. '+91 98765 43210'
  phone: '[PHONE NUMBER]',

  // WhatsApp number in international format, e.g. '+91 98765 43210'
  whatsapp: '[WHATSAPP NUMBER]',

  email: '[EMAIL]',

  address: {
    line1: '[BUSINESS ADDRESS]',
    city: '[CITY]',
    state: '[STATE]',
    postalCode: '[PIN CODE]',
    country: 'IN',
  },

  workingHours: '[WORKING HOURS]',

  // Areas the business actually serves — only list confirmed ones, e.g. ['Chennai', 'Madurai']
  serviceAreas: [],

  // Year the business was founded — leave as placeholder until confirmed, e.g. '2019'
  foundedYear: '[YEAR]',

  // Public website URL once deployed, e.g. 'https://www.minnaltravels.com' (no trailing slash)
  siteUrl: '',

  // Link to the verified Google Business Profile (Google Maps "Share" link)
  googleBusinessProfileUrl: '[GOOGLE_BUSINESS_PROFILE_URL]',

  // Google Maps embed URL: Google Maps → Share → "Embed a map" → copy the src="..." value only
  googleMapsEmbedUrl: '',

  socialLinks: {
    instagram: '[INSTAGRAM URL]',
    facebook: '[FACEBOOK URL]',
    youtube: '[YOUTUBE URL]',
  },

  // Pre-filled WhatsApp messages. {tour} is replaced with the tour name.
  whatsappMessages: {
    general: 'Hello Minnal Travels, I would like to know more about your tour and trip packages.',
    tour: 'Hello Minnal Travels, I am interested in the {tour} package. Please share the details, availability and pricing.',
    vehicle: 'Hello Minnal Travels, I would like to enquire about booking your vehicle for a trip.',
  },
}

/**
 * Site-wide display settings.
 * Set showPlaceholderNotices to false once all real content
 * and photos have been supplied, to hide the "Sample photo"
 * badges and the "content coming soon" notes.
 */
export const siteSettings = {
  showPlaceholderNotices: true,
}
