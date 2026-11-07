import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { industries } from '../data/industries'
import { partners } from '../data/partners'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="nav">
      <div className="nav__pill">
        <Link to="/" className="logo" onClick={close}><span className="logo__mark">h</span>HeyByte</Link>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          <div className="dd">
            <span className="dd__label" tabIndex={0}>Industries</span>
            <div className="dd__menu">{industries.map((i) => <Link key={i.slug} to={`/industries/${i.slug}`} onClick={close}>{i.title}</Link>)}</div>
          </div>
          <Link to="/services" onClick={close}>Services</Link>
          <Link to="/case-studies" onClick={close}>Our Work</Link>
          <div className="dd">
            <span className="dd__label" tabIndex={0}>Resources</span>
            <div className="dd__menu"><Link to="/blog" onClick={close}>Blog</Link><a href="/#faq" onClick={close}>FAQ</a></div>
          </div>
          <Link to="/about" onClick={close}>About Us</Link>
          <div className="dd">
            <span className="dd__label" tabIndex={0}>Partners</span>
            <div className="dd__menu">{partners.slice(0, 4).map((p) => <Link key={p.name} to="/partners" onClick={close}>{p.name}</Link>)}</div>
          </div>
          <Link to="/get-started" className="nav__mobile-cta" onClick={close}>Get Started</Link>
        </nav>
        <div className="nav__right">
          <Button to="/get-started" variant="dark">Get Started</Button>
          <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
        </div>
      </div>
    </header>
  )
}
