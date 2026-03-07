// Maximus AI Strategic Advisory — Website
// Created: 2026-03-07
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Framework from './components/Framework'
import Services from './components/Services'
import GrowthEngine from './components/GrowthEngine'
import Results from './components/Results'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <Framework />
      <Services />
      <GrowthEngine />
      <Results />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
