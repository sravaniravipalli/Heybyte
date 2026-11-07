import { useState } from 'react'
import Button from '../components/Button'
import CountUp from '../components/CountUp'
import MediaSlot from '../components/MediaSlot'
import useInterval from '../hooks/useInterval'
import useStickyProgress from '../hooks/useStickyProgress'
import { heroStat } from '../data/stats'
import { heroMedia } from '../data/heroMedia'

const lines = [['We', 'Develop', 'Amazing'], ['Software', 'For', 'Your', 'Business']]

export default function Hero() {
  const ref = useStickyProgress()
  const [i, setI] = useState(0)
  useInterval(() => setI((v) => (v + 1) % heroMedia.length), 2600)
  let n = 0
  return (
    <section className="hero" ref={ref}>
      <div className="hero__stick">
        <h1 aria-label="We Develop Amazing Software For Your Business">
          {lines.map((line, li) => (
            <span className="line" key={li} aria-hidden="true">
              {line.map((w) => {
                const idx = n++
                return <span className="w" key={idx}><span className={w === 'Software' ? 'blue' : ''} style={{ '--i': idx }}>{w}</span>{' '}</span>
              })}
            </span>
          ))}
        </h1>
        <div className="hero__stat">
          <svg width="30" height="22" viewBox="0 0 30 22" aria-hidden="true"><path d="M2 3l9 9 5-4 12 11M28 10v9h-9" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <CountUp end={heroStat.value} suffix={heroStat.suffix} />
          <b>{heroStat.label}</b>
          <span>{heroStat.sub}</span>
        </div>
        <div className="hero__card">
          {heroMedia.map((m, k) => (
            <div key={k} className={`hero__slide ${k === i ? 'is-on' : ''}`}>
              <MediaSlot type={m.type} src={m.src} label={`Add hero media ${k + 1}`} />
            </div>
          ))}
        </div>
        <div className="hero__side">
          <p>From MVP to enterprise-grade platforms, we handle architecture, development and long-term support so your team can focus on growth.</p>
          <Button to="/services" variant="blue">View Services</Button>
        </div>
        <div className="hero__cta"><Button to="/services" variant="blue">View Services</Button></div>
      </div>
    </section>
  )
}
