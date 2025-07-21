import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
    // Ensure page starts at top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            title: 'AI-Powered Analytics Dashboard',
            description: 'A comprehensive dashboard that uses machine learning to provide real-time insights and predictive analytics for business metrics. Built with modern technologies and scalable architecture.',
            tags: ['Python', 'React', 'TensorFlow', 'PostgreSQL', 'Docker'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Smart E-commerce Platform',
            description: 'Full-stack e-commerce solution with recommendation engine, inventory management, and real-time order tracking. Features advanced search capabilities and personalized user experiences.',
            tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Neural Network Visualizer',
            description: 'Interactive tool for visualizing neural network architectures and training processes in real-time. Helps students and researchers understand complex ML concepts through intuitive visualizations.',
            tags: ['TypeScript', 'D3.js', 'WebGL', 'Python', 'FastAPI'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Social Media Analytics Tool',
            description: 'Analyze social media trends and sentiment using NLP techniques and beautiful data visualizations. Provides actionable insights for marketing teams and content creators.',
            tags: ['React', 'Python', 'spaCy', 'Chart.js', 'AWS'],
            githubUrl: 'https://github.com',
            image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Real-time Chat Application',
            description: 'Scalable chat app with video calls, file sharing, and AI-powered message moderation. Supports thousands of concurrent users with low latency messaging.',
            tags: ['React', 'Socket.io', 'Node.js', 'WebRTC', 'MongoDB'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            image: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Automated Trading Bot',
            description: 'Cryptocurrency trading bot using reinforcement learning algorithms for optimal trading strategies. Features risk management and portfolio optimization capabilities.',
            tags: ['Python', 'PyTorch', 'REST APIs', 'Redis', 'Docker'],
            githubUrl: 'https://github.com',
            image: 'https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'Healthcare Management System',
            description: 'Comprehensive healthcare platform for patient management, appointment scheduling, and medical records. Includes telemedicine capabilities and HIPAA compliance.',
            tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600',
        },
        {
            title: 'IoT Environmental Monitor',
            description: 'IoT-based environmental monitoring system with real-time data collection, analysis, and alerting. Monitors air quality, temperature, and humidity across multiple locations.',
            tags: ['Python', 'React', 'InfluxDB', 'MQTT', 'Raspberry Pi'],
            githubUrl: 'https://github.com',
            image: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        <div className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col">
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
                        className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span>Back to Home</span>
                    </Link>

                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        All Projects
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
                        A comprehensive showcase of my work spanning machine learning, web development, and innovative software solutions.
                    </p>
                </motion.div>

                {/* Projects List */}
                <div className="space-y-8 flex flex-col">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden order-none"
                            style={{ order: index }}
                        >
                            <div className="md:flex">
                                <div className="md:w-1/3">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 md:h-full object-cover"
                                    />
                                </div>

                                <div className="md:w-2/3 p-8">
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full"
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
                                            className="flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
                                        >
                                            <Github size={16} />
                                            <span>View Code</span>
                                        </motion.a>
                                        {project.liveUrl && (
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                                            >
                                                <ExternalLink size={16} />
                                                <span>Live Demo</span>
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectsPage;