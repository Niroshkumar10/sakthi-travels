import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Logo from './Logo'
import Ph from '../ui/Ph'
import { WhatsAppIcon, InstagramIcon, FacebookIcon, YouTubeIcon, GoogleIcon } from '../ui/BrandIcons'
import { business } from '../../config/business'
import { footerNav } from '../../config/navigation'
import {
  configuredSocialLinks,
  emailHref,
  fullAddress,
  googleProfileConfigured,
  hasEmail,
  hasPhone,
  phoneHref,
  whatsappUrl,
} from '../../utils/contact'

const socialIcons = { instagram: InstagramIcon, facebook: FacebookIcon, youtube: YouTubeIcon }
const socialLabels = { instagram: 'Instagram', facebook: 'Facebook', youtube: 'YouTube' }

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 pb-24 text-white/75 lg:pb-0">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:py-16">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{business.shortDescription}</p>
          <div className="mt-6 flex gap-2">
            {configuredSocialLinks().map(({ network, url, configured }) => {
              const Icon = socialIcons[network]
              const cls = 'grid h-11 w-11 place-items-center rounded-full bg-white/10 transition'
              return configured ? (
                <a
                  key={network}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cls} hover:bg-amber-500 hover:text-navy-950`}
                  aria-label={`${business.name} on ${socialLabels[network]}`}
                >
                  <Icon />
                </a>
              ) : (
                <span key={network} className={`${cls} opacity-40`} title={`${socialLabels[network]} link to be added`}>
                  <Icon />
                  <span className="sr-only">{socialLabels[network]} (link to be added)</span>
                </span>
              )
            })}
          </div>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="text-sm font-bold tracking-wider text-white uppercase">Quick Links</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="transition hover:text-amber-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-6">
          <h2 className="text-sm font-bold tracking-wider text-white uppercase">Contact</h2>
          <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              {hasPhone() ? (
                <a href={phoneHref()} className="hover:text-amber-400">{business.phone}</a>
              ) : (
                <Ph>{business.phone}</Ph>
              )}
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">
                <Ph>{business.whatsapp}</Ph>
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              {hasEmail() ? (
                <a href={emailHref()} className="hover:text-amber-400">{business.email}</a>
              ) : (
                <Ph>{business.email}</Ph>
              )}
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <Ph>{business.workingHours}</Ph>
            </li>
            <li className="flex gap-3 sm:col-span-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
              <address className="not-italic">
                <Ph>{fullAddress()}</Ph>
              </address>
            </li>
          </ul>
          {googleProfileConfigured() && (
            <a
              href={business.googleBusinessProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition hover:bg-amber-50"
            >
              <GoogleIcon className="h-4 w-4" /> View us on Google
            </a>
          )}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {business.name}. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-amber-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-amber-400">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
