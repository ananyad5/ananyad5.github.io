import { motion } from 'framer-motion';

const educationData = [
    {
        school: 'University of Technology',
        degree: 'B.S. in Computer Science',
        date: '2019 - 2023',
        gpa: '3.9/4.0',
        description: 'Focused on distributed systems, machine learning, and human-computer interaction.',
        coursework: [
            'Algorithms & Data Structures',
            'Operating Systems',
            'Distributed Systems',
            'Database Engineering',
            'Machine Learning',
            'Discrete Mathematics'
        ]
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const Education = () => {
    return (
        <div className="max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h1 className="text-3xl font-bold tracking-tight text-[var(--text-color)] mb-4">
                    Education
                </h1>
                <p className="text-lg text-[var(--text-color)]/80">
                    My academic background, interests, and relevant coursework.
                </p>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-10"
            >
                {educationData.map((edu, index) => (
                    <motion.div key={index} variants={item} className="relative pl-8 border-l border-black/10 dark:border-white/10">
                        <div className="absolute w-3 h-3 bg-[var(--color-teal-muted)] rounded-full -left-[6.5px] top-6 border-2 border-[var(--bg-color)]"></div>
                        <div className="bg-[var(--color-beige-card)] dark:bg-[var(--color-dark-bg)] p-6 rounded-xl border border-black/5 dark:border-white/5 shadow-sm">
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-[var(--text-color)]">{edu.school}</h3>
                                <span className="text-sm font-medium text-[var(--text-color)]/60 mt-1 sm:mt-0">{edu.date}</span>
                            </div>
                            <p className="text-base font-medium text-[var(--text-color)]/90 mb-4">{edu.degree}</p>
                            <p className="text-sm text-[var(--text-color)]/80 mb-6">{edu.description}</p>

                            <div>
                                <h4 className="text-sm font-semibold text-[var(--text-color)] mb-3 uppercase tracking-wider">Relevant Coursework</h4>
                                <div className="flex flex-wrap gap-2">
                                    {edu.coursework.map(course => (
                                        <span key={course} className="inline-flex items-center rounded-md bg-[var(--text-color)]/10 px-2.5 py-0.5 text-xs font-medium text-[var(--text-color)]/90">
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Education;
