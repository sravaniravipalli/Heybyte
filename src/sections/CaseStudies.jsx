import { Link } from 'react-router-dom'
import MediaSlot from '../components/MediaSlot'
import { caseStudies } from '../data/caseStudies'

export default function CaseStudies({ page = false }) {
  return (
    <section className={`stack ${page ? 'stack--page' : ''}`}>
      {page && <h1 className="stack__title">Our Work</h1>}
      <div className="stack__cards">
        {caseStudies.map((c, i) => (
          <Link key={c.slug} to="/get-started" className="scard" style={{ '--i': i }}>
            <MediaSlot src={c.image} alt="" label={`Background: ${c.client}`} className="scard__bg" />
            <div className="scard__shade" />
            <MediaSlot src={c.logo} alt={c.client} label={c.client} className="scard__logo" />
            <div className="scard__text">
              <h3>{c.client}</h3>
              <p>{c.text}</p>
              <span>Read full case study →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
