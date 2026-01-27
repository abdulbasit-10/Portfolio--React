import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Home";
import About from "./About";
import Technologies from "./Technologies";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;