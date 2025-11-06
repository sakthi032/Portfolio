import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';
import './App.css';

function App() {
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  // A map of section names to their refs
  const refs = {
    home: homeRef,
    about: aboutRef,
    education: educationRef,
    skills: skillsRef,
    projects: projectsRef,
    achievements: achievementsRef,
    contact: contactRef,
  };

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    refs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elementsToAnimate = document.querySelectorAll('.education-card, .project-card, .achievement-card');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => {
      elementsToAnimate.forEach(el => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="App">
      <Particles />
      <Navbar scrollToSection={scrollToSection} />
      <Home ref={homeRef} scrollToSection={scrollToSection} />
      <About ref={aboutRef} />
      <Education ref={educationRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Achievements ref={achievementsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </div>
  );
}

export default App;