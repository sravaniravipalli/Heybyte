import { useState } from 'react'
import Button from '../components/Button'
import { company, commitments } from '../data/company'

export default function GetStarted() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = `Name: ${f.get('name')}\nCompany: ${f.get('company')}\nEmail: ${f.get('email')}\nPhone: ${f.get('phone')}\nBudget: ${f.get('budget')}\nTimeline: ${f.get('timeline')}\n\n${f.get('message')}`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent('New Project Inquiry from ' + f.get('name'))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <section className="contact">
      <div className="container contact__grid">
        <div>
          <h1>Tell us what to build.</h1>
          <p className="contact__lead">Contact heybyte.ai to discuss your next software, app or web development project. Reach out for a free consultation.</p>
          <ul className="contact__info">
            <li><small>Phone</small><a href={company.phoneHref}>{company.phone}</a></li>
            <li><small>Email</small><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><small>WhatsApp</small><a href={company.whatsapp} target="_blank" rel="noopener noreferrer">Chat with us</a></li>
            <li><small>Office</small><span>{company.address}</span></li>
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Full name<input name="name" required autoComplete="name" placeholder="John Doe" /></label>
          <label>Company<input name="company" autoComplete="organization" /></label>
          <label>Email address<input name="email" type="email" required autoComplete="email" placeholder="john@example.com" /></label>
          <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" /></label>
          <div className="row2">
            <label>Project budget<input name="budget" placeholder="₹50k - ₹2L" /></label>
            <label>Timeline<input name="timeline" placeholder="2 months, 6 months…" /></label>
          </div>
          <label>Tell us about your vision<textarea name="message" required placeholder="Web app, mobile app, cloud, DevOps…" /></label>
          <Button type="submit">Send message</Button>
          {sent && <p className="contact__ok">Your email app should open with the message ready to send.</p>}
        </form>
      </div>
      <div className="container commit">
        <h2>Our service <span className="blue">commitment</span></h2>
        <ul className="commit__grid">
          {commitments.map((c) => <li key={c.title}><small>{c.time}</small><h3>{c.title}</h3><p>{c.text}</p></li>)}
        </ul>
      </div>
    </section>
  )
}
