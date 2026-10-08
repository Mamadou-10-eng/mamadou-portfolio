import { hasUrl, siteConfig, socialLinks } from '../data/site'
import ExternalLink from './ExternalLink'

const COPYRIGHT_YEAR = 2026

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-border bg-white/55">
      <div className="mx-auto grid w-[min(100%_-_2rem,70rem)] gap-4 pt-9 pb-10">
        <div className="site-footer__identity">
          <p className="font-display font-bold text-text-strong">
            {siteConfig.name}
          </p>
          <p className="mt-1 text-[0.95rem] text-text-muted">
            {siteConfig.title}
          </p>
        </div>

        {(hasUrl(socialLinks.github) || hasUrl(socialLinks.linkedin)) && (
          <ul className="flex list-none gap-[1.1rem]" aria-label="Footer social links">
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

        <p className="mt-2 text-[0.92rem] text-text-muted">
          © {COPYRIGHT_YEAR} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
