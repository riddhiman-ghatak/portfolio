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
            title: 'Implementing Video RAG : Multimodal Retrieval-Augmented Generation with code',
            summary: 'Explore how to build a cutting-edge video search system that leverages both visual scenes and spoken content using Retrieval-Augmented Generation (RAG) with LLMs and code examples.',
            date: '2025-07-21',
            readTime: '5 min read',
            category: 'Multimodal AI',
            image: '/video_RAG.png',
            link: 'https://medium.com/@riddhimanghatak/implementing-video-rag-multimodal-retrieval-augmented-generation-with-code-b501cbc77627', // Add your article URL here
        },
        {
            title: '"Attention Is All You Need": A Deep Dive into the Transformer Architecture',
            summary: 'A detailed walkthrough of the revolutionary 2017 paper that introduced the Transformer model, explaining its self-attention mechanism, architecture, and why it changed the future of deep learning.',
            date: '2025-07-20',
            readTime: '7 min read',
            category: 'Transformer Models',
            image: '/transformer_architecture.png',
            link: 'https://medium.com/@riddhimanghatak/attention-is-all-you-need-a-deep-dive-into-the-transformer-architecture-bb82a9a89b6b', // Add your article URL here
        },
        {
            title: 'GGUF Quantization: Making Large Language Models Accessible to Everyone',
            summary: 'Learn how GGUF quantization helps compress massive language models, enabling efficient deployment on low-resource devices while preserving performance and accuracy.',
            date: '2025-07-19',
            readTime: '7 min read',
            category: 'LLM Optimization',
            image: '/LLM_Quantization.png',
            link: 'https://medium.com/@riddhimanghatak/gguf-quantization-making-large-language-models-accessible-to-everyone-9ad6401d8688', // Add your article URL here
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

                                    <a
                                        href={post.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center space-x-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors"
                                    >
                                        <motion.button whileHover={{ x: 5 }} className="flex items-center space-x-2">
                                            <span>Read full article</span>
                                            <ArrowRight size={16} />
                                        </motion.button>
                                    </a>

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