import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="nav">
      <div className="nav__pill">
        <Link to="/" className="logo" onClick={close} aria-label="heyByte.ai home"><img src="/logo.png" alt="heyByte.ai" className="logo__img" /></Link>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          <Link to="/" onClick={close}>Home</Link>
          <Link to="/services" onClick={close}>Services</Link>
          <Link to="/about" onClick={close}>About Us</Link>
          <Link to="/get-started" onClick={close}>Contact</Link>
          <Link to="/get-started" className="nav__mobile-cta" onClick={close}>Let's Connect</Link>
        </nav>
        <div className="nav__right">
          <Link to="/get-started" className="nav__connect">Let's Connect</Link>
          <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
        </div>
      </div>
    </header>
  )
}