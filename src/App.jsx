import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TabsSection from './components/TabsSection'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import ScrollToTop from './components/ScrollToTop'
import ContactPage from './pages/ContactPage'
import VacancyMapPage from './pages/VacancyMapPage'
import VacancyTablePage from './pages/VacancyTablePage'
import BlogPage from './pages/BlogPage'
import './App.css'

// Home page component
const HomePage = () => (
  <>
    <HeroSection />
    <TabsSection />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/vacancy-map" element={<VacancyMapPage />} />
          <Route path="/vacancy-table" element={<VacancyTablePage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
