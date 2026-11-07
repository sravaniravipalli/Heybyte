import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import CaseStudiesPage from './pages/CaseStudiesPage'
import IndustryPage from './pages/IndustryPage'
import TextPage from './pages/TextPage'
import ServicesPage from './pages/ServicesPage'
import About from './pages/About'
import useSmoothScroll from './hooks/useSmoothScroll'
export default function App() {
   useSmoothScroll()
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/partners" element={<TextPage title="Partners"><p>List your technology and platform partners here.</p></TextPage>} />
          <Route path="/blog" element={<TextPage title="Blog"><p>Articles are coming soon.</p></TextPage>} />
          <Route path="/privacy-policy" element={<TextPage title="Privacy policy"><p>Add your privacy policy here.</p></TextPage>} />
          <Route path="/terms-of-service" element={<TextPage title="Terms of service"><p>Add your terms of service here.</p></TextPage>} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
