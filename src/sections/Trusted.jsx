import { useState } from 'react'
import MediaSlot from '../components/MediaSlot'
import useStickyProgress from '../hooks/useStickyProgress'
import { clients } from '../data/clients'

const ROW = 72

export default function Trusted() {
  const [idx, setIdx] = useState(0)
  const ref = useStickyProgress((p) => setIdx(Math.min(clients.length - 1, Math.floor(p * clients.length))))
  const c = clients[idx]
  return (
    <section className="trust" ref={ref} style={{ height: `${100 + clients.length * 55}vh` }}>
      <div className="trust__stick">
        <div className="trust__bgs">
          {clients.map((x, k) => <MediaSlot key={x.name} src={x.image} alt="" label={`Background: ${x.name}`} className={`trust__bg ${k === idx ? 'is-on' : ''}`} />)}
        </div>
        <div className="trust__shade" />
        <div className="trust__grid">
          <ul className="trust__list" style={{ transform: `translateY(${(1 - idx) * ROW}px)` }}>
            {clients.map((x, k) => <li key={x.name} className={k === idx ? 'is-on' : ''}>{x.name}</li>)}
          </ul>
          <div className="trust__panel">
            <h2>Trusted by over 100+ companies</h2>
            <div className="trust__info" key={idx}>
             <ul className="trust__all">
  {clients.map((x) => (
    <li key={x.name}><MediaSlot src={x.logo} alt={x.name} label={x.name} className="trust__logo" /></li>
  ))}
</ul>
              <div className="trust__row">
                <MediaSlot src={c.logo} alt={c.name} label={c.name} className="trust__logo" />
                <small>{c.category}</small>
              </div>
              <p>{c.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
