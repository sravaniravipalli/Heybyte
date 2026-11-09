'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <header className="nav">
      <div className="nav__pill">
        <Link href="/" className="logo" onClick={close} aria-label="heyByte.ai home"><img src="/logo.png" alt="heyByte.ai" className="logo__img" /></Link>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          <Link href="/" onClick={close}>Home</Link>
          <Link href="/services" onClick={close}>Services</Link>
          <Link href="/about" onClick={close}>About Us</Link>
          <Link href="/get-started" onClick={close}>Contact</Link>
          <Link href="/get-started" className="nav__mobile-cta" onClick={close}>Let's Connect</Link>
        </nav>
        <div className="nav__right">
          <Link href="/get-started" className="nav__connect">Let's Connect</Link>
          <button className="nav__toggle" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
        </div>
      </div>
    </header>
  )
}