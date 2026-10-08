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
  return (
    <header className="max-w-[40rem] mb-10">
      {eyebrow ? (
        <p className="mb-[0.6rem] text-[0.8rem] font-bold tracking-[0.14em] uppercase text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-display text-[clamp(1.85rem,3vw,2.55rem)] font-bold tracking-[-0.03em] leading-[1.15] text-text-strong"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-[0.85rem] max-w-[36rem] text-text-muted">
          {description}
        </p>
      ) : null}
    </header>
  )
}
