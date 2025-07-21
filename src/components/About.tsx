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
    {
      date: 'Aug 13, 2025',
      content: 'Graduated from IIT Guwahati with M.Tech in AI'
    },
    {
      date: 'Jul 20, 2025',
      content: 'Joined TechCorp as Senior Data Scientist'
    }
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
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                  <img
                    src="/profile_image.webp"
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
                  Riddhiman Ghatak
                </motion.h1>
                <motion.p
                  variants={itemVariants}
                  className="text-xl text-blue-600 dark:text-blue-400 mb-4"
                >
                  Data Scientist & Full Stack Developer
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4"
                >
                  <span>
                    Hi, I’m Riddhiman — a quiet guy who finds comfort in code.<br />
                    I recently graduated from IIT Guwahati and now work as a Data Scientist at Commonwealth Bank. I don’t talk much, don’t post often — I just love building stuff that works. From training ML models to deploying full-stack, ML-powered applications, I enjoy the entire lifecycle.<br />
                    Pipelines break, models drift, APIs crash — and I quietly fix them.<br />
                    That’s my idea of fun.
                  </span>

                  {/* <br />
                  <span>
                    Currently focused on the intersection of AI and scalable applications, I’ve worked on everything from predictive modeling and real-time data pipelines to intuitive dashboards powered by LLMs. My experience spans a wide range of projects, each pushing the boundaries of what technology can achieve. I believe in continuous learning, clean code, and using technology to solve meaningful problems.
                  </span> */}
                </motion.p>

              </div>
            </div>

            {/* Enhanced About Me Description
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

              </div>
            </motion.div> */}

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
                    key={update.content}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-bold">{update.date}</span>
                      <span className="ml-8">{update.content}</span>
                    </p>
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