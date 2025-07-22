import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Building, Award } from 'lucide-react';

const WorkExperience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Data Scientist',
      company: 'Commonwealth Bank of Australia',
      location: 'Bengaluru, India',
      period: 'Aug 2025 - Present',
      type: 'Full-time',
      description: 'Working on Agentic AI applications, MLOps pipelines, and LLMOps solutions to enable scalable, intelligent banking systems.',
      achievements: [
        'Researching and deploying agentic AI solutions in production environments',
        'Building MLOps workflows using Docker, Kubernetes, and MLflow',
        'Fine-tuning LLMs and building secure RAG pipelines for internal tools',
        'Collaborating across teams for AI-driven decision support systems'
      ],
      technologies: ['Python', 'LangGraph', 'Groq', 'Docker', 'MLflow', 'Kubernetes'],
      color: 'blue'
    },
    {
      title: 'Data Science Intern',
      company: 'Menrva Technologies',
      location: 'Remote',
      period: 'Nov 2023 - Feb 2024',
      type: 'Internship',
      description: 'Built a resume scraping and shortlisting pipeline using RAG and re-ranking techniques.',
      achievements: [
        'Implemented a RAG framework using LangChain and ChromaDB with Mistral-7B-Instruct',
        'Extracted structured information in JSON using semantic search + FlashRank',
        'Achieved BERT Score of 0.56 and nDCG Score of 0.47 for re-ranking',
        'Integrated Cross-Encoders, BM25, and Cosine Similarity for improved relevance'
      ],
      technologies: ['Python', 'LangChain', 'ChromaDB', 'Mistral-7B', 'BM25', 'FlashRank'],
      color: 'green'
    },
    {
      title: 'Research Intern',
      company: 'University of New South Wales',
      location: 'Remote',
      period: 'Feb 2023 - Apr 2023',
      type: 'Internship',
      description: 'Worked under Prof. Rohitash Chandra to develop forecasting models for GDP prediction of South Asian countries.',
      achievements: [
        'Developed time series models using Exponential Smoothing and ARIMA',
        'Built FBProphet and LSTM models with hyperparameter tuning',
        'Achieved MAPE of 11.41 and Theil’s U Statistic of 0.67',
        'Demonstrated improvement over naive models in economic forecasting'
      ],
      technologies: ['Python', 'ARIMA', 'FBProphet', 'LSTM', 'Pandas', 'Matplotlib'],
      color: 'purple'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-500 bg-blue-50 dark:bg-blue-900/20',
      green: 'border-green-500 bg-green-50 dark:bg-green-900/20',
      purple: 'border-purple-500 bg-purple-50 dark:bg-purple-900/20',
      orange: 'border-orange-500 bg-orange-50 dark:bg-orange-900/20',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the impact I've made across different organizations
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full hidden md:block"></div>

                <div className="md:ml-20">
                  <div className={`bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 ${getColorClasses(exp.color)}`}>
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300">
                            <div className="flex items-center space-x-2">
                              <Building size={16} />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Calendar size={16} />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 lg:mt-0">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="flex items-center text-lg font-semibold text-gray-900 dark:text-white mb-4">
                          <Award size={20} className="mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {exp.achievements.map((achievement, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;