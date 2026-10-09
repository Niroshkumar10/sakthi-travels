import { Link } from 'react-router-dom'

const base =
  'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:pointer-events-none disabled:opacity-60 sm:text-base'

const variants = {
  primary: 'bg-amber-500 text-navy-950 shadow-sm hover:bg-amber-400 hover:shadow-md',
  navy: 'bg-navy-900 text-white shadow-sm hover:bg-navy-700 hover:shadow-md',
  whatsapp: 'bg-whatsapp text-white shadow-sm hover:bg-whatsapp-dark hover:shadow-md',
  outline: 'border border-navy-900/15 bg-white text-navy-900 hover:border-navy-900/30 hover:bg-navy-50',
  ghostLight: 'border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20',
}

export const buttonClass = (variant = 'primary', className = '') => `${base} ${variants[variant]} ${className}`

/**
 * Renders a react-router <Link> for internal paths ("/tours"),
 * and a plain <a> for external / tel: / mailto: / #hash links.
 */
export default function Button({ to, href, variant = 'primary', className = '', children, external, ...rest }) {
  const target = to ?? href
  const cls = buttonClass(variant, className)
  if (target && target.startsWith('/') && !external) {
    return (
      <Link to={target} className={cls} {...rest}>
        {children}
      </Link>
    )
  }
  if (target) {
    const ext = external || target.startsWith('http')
    return (
      <a href={target} className={cls} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  )
}
