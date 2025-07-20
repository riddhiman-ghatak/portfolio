import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import TechnologyStack from './components/TechnologyStack';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Blog from './components/Blog';
import CV from './components/CV';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDarkMode = savedTheme ? JSON.parse(savedTheme) : prefersDark;
    setDarkMode(initialDarkMode);
  }, []);

  // Apply dark mode to document
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
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