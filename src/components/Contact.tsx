import { hasUrl, mailtoHref, siteConfig, socialLinks } from '../data/site'
import ExternalLink from './ExternalLink'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const hasAnyContact =
    hasUrl(socialLinks.email) ||
    hasUrl(socialLinks.github) ||
    hasUrl(socialLinks.linkedin)

  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-title"
    >
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title="Let’s connect"
        description="Open to conversations about internships, collaboration, mentoring, and practical web projects."
      />

      <div className="contact__panel">
        <p className="contact__lead">
          The best way to reach me is through the channels below. I am based in{' '}
          {siteConfig.location} and focused on growing as a{' '}
          {siteConfig.title.toLowerCase()}.
        </p>

        {hasAnyContact ? (
          <ul className="contact__links">
            {hasUrl(socialLinks.email) ? (
              <li>
                <a
                  href={mailtoHref(socialLinks.email)}
                  className="btn btn--primary"
                >
                  Email Me
                </a>
              </li>
            ) : null}
            {hasUrl(socialLinks.github) ? (
              <li>
                <ExternalLink
                  href={socialLinks.github}
                  className="btn btn--secondary"
                >
                  GitHub
                </ExternalLink>
              </li>
            ) : null}
            {hasUrl(socialLinks.linkedin) ? (
              <li>
                <ExternalLink
                  href={socialLinks.linkedin}
                  className="btn btn--secondary"
                >
                  LinkedIn
                </ExternalLink>
              </li>
            ) : null}
          </ul>
        ) : (
          <p className="contact__placeholder">
            Contact details are being prepared. Add your email, GitHub, and
            LinkedIn URLs in <code>src/data/site.ts</code> to enable these links.
          </p>
        )}
      </div>
    </section>
  )
}
