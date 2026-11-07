import { Link } from 'react-router-dom'
import { industries } from '../data/industries'
import { company } from '../data/company'
const social = [
  {
    label: 'LinkedIn',
    href: company.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: company.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
 
]
export default function Footer() {
  return (
    <footer className="footer">
   <svg className="footer__wave footer__wave--a" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true"><path d="M0 220 C180 120 320 120 520 190 S900 280 1100 180 1340 90 1440 150 V320 H0Z" /></svg>
<svg className="footer__wave footer__wave--b" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true"><path d="M0 240 C200 160 380 170 560 230 S960 300 1160 210 1360 150 1440 190 V320 H0Z" /></svg>
    <div className="footer__inner">
        <div>
         <Link to="/" className="logo" aria-label="heyByte.ai home"><img src="/logo.png" alt="heyByte.ai" className="logo__img" /></Link>
          <p className="footer__tag">{company.tagline}</p>
         <div className="footer__social">
  {social.map((s) => (
    <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer">{s.icon}</a>
  ))}
</div>
        </div>
        <nav aria-label="Industries"><h4>Industries</h4>{industries.map((i) => <Link key={i.slug} to={`/industries/${i.slug}`}>{i.title}</Link>)}</nav>
        <nav aria-label="Site map"><h4>Site map</h4><Link to="/services">Services</Link><Link to="/case-studies">Our Work</Link><Link to="/blog">Blog</Link><Link to="/about">About Us</Link><Link to="/get-started">Contact</Link></nav>
        <nav aria-label="Contact"><h4>Contact</h4><a href={company.phoneHref}>{company.phone}</a><a href={`mailto:${company.email}`}>{company.email}</a><a href={company.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></nav>
        <nav aria-label="Secure"><h4>Secure</h4><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms-of-service">Terms of Service</Link></nav>
      </div>
      <p className="footer__legal">{company.address}</p>
      <p className="footer__legal">© {new Date().getFullYear()} heybyte.ai. All rights reserved.</p>
    </footer>
  )
}
