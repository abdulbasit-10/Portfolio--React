import React from 'react'
import Navbar from "./Components/Navbar"
import Hero from './Components/Hero'
import About from './Components/About'
import Technologies from './Components/Technologies'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased
      selection:bg-cyan-300 selection:text-cyan-900"
    >
      {/* Background Layer */}
      <div
        className="w-screen min-h-screen bg-gray-900
        bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.2),rgba(255,255,255,0))]"
      >
        {/* Main Content */}
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
