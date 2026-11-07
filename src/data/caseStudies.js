// Placeholders: replace with real projects. Image: public/media/cases/<slug>.webp
export const caseStudies = [
  { slug: 'project-one', client: 'Client One', title: 'Support agent that resolves tickets on its own', text: 'Replace with the problem, what you built and the result.' },
  { slug: 'project-two', client: 'Client Two', title: 'Lead qualification and booking, automated', text: 'Replace with the problem, what you built and the result.' },
  { slug: 'project-three', client: 'Client Three', title: 'An internal assistant for company knowledge', text: 'Replace with the problem, what you built and the result.' },
  { slug: 'project-four', client: 'Client Four', title: 'Order updates and returns, handled instantly', text: 'Replace with the problem, what you built and the result.' },
  { slug: 'project-five', client: 'Client Five', title: 'Weekly reporting without the spreadsheet work', text: 'Replace with the problem, what you built and the result.' },
].map((c) => ({ ...c, image: `/media/cases/${c.slug}.webp`, logo: `/media/cases/${c.slug}-logo.svg` }))
