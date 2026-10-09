import { Car, Snowflake, Luggage, UserCheck, Users } from 'lucide-react'
import Img from '../ui/Img'
import Ph from '../ui/Ph'

export const vehicleSpecs = (vehicle) => [
  { icon: Users, label: 'Seating', value: vehicle.specs.seating },
  { icon: Snowflake, label: 'Air conditioning', value: vehicle.specs.ac },
  { icon: Luggage, label: 'Luggage', value: vehicle.specs.luggage },
  { icon: UserCheck, label: 'Driver included', value: vehicle.specs.driverIncluded },
]

/** The vehicle photo, or a clearly-labelled panel until a real photo of the actual vehicle is supplied. */
export function VehiclePhoto({ vehicle, className = 'aspect-[4/3]', priority = false }) {
  if (vehicle.image) {
    return (
      <Img
        image={vehicle.image}
        priority={priority}
        className={`rounded-3xl ${className}`}
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    )
  }
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-navy-800 to-navy-950 text-center text-white ${className}`}
      role="img"
      aria-label="Vehicle photo coming soon"
    >
      <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
      <div className="relative grid h-20 w-20 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
        <Car className="h-10 w-10 text-amber-400" aria-hidden="true" />
      </div>
      <p className="relative mt-4 text-lg font-semibold">Vehicle photo coming soon</p>
      <p className="relative mt-1 px-6 text-sm text-white/70">A photo of our actual vehicle will be added here.</p>
    </div>
  )
}

/** Compact spec grid for the single vehicle. */
export default function VehicleCard({ vehicle, columns = 'grid-cols-2' }) {
  return (
    <dl className={`grid gap-3 ${columns}`}>
      {vehicleSpecs(vehicle).map(({ icon: Icon, label, value }) => (
        <div key={label} className="card flex items-center gap-3 p-4">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-600">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <dt className="text-xs font-medium tracking-wide text-muted uppercase">{label}</dt>
            <dd className="break-words font-semibold text-navy-900">
              <Ph>{value}</Ph>
            </dd>
          </div>
        </div>
      ))}
    </dl>
  )
}
