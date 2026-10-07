import { hasUrl, siteConfig, socialLinks } from '../data/site'
import ExternalLink from './ExternalLink'
import ProfilePhoto from './ProfilePhoto'

export default function Hero() {
  return (
    <section id="home" className="hero section" aria-labelledby="hero-name">
      <div className="hero__content">
        <p className="hero__location">{siteConfig.location}</p>
        <h1 id="hero-name" className="hero__name">
          {siteConfig.name}
        </h1>
        <p className="hero__title">{siteConfig.title}</p>
        <p className="hero__tagline">{siteConfig.tagline}</p>
        <p className="hero__direction">
          <span className="hero__direction-label">Direction</span>
          {siteConfig.careerDirection}
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--secondary">
            Contact Me
          </a>
        </div>

        {(hasUrl(socialLinks.github) || hasUrl(socialLinks.linkedin)) && (
          <ul className="hero__social" aria-label="Social profiles">
            {hasUrl(socialLinks.github) ? (
              <li>
                <ExternalLink href={socialLinks.github} className="text-link">
                  GitHub
                </ExternalLink>
              </li>
            ) : null}
            {hasUrl(socialLinks.linkedin) ? (
              <li>
                <ExternalLink href={socialLinks.linkedin} className="text-link">
                  LinkedIn
                </ExternalLink>
              </li>
            ) : null}
          </ul>
        )}
      </div>

      <div className="hero__media">
        <ProfilePhoto />
      </div>
    </section>
  )
}
