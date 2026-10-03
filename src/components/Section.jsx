import { display, reveal, pad } from '../ui.js'

export default function Section({ id, title, tone = 'bg-bg', children }) {
  return (
    <section id={id} className={`${tone} ${pad} py-28 md:py-40`}>
      <h2 data-reveal className={`${display} ${reveal} mb-14 text-[clamp(2.5rem,5vw,5rem)] md:mb-20`}>{title}</h2>
      {children}
    </section>
  )
}
