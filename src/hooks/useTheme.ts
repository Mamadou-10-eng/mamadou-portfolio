import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'

/** Reads the theme already written to <html> by the no-flash inline script. */
function readTheme(): Theme {
  if (typeof document === 'undefined') return 'dark'
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches
  )
}

/**
 * Manages the light/dark theme. The initial value comes from the inline script
 * in index.html (saved choice, else the OS preference), so this only keeps the
 * DOM in sync and persists explicit toggles to localStorage.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme)

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'light' ? '#f6f8fc' : '#080b12')
  }, [theme])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    const next: Theme = root.dataset.theme === 'light' ? 'dark' : 'light'

    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage unavailable (private mode): keep the in-memory choice */
    }

    if (prefersReducedMotion()) {
      root.classList.add('theme-transition')
      window.setTimeout(() => root.classList.remove('theme-transition'), 400)
    }

    setTheme(next)
  }, [])

  return { theme, toggleTheme }
}
