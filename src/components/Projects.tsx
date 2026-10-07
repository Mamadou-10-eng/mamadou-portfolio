import { projects } from '../data/projects'
import { hasUrl } from '../data/site'
import type { Project } from '../types'
import ExternalLink from './ExternalLink'
import SectionHeading from './SectionHeading'

function ProjectCard({ project }: { project: Project }) {
  const statusClass =
    project.status === 'Live'
      ? 'project-card__status project-card__status--live'
      : 'project-card__status project-card__status--dev'

  return (
    <article className="project-card">
      <div className="project-card__media">
        {project.imageSrc ? (
          <img
            src={project.imageSrc}
            alt={project.imageAlt ?? `${project.title} screenshot`}
            className="project-card__image"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="project-card__placeholder" aria-hidden="true">
            <span>{project.title}</span>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <h3 className="project-card__title">{project.title}</h3>
          <span className={statusClass}>{project.status}</span>
        </div>

        <p className="project-card__description">{project.description}</p>

        <ul className="project-card__tech" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          {hasUrl(project.liveUrl) ? (
            <ExternalLink href={project.liveUrl} className="btn btn--primary btn--small">
              Live Demo
            </ExternalLink>
          ) : null}
          {hasUrl(project.githubUrl) ? (
            <ExternalLink
              href={project.githubUrl}
              className="btn btn--secondary btn--small"
            >
              GitHub
            </ExternalLink>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section projects"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        id="projects-title"
        eyebrow="Projects"
        title="Featured work"
        description="Selected projects that show how I build and ship practical web applications."
      />

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
