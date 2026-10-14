import profilePhotoSrc from '../assets/profile'
import { profilePhoto } from '../data/site'

const frameClass =
  'relative isolate aspect-square w-[clamp(11rem,32vw,20rem)]'

const glowBackground =
  '[background:conic-gradient(from_140deg,rgba(91,140,255,0.7),rgba(34,211,238,0.6),rgba(167,139,250,0.6),rgba(91,140,255,0.7))]'
const ringBackground =
  '[background:conic-gradient(from_0deg,var(--color-accent),#22d3ee,#a78bfa,var(--color-accent))]'

const effectBase = 'pointer-events-none absolute rounded-full will-change-transform'

const glowClass = `${effectBase} inset-[-0.7rem] opacity-45 blur-[16px] max-[480px]:inset-[-0.45rem] motion-safe:animate-profile-spin-slow ${glowBackground}`
const ringClass = `${effectBase} inset-0 motion-safe:animate-profile-spin ${ringBackground}`
const particlesClass = `${effectBase} inset-[-0.35rem] max-[480px]:inset-[-0.25rem] motion-safe:animate-profile-spin-fast`

const particleClass =
  'absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#67e8f9] shadow-[0_0_10px_2px_rgba(34,211,238,0.6)]'

const PARTICLES = [
  { left: '100%', top: '50%' },
  { left: '25%', top: '93.3%' },
  { left: '75%', top: '93.3%' },
]

function FrameEffects() {
  return (
    <>
      <span aria-hidden="true" className={glowClass} />
      <span aria-hidden="true" className={ringClass} />
      <span aria-hidden="true" className={particlesClass}>
        {PARTICLES.map((particle, index) => (
          <span
            key={index}
            className={particleClass}
            style={{ left: particle.left, top: particle.top }}
          />
        ))}
      </span>
    </>
  )
}

export default function ProfilePhoto() {
  return (
    <div className={frameClass}>
      <FrameEffects />
      <div className="absolute inset-[3px] overflow-hidden rounded-full bg-bg-elevated">
        {profilePhotoSrc ? (
          <img
            src={profilePhotoSrc}
            alt={profilePhoto.alt}
            width={480}
            height={480}
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="grid h-full w-full place-items-center [background-image:radial-gradient(var(--grid-dot)_1px,transparent_1px)] [background-size:14px_14px]">
            <span className="font-display text-[4.5rem] font-bold tracking-[-0.02em] text-text-strong/90">
              MJ
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
