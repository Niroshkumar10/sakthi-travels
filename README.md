# Minnal Travels — Website

Official website for **Minnal Travels**, a tour and trip service. The site promotes tour packages and destinations, shows the travel vehicle, and turns visitors into **WhatsApp and phone enquiries**.

Built with React 19, Vite, Tailwind CSS v4, React Router 7 and Lucide icons. There is no backend. Enquiries go through WhatsApp click-to-chat and `tel:` links.

> ⚠️ **Placeholder content.** Business details, tours, destinations, prices, vehicle specs and reviews are placeholders written in `[SQUARE BRACKETS]`. The site highlights them in amber. Photos marked "Sample photo" are free Unsplash stock images and are **not** Minnal Travels' own photos. Replace all of them before launch (see below).

---

## Getting started

Requires Node.js 20.19+ (or 22+).

```bash
npm install        # install dependencies
npm run dev        # start the dev server → http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build → http://localhost:4173
```

## Project structure

```
minnal-travels/
├── index.html                  # HTML shell, fonts, default meta tags
├── vite.config.js
├── vercel.json                 # SPA rewrites for Vercel
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.template.xml    # fill in domain + tours, rename to sitemap.xml
│   └── _redirects              # SPA rewrites for Netlify
└── src/
    ├── main.jsx                # entry point
    ├── App.jsx                 # routes (pages are code-split)
    ├── index.css               # Tailwind + brand colour tokens
    ├── config/
    │   ├── business.js         # ★ ALL business contact info + settings
    │   └── navigation.js       # navbar / footer links
    ├── data/
    │   ├── tours.js            # ★ tour packages
    │   ├── destinations.js     # ★ destinations
    │   ├── vehicle.js          # ★ the (single) vehicle
    │   ├── testimonials.js     # ★ customer reviews (genuine only)
    │   ├── gallery.js          # ★ gallery photos + categories
    │   ├── content.js          # ★ About page text, Why Choose Us, FAQs
    │   └── images.js           # sample (stock) image library
    ├── utils/
    │   ├── contact.js          # WhatsApp / tel / mailto link builders, placeholder detection
    │   └── image.js            # responsive srcset helpers
    ├── components/
    │   ├── layout/             # Layout, Navbar, Footer, Logo, QuickContact (mobile bar + floating WhatsApp)
    │   ├── cards/              # TourCard, DestinationCard, VehicleCard, TestimonialCard
    │   ├── sections/           # Hero, Intro, FeaturedTours, WhyChooseUs, DestinationsSection,
    │   │                       # VehicleShowcase, Gallery, GalleryPreview, Testimonials,
    │   │                       # CTASection, ContactSection, ContactForm, FAQ
    │   └── ui/                 # Button, WhatsAppButton, CallButton, SectionTitle, Img, Lightbox,
    │                           # Reveal, Seo, PageHeader, Ph, PlaceholderNote, LocalBusinessSchema…
    └── pages/                  # Home, About, Tours, TourDetail, Destinations, Vehicle,
                                # GalleryPage, Contact, Legal (privacy/terms), NotFound
```

### Routes

| URL | Page |
|---|---|
| `/` | Home |
| `/about` | About Us |
| `/tours` | Tours & Trips (filters: `?destination=`, `?duration=`, `?type=`) |
| `/tours/:slug` | Tour Details |
| `/destinations` | Destinations |
| `/vehicle` | Our Vehicle |
| `/gallery` | Gallery |
| `/contact` | Contact |
| `/privacy-policy`, `/terms` | Legal templates |

---

## Files to edit when real business information arrives

Keep all details identical to the verified **Google Business Profile**.

| File | What to update |
|---|---|
| `src/config/business.js` | Phone, WhatsApp number, email, address, working hours, service areas, founding year, site URL, **Google Business Profile URL**, Google Maps embed URL, Instagram / Facebook / YouTube links, pre-filled WhatsApp messages |
| `src/data/tours.js` | Real tour packages: name, slug, destination, duration, price, trip types, overview, places, itinerary, inclusions/exclusions, travel info, FAQs, photos |
| `src/data/destinations.js` | Confirmed destinations only: name, description, highlights, photo |
| `src/data/vehicle.js` | Model, type, seating, AC, luggage, driver included, features, suitable trip types, **real vehicle photos** |
| `src/data/testimonials.js` | Genuine customer reviews only (with permission); set `placeholder: false` |
| `src/data/gallery.js` | Real trip and vehicle photos |
| `src/data/content.js` | Our Story, Mission, FAQ answers (payment/cancellation policy) |
| `src/pages/Legal.jsx` | Privacy Policy and Terms & Conditions text (have it reviewed) |
| `public/robots.txt`, `public/sitemap.template.xml` | Real domain and tour URLs |
| `src/components/layout/Logo.jsx` | Swap in an image logo if one exists |

**Photos:** put real photos in `public/images/...`, resize them to about 1600px wide and compress them (WebP/JPG under 300 KB). Reference them as
`{ src: '/images/tours/my-photo.jpg', alt: 'Describe the photo', sample: false }`.

**When everything is real:** set `siteSettings.showPlaceholderNotices = false` in `src/config/business.js`. This hides the "Sample photo" badges, the amber highlights and the "content coming soon" notes.

### How placeholders behave

- Any value containing `[...]` counts as "not provided yet".
- **WhatsApp:** until the number is set, links open `https://wa.me/?text=…`. The message is still pre-filled and the visitor picks the contact. After the number is set, links go straight to the business chat.
- **Call Now:** until the phone number is set, the button links to the Contact page instead of a broken `tel:` link.
- **Social / Google links:** shown greyed out (social) or hidden (Google) until URLs are provided.
- **Structured data (schema.org):** placeholder values are left out automatically, so search engines never see fake data.
- **Filters:** Duration and Trip Type filters on `/tours` only appear once real values exist in `tours.js`.

### Contact form

The form is frontend-only. **Send Enquiry** checks the input, formats the details into a message and opens WhatsApp with it pre-filled. Nothing is stored on a server. To send to email or a form service later (Formspree, Web3Forms, Netlify Forms), replace `handleSubmit` in `src/components/sections/ContactForm.jsx`.

---

## Deployment

The site is a static single-page app: deploy the `dist/` folder.

**Netlify:** connect the repo (build command `npm run build`, publish directory `dist`), or drag `dist/` into Netlify Drop. `public/_redirects` already handles deep links like `/tours/abc`.

**Vercel:** import the repo. Vite is auto-detected. `vercel.json` already handles deep links.

**Cloudflare Pages:** build `npm run build`, output `dist`. Copy `public/_redirects` (already included).

**Any other static host / cPanel:** upload the contents of `dist/`. Configure the server to serve `index.html` for unknown paths, e.g. with this `.htaccess` on Apache:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ /index.html [L]
```

**After deploying:**
1. Set `siteUrl` in `business.js` (enables canonical URLs and `og:url`), then rebuild.
2. Finish `sitemap.xml` and `robots.txt`, then submit the sitemap in Google Search Console.
3. Add the website URL to the Google Business Profile.

> SEO note: this is a client-rendered React app. Google renders JavaScript and indexes it fine. For stronger SEO later (e.g. social-media link previews per tour), consider pre-rendering with a tool such as `vite-plugin-prerender` or moving to a static-site framework.
