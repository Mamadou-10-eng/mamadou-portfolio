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

      <ol className="experience__timeline">
        {experienceItems.map((item, index) => (
          <li key={item.id} className="experience__item">
            <span className="experience__index" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="experience__content">
              <h3 className="experience__item-title">{item.title}</h3>
              <p className="experience__item-description">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
