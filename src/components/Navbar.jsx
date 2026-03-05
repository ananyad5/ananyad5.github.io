import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Writing', path: '/writing' },
    { name: 'Education', path: '/education' },
    { name: 'Experiments', path: '/experiments' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    const { isDark, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-[var(--bg-color)]/70 border-b border-black/5 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <NavLink to="/" className="text-xl font-bold tracking-tighter text-[var(--text-color)] transition-colors">
                            Developer Portfolio
                        </NavLink>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => clsx(
                                    "text-sm font-medium transition-colors duration-200",
                                    isActive
                                        ? "text-[var(--color-teal-muted)]"
                                        : "text-[var(--text-color)]/70 hover:text-[var(--text-color)]"
                                )}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-[var(--text-color)]/5 text-[var(--text-color)] hover:bg-[var(--text-color)]/10 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-[var(--text-color)]/5 text-[var(--text-color)] transition-colors"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-[var(--text-color)]"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-black/5 dark:border-white/5 bg-[var(--bg-color)]"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={({ isActive }) => clsx(
                                        "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                                        isActive
                                            ? "bg-[var(--text-color)]/5 text-[var(--color-teal-muted)]"
                                            : "text-[var(--text-color)]/70 hover:bg-[var(--text-color)]/5 hover:text-[var(--text-color)]"
                                    )}
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
