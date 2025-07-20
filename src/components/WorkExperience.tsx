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
      title: 'Senior Data Scientist',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading machine learning initiatives and building scalable data pipelines for enterprise clients. Developed predictive models that improved business outcomes by 35%.',
      achievements: [
        'Built end-to-end ML pipelines serving 10M+ users daily',
        'Led a team of 5 data scientists and engineers',
        'Reduced model inference time by 60% through optimization',
        'Published 3 research papers in top-tier conferences'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes'],
      color: 'blue'
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built responsive web applications with React and Node.js',
        'Implemented CI/CD pipelines reducing deployment time by 50%',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'MongoDB', 'AWS'],
      color: 'green'
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Pro',
      location: 'New York, NY',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Performed statistical analysis and created data visualizations for business insights. Worked closely with stakeholders to understand requirements and deliver actionable insights.',
      achievements: [
        'Created interactive dashboards using Tableau and Power BI',
        'Automated reporting processes saving 20 hours per week',
        'Conducted A/B tests that increased conversion rates by 25%',
        'Presented findings to C-level executives'
      ],
      technologies: ['Python', 'SQL', 'Tableau', 'Power BI', 'Excel'],
      color: 'purple'
    },
    {
      title: 'Research Intern',
      company: 'AI Research Lab',
      location: 'Boston, MA',
      period: '2018 - 2019',
      type: 'Internship',
      description: 'Conducted research on deep learning algorithms for computer vision applications. Contributed to open-source projects and published research findings.',
      achievements: [
        'Developed novel CNN architectures for image classification',
        'Achieved state-of-the-art results on benchmark datasets',
        'Contributed to 2 open-source machine learning libraries',
        'Presented research at international conferences'
      ],
      technologies: ['Python', 'PyTorch', 'OpenCV', 'Jupyter', 'Git'],
      color: 'orange'
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