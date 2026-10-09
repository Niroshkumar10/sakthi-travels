import { Phone } from 'lucide-react'
import Button from './Button'
import { hasPhone, phoneHref } from '../../utils/contact'

/** tel: link. Falls back to the Contact page until the phone number is configured. */
export default function CallButton({ children = 'Call Now', className = '', variant = 'outline' }) {
  return (
    <Button
      href={phoneHref()}
      variant={variant}
      className={className}
      title={hasPhone() ? undefined : 'Phone number to be added'}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      {children}
    </Button>
  )
}
