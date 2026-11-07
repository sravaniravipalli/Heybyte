import { useState } from 'react'

export default function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq ${open ? 'is-open' : ''}`}>
      <button className="faq__q" aria-expanded={open} onClick={() => setOpen(!open)}>
      {q}<span className="faq__icon" aria-hidden="true">→</span>
      </button>
      <div className="faq__a-wrap"><div><p className="faq__a">{a}</p></div></div>
    </div>
  )
}
