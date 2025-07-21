import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Initialize dark mode from localStorage or default to true
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    const initialDarkMode = savedTheme ? JSON.parse(savedTheme) : true;
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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;