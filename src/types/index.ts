
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
  /** GitHub profile URL */
  github: string | null

  /** LinkedIn profile URL */
  linkedin: string | null

  /** Email address without the mailto: prefix */
  email: string | null

  /** Instagram profile URL */
  instagram: string | null

  /** Facebook profile URL */
  facebook: string | null
}