import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import Ph from '../ui/Ph'
import WhatsAppButton from '../ui/WhatsAppButton'
import CallButton from '../ui/CallButton'
import Button from '../ui/Button'
import { WhatsAppIcon, GoogleIcon } from '../ui/BrandIcons'
import ContactForm from './ContactForm'
import { business, siteSettings } from '../../config/business'
import { emailHref, fullAddress, googleProfileConfigured, hasEmail, hasPhone, phoneHref } from '../../utils/contact'

function InfoRow({ icon: Icon, label, children }) {
  return (
    <li className="flex gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</p>
        <div className="mt-0.5 font-semibold break-words text-navy-900">{children}</div>
      </div>
    </li>
  )
}

/** Contact details + enquiry form + map. Used on the Contact page. */
export default function ContactSection() {
  return (
    <section className="section bg-surface">
      <div className="container-x grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="space-y-6 lg:col-span-2">
          <div className="card p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold">{business.name}</h2>
            <p className="mt-1 text-sm text-muted">Message us on WhatsApp or give us a call to plan your trip.</p>
            <ul className="mt-6 space-y-5">
              <InfoRow icon={Phone} label="Phone">
                {hasPhone() ? <a href={phoneHref()} className="hover:text-amber-600">{business.phone}</a> : <Ph>{business.phone}</Ph>}
              </InfoRow>
              <InfoRow icon={WhatsAppIcon} label="WhatsApp">
                <Ph>{business.whatsapp}</Ph>
              </InfoRow>
              <InfoRow icon={Mail} label="Email">
                {hasEmail() ? <a href={emailHref()} className="hover:text-amber-600">{business.email}</a> : <Ph>{business.email}</Ph>}
              </InfoRow>
              <InfoRow icon={MapPin} label="Address">
                <address className="not-italic">
                  <Ph>{fullAddress()}</Ph>
                </address>
              </InfoRow>
              <InfoRow icon={Clock} label="Working Hours">
                <Ph>{business.workingHours}</Ph>
              </InfoRow>
            </ul>
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <WhatsAppButton />
              <CallButton />
            </div>
            {googleProfileConfigured() && (
              <Button href={business.googleBusinessProfileUrl} variant="outline" external className="mt-3 w-full">
                <GoogleIcon className="h-5 w-5" /> View us on Google
              </Button>
            )}
          </div>
        </div>

        <div className="lg:col-span-3">
          <ContactForm />
        </div>

        <div className="lg:col-span-5">
          <h2 className="sr-only">Our location</h2>
          {business.googleMapsEmbedUrl ? (
            <iframe
              title={`${business.name} location on Google Maps`}
              src={business.googleMapsEmbedUrl}
              className="h-80 w-full rounded-2xl border-0 shadow-(--shadow-card) sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : siteSettings.showPlaceholderNotices && (
            <div className="grid h-72 place-items-center rounded-2xl border-2 border-dashed border-navy-200 bg-white p-6 text-center sm:h-80">
              <div>
                <MapPin className="mx-auto h-10 w-10 text-navy-200" aria-hidden="true" />
                <p className="mt-3 font-semibold text-navy-900">[GOOGLE MAP]</p>
                <p className="mt-1 max-w-md text-sm text-muted">
                  The map of our location will appear here once the Google Maps embed link is added
                  (<code className="text-xs">googleMapsEmbedUrl</code> in <code className="text-xs">src/config/business.js</code>).
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
