import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mt-auto border-t border-black/5 dark:border-white/5 bg-transparent transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-sm text-[var(--text-color)]/60">
                        © {new Date().getFullYear()} Developer Portfolio. Built with React & Tailwind.
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-color)]/50 hover:text-[var(--text-color)] transition-colors">
                            <span className="sr-only">GitHub</span>
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-color)]/50 hover:text-[var(--text-color)] transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[var(--text-color)]/50 hover:text-[var(--text-color)] transition-colors">
                            <span className="sr-only">Twitter</span>
                            <Twitter size={20} />
                        </a>
                        <a href="mailto:hello@example.com" className="text-[var(--text-color)]/50 hover:text-[var(--text-color)] transition-colors">
                            <span className="sr-only">Email</span>
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
