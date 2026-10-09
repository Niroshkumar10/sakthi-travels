import { Phone } from 'lucide-react'
import { WhatsAppIcon } from '../ui/BrandIcons'
import SmartLink from '../ui/SmartLink'
import { phoneHref, whatsappUrl } from '../../utils/contact'

/**
 * Always-available contact shortcuts:
 *  - Mobile/tablet: a sticky bottom bar with Call + WhatsApp (easy thumb reach).
 *  - Desktop: a floating WhatsApp button.
 */
export default function QuickContact() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-900/10 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-12px_rgb(15_40_71/0.25)] backdrop-blur-md lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
          <SmartLink
            href={phoneHref()}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-navy-900 font-semibold text-white active:bg-navy-700"
          >
            <Phone className="h-5 w-5" aria-hidden="true" /> Call Now
          </SmartLink>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp font-semibold text-white active:bg-whatsapp-dark"
          >
            <WhatsAppIcon className="h-5 w-5" /> WhatsApp
          </a>
        </div>
      </div>

      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enquire on WhatsApp"
        className="group fixed right-6 bottom-6 z-40 hidden items-center gap-2 rounded-full bg-whatsapp p-4 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-whatsapp-dark hover:shadow-xl lg:inline-flex"
      >
        <WhatsAppIcon className="h-7 w-7" />
        <span className="max-w-0 overflow-hidden font-semibold whitespace-nowrap transition-all duration-300 group-hover:max-w-48 group-hover:pr-1">
          Enquire on WhatsApp
        </span>
      </a>
    </>
  )
}
