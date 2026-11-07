import { useEffect, useRef } from 'react'
import MediaSlot from '../components/MediaSlot'
import useStickyProgress from '../hooks/useStickyProgress'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  const ref = useStickyProgress()
  const track = useRef(null)
  useEffect(() => {
    const set = () => {
      const sec = ref.current
      if (!sec || !track.current) return
      sec.style.setProperty('--dist', `${track.current.scrollWidth + window.innerWidth}px`)
      window.dispatchEvent(new Event('scroll'))
    }
    set()
    window.addEventListener('resize', set)
    return () => window.removeEventListener('resize', set)
  }, [ref])
  return (
    <section className="tm" ref={ref}>
      <div className="tm__stick">
        <h2>Hear from founders<br /><em>we’ve scaled</em></h2>
        <div className="tm__track" ref={track}>
          {testimonials.map((t, i) => (
            <figure key={i} className="tcard">
              <span className="tcard__q" aria-hidden="true">“</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>— {t.name}, {t.role}</figcaption>
            {t.video && <MediaSlot type="video" src={t.video} label={`Add video ${i + 1}`} className="tcard__media" />}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
