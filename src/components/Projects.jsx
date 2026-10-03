import { useEffect, useRef } from 'react'
import { Github } from 'lucide-react'
import { projects } from '../data.js'
import { display, mono, pad, pillDark, stack, tag } from '../ui.js'

// Screenshots live in src/assets/projects/ and are matched by project slug (e.g. cab-booking.png).
const covers = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })
const coverFor = (slug) => Object.entries(covers).find(([path]) => path.includes(slug))?.[1]

// A sticky panel normally sticks at top:0. If a panel is taller than the screen that would hide its bottom,
// so in that case it sticks when its bottom edge reaches the bottom of the screen instead.
function useStickyTop() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const set = () => { el.style.top = `${Math.min(0, innerHeight - el.offsetHeight)}px` }
    set()
    const ro = new ResizeObserver(set)
    ro.observe(el)
    addEventListener('resize', set)
    return () => { ro.disconnect(); removeEventListener('resize', set) }
  }, [])
  return ref
}

function Panel({ p }) {
  const ref = useStickyTop()
  const cover = coverFor(p.slug)
  return (
    <article ref={ref} className={`${pad} group gap-8 border-t border-line bg-bg shadow-[0_-24px_40px_-24px_rgba(0,0,0,0.1)] lg:gap-[5vw] ${stack}`}>
      <div className="min-w-0 flex-1">
        <p className={`${mono} mb-4`}>{p.meta}</p>
        <h3 className={`${display} mb-5 break-words text-[clamp(1.9rem,min(3.6vw,6.2vh),3.8rem)] leading-[0.98]`}>{p.title[0]}<br />{p.title[1]}</h3>
        <p className="leading-relaxed text-muted">{p.summary}</p>
        <ul className="my-4 grid gap-2 text-[0.92rem] text-muted">
          {p.features.map((f) => <li key={f} className="relative pl-5 before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-accent">{f}</li>)}
        </ul>
        <ul className="mb-5 flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className={tag}>{t}</li>)}</ul>
        <a className={pillDark} href={p.github} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> View on GitHub ↗</a>
      </div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line bg-ink/5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] max-lg:order-first lg:aspect-auto lg:h-[min(62vh,540px)] lg:flex-[1.1]">
        {cover
          ? <img src={cover} alt={`${p.name} screenshot`} loading="lazy" decoding="async" className="size-full object-cover transition duration-700 group-hover:scale-105" />
          : <div aria-hidden="true" className="grid size-full place-items-center font-display text-[28vw] font-black leading-none text-ink/[0.06] lg:text-[10vw]">{p.initials}</div>}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="bg-bg pt-28 md:pt-40">
      <h2 className={`${display} ${pad} mb-14 text-[clamp(2.5rem,5vw,5rem)]`}>Projects</h2>
      {projects.map((p) => <Panel key={p.name} p={p} />)}
    </section>
  )
}
