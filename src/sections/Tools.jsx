import { useEffect, useRef } from 'react'
import MediaSlot from '../components/MediaSlot'
import useStickyProgress from '../hooks/useStickyProgress'
import { tools } from '../data/tools'

export default function Tools() {
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
    <section className="tm" ref={ref} id="tools">
      <div className="tm__stick">
        <h2>The tools we use to build<br /><em>modern solutions</em></h2>
        <div className="tm__track" ref={track}>
          {tools.map((t) => (
            <div key={t.name} className="tool">
              <MediaSlot src={t.image} alt={t.name} label={t.name} className="tool__img" />
              <h3>{t.name}</h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}