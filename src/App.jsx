import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import GetStarted from './pages/GetStarted'
import LegalPage from './pages/LegalPage'
import { privacy, terms } from './data/legal'
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
         
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
        
          <Route path="/blog" element={<TextPage title="Blog"><p>Articles are coming soon.</p></TextPage>} />
          <Route path="/privacy-policy" element={<LegalPage doc={privacy} />} />
<Route path="/terms-of-service" element={<LegalPage doc={terms} />} />
<Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
