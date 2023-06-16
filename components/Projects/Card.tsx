import { motion, MotionValue } from 'framer-motion';
import { useState } from 'react';

interface ProjectProps {
    name: string;
    description: string;
    technologies: string[];
    url: string;
    category: number;
    background?: string;
}

export const Card = ({
    project,
    mouseX,
    mouseY,
}: {
    project: ProjectProps;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            className='relative w-full max-w-md p-5 m-2 text-left cursor-pointer lg:w-1/4'
        >
            <img
                src={project.background}
                alt={project.name}
                className={`absolute inset-0 border rounded-lg -z-10 ${
                    isHovered ? 'blur-sm' : ''
                } transition-all ease-in-out duration-300`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            <a
                href={project.url}
                target='_blank'
                className={`w-full h-full ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                } transition-all ease-in-out duration-300`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h3 className='pb-3 text-2xl font-semibold'>{project.name}</h3>
                <p>{project.description}</p>
                <p className='pt-2 italic text-slate-500'>{project.technologies.join(', ')}</p>
            </a>
        </motion.div>
    );
};
