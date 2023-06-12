import { Title } from '@/ui';
import { useEffect, useState } from 'react';
import { Card } from '@/components/Projects/Card';
import { AnimatePresence, motion, useMotionValue, animate } from 'framer-motion';
import DotGrid from '@/components/DotGrid';

enum Categories {
    ALL = -1,
    WEB,
    VIDEOGAME,
    SOFTWARE,
    SYSTEM,
    COMPUTERVISION,
}

const cats = ['all', 'web', 'video games', 'software', 'system', 'computer vision'];
const projects = [
    {
        name: 'HydraFlow',
        description: 'Fluid simulation engine',
        technologies: ['OpenGL', 'C++'],
        url: '',
        category: Categories.WEB,
    },
    {
        name: '2',
        description: 'My personal website',
        technologies: ['OpenGL', 'C++'],
        url: '',
        category: Categories.SYSTEM,
    },
    {
        name: '3',
        description: 'My personal website',
        technologies: ['OpenGL', 'C++'],
        url: '',
        category: Categories.WEB,
    },
];

interface CategoryProps {
    category: string;
    index: number;
    setSelected: (index: number) => void;
}

export default function Projects() {
    const [selected, setSelected] = useState<Categories>(Categories.WEB);
    const [filteredProjects, setFilteredProjects] = useState(projects);

    const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
    const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            animate(mouseX, e.clientX);
            animate(mouseY, e.clientY);
        };
        if (typeof window === 'undefined') return;

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (selected === Categories.ALL) setFilteredProjects(projects);
        else setFilteredProjects(projects.filter((project) => project.category === selected));
    }, [selected]);

    return (
        <div className='flex flex-col w-full' id='projects'>
            <Title>Projects</Title>
            <div className='flex flex-wrap justify-evenly'>
                {cats.map((cat, index) => (
                    <Category
                        category={cat}
                        key={cat}
                        index={index - 1}
                        setSelected={setSelected}
                    />
                ))}
            </div>
            <motion.div layout className='relative flex flex-wrap transform-style preserve-3d'>
                <DotGrid />
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <Card
                            project={project}
                            key={project.name}
                            mouseX={mouseX}
                            mouseY={mouseY}
                        />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

const Category = (props: CategoryProps) => {
    return (
        <div
            className='flex items-center justify-center px-2 py-1 m-2 text-white capitalize bg-orange-300 rounded-lg cursor-pointer hover:bg-orange-400'
            onClick={() => props.setSelected(props.index)}
        >
            <h1 className='text-lg'>{props.category}</h1>
        </div>
    );
};
