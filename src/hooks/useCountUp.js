import { useEffect, useState } from 'react'

export default function useCountUp(end, run, duration = 1600) {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!run) return
    if (window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 1023px)').matches) { setV(end); return }
    let raf, t0
    const tick = (t) => {
      t0 ??= t
      const p = Math.min((t - t0) / duration, 1)
      setV(Math.round(end * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [end, run, duration])
  return v
}
