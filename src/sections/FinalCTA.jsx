import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { assurances } from '../data/company'

export default function FinalCTA() {
  return (
    <section className="cta">
      <div className="cta__body">
        <Reveal as="h2">Ready to transform your digital future?</Reveal>
        <Reveal as="p" delay={120}>Move your ideas forward with clarity. Talk to our experts and discover how heybyte.ai can turn your vision into exceptional engineering reality.</Reveal>
        <Reveal delay={240}><Button to="/get-started" variant="blue">Schedule a Consultation</Button></Reveal>
        <ul className="cta__badges">
          {assurances.map((a) => <li key={a.title}><b>{a.title}</b><span>{a.text}</span></li>)}
        </ul>
      </div>
    </section>
  )
}
