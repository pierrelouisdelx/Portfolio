import { motion, MotionValue, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next';

interface ProjectProps {
    name: string;
    description: string;
    technologies: string[];
    url: string;
    category: number;
}

export const Card = ({
    project,
    mouseX,
    mouseY
}: {
    project: ProjectProps;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
}) => {
    return (
        <motion.div
            layout
            className='bg-[#1f2937] p-5 rounded-lg m-2 w-1/4 cursor-pointer text-left border max-h-64'
            whileHover={{ scale: 1.15 }}
        >
            <a href={project.url} target='_blank'>
                <h3 className='pb-3 text-2xl font-semibold'>{project.name}</h3>
                <p>{project.description}</p>
                <p className='pt-2 italic text-slate-500'>
                    {project.technologies.join(', ')}
                </p>
            </a>
        </motion.div>
    );
};
