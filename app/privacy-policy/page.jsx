import LegalPage from '../../src/screens/LegalPage'
import { privacy } from '../../src/data/legal'

export const metadata = {
  title: 'Privacy Policy',
  description: 'How heybyte.ai collects, uses and protects your personal information.',
  alternates: { canonical: '/privacy-policy' },
}

export default function Page() { return <LegalPage doc={privacy} /> }