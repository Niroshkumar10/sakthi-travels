import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Ph from '../ui/Ph'

/** Accessible accordion. `items`: [{ question, answer }] */
export default function FAQ({ items, title = 'Frequently Asked Questions', headingLevel: H = 'h2' }) {
  const [open, setOpen] = useState(0)
  const baseId = useId()
  if (!items?.length) return null

  return (
    <div>
      {title && <H className="mb-6 text-2xl font-extrabold sm:text-3xl">{title}</H>}
      <div className="divide-y divide-navy-900/10 overflow-hidden rounded-2xl bg-white ring-1 ring-navy-900/10">
        {items.map((item, i) => {
          const isOpen = open === i
          const panelId = `${baseId}-panel-${i}`
          const buttonId = `${baseId}-button-${i}`
          return (
            <div key={i}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy-900 transition hover:bg-navy-50/60 sm:px-6"
                >
                  <Ph>{item.question}</Ph>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-amber-600 transition duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 leading-relaxed text-muted sm:px-6">
                    <Ph>{item.answer}</Ph>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
