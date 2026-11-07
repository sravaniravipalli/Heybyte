import { useParams, Navigate } from 'react-router-dom'
import { industries } from '../data/industries'
import { services } from '../data/services'
import Button from '../components/Button'
import FinalCTA from '../sections/FinalCTA'

export default function IndustryPage() {
  const { slug } = useParams()
  const x = industries.find((i) => i.slug === slug)
  if (!x) return <Navigate to="/" replace />
  return (
    <>
      <section className="pagehero"><div className="container">
        <h1>{x.title}</h1><p>{x.text}</p>
        <Button to="/get-started" variant="light">Get started</Button>
      </div></section>
      <section className="section"><div className="container">
        <h2 className="section__title">How we help</h2>
        <div className="plain">{services.slice(0, 3).map((s) => (<article key={s.title}><h3>{s.title}</h3><p>{s.tagline}</p></article>))}</div>
      </div></section>
      <FinalCTA />
    </>
  )
}
