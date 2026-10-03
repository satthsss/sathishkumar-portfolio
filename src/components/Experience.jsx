import Section from './Section.jsx'
import { experience } from '../data.js'
import { display, mono, reveal, tag } from '../ui.js'

export default function Experience() {
  return (
    <Section id="experience" title="Internship experience">
      <div>
        {experience.map((e) => (
          <article key={e.company} data-reveal className={`${reveal} grid gap-8 border-t border-line py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16`}>
            <div>
              <p className={mono}>{e.period}</p>
              <h3 className={`${display} mt-4 text-[clamp(2rem,4vw,4rem)] leading-[0.95]`}>{e.company}</h3>
              <p className="mt-3 text-lg font-medium">{e.role}</p>
            </div>
            <div>
              <ul className="grid gap-3 text-[1.02rem] leading-relaxed text-muted">
                {e.points.map((p) => <li key={p} className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:rounded-full before:bg-accent">{p}</li>)}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">{e.tech.map((t) => <li key={t} className={tag}>{t}</li>)}</ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
