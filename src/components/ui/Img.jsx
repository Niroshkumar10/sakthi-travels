import { siteSettings } from '../../config/business'
import { imageSources } from '../../utils/image'

/**
 * Responsive, lazy-loaded image.
 * Shows a small "Sample photo" badge on stock images so they are never
 * mistaken for Minnal Travels' own photos.
 */
export default function Img({
  image,
  sizes = '100vw',
  className = '',
  imgClassName = '',
  priority = false,
  maxWidth,
  showBadge = true,
  badgePosition = 'bottom-right',
}) {
  if (!image) return null
  const { src, srcSet } = imageSources(image, maxWidth)
  const badge = showBadge && image.sample && siteSettings.showPlaceholderNotices
  // Background images pass `absolute inset-0`; otherwise position relatively for the badge
  const position = /\b(absolute|fixed)\b/.test(className) ? '' : 'relative'

  return (
    <div className={`${position} overflow-hidden ${className}`}>
      <img
        src={src}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={image.alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      {badge && (
        <span
          className={`pointer-events-none absolute ${
            badgePosition === 'top-left' ? 'top-3 left-3' : 'right-2 bottom-2'
          } rounded-full bg-black/55 px-2 py-0.5 text-[10px] font-medium tracking-wide text-white/90 backdrop-blur-sm`}
        >
          Sample photo
        </span>
      )}
    </div>
  )
}
