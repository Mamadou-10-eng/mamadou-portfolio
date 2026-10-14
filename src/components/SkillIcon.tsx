import { getSkillIcon } from '../data/skillIcons'

interface SkillIconProps {
  skill: string
}

/**
 * Brand-coloured icon for a skill. Purely decorative — always pair with a text
 * label for assistive technologies.
 */
export default function SkillIcon({ skill }: SkillIconProps) {
  const icon = getSkillIcon(skill)
  if (!icon) return null

  return (
    <svg
      viewBox={icon.viewBox}
      aria-hidden="true"
      focusable="false"
      className="h-6 w-6"
    >
      {icon.raw ? (
        <g dangerouslySetInnerHTML={{ __html: icon.raw }} />
      ) : (
        icon.paths?.map((path, index) => (
          <path key={index} d={path.d} style={{ fill: path.fill }} />
        ))
      )}
    </svg>
  )
}
