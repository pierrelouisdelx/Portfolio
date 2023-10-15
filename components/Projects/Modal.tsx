import { type Project } from '@/data/projects';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface ModalProps {
    project: Project;
    setSelectedProject: (project: Project | null) => void;
    innerRef: any;
}

export default function Modal({
    project,
    setSelectedProject,
    innerRef,
}: ModalProps) {
    const video = project.video ?? project.demo ?? null;

    return (
        <AnimatePresence>
            <motion.div
                className='fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 bg-black bg-opacity-80'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
            >
                <div
                    className='flex flex-col justify-center w-full bg-gray-700 rounded-lg shadow md:w-auto'
                    ref={innerRef}
                >
                    <div className='flex items-center justify-between p-4 border-b border-gray-600 rounded-t'>
                        <h3 className='text-xl font-semibold text-white max-w-[80%] text-start'>
                            {project.name}
                        </h3>
                        <button
                            className='text-gray-400 bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex items-center hover:bg-gray-600 hover:text-white'
                            onClick={() => setSelectedProject(null)}
                        >
                            <svg
                                aria-hidden='true'
                                className='w-5 h-5'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                    clipRule='evenodd'
                                ></path>
                            </svg>
                            <span className='sr-only'>Close modal</span>
                        </button>
                    </div>
                    <div className='flex flex-col items-center justify-center p-3'>
                        <p className='text-base leading-relaxed text-gray-400'>
                            {project.description}
                        </p>
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
                        {!video && project.background && (
                            <Image
                                src={project.background}
                                alt={project.name}
                                className='p-4 rounded-lg max-h-96'
                                width={658}
                                height={project.height * 1.7}
                            />
                        )}
                        {video && (
                            <video
                                autoPlay
                                controls
                                className='w-full p-4 rounded-lg max-h-96'
                                preload='none'
                            >
                                <source src={video} type='video/mp4' />
                            </video>
                        )}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
