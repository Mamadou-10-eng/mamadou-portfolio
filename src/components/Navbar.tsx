import { useEffect, useId, useState } from 'react'
import { navLinks } from '../data/navigation'
import { siteConfig } from '../data/site'

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

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary">
        <a href="#home" className="navbar__brand" onClick={handleNavClick}>
          {siteConfig.name}
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="visually-hidden">
            {isOpen ? 'Close menu' : 'Open menu'}
          </span>
          <span className="navbar__toggle-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>

        <div
          id={menuId}
          className={`navbar__menu${isOpen ? ' is-open' : ''}`}
        >
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}
