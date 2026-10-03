import { useEffect, useRef, useState } from 'react'
import { display, mono, pad } from '../ui.js'

const stats = [
  { to: 5, label: 'Projects built' },
  { to: 2, label: 'Internships' },
  { to: 10, label: 'Certifications' },
  { to: 8.1, label: 'CGPA out of 10', decimals: 1 },
]

function CountUp({ to, decimals = 0 }) {
  const ref = useRef(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setVal(to); return }
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const start = performance.now()
      const tick = (t) => {
        const p = Math.min((t - start) / 1400, 1)
        setVal(to * (1 - Math.pow(1 - p, 3)))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [to])
  return <span ref={ref}>{val.toFixed(decimals)}</span>
}

export default function Numbers() {
  return (
    <section className={`${pad} grid grid-cols-2 gap-x-6 gap-y-16 border-t border-line py-28 text-center md:py-40 lg:grid-cols-4`}>
      {stats.map((s) => (
        <div key={s.label}>
          <div className={`${display} text-[clamp(3.5rem,8vw,9rem)]`}><CountUp to={s.to} decimals={s.decimals} /></div>
          <p className={`${mono} mt-5`}>{s.label}</p>
        </div>
      ))}
    </section>
  )
}
