'use client'
export default function TextPage({ title, children }) {
  return (
    <section className="section"><div className="container textpage">
      <h1>{title}</h1>{children}
    </div></section>
  )
}
