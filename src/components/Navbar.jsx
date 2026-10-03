import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X } from 'lucide-react'
import useTheme from '../useTheme.js'
import { pillDark } from '../ui.js'

const links = [['About', 'about'], ['Skills', 'skills'], ['Education', 'education'], ['Experience', 'experience'], ['Projects', 'projects'], ['Contact', 'contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dark, toggleTheme] = useTheme()
  useEffect(() => {
    const on = () => setScrolled(scrollY > 20)
    on(); addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[5vw] transition-[padding,background-color] duration-300 ${scrolled || open ? 'bg-bg/90 py-3 backdrop-blur-md' : 'py-4 md:py-6'}`}>
      <a href="#home" className="flex items-center gap-2.5 rounded-full border border-line bg-card px-4 py-2.5 text-[0.8rem] font-medium shadow-[0_4px_15px_rgba(0,0,0,0.04)] sm:px-5">
        <span className="size-2 animate-pulse-dot rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
        <span className="max-[380px]:hidden">Open to opportunities</span><span className="min-[381px]:hidden">Open to work</span>
      </a>
      <div className="flex items-center gap-3 lg:gap-10">
        <nav aria-label="Primary" className={`${open ? 'flex' : 'hidden'} absolute inset-x-0 top-full flex-col items-start gap-5 border-b border-line bg-bg px-[5vw] pb-8 pt-4 lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:p-0 xl:gap-10`}>
          {links.map(([name, id, count]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="relative flex items-center py-0.5 text-[0.85rem] font-medium after:absolute after:bottom-0 after:left-1/2 after:h-[1.5px] after:w-0 after:bg-ink after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">
              {name}{count && <span className="ml-1 font-normal text-muted">[{count}]</span>}
            </a>
          ))}
          <a className={pillDark} href="/resume.pdf" download="Sathishkumar_D_Resume.pdf">Download Resume ↓</a>
        </nav>
        <button onClick={toggleTheme} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} className="grid size-10 cursor-pointer place-items-center rounded-full border border-line bg-card transition-colors hover:border-ink">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="cursor-pointer p-1.5 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
