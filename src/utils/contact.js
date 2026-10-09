import { business } from '../config/business'

/** True when a value hasn't been provided yet ("[PHONE NUMBER]", "", null…). */
export const isPlaceholder = (value) =>
  value == null || String(value).trim() === '' || /\[[^\]]+\]/.test(String(value))

const digitsOnly = (value) => String(value).replace(/[^\d]/g, '')

export const hasPhone = () => !isPlaceholder(business.phone)
export const hasWhatsApp = () => !isPlaceholder(business.whatsapp)
export const hasEmail = () => !isPlaceholder(business.email)

/**
 * WhatsApp click-to-chat link.
 * Until the real number is configured, the link still works: WhatsApp
 * opens with the message pre-filled and the visitor picks the contact.
 */
export const whatsappUrl = (message = business.whatsappMessages.general) => {
  const text = encodeURIComponent(message)
  return hasWhatsApp()
    ? `https://wa.me/${digitsOnly(business.whatsapp)}?text=${text}`
    : `https://wa.me/?text=${text}`
}

export const tourEnquiryMessage = (tourTitle) =>
  business.whatsappMessages.tour.replace('{tour}', tourTitle)

/** tel: link, or the Contact page while the phone number is still a placeholder. */
export const phoneHref = () => (hasPhone() ? `tel:+${digitsOnly(business.phone)}` : '/contact')

export const emailHref = (subject = 'Trip enquiry') =>
  hasEmail() ? `mailto:${business.email}?subject=${encodeURIComponent(subject)}` : '/contact'

export const fullAddress = () => {
  const { line1, city, state, postalCode } = business.address
  return [line1, city, state, postalCode].join(', ')
}

export const configuredSocialLinks = () =>
  Object.entries(business.socialLinks).map(([network, url]) => ({
    network,
    url,
    configured: !isPlaceholder(url),
  }))

export const googleProfileConfigured = () => !isPlaceholder(business.googleBusinessProfileUrl)
