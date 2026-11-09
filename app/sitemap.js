import { industries } from '../src/data/industries'

export default function sitemap() {
  const base = 'https://www.heybyte.ai'
  const pages = ['', '/services', '/about', '/get-started', '/blog', '/privacy-policy', '/terms-of-service']
  return [
    ...pages.map((p) => ({ url: `${base}${p}`, priority: p === '' ? 1 : 0.8 })),
    ...industries.map((i) => ({ url: `${base}/industries/${i.slug}`, priority: 0.7 })),
  ]
}