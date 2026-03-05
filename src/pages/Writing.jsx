import { motion } from 'framer-motion';

const posts = [
    {
        title: 'Building a Distributed Database in Go',
        date: 'October 12, 2023',
        readTime: '8 min read',
        excerpt: 'Lessons learned from implementing the Raft consensus algorithm from scratch in Go. Exploring leader election, log replication, and the challenges of network partitions.',
    },
    {
        title: 'Design Systems are the Future of UI',
        date: 'August 24, 2023',
        readTime: '5 min read',
        excerpt: 'Why building a robust design system with React and Tailwind CSS accelerates product development and ensures a cohesive user experience across your application.',
    },
    {
        title: 'Book Review: Designing Data-Intensive Applications',
        date: 'June 05, 2023',
        readTime: '12 min read',
        excerpt: 'A deep dive into Martin Kleppmanns masterpiece. Unpacking the core concepts of scalability, reliability, and maintainability in modern software architecture.',
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

const Writing = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h1 className="text-3xl font-bold tracking-tight text-[var(--text-color)] mb-4">
                    Writing
                </h1>
                <p className="text-lg text-[var(--text-color)]/80">
                    Thoughts on software engineering, notes from books I've read, and technical tutorials.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-8"
            >
                {posts.map((post, index) => (
                    <motion.article
                        key={index}
                        variants={item}
                        className="group relative flex flex-col items-start justify-between rounded-xl p-6 bg-[var(--color-beige-card)] dark:bg-[var(--color-dark-bg)] border border-black/5 dark:border-white/5 transition-all hover:bg-[var(--text-color)]/5"
                    >
                        <div className="flex items-center gap-x-4 text-xs mb-3">
                            <time dateTime={post.date} className="text-[var(--text-color)]/60">
                                {post.date}
                            </time>
                            <span className="text-[var(--text-color)]/60 bg-[var(--text-color)]/10 px-2 py-1 rounded">
                                {post.readTime}
                            </span>
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-[var(--text-color)] group-hover:text-[var(--color-teal-muted)] transition-colors">
                                <a href="#">
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-[var(--text-color)]/80">
                                {post.excerpt}
                            </p>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </div>
    );
};

export default Writing;
