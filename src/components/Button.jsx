import { Link } from 'react-router-dom'

export default function Button({ to, children, variant = 'primary', ...rest }) {
  const cls = `btn btn--${variant}`
  const inner = <>{children}<svg className="btn__arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg></>
  return to ? <Link to={to} className={cls} {...rest}>{inner}</Link> : <button className={cls} {...rest}>{inner}</button>
}
