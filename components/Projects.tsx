import { Title } from '@/ui';
import { useEffect, useState } from 'react';
import { Card } from '@/components/Projects/Card';
import { AnimatePresence, motion } from 'framer-motion';

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
        name: '1',
        description: 'My personal website',
        url: '',
        category: Categories.WEB,
    },
    {
        name: '2',
        description: 'My personal website',
        url: '',
        category: Categories.SYSTEM,
    },
    {
        name: '3',
        description: 'My personal website',
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

    useEffect(() => {
        if (selected === Categories.ALL) setFilteredProjects(projects);
        else setFilteredProjects(projects.filter((project) => project.category === selected));
    }, [selected]);

    return (
        <div className='flex flex-col w-full' id='projects'>
            <Title>Projects</Title>
            <div className='flex justify-evenly flex-wrap'>
                {cats.map((cat, index) => (
                    <Category
                        category={cat}
                        key={cat}
                        index={index - 1}
                        setSelected={setSelected}
                    />
                ))}
            </div>
            <motion.div layout className='flex flex-wrap'>
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <Card project={project} key={project.name} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

const Category = (props: CategoryProps) => {
    return (
        <div
            className='bg-orange-300 text-white rounded-lg p-2 capitalize m-2 cursor-pointer hover:bg-orange-400'
            onClick={() => props.setSelected(props.index)}
        >
            <h1 className='text-lg'>{props.category}</h1>
        </div>
    );
};
