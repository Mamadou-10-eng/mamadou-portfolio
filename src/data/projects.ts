import type { Project } from '../types'

/**
 * Featured projects.
 * To add a screenshot later:
 * 1. Place the image in src/assets/projects/ (e.g. alhuda.png)
 * 2. Import it at the top of this file
 * 3. Set `imageSrc` and `imageAlt` on the project
 *
 * Only set `githubUrl` when you have a real public repository URL.
 */
export const projects: Project[] = [
  {
    id: 'alhuda-school',
    title: 'Al-Huda Islamic Bilingual School',
    description:
      'A bilingual school website built for Al-Huda Islamic Bilingual School, presenting information about the school, its programs and activities.',
    technologies: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    status: 'Live',
    liveUrl: 'https://alhuda-production.vercel.app/',
  },
  {
    id: 'chop-chop',
    title: 'Chop-Chop Restaurant Website',
    description:
      'A responsive restaurant website project built as part of my software-development training.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    status: 'Live',
    liveUrl:
      'https://5-chop-chop-restaurant-website-react-4h5pym5wb.vercel.app/',
  },
  {
    id: 'waec-prep',
    title: 'WAEC Prep Gambia',
    description:
      'A learning platform project focused on helping students prepare for WAEC examinations in The Gambia.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    status: 'In development',
  },
]
