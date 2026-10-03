// Shared Tailwind class strings (reference-style: pill buttons, mono labels, huge uppercase display type).
export const reveal =
  'opacity-0 translate-y-4 transition duration-700 data-[visible]:opacity-100 data-[visible]:translate-y-0 motion-reduce:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none'
export const display = 'font-display font-extrabold uppercase leading-none tracking-tight'
export const mono = 'font-mono text-[0.8rem] uppercase tracking-[0.15em] text-accent'
export const pad = 'px-[6vw] md:px-[10vw]'
const pill = 'inline-flex items-center gap-1.5 rounded-full px-6 py-3 text-[0.85rem] font-medium transition duration-300 hover:-translate-y-0.5 motion-reduce:transition-none'
export const pillDark = `${pill} bg-ink text-bg hover:bg-accent hover:text-white hover:shadow-[0_8px_20px_rgba(255,45,32,0.25)]`
export const pillLight = `${pill} border border-line bg-card text-ink hover:border-ink hover:bg-ink hover:text-bg`
export const tag = 'rounded-full border border-line bg-card px-4 py-1.5 text-[0.8rem] font-medium'

// Project panels: each one sticks while the next slides over it. Works on every screen size.
// (The exact sticky offset is set in Projects.jsx so panels taller than the screen are never clipped.)
export const stack = 'sticky flex min-h-screen flex-col items-center justify-center pb-10 pt-24 lg:flex-row'
