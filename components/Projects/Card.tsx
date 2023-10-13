import { Project } from '@/data/projects';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

interface CardProps {
    project: Project;
    setSelectedProject: (index: any) => void;
}

export const Card = ({ project, setSelectedProject }: CardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={classNames(
                'relative text-left rounded-lg cursor-pointer md:m-2 item',
                project.category
            )}
            onClick={() => setSelectedProject(project)}
        >
            {project.background && (
                <Image
                    src={project.background}
                    alt={project.name}
                    className={classNames(
                        'transition-all ease-in-out duration-300 rounded-lg',
                        isHovered ? 'blur-sm brightness-50' : ''
                    )}
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
                <h3 className='pb-2 text-xl font-semibold'>{project.name}</h3>
                <p>{project.description}</p>
                <p className='mt-2 flex flex-wrap'>
                    {project.technologies.map((tech) => (
                        <span
                            className='bg-orange-400 px-2 py-1 rounded-lg mr-2 mb-2'
                            key={tech}
                        >
                            {tech}
                        </span>
                    ))}
                </p>
            </a>
        </div>
    );
};
