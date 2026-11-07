import useInView from '../hooks/useInView'
import { delivered } from '../data/delivered'
import { MAP_W, MAP_H, dotsPath, cities } from '../data/worldMap'

const home = cities.india
const targets = [cities.us, cities.uk, cities.uae]

function arc([x1, y1], [x2, y2]) {
  const cx = (x1 + x2) / 2
  const cy = Math.min(y1, y2) - Math.hypot(x2 - x1, y2 - y1) * 0.32
  return `M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`
}

export default function Delivered() {
  const [ref, seen] = useInView()
  const loop = [...delivered.shipped, ...delivered.shipped, ...delivered.shipped]
  return (
    <section className="dlv" ref={ref}>
      <div className="dlv__card">
        <div className="dlv__head">
          <h2>{delivered.title}</h2>
          <p>{delivered.text}</p>
          <ul className="dlv__chips">
            {delivered.chips.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>

        <svg className={`dlv__map ${seen ? 'is-in' : ''}`} viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img" aria-label="World map with lines from India to the United States, the United Kingdom and the United Arab Emirates">
          <path className="dlv__dots" d={dotsPath} />
          {targets.map((t, i) => (
            <path key={t.name} className="dlv__arc" d={arc(home.xy, t.xy)} pathLength="1" style={{ '--i': i }} />
          ))}
          {targets.map((t, i) => (
            <g key={t.name} className="dlv__pin" transform={`translate(${t.xy[0]} ${t.xy[1]})`} style={{ '--i': i }}>
              <circle r="5" />
              <text x={t.name === 'United States' ? 9 : -9} y={t.name === 'United States' ? -9 : 22} textAnchor={t.name === 'United States' ? 'start' : 'end'}>{t.name}</text>
            </g>
          ))}
          <g className="dlv__home" transform={`translate(${home.xy[0]} ${home.xy[1]})`}>
            <circle className="dlv__pulse" r="6" />
            <circle r="6" />
            <text x="11" y="19">{home.name}</text>
          </g>
        </svg>

        <div className="dlv__shipped" aria-label="What we have shipped">
          <div className="dlv__track">
            {loop.map((s, i) => <span key={i} aria-hidden={i >= delivered.shipped.length}>{s}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}