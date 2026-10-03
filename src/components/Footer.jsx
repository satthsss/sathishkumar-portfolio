import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import { profile } from '../data.js'

const link = 'flex items-center gap-2 transition-colors hover:text-accent'

// Each link does one thing: email opens your mail app, phone starts a call, LinkedIn/GitHub open their pages.
export default function Footer() {
  return (
    <footer className="grid gap-6 border-t border-line px-[6vw] py-8 font-mono text-xs tracking-[0.06em] text-muted md:px-[10vw] lg:grid-cols-[1fr_auto] lg:items-center">
      <p className="uppercase tracking-[0.12em]">© {new Date().getFullYear()} {profile.name} · {profile.role}</p>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-ink">
        <a className={link} href={`mailto:${profile.email}`}><Mail size={16} aria-hidden="true" />{profile.email}</a>
        <a className={link} href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={16} aria-hidden="true" />{profile.phone}</a>
        <a className={link} href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} aria-hidden="true" />LinkedIn</a>
        <a className={link} href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={16} aria-hidden="true" />GitHub</a>
      </div>
    </footer>
  )
}
