
import React from 'react';
import { useRef } from 'react';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Eye, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const CV: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // 👇 This is the new ref for the preview section
  const previewRef = useRef<HTMLDivElement>(null);

  // 👇 This function scrolls to the preview when the button is clicked
  const handlePreviewClick = () => {
    previewRef.current?.scrollIntoView({ behavior: 'smooth' });
  };


  const experience = [
    {
      title: 'Data Scientist',
      company: 'Commonwealth Bank of Australia',
      period: 'Aug 2025 - Present',
      description: 'Working on Agentic AI applications, MLOps pipelines, and LLMOps solutions to enable scalable, intelligent banking systems.',
    },
    {
      title: 'Data Science Intern',
      company: 'Menrva Technologies',
      period: 'Nov 2023 - Feb 2024',
      description: 'Built a resume scraping and shortlisting pipeline using RAG, LangChain and ChromaDB with Mistral-7B-Instruct. Applied Semantic Search and Re-ranking using BM25, Cross-Encoders and FlashRank.',
    },
    {
      title: 'Research Intern',
      company: 'University of New South Wales',
      period: 'Feb 2023 - Apr 2023',
      description: 'Built time series forecasting models for GDP prediction using ARIMA, FBProphet and LSTM. Achieved MAPE of 11.41 and Theil’s U statistic of 0.67 under Prof. Rohitash Chandra.',
    }
  ];


  const education = [
    {
      degree: 'B.Tech in Chemical Science and Technology',
      institution: 'Indian Institute of Technology, Guwahati',
      period: '2021 - Present',
      description: 'Current CGPA: 8.00. Focused coursework in machine learning, data structures, computational chemistry, and analytics.',
    }
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
            <motion.a
              href="/Resume_Riddhiman_Ghatak_ML.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.a>


            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePreviewClick}
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
                  <span className="text-gray-900 dark:text-white">riddhimanghatak@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-purple-600 dark:text-purple-400" size={20} />
                  <span className="text-gray-900 dark:text-white">+91-6290995330</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-purple-600 dark:text-purple-400" size={20} />
                  <span className="text-gray-900 dark:text-white">Bengaluru, India</span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* CV Preview Mock */}
        <motion.div
          ref={previewRef}
          variants={itemVariants}
          className="mt-16 bg-gray-200 dark:bg-gray-800 rounded-2xl px-4 sm:px-8 md:px-16 py-12"
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 w-full mx-auto">
            <div className="text-gray-500 dark:text-gray-400 mb-4">
              <div className="w-full h-[85vh] bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <iframe
                  src="/Resume_Riddhiman_Ghatak_ML.pdf"
                  title="CV Preview"
                  className="w-full h-full rounded-lg border-none"
                />
              </div>
            </div>
          </div>
        </motion.div>


      </motion.div>
    </section>
  );
};

export default CV;