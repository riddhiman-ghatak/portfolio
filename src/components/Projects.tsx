import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectsProps {
  showLimited?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ showLimited = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive dashboard that uses machine learning to provide real-time insights and predictive analytics for business metrics.',
      tags: ['Python', 'React', 'TensorFlow', 'PostgreSQL', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Smart E-commerce Platform',
      description: 'Full-stack e-commerce solution with recommendation engine, inventory management, and real-time order tracking.',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive tool for visualizing neural network architectures and training processes in real-time.',
      tags: ['TypeScript', 'D3.js', 'WebGL', 'Python', 'FastAPI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Social Media Analytics Tool',
      description: 'Analyze social media trends and sentiment using NLP techniques and beautiful data visualizations.',
      tags: ['React', 'Python', 'spaCy', 'Chart.js', 'AWS'],
      githubUrl: 'https://github.com',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Real-time Chat Application',
      description: 'Scalable chat app with video calls, file sharing, and AI-powered message moderation.',
      tags: ['React', 'Socket.io', 'Node.js', 'WebRTC', 'MongoDB'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Automated Trading Bot',
      description: 'Cryptocurrency trading bot using reinforcement learning algorithms for optimal trading strategies.',
      tags: ['Python', 'PyTorch', 'REST APIs', 'Redis', 'Docker'],
      githubUrl: 'https://github.com',
      image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const displayedProjects = showLimited ? projects.slice(0, 3) : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work spanning machine learning, web development, and data science projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showLimited && (
          <motion.div
            variants={cardVariants}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                See All Projects
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;