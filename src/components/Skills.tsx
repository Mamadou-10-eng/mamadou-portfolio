import { skillCategories } from '../data/skills'
import SectionHeading from './SectionHeading'

const STAGGER_DELAYS = [
  '',
  '[&:nth-child(2)]:[animation-delay:0.06s]',
  '[&:nth-child(3)]:[animation-delay:0.12s]',
  '[&:nth-child(4)]:[animation-delay:0.18s]',
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills"
      aria-labelledby="skills-title"
    >
      <SectionHeading
        id="skills-title"
        eyebrow="Skills"
        title="Technologies I work with"
        description="Tools and technologies I use across frontend, backend, databases, and workflow."
      />

      <div className="grid grid-cols-2 gap-[1.15rem] [@media(max-width:900px)]:grid-cols-1">
        {skillCategories.map((category, index) => (
          <article
            key={category.id}
            className={`bg-bg-elevated border border-border rounded-card py-[1.35rem] px-[1.4rem] [@media(max-width:480px)]:px-[1.15rem] shadow-card motion-safe:animate-rise-in ${STAGGER_DELAYS[index] ?? ''}`}
          >
            <h3 className="mb-4 font-display text-[1.15rem] font-bold text-text-strong">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-[0.55rem] list-none">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="py-[0.4rem] px-3 rounded-[999px] bg-bg-muted border border-transparent text-text-strong text-[0.92rem] font-semibold"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
