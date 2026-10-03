import { useState } from 'react'
import { profile } from '../data.js'
import { display, mono, pad, pillDark, reveal } from '../ui.js'

const field = 'border-b border-ink/20 bg-transparent py-3 text-base font-normal text-ink outline-none transition-colors focus:border-accent'
const link = 'relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-accent hover:after:origin-left hover:after:scale-x-100'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  // No backend: opens the visitor's email app. To use Formspree/EmailJS later, replace this handler.
  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className={`${pad} flex min-h-screen flex-col items-center justify-center py-28 text-center md:py-40`}>
      <h2 data-reveal className={`${display} ${reveal} mb-14 text-[clamp(2.5rem,8vw,8rem)] leading-[0.9]`}>Let's build<br />something together</h2>
      <form data-reveal onSubmit={submit} className={`${reveal} grid w-full max-w-xl gap-5 text-left`}>
        <label className="grid text-sm font-medium">Name<input className={field} required value={form.name} onChange={set('name')} autoComplete="name" /></label>
        <label className="grid text-sm font-medium">Email<input className={field} required type="email" value={form.email} onChange={set('email')} autoComplete="email" /></label>
        <label className="grid text-sm font-medium">Message<textarea className={`${field} resize-y`} required rows="4" value={form.message} onChange={set('message')} /></label>
        <button type="submit" className={`${pillDark} cursor-pointer justify-self-start`}>Send Message ↗</button>
        <p className="text-xs text-muted">This opens your email app with the message ready to send.</p>
      </form>
      <p className="mt-16 text-muted">{profile.email} · {profile.phone}</p>
      <div className={`${mono} mt-6 flex flex-wrap justify-center gap-x-12 gap-y-4 !text-ink`}>
        <a className={link} href={`mailto:${profile.email}`}>Email</a>
        <a className={link} href={`tel:${profile.phone.replace(/\s/g, '')}`}>Phone</a>
        <a className={link} href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className={link} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  )
}
