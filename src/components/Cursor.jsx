import { useEffect, useRef } from 'react'

// Custom dot + ring cursor (mouse only). The animation loop only runs while the ring is catching up.
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  useEffect(() => {
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return
    document.body.dataset.cursor = 'custom'
    let x = 0, y = 0, rx = 0, ry = 0, raf = 0
    const loop = () => {
      rx += (x - rx) * 0.2; ry += (y - ry) * 0.2
      ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`
      raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.5 ? requestAnimationFrame(loop) : 0
    }
    const move = (e) => {
      x = e.clientX; y = e.clientY
      dot.current.style.opacity = ring.current.style.opacity = 1
      dot.current.style.transform = `translate3d(${x}px,${y}px,0)`
      if (!raf) raf = requestAnimationFrame(loop)
    }
    addEventListener('mousemove', move, { passive: true })
    return () => { removeEventListener('mousemove', move); cancelAnimationFrame(raf); delete document.body.dataset.cursor }
  }, [])
  return (
    <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[9999]">
      <div ref={dot} className="absolute -ml-[3px] -mt-[3px] size-1.5 rounded-full bg-accent opacity-0" />
      <div ref={ring} className="absolute -ml-[15px] -mt-[15px] size-[30px] rounded-full border border-accent/45 opacity-0" />
    </div>
  )
}
