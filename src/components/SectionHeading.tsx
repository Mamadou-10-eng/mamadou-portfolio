import { useReveal } from '../hooks/useReveal'

interface SectionHeadingProps {
  id?: string
  eyebrow?: string
  title: string
  description?: string
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  const ref = useReveal<HTMLElement>()

  return (
    <header ref={ref} className="reveal mb-12 max-w-[42rem] max-md:text-center">
      {eyebrow ? (
        <p className="mb-3 flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-accent max-md:justify-center">
          <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-balance text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-text-strong"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-[36rem] text-text-muted">{description}</p>
      ) : null}
    </header>
  )
}