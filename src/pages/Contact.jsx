import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center"
            >
                <h1 className="text-3xl font-bold tracking-tight text-[var(--text-color)] mb-4">
                    Get in Touch
                </h1>
                <p className="text-lg text-[var(--text-color)]/80">
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-[var(--color-beige-card)] dark:bg-[var(--color-dark-bg)] border border-black/5 dark:border-white/5 rounded-2xl p-8 shadow-sm"
            >
                <div className="space-y-8">
                    <div className="flex items-center gap-4 text-[var(--text-color)]/80 hover:text-[var(--color-teal-muted)] transition-colors">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--text-color)]/10">
                            <Mail className="h-6 w-6 text-[var(--text-color)]" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-[var(--text-color)]">Email</p>
                            <a href="mailto:hello@example.com" className="text-base">hello@example.com</a>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-[var(--text-color)]/80">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--text-color)]/10">
                            <MapPin className="h-6 w-6 text-[var(--text-color)]" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-[var(--text-color)]">Location</p>
                            <p className="text-base">San Francisco, CA</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 pt-8 border-t border-black/10 dark:border-white/10">
                    <h3 className="text-sm font-medium text-[var(--text-color)] mb-4 uppercase tracking-wider">Social Profiles</h3>
                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-full bg-[var(--text-color)]/10 text-[var(--text-color)]/80 hover:bg-[var(--color-teal-muted)] hover:text-white transition-all">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-full bg-[var(--text-color)]/10 text-[var(--text-color)]/80 hover:bg-[var(--color-teal-muted)] hover:text-white transition-all">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-10 rounded-full bg-[var(--text-color)]/10 text-[var(--text-color)]/80 hover:bg-[var(--color-teal-muted)] hover:text-white transition-all">
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
