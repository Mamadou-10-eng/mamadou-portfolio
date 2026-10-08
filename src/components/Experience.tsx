import { experienceItems } from '../data/experience'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience"
      aria-labelledby="experience-title"
    >
      <SectionHeading
        id="experience-title"
        eyebrow="Experience"
        title="Learning and building journey"
        description="An honest look at how I have been developing as a software developer."
      />

      <ol className="grid list-none gap-4">
        {experienceItems.map((item, index) => (
          <li
            key={item.id}
            className="grid grid-cols-[auto_1fr] gap-y-4 gap-x-5 py-[1.35rem] px-[1.4rem] [@media(max-width:480px)]:px-[1.15rem] bg-bg-elevated border border-border rounded-card shadow-card motion-safe:animate-rise-in"
          >
            <span
              className="font-display font-bold text-[1.1rem] leading-[1.2] text-accent"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="experience__content">
              <h3 className="mb-[0.45rem] font-display text-[1.15rem] font-bold text-text-strong">
                {item.title}
              </h3>
              <p className="text-text">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
