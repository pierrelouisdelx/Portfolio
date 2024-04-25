'use client';

import skills from '@/data/skills';
import { Title } from '@/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { IconType } from 'react-icons';

export default function Skills() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className='flex flex-col w-full bg-black-1' id='skills'>
            <Title>Skills</Title>
            <div className={'grid grid-cols-2 lg:grid-cols-4 py-10'}>
                {skills.map((item, idx) => (
                    <div
                        key={item?.title}
                        className='relative group  block p-2 h-full w-full'
                        onMouseEnter={() => setHoveredIndex(idx)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <AnimatePresence>
                            {hoveredIndex === idx && (
                                <motion.span
                                    className='absolute inset-0 h-full w-full bg-primary block rounded-lg'
                                    layoutId='hoverBackground'
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: {
                                            duration: 0.15,
                                            delay: 0.2,
                                        },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Skill title={item.title} Icon={item.icon} />
                    </div>
                ))}
            </div>
        </section>
    );
}

const Skill = ({ title, Icon }: { title: string; Icon: IconType }) => {
    return (
        <div
            className={
                'rounded-md w-full p-4 overflow-hidden bg-black relative z-20 transition-all duration-500 group'
            }
        >
            <div className='py-10 z-50 relative space-y-5'>
                <Icon className='w-8 h-8 mx-auto group-hover:text-primary transition-all duration-500' />
                <p className='text-lg md:text-2xl font-bold text-center text-gray-300 group-hover:text-primary transition-all duration-500'>
                    {title}
                </p>
            </div>
        </div>
    );
};
