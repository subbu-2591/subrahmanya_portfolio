import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import CareerInterests from './components/CareerInterests';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Fixed navigation */}
      <Navbar />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Experience */}
        <Experience />

        {/* 5. Projects */}
        <Projects />

        {/* 6. Certifications */}
        <Certifications />

        {/* 7. Education */}
        <Education />

        {/* 8. Career Interests */}
        <CareerInterests />

        {/* 9. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
