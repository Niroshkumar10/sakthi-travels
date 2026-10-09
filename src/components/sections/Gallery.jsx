import { lazy, Suspense, useState } from 'react'
import { Expand } from 'lucide-react'
import Img from '../ui/Img'

const Lightbox = lazy(() => import('../ui/Lightbox'))

/**
 * Masonry-style photo grid (CSS columns) with a click-to-open lightbox.
 * `images`: array of image objects ({ src, alt, sample }).
 */
export default function Gallery({ images, columns = 'columns-2 md:columns-3 lg:columns-4' }) {
  const [active, setActive] = useState(null)

  return (
    <>
      <ul className={`${columns} gap-3 sm:gap-4`}>
        {images.map((image, i) => (
          <li key={`${image.src}-${i}`} className="mb-3 break-inside-avoid sm:mb-4">
            <button
              type="button"
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-2xl"
              aria-label={`Open image: ${image.alt}`}
            >
              <Img
                image={image}
                className={i % 3 === 0 ? 'aspect-[3/4]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'}
                imgClassName="transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                maxWidth={960}
              />
              <span className="absolute inset-0 grid place-items-center bg-navy-950/0 transition group-hover:bg-navy-950/35">
                <Expand
                  className="h-8 w-8 scale-75 text-white opacity-0 transition group-hover:scale-100 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
      {active !== null && (
        <Suspense fallback={null}>
          <Lightbox images={images} index={active} onChange={setActive} onClose={() => setActive(null)} />
        </Suspense>
      )}
    </>
  )
}
