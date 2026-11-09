'use client'
import { useState } from 'react'
import Button from '../components/Button'
import { company, commitments } from '../data/company'

export default function GetStarted() {
 
 const [status, setStatus] = useState('')

async function handleSubmit(e) {
  e.preventDefault()
  setStatus('sending')
  const formData = new FormData(e.currentTarget)
  formData.append('access_key', 'ae4de886-8fcd-49d4-99ea-64c2467d3d80')
  formData.append('subject', 'New Project Inquiry from ' + formData.get('name'))
  formData.append('from_name', 'HeyByte Website')

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
    const data = await res.json()
    if (data.success) {
      setStatus('success')
      e.target.reset()
    } else {
      setStatus('error')
    }
  } catch {
    setStatus('error')
  }
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
         <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
          <Button type="submit">Send message</Button>
         {status === 'sending' && <p className="contact__ok">Sending...</p>}
{status === 'success' && <p className="contact__ok">Thanks! Your message has been sent. We'll get back to you soon.</p>}
{status === 'error' && <p className="contact__ok">Something went wrong. Please email us directly.</p>}
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
