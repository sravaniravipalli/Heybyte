import { useState } from 'react'
import useStickyProgress from '../hooks/useStickyProgress'
import { steps } from '../data/steps'

export default function Steps() {
  const [idx, setIdx] = useState(0)
  const ref = useStickyProgress((p) => setIdx(Math.min(steps.length - 1, Math.floor(p * steps.length))))
  const s = steps[idx]
  return (
    <section className="steps" id="process" ref={ref} style={{ height: `${100 + steps.length * 50}vh` }}>
      <div className="steps__stick">
        <video key={s.video} className="steps__video" src={s.video} autoPlay muted loop playsInline />
        <div className="steps__shade" />
        <h2>How We Work</h2>
        <div className="steps__body" key={idx}>
          <small>Step {idx + 1}</small>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
        <div className="steps__all">
          {steps.map((st, k) => (
            <div className="steps__item" key={k}>
              <small>Step {k + 1}</small>
              <h3>{st.title}</h3>
              <p>{st.text}</p>
            </div>
          ))}
        </div>
        <div className="steps__dots">{steps.map((_, k) => <i key={k} className={k <= idx ? 'is-on' : ''} />)}</div>
      </div>
    </section>
  )
}