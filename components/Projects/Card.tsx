import { Project } from '@/data/projects';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PinContainer } from './Pin';

export const Card = ({ project }: { project: Project }) => {
    const w = project.width ? project.width : 1;
    const h = project.height ? project.height : 1;

    return (
        <motion.div
            layout
            className={clsx(
                'cursor-pointer col-span-1 relative hover:scale-105 transition-all duration-300 w-[350px] md:w-[400px] 3xl:w-[500px]',
                h > 1
                    ? 'row-span-3 3xl:h-[950px] sm:h-[750px] h-[700px]'
                    : 'row-span-1 3xl:h-[300px] sm:h-[250px] h-[225px]'
            )}
        >
            <PinContainer
                title={project.name}
                description={project.description}
                h={h}
            >
                <Image
                    src={
                        ('https://cdn.orbs.cloud' +
                            project.background) as string
                    }
                    alt={project.name}
                    className='rounded-lg'
                    width={w * 500}
                    height={h * 300}
                />

                <p className='flex flex-wrap justify-left absolute bottom-0 left-2'>
                    {project.technologies.map((tech) => (
                        <span
                            className='bg-primary/[0.8] px-2 py-1 rounded-lg mr-2 mb-2'
                            key={tech}
                        >
                            {tech}
                        </span>
                    ))}
                </p>
            </PinContainer>
        </motion.div>
    );
};
