import { experienceItems } from '../data/experience'
import { useReveal } from '../hooks/useReveal'
import { sectionClass } from '../styles/layout'
import SectionHeading from './SectionHeading'

const REVEAL_DELAYS = [
  '[--reveal-delay:0ms]',
  '[--reveal-delay:80ms]',
  '[--reveal-delay:160ms]',
  '[--reveal-delay:240ms]',
]

export default function Experience() {
  const ref = useReveal<HTMLOListElement>()

  return (
    <section
      id="experience"
      className={sectionClass}
      aria-labelledby="experience-title"
    >
      <SectionHeading
        id="experience-title"
        eyebrow="Experience"
        title="Learning and building journey"
        description="An honest look at how I have been developing as a software developer."
      />

      <ol
        ref={ref}
        className="reveal-group relative ml-1 grid list-none gap-10 border-l border-border pl-8"
      >
        {experienceItems.map((item, index) => (
          <li
            key={item.id}
            className={`reveal-child relative ${REVEAL_DELAYS[index] ?? ''}`}
          >
            <span
              className="absolute -left-11 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-bg font-display text-[0.7rem] font-semibold text-accent"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-[1.15rem] font-semibold text-text-strong">
              {item.title}
            </h3>
            <p className="mt-2 max-w-[42rem] leading-[1.7] text-text">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}