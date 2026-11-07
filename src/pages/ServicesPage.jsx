import Button from '../components/Button'
import MediaSlot from '../components/MediaSlot'
import FinalCTA from '../sections/FinalCTA'
import { services } from '../data/services'

export default function ServicesPage() {
  return (
    <>
      <section className="pagehero"><div className="container">
        <h1>Our Services</h1>
        <p>Discover the full spectrum of technology solutions we offer. Our team delivers expertise to help you achieve your digital goals.</p>
        <Button to="/get-started" variant="light">Let’s talk</Button>
      </div></section>
      <section className="section"><div className="container svc">
        {services.map((s, i) => (
          <article key={s.slug} className="svc__item">
            <MediaSlot src={s.icon} alt={s.title} label={s.title} className="svc__img" />
            <div>
              <small>Service 0{i + 1}</small>
              <h2>{s.title}</h2>
              <p>{s.tagline}</p>
              <ul className="svc__features">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <ul className="svc__tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          </article>
        ))}
      </div></section>
      <FinalCTA />
    </>
  )
}
