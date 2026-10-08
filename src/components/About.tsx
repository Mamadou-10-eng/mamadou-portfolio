import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <SectionHeading id="about-title" eyebrow="About" title="Building with intention" />
      <div className="grid max-w-[42rem] gap-4 [&_p]:text-[1.08rem]">
        <p>
          I am a junior developer from The Gambia. I have been developing my
          skills through structured software-development training and practical
          projects.
        </p>
        <p>
          I work with frontend technologies and am expanding into backend
          development as I progress toward full-stack software engineering.
        </p>
        <p>
          I care about understanding how software works rather than blindly
          copying code — writing clearer solutions, learning from each project,
          and improving steadily.
        </p>
      </div>
    </section>
  )
}
