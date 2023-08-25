import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

interface ProjectProps {
    name: string;
    description: string;
    technologies: string[];
    url: string;
    category: number;
    background?: string;
    height: number;
    size?: number;
    video?: string;
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
            className='relative text-left rounded-lg cursor-pointer md:m-2'
            style={{
                width: '100%',
                maxWidth: '24rem',
                gridRowEnd: getGridRowEnd(project?.size),
            }}
            onClick={() => setSelectedProject(project)}
        >
            {project.background && (
                <Image
                    src={project.background}
                    alt={project.name}
                    className={`${
                        isHovered ? 'blur-sm brightness-50' : ''
                    } transition-all ease-in-out duration-300 rounded-lg border`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    width={384}
                    height={project.height}
                />
            )}
            {project.video && (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`${
                        isHovered ? 'blur-sm brightness-50' : ''
                    } transition-all ease-in-out duration-300 rounded-lg border`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <source src={project.video} type='video/mp4' />
                </video>
            )}
            <a
                className={`w-full h-full ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                } transition-all ease-in-out duration-300 absolute z-10 p-5 top-0`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h3 className='pb-3 text-2xl font-semibold'>{project.name}</h3>
                <p>{project.description}</p>
                <p className='pt-2 italic text-slate-500'>
                    {project.technologies.join(', ')}
                </p>
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
