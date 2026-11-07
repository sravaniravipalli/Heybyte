import { useEffect } from 'react'
import Lenis from 'lenis'

// Desktop only. Phones keep the browser's native momentum scrolling, which is smoothest there.
export default function useSmoothScroll() {
  useEffect(() => {
    if (!window.matchMedia('(min-width: 1024px)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ lerp: 0.1 })
    let id
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])
}