import { hasUrl, siteConfig, socialLinks } from '../data/site'
import ExternalLink from './ExternalLink'

const COPYRIGHT_YEAR = 2026

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__identity">
          <p className="site-footer__name">{siteConfig.name}</p>
          <p className="site-footer__title">{siteConfig.title}</p>
        </div>

        {(hasUrl(socialLinks.github) || hasUrl(socialLinks.linkedin)) && (
          <ul className="site-footer__links" aria-label="Footer social links">
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

        <p className="site-footer__copy">
          © {COPYRIGHT_YEAR} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
