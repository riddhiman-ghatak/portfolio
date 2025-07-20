import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Twitter, Linkedin, Youtube, Instagram, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    'Python', 'React', 'TypeScript', 'Machine Learning', 'Node.js', 'PostgreSQL',
    'TensorFlow', 'Docker', 'AWS', 'Data Science', 'Next.js', 'Tailwind CSS'
  ];

  const recentPosts = [
    { title: 'Building Scalable ML Pipelines', url: '#' },
    { title: 'React Performance Optimization', url: '#' },
  ];

  const newsUpdates = [
    'Joined TechCorp as Senior Data Scientist',
    'Graduated from IIT Guwahati with M.Tech in AI',
    'Published research paper on Neural Networks',
    'Completed AWS Machine Learning Certification',
    'Speaking at Tech Conference 2024'
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Youtube, url: 'https://youtube.com', label: 'YouTube' },
    { icon: Instagram, url: 'https://instagram.com', label: 'Instagram' },
    { icon: ExternalLink, url: 'https://leetcode.com', label: 'LeetCode' },
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
    <section id="about" className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile & Bio */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
              
              <div className="text-center sm:text-left">
                <motion.h1
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
                >
                  Alex Johnson
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-blue-600 dark:text-blue-400 mb-4"
                >
                  Data Scientist & Full Stack Developer
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  Passionate about building intelligent systems and beautiful user experiences. 
                  I combine machine learning expertise with modern web development to create 
                  impactful solutions that bridge the gap between data science and user-facing applications.
                </motion.p>
              </div>
            </div>

            {/* Enhanced About Me Description */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">About Me</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate technologist with over 5 years of experience bridging the gap between 
                  data science and software engineering. My journey began with a deep fascination for 
                  artificial intelligence and machine learning, which led me to pursue advanced studies 
                  at IIT Guwahati.
                </p>
                <p>
                  Currently working as a Senior Data Scientist at TechCorp, I specialize in building 
                  end-to-end machine learning pipelines that solve real-world business problems. My 
                  expertise spans from developing sophisticated ML models to creating intuitive web 
                  applications that make complex data accessible to everyone.
                </p>
                <p>
                  When I'm not coding or training models, you'll find me contributing to open-source 
                  projects, writing technical articles, or exploring the latest advancements in AI. 
                  I believe in the power of technology to create positive change and am always excited 
                  to collaborate on innovative projects that push the boundaries of what's possible.
                </p>
                <p>
                  My approach combines technical rigor with creative problem-solving, ensuring that 
                  every solution is not only technically sound but also user-friendly and scalable. 
                  I'm particularly interested in the intersection of AI ethics, sustainable technology, 
                  and human-centered design.
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-600"
                    title={social.label}
                  >
                    <social.icon size={24} className="text-gray-700 dark:text-gray-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - News & Recent Posts */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* News & Updates - Now First */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">News & Updates</h3>
              <div className="space-y-4">
                {newsUpdates.map((update, index) => (
                  <motion.div
                    key={update}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">{update}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Posts - Now Second */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Recent Posts</h3>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <motion.a
                    key={post.title}
                    href={post.url}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400">
                      {post.title}
                    </h4>
                    <span className="text-sm text-blue-600 dark:text-blue-400">Read more →</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;