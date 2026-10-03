import { display, mono, pad, reveal } from '../ui.js'

const nodes = [
  'Client interface · React.js, HTML5, CSS3',
  'REST API · Django REST Framework',
  'Django application · Auth, business logic',
  'Database · MySQL, Django ORM',
]

export default function Flow() {
  return (
    <section className={`${pad} bg-surface py-28 md:py-40`}>
      <h2 data-reveal className={`${display} ${reveal} mb-16 text-center text-[clamp(2.2rem,4vw,4.5rem)] md:mb-24`}>How I build a full-stack app</h2>
      <div className="flex flex-col items-center">
        {nodes.map((n, i) => (
          <div key={n} className="flex flex-col items-center">
            {i > 0 && (
              <div className="relative h-[60px] w-px overflow-hidden bg-ink/10">
                <div className="absolute left-0 top-0 h-5 w-full animate-packet bg-gradient-to-b from-transparent via-accent to-transparent motion-reduce:hidden" />
              </div>
            )}
            <div data-reveal className={`${reveal} ${mono} w-[clamp(280px,40vw,520px)] rounded border bg-card px-6 py-6 text-center tracking-[1.5px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:px-10 md:py-7 ${i === 2 ? 'border-accent/40' : 'border-ink/5 !text-ink'}`}>{n}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
