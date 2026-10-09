import { useState } from 'react'
import { CheckCircle2, Send } from 'lucide-react'
import { WhatsAppIcon } from '../ui/BrandIcons'
import { business } from '../../config/business'
import { emailHref, hasEmail, whatsappUrl } from '../../utils/contact'

const initial = { name: '', phone: '', email: '', destination: '', date: '', travelers: '', message: '' }

/**
 * Frontend-only enquiry form.
 * SUBMISSION: on "Send Enquiry" the details are formatted into a message
 * and WhatsApp opens with it pre-filled — no server needed.
 * To send to a server / form service instead (e.g. Formspree, Web3Forms,
 * Netlify Forms), replace the body of `handleSubmit`.
 */
export default function ContactForm({ defaultDestination = '' }) {
  const [values, setValues] = useState({ ...initial, destination: defaultDestination })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!/^[+\d][\d\s-]{6,}$/.test(values.phone.trim())) next.phone = 'Please enter a valid phone number.'
    if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) next.email = 'Please enter a valid email address.'
    if (values.travelers && Number(values.travelers) < 1) next.travelers = 'Please enter at least 1 traveller.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const buildMessage = () =>
    `Hello ${business.name}, I would like to plan a trip.\n\n` +
    [
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email && `Email: ${values.email}`,
      values.destination && `Destination: ${values.destination}`,
      values.date && `Travel date: ${values.date}`,
      values.travelers && `Number of travellers: ${values.travelers}`,
      values.message && `Message: ${values.message}`,
    ]
      .filter(Boolean)
      .join('\n')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    window.open(whatsappUrl(buildMessage()), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const field =
    'mt-1.5 block min-h-12 w-full rounded-xl border-0 bg-surface px-4 py-3 text-base text-ink ring-1 ring-navy-900/10 transition placeholder:text-muted/70 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none'
  const label = 'text-sm font-semibold text-navy-900'
  const err = (name) =>
    errors[name] && (
      <p id={`${name}-error`} className="mt-1 text-sm text-red-600">
        {errors[name]}
      </p>
    )
  const aria = (name) => ({ 'aria-invalid': !!errors[name], 'aria-describedby': errors[name] ? `${name}-error` : undefined })

  if (sent) {
    return (
      <div className="card p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-14 w-14 text-whatsapp" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-bold">Almost done!</h3>
        <p className="mt-2 text-muted">
          WhatsApp has opened with your enquiry. Just press <strong>Send</strong> in WhatsApp and we will get back to you.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl(buildMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-whatsapp px-6 font-semibold text-white hover:bg-whatsapp-dark"
          >
            <WhatsAppIcon /> Open WhatsApp again
          </a>
          <button
            type="button"
            onClick={() => {
              setValues(initial)
              setSent(false)
            }}
            className="inline-flex min-h-12 items-center justify-center rounded-full px-6 font-semibold text-navy-900 ring-1 ring-navy-900/15 hover:bg-navy-50"
          >
            Send another enquiry
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8" aria-labelledby="enquiry-form-title">
      <h2 id="enquiry-form-title" className="text-2xl font-extrabold">
        Send an Enquiry
      </h2>
      <p className="mt-1 text-sm text-muted">
        Fill in what you know — we'll help with the rest. Your enquiry will be sent through WhatsApp.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name <span className="text-red-600">*</span></label>
          <input id="name" name="name" autoComplete="name" required value={values.name} onChange={update} className={field} {...aria('name')} />
          {err('name')}
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone Number <span className="text-red-600">*</span></label>
          <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required value={values.phone} onChange={update} className={field} {...aria('phone')} />
          {err('phone')}
        </div>
        <div>
          <label htmlFor="email" className={label}>Email</label>
          <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={update} className={field} {...aria('email')} />
          {err('email')}
        </div>
        <div>
          <label htmlFor="destination" className={label}>Travel Destination</label>
          <input id="destination" name="destination" value={values.destination} onChange={update} className={field} placeholder="Where would you like to go?" />
        </div>
        <div>
          <label htmlFor="date" className={label}>Travel Date</label>
          <input id="date" name="date" type="date" value={values.date} onChange={update} className={field} />
        </div>
        <div>
          <label htmlFor="travelers" className={label}>Number of Travelers</label>
          <input id="travelers" name="travelers" type="number" min="1" inputMode="numeric" value={values.travelers} onChange={update} className={field} {...aria('travelers')} />
          {err('travelers')}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={label}>Message</label>
          <textarea id="message" name="message" rows={4} value={values.message} onChange={update} className={field} placeholder="Tell us about your trip plans" />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-6 font-semibold text-navy-950 transition hover:-translate-y-0.5 hover:bg-amber-400 sm:w-auto"
      >
        <Send className="h-5 w-5" aria-hidden="true" /> Send Enquiry
      </button>
      <p className="mt-3 text-xs text-muted">
        Submitting opens WhatsApp with your details pre-filled.
        {hasEmail() && (
          <>
            {' '}Prefer email?{' '}
            <a href={emailHref('Trip enquiry')} className="font-semibold text-navy-700 underline">Email us</a>.
          </>
        )}
      </p>
    </form>
  )
}
