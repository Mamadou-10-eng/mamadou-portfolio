import { siteConfig } from '../data/site'

const COPYRIGHT_YEAR = 2026

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-[min(100%-2rem,var(--container-page))] flex-col gap-5 py-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-[0.95rem] font-semibold text-text-strong">
            {siteConfig.name}
          </p>
          <p className="mt-0.5 text-[0.85rem] text-text-muted">
            {siteConfig.title}
          </p>
        </div>

        <p className="text-[0.85rem] text-text-muted">
          © {COPYRIGHT_YEAR} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}