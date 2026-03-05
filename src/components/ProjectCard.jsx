import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, githubLink, demoLink }) => {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="flex flex-col h-full p-6 bg-[var(--color-beige-card)] dark:bg-[var(--color-dark-bg)] border border-black/5 dark:border-white/5 rounded-xl transition-shadow hover:shadow-lg dark:hover:shadow-white/5"
        >
            <h3 className="text-xl font-bold tracking-tight text-[var(--text-color)] mb-2">
                {title}
            </h3>
            <p className="flex-grow text-sm text-[var(--text-color)]/80 mb-6 leading-relaxed">
                {description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-[var(--text-color)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--text-color)] transition-colors"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-[var(--text-color)]/70 hover:text-[var(--text-color)] transition-colors"
                    >
                        <Github size={16} />
                        <span>Code</span>
                    </a>
                )}
                {demoLink && (
                    <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-[var(--text-color)]/70 hover:text-[var(--text-color)] transition-colors"
                    >
                        <ExternalLink size={16} />
                        <span>Demo</span>
                    </a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
