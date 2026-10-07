import type { SocialLinks } from '../types'

/**
 * Central site configuration.
 * Fill in the placeholders below when you have the real values.
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
 * Social / contact placeholders.
 * Set a value to a real URL or email string when ready.
 * Leave as `null` until then — links will stay hidden.
 */
export const socialLinks: SocialLinks = {
  github: null,
  linkedin: null,
  email: null,
}

/**
 * Profile photo setup:
 * 1. Add your photo at: src/assets/profile.jpg
 * 2. Set `hasProfilePhoto` to `true` below
 * 3. The Hero will import and display it automatically
 */
export const profilePhoto = {
  /** Set to true after adding src/assets/profile.jpg */
  hasProfilePhoto: false,
  alt: 'Portrait of Mamadou Jallow',
} as const

export function hasUrl(value: string | null | undefined): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

export function mailtoHref(email: string): string {
  return `mailto:${email.trim()}`
}
