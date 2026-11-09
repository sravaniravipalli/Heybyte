import TextPage from '../../src/screens/TextPage'

export const metadata = {
  title: 'Blog',
  description: 'Articles from the heybyte.ai team are coming soon.',
  alternates: { canonical: '/blog' },
}

export default function Page() {
  return <TextPage title="Blog"><p>Articles are coming soon.</p></TextPage>
}