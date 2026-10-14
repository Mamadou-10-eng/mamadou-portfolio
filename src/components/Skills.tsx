import { skillCategories } from '../data/skills'
import { hasSkillIcon } from '../data/skillIcons'
import { useReveal } from '../hooks/useReveal'
import { sectionClass } from '../styles/layout'
import SectionHeading from './SectionHeading'
import SkillIcon from './SkillIcon'

const REVEAL_DELAYS = [
  '[--reveal-delay:0ms]',
  '[--reveal-delay:80ms]',
  '[--reveal-delay:160ms]',
  '[--reveal-delay:240ms]',
]

const skillTileClass =
  'inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg-elevated transition-colors duration-200 hover:border-accent/50'

export default function Skills() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="skills" className={sectionClass} aria-labelledby="skills-title">
      <SectionHeading
        id="skills-title"
        eyebrow="Skills"
        title="Technologies I work with"
        description="Tools and technologies I use across frontend, backend, databases, and workflow."
      />

      <div ref={ref} className="reveal-group border-t border-border">
        {skillCategories.map((category, index) => (
          <article
            key={category.id}
            className={`reveal-child grid gap-4 border-b border-border py-6 sm:grid-cols-[10rem_1fr] sm:items-center sm:gap-8 ${REVEAL_DELAYS[index] ?? ''}`}
          >
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-3 list-none">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  title={skill}
                  className={skillTileClass}
                >
                  {hasSkillIcon(skill) ? (
                    <>
                      <SkillIcon skill={skill} />
                      <span className="sr-only">{skill}</span>
                    </>
                  ) : (
                    <span className="px-1 text-[0.8rem] font-medium">
                      {skill}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}