import Button from './Button'
import { WhatsAppIcon } from './BrandIcons'
import { whatsappUrl } from '../../utils/contact'

/** Opens WhatsApp with a pre-filled message. Pass `message` for a tour-specific enquiry. */
export default function WhatsAppButton({ message, children = 'WhatsApp Us', className = '', variant = 'whatsapp' }) {
  return (
    <Button href={whatsappUrl(message)} variant={variant} className={className} external aria-label={`${children} (opens WhatsApp)`}>
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      {children}
    </Button>
  )
}
