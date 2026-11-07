import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { industries } from '../data/industries'

export default function Industries() {
  return (
    <section className="who">
      <Reveal as="h2" className="who__label">Who We Work With</Reveal>
      <ul className="who__list">
        {industries.map((x, i) => (
          <Reveal as="li" key={x.slug} delay={i * 120}>
            <Link to={`/industries/${x.slug}`}>
             <span className="who__num">{String(i + 1).padStart(2, '0')}</span>
              <span className="who__name">{x.title}</span>
              <span className="who__text">{x.text}</span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  )
}
