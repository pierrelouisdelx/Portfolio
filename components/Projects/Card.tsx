import { motion, useTransform, MotionValue } from 'framer-motion';
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
    mouseY,
}: {
    project: ProjectProps;
    mouseX: MotionValue<number>;
    mouseY: MotionValue<number>;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const dampen = 40;
    const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
        if (!cardRef.current) return 0;
        const rect = cardRef.current.getBoundingClientRect();
        const newRotateX = newMouseY - rect.top - rect.height / 2;
        return -newRotateX / dampen;
    });
    const rotateY = useTransform(mouseX, (newMouseX) => {
        if (!cardRef.current) return 0;
        const rect = cardRef.current.getBoundingClientRect();
        const newRotateY = newMouseX - rect.left - rect.width / 2;
        return newRotateY / dampen;
    });

    return (
        <motion.div
            layout
            transition={{ duration: 0.25 }}
            className='bg-[#1f2937] p-5 rounded-lg m-2 w-1/4 cursor-pointer text-left border-white border'
            whileHover='hover'
            ref={cardRef}
        >
            <a href={project.url} target='_blank'>
                <h3 className='pb-3 text-2xl font-semibold'>{project.name}</h3>
                <p>{project.description}</p>
                <p className='pt-2 italic text-slate-500'>{project.technologies.join(', ')}</p>
            </a>
        </motion.div>
    );
};

const CardWrapper = ({ children }) => (
    <motion.div className='rounded-lg backdrop-filter backdrop-blur-sm backdrop-brightness-120'>
        {children}
    </motion.div>
);
