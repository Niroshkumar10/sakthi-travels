import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { RotateCcw, SlidersHorizontal } from 'lucide-react'
import Seo from '../components/ui/Seo'
import PageHeader from '../components/ui/PageHeader'
import TourCard from '../components/cards/TourCard'
import Reveal from '../components/ui/Reveal'
import PlaceholderNote from '../components/ui/PlaceholderNote'
import CTASection from '../components/sections/CTASection'
import { tours } from '../data/tours'
import { destinations } from '../data/destinations'
import { sampleImages } from '../data/images'
import { isPlaceholder } from '../utils/contact'

const unique = (arr) => [...new Set(arr.filter(Boolean))]

function FilterSelect({ id, label, value, onChange, options }) {
  return (
    <div className="min-w-0 flex-1">
      <label htmlFor={id} className="text-xs font-semibold tracking-wide text-muted uppercase">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 block min-h-12 w-full rounded-xl border-0 bg-surface px-4 text-base font-medium text-navy-900 ring-1 ring-navy-900/10 focus:ring-2 focus:ring-amber-500 focus:outline-none"
      >
        <option value="">All</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default function Tours() {
  const [params, setParams] = useSearchParams()
  const destination = params.get('destination') ?? ''
  const duration = params.get('duration') ?? ''
  const type = params.get('type') ?? ''

  // Filter options are built from the tour data, so only real categories appear.
  const destinationOptions = unique(tours.map((t) => t.destinationSlug)).map((slug) => ({
    value: slug,
    label: destinations.find((d) => d.slug === slug)?.name ?? tours.find((t) => t.destinationSlug === slug).destination,
  }))
  const durationOptions = unique(tours.map((t) => t.duration))
    .filter((d) => !isPlaceholder(d))
    .map((d) => ({ value: d, label: d }))
  const typeOptions = unique(tours.flatMap((t) => t.tripTypes)).map((t) => ({ value: t, label: t }))

  const setFilter = (key) => (value) => {
    const next = new URLSearchParams(params)
    value ? next.set(key, value) : next.delete(key)
    setParams(next, { replace: true, preventScrollReset: true })
  }

  const filtered = useMemo(
    () =>
      tours.filter(
        (t) =>
          (!destination || t.destinationSlug === destination) &&
          (!duration || t.duration === duration) &&
          (!type || t.tripTypes.includes(type)),
      ),
    [destination, duration, type],
  )
  const hasFilters = destination || duration || type

  return (
    <>
      <Seo
        title="Minnal Travels | Tour Packages & Trips"
        description="Browse Minnal Travels tour packages and trips. Compare destinations and durations, view itineraries and enquire on WhatsApp."
        image={sampleImages.mistyHills}
      />
      <PageHeader
        title="Explore Our Tours & Trips"
        subtitle="Find the trip that suits you, then send us a WhatsApp enquiry for availability and pricing."
        image={sampleImages.mistyHills}
        breadcrumbs={[{ label: 'Tours & Trips' }]}
      />

      <section className="bg-surface pt-8 pb-16 sm:pb-24">
        <div className="container-x">
          {/* Filters */}
          <div className="card relative z-10 -mt-14 p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-2 font-semibold text-navy-900">
              <SlidersHorizontal className="h-5 w-5 text-amber-600" aria-hidden="true" /> Filter trips
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:items-end">
              <FilterSelect id="f-destination" label="Destination" value={destination} onChange={setFilter('destination')} options={destinationOptions} />
              {durationOptions.length > 0 && (
                <FilterSelect id="f-duration" label="Duration" value={duration} onChange={setFilter('duration')} options={durationOptions} />
              )}
              {typeOptions.length > 0 && (
                <FilterSelect id="f-type" label="Trip Type" value={type} onChange={setFilter('type')} options={typeOptions} />
              )}
              {hasFilters && (
                <button
                  type="button"
                  onClick={() => setParams({}, { replace: true, preventScrollReset: true })}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 font-semibold text-navy-700 ring-1 ring-navy-900/10 hover:bg-navy-50"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset
                </button>
              )}
            </div>
          </div>

          {tours.some((t) => isPlaceholder(t.title)) && (
            <PlaceholderNote className="mt-6">
              The packages below are placeholders. Duration and Trip Type filters appear automatically once real tour
              durations and categories are added.
            </PlaceholderNote>
          )}

          <p className="mt-8 mb-5 text-sm text-muted" aria-live="polite">
            Showing {filtered.length} of {tours.length} trips
          </p>

          {filtered.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((tour, i) => (
                <Reveal key={tour.slug} delay={(i % 3) * 80}>
                  <TourCard tour={tour} headingLevel="h2" />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="card p-10 text-center">
              <h2 className="text-xl font-bold">No trips match these filters</h2>
              <p className="mt-2 text-muted">Try a different filter — or tell us where you want to go and we'll plan it.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Don't see the trip you want?"
        text="Tell us your destination, dates and group size — we'll let you know what we can arrange."
      />
    </>
  )
}
