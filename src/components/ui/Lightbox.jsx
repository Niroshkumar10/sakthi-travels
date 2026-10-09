import { useCallback, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { imageSources } from '../../utils/image'
import { siteSettings } from '../../config/business'

/** Accessible full-screen image viewer. Keyboard: ← → to navigate, Esc to close. */
export default function Lightbox({ images, index, onClose, onChange }) {
  const closeRef = useRef(null)
  const image = images[index]
  const count = images.length

  const prev = useCallback(() => onChange((index - 1 + count) % count), [index, count, onChange])
  const next = useCallback(() => onChange((index + 1) % count), [index, count, onChange])

  useEffect(() => {
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
      previouslyFocused?.focus?.()
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  if (!image) return null
  const { src, srcSet } = imageSources(image, 2000)
  const navBtn =
    'absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/95 p-4 animate-fade-in"
      onClick={onClose}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        className="absolute top-4 right-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/25"
        aria-label="Close image viewer"
      >
        <X className="h-6 w-6" />
      </button>

      {count > 1 && (
        <>
          <button onClick={(e) => (e.stopPropagation(), prev())} className={`${navBtn} left-2 sm:left-6`} aria-label="Previous image">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={(e) => (e.stopPropagation(), next())} className={`${navBtn} right-2 sm:right-6`} aria-label="Next image">
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <figure className="flex max-h-full max-w-6xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
        <img
          key={src}
          src={src}
          srcSet={srcSet}
          sizes="(min-width: 1280px) 1200px, 100vw"
          alt={image.alt}
          className="max-h-[78vh] w-auto rounded-xl object-contain shadow-2xl animate-fade-in"
        />
        <figcaption className="mt-4 text-center text-sm text-white/75">
          {image.alt}
          {image.sample && siteSettings.showPlaceholderNotices && ' · Stock image (Unsplash), not a Minnal Travels photo'}
          <span className="ml-2 text-white/50">
            {index + 1} / {count}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
