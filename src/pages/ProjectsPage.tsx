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
            title: 'Medicare.ai – Multi-Agent Medical Assistant',
            description: 'A LangGraph-based multi-agent system enabling patients to book appointments and access doctor availability via natural language. Powered by Groq-accelerated LLaMA-3-8B for fast and scalable medical query handling.',
            tags: ['LangGraph', 'LLaMA-3', 'Groq', 'Multi-Agent', 'LLM'],
            githubUrl: 'https://github.com/riddhiman-ghatak/medicare.ai',
            liveUrl: '',
            image: '/medical_ai_agent.png',
        },
        {
            title: 'ARIMA Time Series Forecasting with MLOps on GCP',
            description: 'An end-to-end MLOps pipeline for ARIMA-based forecasting deployed on Google Cloud using Flask, Docker, Kubernetes, Cloud Build, Pub/Sub, and Cloud Functions.',
            tags: ['Time Series', 'MLOps', 'GCP', 'ARIMA', 'Docker', 'Flask', 'Kubernetes'],
            githubUrl: 'https://github.com/riddhiman-ghatak/Timeseries_MLOPS',
            liveUrl: '',
            image: '/timeseries_forecasting.png',
        },
        {
            title: 'BERT-LLM Classification Fine-Tuning and Serving Pipeline',
            description: 'A complete pipeline for fine-tuning a BERT-based LLM on classification tasks with support for both local and cloud-based inference serving.',
            tags: ['BERT', 'LLM', 'QLoRA', 'Fine-Tuning', 'Transformers', 'NLP'],
            githubUrl: 'https://github.com/riddhiman-ghatak/BERT-LLM-Finetune-Serve-Pipeline',
            liveUrl: '',
            image: '/BERT_finetuning.png',
        },
        {
            title: 'cGAN-based Image Colorization',
            description: 'Conditional GANs used to colorize black-and-white images by learning mappings from grayscale to RGB color space.',
            tags: ['GAN', 'cGAN', 'Image Processing', 'Computer Vision', 'Deep Learning'],
            githubUrl: 'https://github.com/riddhiman-ghatak/image_colorization_using-GAN',
            liveUrl: '',
            image: '/image_colorization.png',
        },
        {
            title: 'Super-Resolution Photo Mosaic',
            description: 'Combines super-resolution and image stitching to generate high-quality panoramic images, suitable for drone or satellite imagery.',
            tags: ['Super Resolution', 'Image Stitching', 'OpenCV', 'Deep Learning'],
            githubUrl: 'https://github.com/riddhiman-ghatak/super-resolution-photo-mosaic',
            liveUrl: '',
            image: '/super_reso.png',
        },
        {
            title: 'Library Seat Detection System',
            description: 'A real-time seat detection system using YOLOv5 and OpenCV to identify unoccupied seats in library CCTV footage.',
            tags: ['YOLOv5', 'Object Detection', 'OpenCV', 'Computer Vision', 'Real-Time'],
            githubUrl: 'https://github.com/riddhiman-ghatak/library_seat_detection',
            liveUrl: '',
            image: '/library_seat_final.png',
        },
        {
            title: 'Next Video Frame Prediction using ConvLSTM',
            description: 'Future frame prediction system using ConvLSTM architecture trained on Moving MNIST, evaluated on long-term predictions and out-of-domain inputs.',
            tags: ['ConvLSTM', 'Video Prediction', 'Deep Learning', 'Computer Vision'],
            githubUrl: 'https://github.com/riddhiman-ghatak/next_video_frame_prediction',
            liveUrl: '',
            image: '/next_video_frame.png',
        },
        {
            title: 'HR Chatbot using BERT-QA',
            description: 'An intelligent HR chatbot built with deepset/bert-base-cased-squad2 for answering HR-related queries. Deployable via Flask or Streamlit.',
            tags: ['BERT', 'Question Answering', 'Chatbot', 'NLP', 'Flask', 'Streamlit'],
            githubUrl: 'https://github.com/riddhiman-ghatak/HR_Bot',
            liveUrl: '',
            image: '/HR_chatbot.png',
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