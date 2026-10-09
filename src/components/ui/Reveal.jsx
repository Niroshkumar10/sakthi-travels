import { useEffect, useRef, useState } from 'react'

/** Fades content in once when it scrolls into view. Respects prefers-reduced-motion (see index.css). */
export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    let done = false
    const show = () => {
      if (done) return
      done = true
      setVisible(true)
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
    // Reveal anything that has reached (or been scrolled past) the viewport —
    // covers fast scrolling and jumps where the observer never sees an intersection.
    const onScroll = () => el.getBoundingClientRect().top < window.innerHeight && show()
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && show(), {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.05,
    })
    observer.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
