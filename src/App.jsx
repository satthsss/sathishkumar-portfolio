import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Manifesto from './components/Manifesto.jsx'
import Flow from './components/Flow.jsx'
import Numbers from './components/Numbers.jsx'
import Cursor from './components/Cursor.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Scroll reveal: sets data-visible on any [data-reveal] element once it enters the viewport.
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.setAttribute('data-visible', ''); io.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <a className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[200] focus:rounded-md focus:bg-accent focus:px-3.5 focus:py-2 focus:text-white" href="#main">Skip to content</a>
      <Cursor />
      <Navbar />
      <main id="main">
        <Hero /><Manifesto /><About /><Skills /><Education /><Experience /><Projects /><Flow /><Numbers /><Contact />
      </main>
      <Footer />
    </>
  )
}
