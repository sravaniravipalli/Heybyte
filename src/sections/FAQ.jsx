import FAQItem from '../components/FAQItem'
import Reveal from '../components/Reveal'
import { faqs } from '../data/faqs'

export default function FAQ() {
  return (
    <section className="faqs" id="faq">
      <h2>Answers to Popular Questions</h2>
      <Reveal className="faqs__list">{faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}</Reveal>
    </section>
  )
}
