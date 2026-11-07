import { useEffect, useRef } from 'react'
import MediaSlot from '../components/MediaSlot'
import useStickyProgress from '../hooks/useStickyProgress'
import { services } from '../data/services'

export default function Services() {
  const ref = useStickyProgress()
  const track = useRef(null)
  useEffect(() => {
    const set = () => {
      const sec = ref.current
      if (!sec || !track.current) return
      sec.style.setProperty('--shift', `${Math.max(track.current.scrollWidth - window.innerWidth + 64, 0)}px`)
      window.dispatchEvent(new Event('scroll'))
    }
    set()
    window.addEventListener('resize', set)
    return () => window.removeEventListener('resize', set)
  }, [ref])
  return (
    <section className="what" id="services" ref={ref}>
      <div className="what__stick">
        <h2>What We Do</h2>
        <div className="what__track" ref={track}>
          {services.map((s) => (
            <article key={s.title} className="wcard">
              <MediaSlot src={s.icon} alt="" label="Icon" className="wcard__icon" />
              <h3>{s.title}</h3>
              <ul>{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              <p>{s.tagline}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
