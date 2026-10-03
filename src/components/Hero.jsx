import { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import profileImage from '../assets/profile/profile-image.jpg'
import useCutout from '../useCutout.js'
import { profile } from '../data.js'
import { pillDark, pillLight } from '../ui.js'

const socials = [
  ['GitHub', profile.github, Github],
  ['LinkedIn', profile.linkedin, Linkedin],
  ['Email', `mailto:${profile.email}`, Mail],
]

/*
  Sizing: --fs is the name's font size and --k scales the portrait from it, so the head always
  covers the "H" and "K" in the middle of SATHISHKUMAR on every screen.
  If your photo's head sits higher/lower, change top-[32%] on the <h1>. If the head is wider/narrower, change --k.
*/
export default function Hero() {
  const photo = useCutout(profileImage, 800)
  const [color, setColor] = useState(false)
  return (
    <section id="home" className="relative flex flex-col items-center overflow-hidden pt-24 [--fs:9.2vw] [--k:3.9] md:[--fs:min(9vw,7rem)] md:[--k:3.6] xl:block xl:h-screen xl:min-h-[700px] xl:pt-0 xl:[--fs:min(8.4vw,9.5rem)] xl:[--k:3.5]">
      <div
        role="button" tabIndex={0} aria-pressed={color} aria-label="Portrait: hover or press to reveal color"
        onMouseEnter={() => setColor(true)} onMouseLeave={() => setColor(false)}
        onClick={() => setColor((c) => !c)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setColor((c) => !c) } }}
        className="relative aspect-video h-[calc(var(--fs)*var(--k))] cursor-pointer xl:absolute xl:left-1/2 xl:top-[47%] xl:-translate-x-1/2 xl:-translate-y-1/2"
      >
        {/* One continuous name: SATHIS(H | K)UMAR D, with H and K hidden behind the head */}
        <h1 className="pointer-events-none pb-8 absolute left-1/2 top-[39%] z-[1] grid w-screen -translate-x-1/2 -translate-y-1/2 select-none  grid-cols-2 whitespace-nowrap font-display text-[length:var(--fs)] font-black uppercase leading-none tracking-[-0.04em]">
          <span className="justify-self-end text-ghost">Sathish..  </span>
          <span className="justify-self-start">..Kumar  D</span>
        </h1>
        <img
          src={photo} alt={`Portrait of ${profile.name}`} decoding="async"
          className={`relative z-[2] size-full object-contain transition-[filter] duration-700 [mask-image:linear-gradient(to_bottom,black_62%,transparent)] ${color ? 'grayscale-0' : 'grayscale'}`}
        />
      </div>

      <p className="absolute left-1/2 top-[15%] z-[5] hidden -translate-x-1/2 animate-breathe items-center gap-2 font-mono text-xs uppercase tracking-[2px] text-ink/50 before:size-1 before:rounded-full before:bg-accent xl:flex">
        Hover on the portrait to reveal color
      </p>

      <div className="relative z-[5] mt-6 flex w-full flex-col gap-6 px-[6vw] pb-12 md:flex-row md:items-end md:justify-between md:px-[10vw] xl:contents">
        <div className="max-w-[420px] xl:absolute xl:bottom-[12%] xl:left-[6%] xl:max-w-[300px]">
          <h2 className="text-[clamp(1.5rem,2.2vw,2.2rem)] font-semibold tracking-[-0.02em] max-md:text-2xl">{profile.role}</h2>
          <p className="mb-5 mt-2 text-[0.95rem] leading-normal text-ink/70">{profile.intro}</p>
          <div className="flex flex-wrap gap-2.5">
            <a className={pillDark} href="#projects">View my work ↗</a>
            <a className={pillLight} href="#contact">Contact me</a>
            <a className={pillLight} href="/resume.pdf" download="Sathishkumar_D_Resume.pdf">Resume ↓</a>
          </div>
        </div>
        <div className="flex gap-2.5 xl:absolute xl:bottom-[12%] xl:right-[6%] xl:flex-col xl:gap-3">
          {socials.map(([label, href, Icon]) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" aria-label={label}
              className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2.5 text-[0.85rem] font-medium transition duration-300 hover:border-ink hover:bg-ink hover:text-bg xl:min-w-[145px] xl:px-5 xl:hover:-translate-x-1">
              <Icon size={16} strokeWidth={1.75} aria-hidden="true" /><span className="max-sm:sr-only">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
