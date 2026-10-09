import { useLocation } from 'react-router-dom'
import { business } from '../../config/business'
import { imageUrl } from '../../utils/image'
import { sampleImages } from '../../data/images'

/**
 * Per-page SEO tags. React 19 hoists <title>, <meta> and <link> into <head>.
 * `jsonLd` (optional) is rendered as structured data.
 */
export default function Seo({ title, description, image = sampleImages.hero, jsonLd, noindex = false }) {
  const { pathname } = useLocation()
  const canonical = business.siteUrl ? `${business.siteUrl}${pathname}` : undefined
  const ogImage = imageUrl(image)

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
      {canonical && <link rel="canonical" href={canonical} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </>
  )
}
