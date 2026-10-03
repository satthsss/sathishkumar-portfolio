import Section from './Section.jsx'
import { skills } from '../data.js'
import { mono, reveal, tag } from '../ui.js'

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div>
        {skills.map((g) => (
          <div key={g.title} data-reveal className={`${reveal} grid gap-5 border-t border-line py-9 md:grid-cols-[1fr_2.2fr] md:gap-10`}>
            <h3 className={mono}>{g.title}</h3>
            <ul className="flex flex-wrap gap-2.5">{g.items.map((i) => <li key={i} className={tag}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
