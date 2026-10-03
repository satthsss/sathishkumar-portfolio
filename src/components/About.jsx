import profileImage from '../assets/profile/profile-image.jpg'
import { profile } from '../data.js'
import { display, reveal, pad } from '../ui.js'

export default function About() {
  return (
    <section id="about" className={`${pad} grid gap-12 bg-surface py-28 md:grid-cols-2 md:gap-[8vw] md:py-40`}>
      <div className="relative">
        <img src={profileImage} alt={`Black and white portrait of ${profile.name}`} className="top-[15vh] aspect-[3/4] w-full rounded-xl border border-line object-cover object-[50%_25%] grayscale contrast-110 transition duration-700 hover:grayscale-0 md:sticky max-md:max-w-xs" />
      </div>
      <div className="md:pt-[10vh]">
        <h2 data-reveal className={`${display} ${reveal} mb-12 text-[clamp(1.8rem,3.5vw,3.5rem)] leading-[1.1] md:mb-16`}>
          My work sits between <em className="not-italic text-accent">backend logic</em>, <em className="not-italic text-accent">REST APIs</em> and <em className="not-italic text-accent">responsive interfaces</em>.
        </h2>
        <div data-reveal className={`${reveal} flex max-w-[600px] flex-col gap-8 text-[1.05rem] leading-[1.8] text-muted`}>
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  )
}
