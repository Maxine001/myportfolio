import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/animations.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import { initAnimations } from './utils/animations';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      initAnimations();
    }
  }, [isLoading]);

  return (
    <>
      {isLoading && <Preloader onLoadingComplete={handleLoadingComplete} />}
      <div className={`app ${isLoading ? 'hidden' : ''}`}>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App;
