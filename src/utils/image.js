const WIDTHS = [400, 640, 960, 1280, 1600, 2000]

/** Build src / srcSet for an image object. Remote (Unsplash) images are resized on the fly. */
export const imageSources = (image, maxWidth = 1600) => {
  if (!image) return {}
  if (!image.remote) return { src: image.src }
  const widths = WIDTHS.filter((w) => w <= maxWidth)
  const url = (w) => `${image.src}?auto=format&fit=crop&w=${w}&q=70`
  return {
    src: url(Math.min(1280, maxWidth)),
    srcSet: widths.map((w) => `${url(w)} ${w}w`).join(', '),
  }
}

/** Single absolute URL, e.g. for Open Graph tags. */
export const imageUrl = (image, width = 1200) => {
  if (!image) return undefined
  return image.remote ? `${image.src}?auto=format&fit=crop&w=${width}&q=70` : image.src
}
