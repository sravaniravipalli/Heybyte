export default function LegalPage({ doc }) {
  return (
    <section className="section">
      <div className="container legal">
        <h1>{doc.title}</h1>
        {doc.updated && <p className="legal__date">Last updated: {doc.updated}</p>}
        {doc.sections.map((s, i) => (
          <section key={i} className="legal__sec" id={`s${i + 1}`}>
            <h2>{i + 1}. {s.heading}</h2>
            {s.paragraphs?.map((p, k) => <p key={k}>{p}</p>)}
            {s.list && <ul>{s.list.map((li, k) => <li key={k}>{li}</li>)}</ul>}
          </section>
        ))}
      </div>
    </section>
  )
}