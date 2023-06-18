import { motion, MotionValue } from 'framer-motion';
import { useState } from 'react';

interface ProjectProps {
    name: string;
    description: string;
    technologies: string[];
    url: string;
    category: number;
    background?: string;
    height?: number;
}

export const Card = ({
    project,
    setSelectedProject,
}: {
    project: ProjectProps;
    setSelectedProject: (index: any) => void;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            className='relative m-2 text-left border rounded-lg cursor-pointer'
            style={{
                width: '100%',
                maxWidth: '24rem',
                gridRowEnd: getGridRowEnd(project?.height),
                gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
                gridTemplateRows: 'repeat(auto-fit, minmax(0, 1fr))',
            }}
            onClick={() => setSelectedProject(project)}
        >
            <img
                src={project.background}
                alt={project.name}
                className={`${
                    isHovered ? 'blur-sm brightness-50' : ''
                } transition-all ease-in-out duration-300 rounded-lg`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            />
            <a
                className={`w-full h-full ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                } transition-all ease-in-out duration-300 min-h-72 absolute z-10 p-5 top-0`}
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

const getGridRowEnd = (height: any) => {
    if (height) {
        return `span ${height}`;
    }
    return 'span 1';
};
