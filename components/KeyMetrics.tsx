"use client"
import React from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
    {
        id: 1,
        value: '3+ Years',
        label: "Software Engineering Student",
        description: "Studying Software Engineering at EIU since 2020"
    },
    {
        id: 2,
        value: 2,
        label: "Completed Projects",
        description: "Worked on 2 major projects: Movie Web App & Campus Security System"
    },
    {
        id: 3,
        value: 'IELTS 6.5',
        label: "English Proficiency",
        description: "Strong communication skills in English"
    },
    {
        id: 4,
        value: "Team Collaboration",
        label: "Worked in 3-4 member teams",
        description: "Experience collaborating in web development projects"
    },
    {
        id: 5,
        value: 'Next.js, React, Java',
        label: "Tech Stack",
        description: "Proficient in Next.js, React, Tailwind CSS, Java, MySQL"
    },
]

export const KeyMetrics = () => {
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className=' px-4 py-32 text-white glass'
            id='about'
        >
            <div className='container mx-auto '>
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8 }}
                    className='text-6xl font-bold mb-12 '
                >
                    Key Metrics
                </motion.h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                            className='flex flex-col'
                        >
                            <motion.h3
                                initial={{ scale: 0.5 }}
                                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                                transition={{ duration: 0.6, delay: 0.1 + index * 0.4, type: "spring", }}
                                className='text-5xl font-bold text-purple-300 mb-2'
                            >
                                {metric.value}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1, }}
                                className='text-xl font-semibold mb-2'
                            >
                                {metric.label}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1, }}
                                className='text-xl font-semibold mb-2'
                            >
                                {metric.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    )
}
