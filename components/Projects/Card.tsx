import { Project } from '@/data/projects';
import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

export const Card = ({ project }: { project: Project }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={classNames(
                'relative text-left rounded-lg cursor-pointer md:m-2 item max-w-1/2 lg:max-w-1/3',
                project.category
            )}
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
                <h3 className='pb-3 text-xl font-semibold'>{project.name}</h3>
                <p>{project.description}</p>
                <p className='pt-2 italic text-slate-500'>
                    {project.technologies.join(', ')}
                </p>
            </a>
        </div>
    );
};

const getGridRowEnd = (height: any) => {
    if (height) {
        return `span ${height}`;
    }
    return 'span 1';
};
