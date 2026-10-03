import { useState } from 'react'

// Light/dark mode. The saved choice is applied before first paint by a script in index.html.
export default function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  const toggle = () => {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    try { localStorage.setItem('theme', next ? 'dark' : 'light') } catch { /* ignore */ }
    setDark(next)
  }
  return [dark, toggle]
}
