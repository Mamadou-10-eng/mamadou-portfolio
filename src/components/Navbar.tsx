import { useEffect, useId, useState } from 'react'
import { navLinks } from '../data/navigation'
import { siteConfig } from '../data/site'
import ThemeToggle from './ThemeToggle'

const bar =
  'block h-[2px] w-full bg-text-strong rounded-full transition-[transform,opacity] duration-200 ease-[ease]'

const navLink =
  'relative inline-flex py-[0.5rem] px-[0.7rem] no-underline text-text-muted font-medium text-[0.95rem] transition-colors duration-200 hover:text-text-strong after:absolute after:bottom-[0.15rem] after:left-[0.7rem] after:right-[0.7rem] after:h-px after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100 max-md:flex max-md:py-4 max-md:px-0 max-md:font-display max-md:text-[1.35rem] max-md:font-semibold max-md:text-text-strong max-md:after:hidden'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  function handleNavClick() {
    setIsOpen(false)
  }

  const menuPanel =
    'max-md:fixed max-md:inset-[var(--header-height)_0_0] max-md:overflow-y-auto max-md:overscroll-contain max-md:bg-surface-glass-strong max-md:backdrop-blur-[12px] max-md:px-4 max-md:pt-6 max-md:pb-10 max-md:transition-[opacity,transform,visibility] max-md:duration-300 max-md:ease-[cubic-bezier(0.22,1,0.36,1)]'
  const menuState = isOpen
    ? ' max-md:translate-y-0 max-md:opacity-100 max-md:visible'
    : ' max-md:-translate-y-2 max-md:opacity-0 max-md:invisible'

  return (
    <header className="sticky top-0 z-[100] border-b border-border">
      {/*
       * The blur lives on its own layer rather than the <header>: a
       * backdrop-filter ancestor would become the containing block for the
       * fixed-position mobile menu below, collapsing it. This sibling layer
       * keeps the header surface blurred while the panel stays viewport-fixed.
       */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-surface-glass backdrop-blur-[12px]"
      />
      <nav
        className="relative mx-auto flex min-h-[var(--header-height)] w-[min(100%-2rem,var(--container-page))] items-center justify-between gap-4 max-sm:w-[min(100%-1.25rem,var(--container-page))]"
        aria-label="Primary"
      >
        <a
          href="#home"
          className="flex items-baseline gap-2 text-[1.05rem] font-bold tracking-[-0.02em] text-text-strong no-underline transition-colors duration-200 hover:text-accent-strong"
          onClick={handleNavClick}
        >
          <span className="font-display text-accent">MJ</span>
          <span className="font-display">{siteConfig.name}</span>
        </a>

        <div className="flex items-center gap-2 max-sm:gap-1">
          <button
            type="button"
            className="hidden h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-border bg-bg-elevated p-0 max-md:inline-flex"
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            <span className="flex w-[1.15rem] flex-col gap-[5px]" aria-hidden="true">
              <span className={`${bar}${isOpen ? ' translate-y-[7px] rotate-45' : ''}`} />
              <span className={`${bar}${isOpen ? ' opacity-0' : ''}`} />
              <span className={`${bar}${isOpen ? ' -translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>

          <div id={menuId} className={`${menuPanel}${menuState}`}>
            <ul className="flex list-none items-center gap-1 max-md:flex-col max-md:items-stretch max-md:gap-0">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="max-md:border-b max-md:border-border max-md:last:border-b-0"
                >
                  <a href={link.href} className={navLink} onClick={handleNavClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}