import LegalPage from '../../src/screens/LegalPage'
import { terms } from '../../src/data/legal'

export const metadata = {
  title: 'Terms of Service',
  description: 'The terms that apply when you use the heybyte.ai website and services.',
  alternates: { canonical: '/terms-of-service' },
}

export default function Page() { return <LegalPage doc={terms} /> }