import { skillCategories } from '../data/skills'
import SectionHeading from './SectionHeading'

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

      <div className="skills__grid">
        {skillCategories.map((category) => (
          <article key={category.id} className="skills__category">
            <h3 className="skills__category-title">{category.title}</h3>
            <ul className="skills__list">
              {category.skills.map((skill) => (
                <li key={skill} className="skills__tag">
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
