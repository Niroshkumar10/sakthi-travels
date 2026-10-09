import { Link } from 'react-router-dom'

/** <Link> for internal paths, <a> for everything else (tel:, mailto:, https:). */
export default function SmartLink({ href, children, ...rest }) {
  if (href.startsWith('/')) {
    return (
      <Link to={href} {...rest}>
        {children}
      </Link>
    )
  }
  const external = href.startsWith('http')
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
      {children}
    </a>
  )
}
