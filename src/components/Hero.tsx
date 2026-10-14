import { siteConfig } from '../data/site'
import { sectionClass } from '../styles/layout'
import ProfilePhoto from './ProfilePhoto'

const btnBase =
  'inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent px-6 py-3 font-semibold no-underline transition-[background-color,color,border-color,transform] duration-200 hover:-translate-y-px max-md:flex-auto'
const btnPrimary = `${btnBase} bg-accent text-bg hover:bg-accent-strong`
const btnSecondary = `${btnBase} border-border-strong bg-transparent text-text-strong hover:border-accent hover:bg-accent-soft hover:text-accent-strong`

export default function Hero() {
  return (
    <section
      id="home"
      className={`${sectionClass} grid min-h-[calc(100svh_-_var(--header-height))] grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] items-center gap-x-12 gap-y-10 pt-16 max-[900px]:grid-cols-[1fr] max-[900px]:gap-10 max-[900px]:pt-14 max-[900px]:min-h-0 min-[769px]:max-[900px]:pt-11`}
      aria-labelledby="hero-name"
    >
      <div className="hero-stagger max-[900px]:text-center">
        <p className="mb-4 flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-accent max-[900px]:justify-center [--d:0ms]">
          <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
          {siteConfig.location}
        </p>
        <h1
          id="hero-name"
          className="font-display text-balance text-[clamp(2.75rem,6.5vw,5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-text-strong [--d:80ms]"
        >
          {siteConfig.name}
        </h1>
        <p className="mt-3 font-display text-[clamp(1.15rem,2.2vw,1.4rem)] font-semibold tracking-[-0.01em] text-text-muted [--d:160ms]">
          {siteConfig.title}
        </p>
        <p className="mt-6 max-w-[34rem] text-[1.125rem] leading-[1.7] text-text [--d:240ms]">
          {siteConfig.tagline}
        </p>
        <p className="mt-7 inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-border py-2 pr-4 pl-4 font-medium text-[0.9rem] text-text-strong [--d:320ms]">
          <span className="text-[0.7rem] font-semibold tracking-[0.12em] uppercase text-text-muted">
            Direction
          </span>
          {siteConfig.careerDirection}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 [--d:400ms] max-md:w-full max-[900px]:justify-center">
          <a href="#projects" className={btnPrimary}>
            View Projects
          </a>
          <a href="#contact" className={btnSecondary}>
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-stagger flex justify-center max-[900px]:order-[-1]">
        <div className="[--d:200ms]">
          <ProfilePhoto />
        </div>
      </div>
    </section>
  )
}