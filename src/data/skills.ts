import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: ['Python', 'Node.js fundamentals', 'Express fundamentals'],
  },
  {
    id: 'database',
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL fundamentals', 'Prisma fundamentals'],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Vite', 'Vercel'],
  },
]
