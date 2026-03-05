import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const experiments = [
    {
        title: 'WebGL Fluid Simulation',
        description: 'A real-time fluid simulation running entirely in the browser using WebGL and custom shaders.',
        github: 'https://github.com',
        demo: 'https://example.com'
    },
    {
        title: 'React Three Fiber Playground',
        description: 'Experimenting with 3D elements in React interfaces. Includes interactive models and physics.',
        github: 'https://github.com',
        demo: 'https://example.com'
    },
    {
        title: 'Custom Programming Language',
        description: 'A toy interpreted programming language written in TypeScript. Includes a lexer, parser, and tree-walk interpreter.',
        github: 'https://github.com'
    }
];

const Experiments = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h1 className="text-3xl font-bold tracking-tight text-[var(--text-color)] mb-4">
                    Experiments
                </h1>
                <p className="text-lg text-[var(--text-color)]/80">
                    Small creative coding projects, library explorations, and prototypes that don't quite fit as full projects.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {experiments.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex flex-col bg-[var(--color-beige-card)] dark:bg-[var(--color-dark-bg)] border border-black/5 dark:border-white/5 p-6 rounded-xl hover:border-[var(--color-teal-muted)] transition-colors"
                    >
                        <h3 className="text-lg font-bold text-[var(--text-color)] mb-2">{exp.title}</h3>
                        <p className="text-sm text-[var(--text-color)]/80 mb-6 flex-grow">{exp.description}</p>

                        <div className="flex gap-4 mt-auto">
                            {exp.github && (
                                <a href={exp.github} target="_blank" rel="noopener noreferrer" className="text-[var(--text-color)]/60 hover:text-[var(--text-color)] transition-colors">
                                    <Github size={18} />
                                </a>
                            )}
                            {exp.demo && (
                                <a href={exp.demo} target="_blank" rel="noopener noreferrer" className="text-[var(--text-color)]/60 hover:text-[var(--text-color)] transition-colors">
                                    <ExternalLink size={18} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experiments;
