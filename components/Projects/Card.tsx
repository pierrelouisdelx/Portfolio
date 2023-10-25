import { Reveal } from '@/components/Reveal';
import { Project } from '@/data/projects';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export const Card = ({
    project,
    setSelectedProject,
}: {
    project: Project;
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
            <Reveal>
                <>
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
                            loading='lazy'
                            blurDataURL={project.background}
                            placeholder='blur'
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
                        <h3 className='pb-3 text-xl font-semibold'>
                            {project.name}
                        </h3>
                        <p>{project.description}</p>
                        <p className='mt-2 flex flex-wrap'>
                            {project.technologies.map((tech) => (
                                <span
                                    className='bg-primary px-2 py-1 rounded-lg mr-2 mb-2'
                                    key={tech}
                                >
                                    {tech}
                                </span>
                            ))}
                        </p>
                    </a>
                </>
            </Reveal>
        </motion.div>
    );
};

const getGridRowEnd = (height: any) => {
    if (height) {
        return `span ${height}`;
    }
    return 'span 1';
};
