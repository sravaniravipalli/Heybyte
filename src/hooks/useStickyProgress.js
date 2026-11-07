import { useEffect, useRef } from 'react'

const DESKTOP = '(min-width: 1024px)'

// For a tall section holding a sticky child: sets --p (0 to 1) on the section while it is pinned.
// Only runs on desktop, and only while the section is on (or near) the screen.
export default function useStickyProgress(onChange) {
  const ref = useRef(null)
  const cb = useRef(onChange)
  useEffect(() => { cb.current = onChange })
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const mq = window.matchMedia(DESKTOP)
    let raf = 0
    let last = -1
    let active = false
    let visible = true

    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const total = r.height - window.innerHeight
      const p = total > 0 ? Math.min(Math.max(-r.top / total, 0), 1) : 0
      const v = Math.round(p * 1000) / 1000
      if (v === last) return
      last = v
      el.style.setProperty('--p', String(v))
      if (cb.current) cb.current(p)
    }
    const on = () => { if (!raf) raf = requestAnimationFrame(update) }
    const start = () => {
      if (active) return
      active = true
      update()
      window.addEventListener('scroll', on, { passive: true })
      window.addEventListener('resize', on)
    }
    const stop = () => {
      if (!active) return
      active = false
      window.removeEventListener('scroll', on)
      window.removeEventListener('resize', on)
      cancelAnimationFrame(raf)
      raf = 0
    }
    const sync = () => {
      if (mq.matches && visible) start()
      else { if (mq.matches && active) update(); stop() } // final 0/1 value when it leaves the screen
    }

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; sync() }, { rootMargin: '200px 0px' })
    io.observe(el)
    mq.addEventListener('change', sync)
    sync()
    return () => { stop(); io.disconnect(); mq.removeEventListener('change', sync) }
  }, [])
  return ref
}