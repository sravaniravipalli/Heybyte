import Reveal from '../components/Reveal'
import { whyUs } from '../data/whyUs'

export default function WhyUs() {
  return (
    <section className="why">
      <Reveal as="h2" className="why__title">Why choose <em>us?</em></Reveal>
      <div className="why__grid">
        {whyUs.map((c, i) => (
          <Reveal as="article" key={c.n} delay={i * 100} className="why__card">
            <span className="why__n">{c.n}</span>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
