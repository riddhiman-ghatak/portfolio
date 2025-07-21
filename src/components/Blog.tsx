import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogProps {
  showLimited?: boolean;
}

const Blog: React.FC<BlogProps> = ({ showLimited = false }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      title: 'Building Scalable Machine Learning Pipelines',
      summary: 'Learn how to design and implement robust ML pipelines that can handle production workloads efficiently.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Machine Learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'React Performance Optimization Techniques',
      summary: 'Discover advanced strategies to optimize React applications for better user experience and performance.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Deep Learning with TensorFlow 2.0',
      summary: 'A comprehensive guide to building neural networks using the latest features in TensorFlow 2.0.',
      date: '2024-01-05',
      readTime: '15 min read',
      category: 'Deep Learning',
      image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Data Visualization Best Practices',
      summary: 'Create compelling data stories with effective visualization techniques and modern tools.',
      date: '2023-12-28',
      readTime: '10 min read',
      category: 'Data Science',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'Microservices Architecture with Node.js',
      summary: 'Design and implement scalable microservices using Node.js, Docker, and modern deployment strategies.',
      date: '2023-12-20',
      readTime: '14 min read',
      category: 'Backend Development',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      title: 'AI Ethics and Responsible Development',
      summary: 'Exploring the important considerations and frameworks for building ethical AI systems.',
      date: '2023-12-15',
      readTime: '11 min read',
      category: 'AI Ethics',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const displayedPosts = showLimited ? blogPosts.slice(0, 3) : blogPosts;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thoughts and insights on technology, machine learning, and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
            <motion.article
              key={post.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {post.summary}
                </p>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
                >
                  <span>Read more</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {showLimited && (
          <motion.div
            variants={cardVariants}
            className="text-center mt-12"
          >
            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                See All Articles
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Blog;