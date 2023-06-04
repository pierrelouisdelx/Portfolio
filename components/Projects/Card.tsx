import { motion } from 'framer-motion';

interface ProjectProps {
    name: string;
    description: string;
    url: string;
    category: number;
}

export const Card = ({ project }: { project: ProjectProps }) => {
    return (
        <motion.div
            layout
            transition={{ duration: 0.25 }}
            className='bg-black p-5 rounded-lg m-2 w-1/4'
        >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>{project.url}</p>
        </motion.div>
    );
};
