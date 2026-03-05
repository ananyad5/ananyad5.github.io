import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

const featuredProjects = [
    {
        title: 'E-commerce Platform',
        description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication and payment processing.',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        githubLink: 'https://github.com',
        demoLink: 'https://example.com'
    },
    {
        title: 'React UI Component Library',
        description: 'An open-source accessible component library built with React and Tailwind CSS. Provides reusable components.',
        technologies: ['React', 'Tailwind CSS', 'TypeScript'],
        githubLink: 'https://github.com',
    }
];

const Home = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-20">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-h-[70vh] flex flex-col items-center justify-center text-center py-20"
            >
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight text-[var(--text-color)] mb-6 font-sans">
                    Alex Chen
                </h1>
                <p className="text-xl md:text-2xl text-[var(--text-color)]/80 mb-8 font-medium">
                    Full Stack Developer & UI/UX Designer
                </p>
                <p className="text-base text-[var(--text-color)]/70 max-w-lg mb-12">
                    I create digital experiences that are beautiful, functional, and user-centered.
                </p>

                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/10 bg-transparent px-6 py-3 text-sm font-medium text-[var(--text-color)] transition-colors hover:bg-[var(--text-color)]/5"
                >
                    View My Work
                    <ArrowDown size={16} />
                </Link>
            </motion.section>

            {/* Featured Projects Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold tracking-tight text-[var(--text-color)]">
                        Featured Projects
                    </h2>
                    <Link
                        to="/projects"
                        className="text-sm font-medium text-[var(--color-teal-muted)] hover:underline flex items-center gap-1"
                    >
                        View all <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </motion.section>
        </div>
    );
};

export default Home;
