import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectsProps {
  showLimited?: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ showLimited = false }) => {
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


  const displayedProjects = showLimited ? projects.slice(0, 3) : projects;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work spanning machine learning, web development, and data science projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
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
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {showLimited && (
          <motion.div
            variants={cardVariants}
            className="text-center mt-12"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                See All Projects
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;