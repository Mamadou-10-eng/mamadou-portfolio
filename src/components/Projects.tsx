import { projects } from '../data/projects'
import { hasUrl } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import { sectionClass } from '../styles/layout'
import type { Project } from '../types'
import ExternalLink from './ExternalLink'
import SectionHeading from './SectionHeading'

const statusPill =
  'inline-flex items-center rounded-full px-[0.65rem] py-1 text-[0.7rem] font-semibold uppercase tracking-[0.06em] whitespace-nowrap'

function ProjectCard({
  project,
  index,
  reversed,
}: {
  project: Project
  index: number
  reversed?: boolean
}) {
  const ref = useReveal<HTMLElement>()

  const statusClass =
    project.status === 'Live'
      ? `${statusPill} text-live bg-live-bg`
      : `${statusPill} text-dev bg-dev-bg`

  return (
    <article
      ref={ref}
      className="reveal group grid gap-6 border-b border-border py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14 lg:py-16"
    >
      <div
        className={`overflow-hidden rounded-[20px] border border-border bg-bg-elevated transition-colors duration-300 group-hover:border-border-strong ${reversed ? 'lg:order-2' : ''}`}
      >
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={project.imageAlt ?? `${project.title} screenshot`}
            className="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="flex aspect-[16/10] flex-col overflow-hidden">
            <div
              className="flex items-center gap-1.5 border-b border-border px-4 py-3"
              aria-hidden="true"
            >
              <span className="h-2 w-2 rounded-full bg-text-strong/10" />
              <span className="h-2 w-2 rounded-full bg-text-strong/10" />
              <span className="h-2 w-2 rounded-full bg-text-strong/10" />
            </div>
            <div
              className="grid flex-1 place-items-center px-6 text-center [background-image:radial-gradient(var(--grid-dot)_1px,transparent_1px)] [background-size:16px_16px]"
              aria-hidden="true"
            >
              <span className="font-display text-[1.5rem] font-semibold text-text-strong/10">
                {project.title}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className={statusClass}>{project.status}</span>
        </div>

        <h3 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-text-strong">
          {project.title}
        </h3>

        <p className="max-w-[36rem] leading-[1.7] text-text">
          {project.description}
        </p>

        <ul
          className="flex list-none flex-wrap items-center gap-x-4 gap-y-2"
          aria-label="Technologies used"
        >
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="text-[0.8rem] font-medium uppercase tracking-[0.06em] text-text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-2 flex flex-wrap gap-7">
          {hasUrl(project.liveUrl) ? (
            <ExternalLink
              href={project.liveUrl}
              className="group/link inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-accent transition-colors duration-200 hover:text-accent-strong"
            >
              Live Demo
              <span
                className="transition-transform duration-200 group-hover/link:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </ExternalLink>
          ) : null}
          {hasUrl(project.githubUrl) ? (
            <ExternalLink
              href={project.githubUrl}
              className="group/link inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-accent transition-colors duration-200 hover:text-accent-strong"
            >
              GitHub
              <span
                className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                aria-hidden="true"
              >
                ↗
              </span>
            </ExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className={sectionClass} aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        eyebrow="Projects"
        title="Featured work"
        description="Selected projects that show how I build and ship practical web applications."
      />

      <div className="border-t border-border">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  )
}