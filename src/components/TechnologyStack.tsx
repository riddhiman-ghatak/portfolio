import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaDocker, 
  FaGitAlt, 
  FaGithub, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaAws 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiPostgresql, 
  SiMongodb, 
  SiTensorflow, 
  SiPytorch 
} from 'react-icons/si';

const TechnologyStack: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    // Row 1
    [
      { name: 'React', icon: FaReact, color: 'text-blue-500' },
      { name: 'NextJS', icon: SiNextdotjs, color: 'text-black dark:text-white' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
      { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
      { name: 'HTML', icon: FaHtml5, color: 'text-orange-600' },
      { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-600' },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-700' },
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
    ],
    // Row 2
    [
      { name: 'Python', icon: FaPython, color: 'text-yellow-600' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
      { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-800' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'Git', icon: FaGitAlt, color: 'text-red-600' },
      { name: 'GitHub', icon: FaGithub, color: 'text-gray-800 dark:text-white' },
      { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-600' },
      { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500' },
    ],
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={rowVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {technologies.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              variants={rowVariants}
              className="flex flex-wrap justify-center gap-6 md:gap-8"
            >
              {row.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group min-w-[100px] sm:min-w-[120px]"
                >
                  <div className={`text-4xl sm:text-5xl mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Optional: Add a subtle description */}
        <motion.div
          variants={rowVariants}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            From frontend frameworks to machine learning libraries, I leverage modern technologies 
            to build scalable, efficient, and user-friendly applications.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechnologyStack;