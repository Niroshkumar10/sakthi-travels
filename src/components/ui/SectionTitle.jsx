import Reveal from './Reveal'

export default function SectionTitle({ eyebrow, title, subtitle, align = 'center', as: Heading = 'h2', light = false }) {
  const centered = align === 'center'
  return (
    <Reveal className={`mb-10 max-w-2xl sm:mb-12 ${centered ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-bold tracking-[0.18em] uppercase ${light ? 'text-amber-400' : 'text-amber-600'}`}>
          {eyebrow}
        </p>
      )}
      <Heading className={`text-3xl font-extrabold sm:text-4xl ${light ? 'text-white' : ''}`}>{title}</Heading>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/80' : 'text-muted'}`}>{subtitle}</p>
      )}
    </Reveal>
  )
}
