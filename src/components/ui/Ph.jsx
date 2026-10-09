import { siteSettings } from '../../config/business'

/**
 * Renders text content. Any "[PLACEHOLDER]" parts are highlighted so they
 * are never mistaken for real business information.
 */
export default function Ph({ children, className = '' }) {
  if (!siteSettings.showPlaceholderNotices || typeof children !== 'string') {
    return <span className={className}>{children}</span>
  }
  const parts = children.split(/(\[[^\]]+\])/g).filter(Boolean)
  return (
    <span className={className}>
      {parts.map((part, i) =>
        part.startsWith('[') && part.endsWith(']') ? (
          <span key={i} className="placeholder-text">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </span>
  )
}
