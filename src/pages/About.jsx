import CountUp from '../components/CountUp'
import MediaSlot from '../components/MediaSlot'
import FinalCTA from '../sections/FinalCTA'
import { team } from '../data/team'
import { metrics } from '../data/stats'

export default function About() {
  return (
    <>
      <section className="pagehero"><div className="container">
        <h1>Designed for <span className="blue">impact.</span></h1>
        <p>We are a lean team of engineers, designers and strategists delivering innovative software solutions for clients across India, the United States, the United Kingdom and the United Arab Emirates.</p>
      </div></section>
      <section className="section"><div className="container">
        <h2 className="section__title">Meet the team</h2>
        <div className="team">
          {team.map((m) => (
            <figure key={m.name} className="member">
              <MediaSlot src={m.image} alt={m.name} label={m.name} className="member__img" />
              <figcaption><b>{m.name}</b><small>{m.role}</small></figcaption>
              <blockquote>“{m.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </div></section>
      <section className="section"><div className="container metrics">
        {metrics.map((m) => (
          <div key={m.label}><CountUp end={m.value} suffix={m.suffix} /><b>{m.label}</b><span>{m.sub}</span></div>
        ))}
      </div></section>
      <FinalCTA />
    </>
  )
}
