import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import PlaceholderNote from '../components/ui/PlaceholderNote'
import Ph from '../components/ui/Ph'
import { business } from '../config/business'

/**
 * Privacy Policy / Terms & Conditions.
 * The text is a TEMPLATE — it must be reviewed and completed by the business
 * (ideally with professional advice) before the site goes live.
 */
const pages = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Information we collect',
        body: 'When you enquire through this website, you may share details such as your name, phone number, email address, travel destination, travel dates and number of travellers. Enquiries sent through the form open WhatsApp on your device; this website does not store the details on its own server.',
      },
      { heading: 'How we use your information', body: 'We use your details only to respond to your enquiry and to plan and provide the trip you request.' },
      { heading: 'Third-party services', body: 'This website links to WhatsApp, Google Maps and social media sites, which have their own privacy policies.' },
      { heading: 'Contact', body: `For questions about this policy, contact ${business.name} at ${business.email} or ${business.phone}.` },
      { heading: 'Last updated', body: '[DATE]' },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      { heading: 'Bookings', body: '[BOOKING TERMS — how a booking is confirmed, advance payment, etc.]' },
      { heading: 'Payments', body: '[PAYMENT TERMS]' },
      { heading: 'Cancellations & refunds', body: '[CANCELLATION AND REFUND POLICY]' },
      { heading: 'Changes to itinerary', body: '[ITINERARY CHANGE POLICY — e.g. weather, road conditions]' },
      { heading: 'Liability', body: '[LIABILITY TERMS]' },
      { heading: 'Last updated', body: '[DATE]' },
    ],
  },
}

export default function Legal({ type }) {
  const page = pages[type]
  return (
    <>
      <Seo title={`${page.title} | Minnal Travels`} description={`${page.title} for ${business.name}.`} />
      <PageHeader title={page.title} breadcrumbs={[{ label: page.title }]} />
      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <PlaceholderNote className="mb-10">
            This is a template. The final {page.title.toLowerCase()} must be reviewed and confirmed by {business.name} before
            publishing.
          </PlaceholderNote>
          <div className="space-y-8">
            {page.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-bold">{s.heading}</h2>
                <p className="mt-2 leading-relaxed text-muted">
                  <Ph>{s.body}</Ph>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
