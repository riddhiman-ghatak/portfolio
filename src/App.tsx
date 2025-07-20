import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TechnologyStack from './components/TechnologyStack';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Blog from './components/Blog';
import CV from './components/CV';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return saved ? JSON.parse(saved) : prefersDark;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }
    
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <About />
        <TechnologyStack />
        <Projects />
        <WorkExperience />
        <Blog />
        <CV />
      </main>
    </div>
  );
}

export default App;