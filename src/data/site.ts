
import type { SocialLinks } from '../types'

/**
 * Central site configuration.
 */
export const siteConfig = {
  name: 'Mamadou Jallow',
  title: 'Junior Full-Stack Developer',
  location: 'The Gambia',
  tagline:
    'I build practical web applications and continuously improve my skills across frontend and backend development.',
  careerDirection: 'Frontend → Full-Stack → Software Engineering',
} as const

/**
 * Social and contact links.
 */
export const socialLinks: SocialLinks = {
  github: 'https://github.com/mamadou-10-eng',
  linkedin: 'https://www.linkedin.com/in/mamadou-jallow-093a3023a/',
  instagram:
    'https://www.instagram.com/mo_jallow.dev?stkn=cTNjdjJ3OTJqNzB5&utm_source=qr',
  facebook:
    'https://www.facebook.com/share/1HTR29ATLK/?mibextid=wwXIfr',
  email: 'mamadoujallow271@gmail.com',
}

/**
 * Profile photo setup.
 * Uses the existing profile photo in the project's images folder.
 */
export const profilePhoto = {
  hasProfilePhoto: true,
  alt: 'Portrait of Mamadou Jallow',
} as const

export function hasUrl(
  value: string | null | undefined,
): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export function mailtoHref(email: string): string {
  return `mailto:${email.trim()}`
}
