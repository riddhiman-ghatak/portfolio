import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaDatabase,
  FaCube,
  FaBrain,
  FaGitlab
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiSupabase,
  SiCplusplus,
  SiGooglecloud,
  SiKubernetes,
  SiApacheairflow,
  SiApachespark,
  SiPostman,
  SiSnowflake,
  SiFlask,
  SiMlflow,
  SiDjango,
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiDvc,
  SiOllama,
  SiNeo4J,
  SiFastapi,
  SiPostgresql,
  SiLangchain,
  SiScikitlearn,
  SiApachekafka
} from 'react-icons/si';

const TechnologyStack: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    // Row 1 - AI/ML & Vector Databases
    [
      { name: 'PyTorch', icon: SiPytorch, color: 'text-red-500' },
      { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-600' },
      { name: 'LangChain', icon: SiLangchain, color: 'text-green-600' },
      { name: 'LlamaIndex', icon: SiOllama, color: 'text-purple-600' },
      { name: 'Hugging Face', icon: SiHuggingface, color: 'text-yellow-500' },
      { name: 'Weaviate', icon: FaDatabase, color: 'text-blue-500' },
      { name: 'Neo4j', icon: SiNeo4J, color: 'text-blue-700' },
      { name: 'Pinecone', icon: FaCube, color: 'text-green-500' },
    ],
    // Row 2 - Databases & Programming Languages
    [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
      { name: 'Supabase', icon: SiSupabase, color: 'text-green-600' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-800' },
      { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
      { name: 'Python', icon: FaPython, color: 'text-yellow-600' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-700' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-600' },
      { name: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-500' },
    ],
    // Row 3 - DevOps & Cloud
    [
      { name: 'Git', icon: FaGitAlt, color: 'text-red-600' },
      { name: 'GitHub', icon: FaGithub, color: 'text-gray-800 dark:text-white' },
      { name: 'GitLab', icon: FaGitlab, color: 'text-orange-600' },
      { name: 'AWS', icon: FaAws, color: 'text-orange-500' },
      { name: 'GCP', icon: SiGooglecloud, color: 'text-blue-500' },
      { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
      { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-600' },
      { name: 'Kafka', icon: SiApachekafka, color: 'text-black dark:text-white' },
    ],
    // Row 4 - ML Ops & Data Tools
    [
      { name: 'MLflow', icon: SiMlflow, color: 'text-blue-700' },
      { name: 'Airflow', icon: SiApacheairflow, color: 'text-red-500' },
      { name: 'Spark', icon: SiApachespark, color: 'text-orange-600' },
      { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
      { name: 'Snowflake', icon: SiSnowflake, color: 'text-blue-500' },
      { name: 'DVC', icon: SiDvc, color: 'text-purple-600' },
      { name: 'Flask', icon: SiFlask, color: 'text-gray-800 dark:text-white' },
      { name: 'Django', icon: SiDjango, color: 'text-green-700' },
    ],
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

  const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={rowVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {technologies.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              variants={rowVariants}
              className="flex flex-wrap justify-center gap-6 md:gap-8"
            >
              {row.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.1,
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group min-w-[100px] sm:min-w-[120px]"
                >
                  <div className={`text-4xl sm:text-5xl mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon />
                  </div>
                  <span className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 text-center">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Optional: Add a subtle description */}
        {/* <motion.div
          variants={rowVariants}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            From frontend frameworks to machine learning libraries, I leverage modern technologies
            to build scalable, efficient, and user-friendly applications.
          </p>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default TechnologyStack;