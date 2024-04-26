import { Project } from '@/data/projects';
import clsx from 'clsx';
import Image from 'next/image';

export const Card = ({
    project,
    setSelectedProject,
}: {
    project: Project;
    setSelectedProject: (index: any) => void;
}) => {
    const w = project.width ? project.width : 1;
    const h = project.height ? project.height : 1;

    return (
        <div
            className={clsx(
                'cursor-pointer col-span-1 relative hover:scale-105 transition-all duration-300',
                h > 1 ? 'row-span-3' : 'row-span-1'
            )}
            onClick={() => setSelectedProject(project)}
        >
            <Image
                src={project.background as string}
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
        </div>
    );
};
