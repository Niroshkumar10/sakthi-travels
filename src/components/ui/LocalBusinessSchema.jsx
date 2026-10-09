import { business } from '../../config/business'
import { isPlaceholder } from '../../utils/contact'

const real = (v) => (isPlaceholder(v) ? undefined : v)

/**
 * schema.org TravelAgency structured data for local SEO.
 * Placeholder values are omitted automatically, so search engines
 * only ever see real, confirmed information. Keep it consistent
 * with the Google Business Profile.
 */
export default function LocalBusinessSchema() {
  const { address } = business
  const postal = {
    '@type': 'PostalAddress',
    streetAddress: real(address.line1),
    addressLocality: real(address.city),
    addressRegion: real(address.state),
    postalCode: real(address.postalCode),
    addressCountry: address.country,
  }
  const sameAs = [business.googleBusinessProfileUrl, ...Object.values(business.socialLinks)].filter(real)

  const data = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: business.name,
    description: business.shortDescription,
    url: business.siteUrl || undefined,
    telephone: real(business.phone),
    email: real(business.email),
    address: postal.streetAddress ? postal : undefined,
    areaServed: business.serviceAreas.length ? business.serviceAreas : undefined,
    sameAs: sameAs.length ? sameAs : undefined,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
