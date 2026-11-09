import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container textpage">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Go to home</Link>
      </div>
    </section>
  )
}