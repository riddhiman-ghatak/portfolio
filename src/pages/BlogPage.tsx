import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPage: React.FC = () => {
    // Ensure page starts at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const blogPosts = [
        {
            title: 'Building Scalable Machine Learning Pipelines',
            summary: 'Learn how to design and implement robust ML pipelines that can handle production workloads efficiently. This comprehensive guide covers everything from data preprocessing to model deployment.',
            date: '2024-01-15',
            readTime: '8 min read',
            category: 'Machine Learning',
            image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'React Performance Optimization Techniques',
            summary: 'Discover advanced strategies to optimize React applications for better user experience and performance. From code splitting to memoization, learn the techniques that make a difference.',
            date: '2024-01-10',
            readTime: '12 min read',
            category: 'Web Development',
            image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Deep Learning with TensorFlow 2.0',
            summary: 'A comprehensive guide to building neural networks using the latest features in TensorFlow 2.0. Explore advanced architectures and training techniques for modern AI applications.',
            date: '2024-01-05',
            readTime: '15 min read',
            category: 'Deep Learning',
            image: 'https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Data Visualization Best Practices',
            summary: 'Create compelling data stories with effective visualization techniques and modern tools. Learn how to choose the right charts and design principles for maximum impact.',
            date: '2023-12-28',
            readTime: '10 min read',
            category: 'Data Science',
            image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Microservices Architecture with Node.js',
            summary: 'Design and implement scalable microservices using Node.js, Docker, and modern deployment strategies. Learn about service communication, data consistency, and monitoring.',
            date: '2023-12-20',
            readTime: '14 min read',
            category: 'Backend Development',
            image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'AI Ethics and Responsible Development',
            summary: 'Exploring the important considerations and frameworks for building ethical AI systems. Understand bias, fairness, and the social impact of artificial intelligence.',
            date: '2023-12-15',
            readTime: '11 min read',
            category: 'AI Ethics',
            image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Modern CSS Grid and Flexbox Layouts',
            summary: 'Master modern CSS layout techniques with Grid and Flexbox. Learn how to create responsive, flexible layouts that work across all devices and browsers.',
            date: '2023-12-10',
            readTime: '9 min read',
            category: 'Frontend Development',
            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Database Design Patterns for Scale',
            summary: 'Explore database design patterns that enable applications to scale effectively. From sharding to replication, learn the strategies used by high-traffic applications.',
            date: '2023-12-05',
            readTime: '13 min read',
            category: 'Database Design',
            image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Cloud Security Best Practices',
            summary: 'Comprehensive guide to securing cloud applications and infrastructure. Learn about identity management, encryption, and monitoring in cloud environments.',
            date: '2023-11-28',
            readTime: '16 min read',
            category: 'Cloud Security',
            image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'GraphQL vs REST: Making the Right Choice',
            summary: 'Compare GraphQL and REST APIs to understand when to use each approach. Explore the benefits, drawbacks, and implementation considerations for both technologies.',
            date: '2023-11-20',
            readTime: '12 min read',
            category: 'API Design',
            image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
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

    const itemVariants = {
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
        <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 flex flex-col">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-1"
            >
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </Link>

                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        All Articles
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                        In-depth articles on technology, machine learning, software development, and industry insights.
                    </p>
                </motion.div>

                {/* Blog Posts List */}
                <div className="space-y-8 flex flex-col">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={post.title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer order-none"
                            style={{ order: index }}
                        >
                            <div className="md:flex">
                                <div className="md:w-1/3">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>

                                <div className="md:w-2/3 p-8">
                                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-medium">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center space-x-1">
                                            <Calendar size={14} />
                                            <span>{new Date(post.date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Clock size={14} />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        {post.summary}
                                    </p>

                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
                                    >
                                        <span>Read full article</span>
                                        <ArrowRight size={16} />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default BlogPage;