import { notFound } from 'next/navigation'
import IndustryPage from '../../../src/screens/IndustryPage'
import { industries } from '../../../src/data/industries'

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const x = industries.find((i) => i.slug === slug)
  if (!x) return {}
  return {
    title: `${x.title} Software Solutions`,
    description: x.text,
    alternates: { canonical: `/industries/${slug}` },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  if (!industries.find((i) => i.slug === slug)) notFound()
  return <IndustryPage slug={slug} />
}