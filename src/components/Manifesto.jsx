import { useEffect, useRef, useState } from 'react'
import { display, pad } from '../ui.js'

const TEXT = 'I build full-stack web applications. Django backends, REST APIs and React interfaces that work together, from the database to the screen.'

// Words light up from grey to full colour as the section scrolls into view.
// The scroll listener only runs while the section is near the screen, throttled with requestAnimationFrame.
export default function Manifesto() {
  const ref = useRef(null)
  const words = TEXT.split(' ')
  const [lit, setLit] = useState(0)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setLit(words.length); return }
    let ticking = false
    const calc = () => {
      ticking = false
      const p = (innerHeight * 0.85 - ref.current.getBoundingClientRect().top) / (innerHeight * 0.55)
      setLit(Math.round(Math.min(Math.max(p, 0), 1) * words.length))
    }
    const on = () => { if (!ticking) { ticking = true; requestAnimationFrame(calc) } }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { on(); addEventListener('scroll', on, { passive: true }) } else removeEventListener('scroll', on)
    }, { rootMargin: '100px' })
    io.observe(ref.current)
    return () => { io.disconnect(); removeEventListener('scroll', on) }
  }, [words.length])
  return (
    <section className={`${pad} flex min-h-[70vh] items-center py-24 md:min-h-screen md:py-32`}>
      <h2 ref={ref} className={`${display} max-w-[90vw] text-[clamp(1.7rem,5.2vw,5.2rem)] leading-[1.05]`}>
        {words.map((w, i) => (
          <span key={i} className={`transition-colors duration-500 ${i < lit ? 'text-ink' : 'text-ink/10'}`}>{w}{' '}</span>
        ))}
      </h2>
    </section>
  )
}
