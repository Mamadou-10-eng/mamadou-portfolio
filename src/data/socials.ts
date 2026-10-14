export type SocialId = 'github' | 'linkedin' | 'facebook' | 'instagram'

export interface SocialProfile {
  id: SocialId
  label: string
  href: string
}

/**
 * Public social profiles. Order determines display order everywhere
 * (hero, header, footer, contact). URLs are exact — do not edit.
 */
export const socialProfiles: SocialProfile[] = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/mamadou-10-eng',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mamadou-jallow-093a3023a/',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1HTR29ATLK/?mibextid=wwXIfr',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/mo_jallow.dev?stkn=cTNjdjJ3OTJqNzB5&utm_source=qr',
  },
]