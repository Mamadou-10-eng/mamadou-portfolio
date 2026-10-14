import { useReveal } from '../hooks/useReveal'
import { sectionClass } from '../styles/layout'
import SectionHeading from './SectionHeading'

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className={sectionClass} aria-labelledby="about-title">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
        <SectionHeading id="about-title" eyebrow="About" title="Building with intention" />

        <div ref={ref} className="reveal">
          <span className="mb-6 block h-8 w-[2px] bg-accent/60" aria-hidden="true" />
          <p className="max-w-[40rem] text-[1.25rem] leading-[1.75] text-text-strong">
            I am a junior developer from The Gambia. I have been developing my
            skills through structured software-development training and practical
            projects.
          </p>
          <p className="mt-5 max-w-[40rem] leading-[1.75] text-text">
            I work with frontend technologies and am expanding into backend
            development as I progress toward full-stack software engineering.
          </p>
          <p className="mt-5 max-w-[40rem] leading-[1.75] text-text">
            I care about understanding how software works rather than blindly
            copying code — writing clearer solutions, learning from each project,
            and improving steadily.
          </p>
        </div>
      </div>
    </section>
  )
}