import React from 'react';
import About from '../components/About';
import TechnologyStack from '../components/TechnologyStack';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import Blog from '../components/Blog';
import CV from '../components/CV';

const HomePage: React.FC = () => {
    return (
        <main>
            <About />
            <TechnologyStack />
            <Projects showLimited={true} />
            <WorkExperience />
            <Blog showLimited={true} />
            <CV />
        </main>
    );
};

export default HomePage;