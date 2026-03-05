import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const projectsData = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and inventory management.',
        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Stripe'],
        githubLink: 'https://github.com',
        demoLink: 'https://example.com'
    },
    {
        title: 'Distributed Key-Value Store',
        description: 'A highly available, fault-tolerant key-value store implemented in Go, based on the Raft consensus algorithm.',
        technologies: ['Go', 'Raft', 'Distributed Systems'],
        githubLink: 'https://github.com',
    },
    {
        title: 'React UI Component Library',
        description: 'An open-source accessible component library built with React, Radix UI, and Tailwind CSS. Provides 30+ reusable components.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook'],
        githubLink: 'https://github.com',
        demoLink: 'https://example.com'
    },
    {
        title: 'Machine Learning Image Classifier',
        description: 'A convolutional neural network built with PyTorch to classify medical imagery with 98% accuracy. Includes a web app for inference.',
        technologies: ['Python', 'PyTorch', 'Flask', 'React'],
        githubLink: 'https://github.com',
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h1 className="text-3xl font-bold tracking-tight text-[var(--text-color)] mb-4">
                    Projects
                </h1>
                <p className="text-lg text-[var(--text-color)]/80 max-w-2xl">
                    A selection of projects I've worked on, ranging from full-stack web applications to distributed systems and machine learning models.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
                {projectsData.map((project, index) => (
                    <motion.div key={index} variants={item} className="h-full">
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;
