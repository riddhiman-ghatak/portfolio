import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Eye, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const CV: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      title: 'Senior Data Scientist',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Leading ML initiatives and building scalable data pipelines for enterprise clients.',
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Developed web applications using React, Node.js, and cloud technologies.',
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Pro',
      period: '2019 - 2020',
      description: 'Performed statistical analysis and created data visualizations for business insights.',
    },
  ];

  const education = [
    {
      degree: 'M.Tech in Artificial Intelligence',
      institution: 'IIT Guwahati',
      period: '2017 - 2019',
      description: 'Specialized in machine learning and deep learning algorithms.',
    },
    {
      degree: 'B.Tech in Computer Science',
      institution: 'NIT Warangal',
      period: '2013 - 2017',
      description: 'Foundation in computer science with focus on software engineering.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="cv" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Curriculum Vitae
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional experience, education, and skills.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-full font-medium transition-all duration-300"
            >
              <Eye size={20} />
              <span>Preview CV</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Experience */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <div className="w-1 h-8 bg-blue-600 rounded mr-4"></div>
              Professional Experience
            </h3>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-l-0"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-2"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {job.title}
                    </h4>
                    <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                      <span className="font-medium">{job.company}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{job.period}</span>
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Education & Contact */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="w-1 h-8 bg-emerald-600 rounded mr-4"></div>
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400 mb-2">
                      <span className="font-medium">{edu.institution}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
                <div className="w-1 h-8 bg-purple-600 rounded mr-4"></div>
                Contact Information
              </h3>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-purple-600 dark:text-purple-400" size={20} />
                  <span className="text-gray-900 dark:text-white">alex.johnson@email.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-purple-600 dark:text-purple-400" size={20} />
                  <span className="text-gray-900 dark:text-white">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-purple-600 dark:text-purple-400" size={20} />
                  <span className="text-gray-900 dark:text-white">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CV Preview Mock */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gray-100 dark:bg-gray-800 rounded-2xl p-8 text-center"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Eye size={48} className="mx-auto mb-4" />
                  <p className="text-lg font-medium">CV Preview</p>
                  <p className="text-sm">Click "Preview CV" to view the full document</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CV;