import { hasUrl, mailtoHref, siteConfig, socialLinks } from '../data/site'
import { useReveal } from '../hooks/useReveal'
import { sectionClass } from '../styles/layout'
import SocialLinks from './SocialLinks'

const rowClass =
  'group flex items-center justify-between gap-4 border-b border-border py-5 no-underline'
const labelClass =
  'font-display text-[1.25rem] font-semibold text-text-strong transition-colors duration-200 group-hover:text-accent'
const arrowClass =
  'text-text-muted transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1'

export default function Contact() {
  const ref = useReveal<HTMLDivElement>()

  const hasAnyContact =
    hasUrl(socialLinks.email) ||
    hasUrl(socialLinks.github) ||
    hasUrl(socialLinks.linkedin) ||
    hasUrl(socialLinks.facebook) ||
    hasUrl(socialLinks.instagram)

  return (
    <section id="contact" className={sectionClass} aria-labelledby="contact-title">
      <div ref={ref} className="reveal max-w-[44rem] max-md:text-center">
        <p className="mb-3 flex items-center gap-3 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-accent max-md:justify-center">
          <span className="h-px w-6 bg-accent/50" aria-hidden="true" />
          Contact
        </p>
        <h2
          id="contact-title"
          className="font-display text-balance text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-text-strong"
        >
          Let's connect
        </h2>
        <p className="mt-4 max-w-[36rem] text-text-muted">
          Open to conversations about internships, collaboration, mentoring, and
          practical web projects.
        </p>

        <p className="mt-8 leading-[1.75] text-text">
          The best way to reach me is through the channels below. I am based in{' '}
          {siteConfig.location} and focused on growing as a{' '}
          {siteConfig.title.toLowerCase()}.
        </p>

        {hasAnyContact ? (
          <div className="mt-10">
            {hasUrl(socialLinks.email) ? (
              <ul className="border-t border-border list-none">
                <li>
                  <a href={mailtoHref(socialLinks.email)} className={rowClass}>
                    <span className={labelClass}>Email</span>
                    <span className={arrowClass} aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              </ul>
            ) : null}
            <SocialLinks className="mt-6 max-md:justify-center" />
          </div>
        ) : (
          <p className="mt-6 text-text-muted">
            Contact details are being prepared. Add your email and social profile
            URLs in{' '}
            <code className="rounded-md bg-bg-muted px-[0.4em] py-[0.15em] font-mono text-[0.9em] text-text-strong">
              src/data/site.ts
            </code>{' '}
            to enable these links.
          </p>
        )}
      </div>
    </section>
  )
}