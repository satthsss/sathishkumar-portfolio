import Section from './Section.jsx'
import { education } from '../data.js'
import { display, mono, reveal } from '../ui.js'

export default function Education() {
  return (
    <Section id="education" title="Education" tone="bg-surface">
      <div data-reveal className={`${reveal} max-w-4xl`}>
        <p className={mono}>{education.period}</p>
        <h3 className={`${display} mt-4 text-[clamp(1.8rem,3.5vw,3.5rem)] leading-[1.1]`}>{education.degree}</h3>
        <p className="mt-5 text-lg text-muted">{education.school}</p>
        <p className="mt-2 text-lg"><strong className="font-semibold">CGPA:</strong> {education.cgpa}</p>
      </div>
      <h3 data-reveal className={`${display} ${reveal} mb-8 mt-20 text-[clamp(1.5rem,2.5vw,2.5rem)]`}>Certifications</h3>
      <div>
        {education.certifications.map((c) => (
          <div key={c.name} data-reveal className={`${reveal} grid gap-2 border-t border-line py-7 md:grid-cols-[1.2fr_1fr_1.6fr] md:gap-10`}>
            <h4 className="font-display text-xl font-semibold">{c.name}</h4>
            <p className={mono}>{c.issuer}</p>
            <p className="text-muted">{c.note}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
