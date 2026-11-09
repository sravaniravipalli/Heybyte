import '../src/styles/global.scss'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import SmoothScroll from '../src/components/SmoothScroll'
import { company } from '../src/data/company'

export const metadata = {
 metadataBase: new URL('https://www.heybyte.ai'),
  icons: { icon: '/favicon.ico' },
  title: {
    default: 'heybyte.ai | App Development, Website Development & Software Solutions',
    template: '%s | heybyte.ai',
  },
  description:
    'heybyte.ai is a software development company in Andhra Pradesh, India offering mobile app development, web applications, cloud architecture, DevOps and technical consulting.',
  openGraph: {
    siteName: 'heybyte.ai',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
 url: 'https://www.heybyte.ai',
logo: 'https://www.heybyte.ai/logo.png',
  telephone: company.phone,
  email: company.email,
  sameAs: [company.linkedin, company.instagram],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600&family=Inter:wght@400;500;600&family=Lexend:wght@600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}