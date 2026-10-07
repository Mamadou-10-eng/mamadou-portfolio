export type ProjectStatus = 'Live' | 'In development'

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  status: ProjectStatus
  liveUrl?: string
  githubUrl?: string
  /** Local image import URL. Leave undefined until a screenshot is added. */
  imageSrc?: string
  imageAlt?: string
}

export interface SkillCategory {
  id: string
  title: string
  skills: string[]
}

export interface ExperienceItem {
  id: string
  title: string
  description: string
}

export interface SocialLinks {
  /** Replace with your real GitHub profile URL, e.g. https://github.com/username */
  github: string | null
  /** Replace with your real LinkedIn profile URL */
  linkedin: string | null
  /** Replace with your real email, e.g. you@example.com (no mailto: prefix) */
  email: string | null
}
