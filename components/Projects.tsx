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
        background: '/fluid.png',
    },
    {
        name: 'TerraNoise',
        description: 'Procedural terrain generation',
        technologies: ['C++', 'Unreal Engine'],
        url: '',
        category: Categories.VIDEOGAME,
    },
    {
        name: 'HyperLiDAR Classification',
        description:
            'Classification pixels in hyperspectral and LiDAR images to identify object classes in the environment',
        technologies: ['Python', 'Sklearn', 'SeaBorn', 'Pandas', 'Numpy'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/hyperspectral.png',
    },
    {
        name: 'SchoolRunner',
        description: 'Educational endless runner video game for mobile',
        technologies: ['C#', 'Unity'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/schoolrunner.png',
    },
    {
        name: 'Finalist of the GottaGoHack Hackathon 2022',
        description: 'Dating app in the metaverse',
        technologies: ['C#', 'Unity', 'Mediapipe'],
        url: '',
        category: Categories.WEB,
        background: '/metavers.gif',
    },
    {
        name: 'Snow avalanche detection',
        description: 'Computer vision project',
        technologies: ['Python', 'OpenCV'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/avalanche.png',
    },
    {
        name: 'SkyCrane',
        description: 'RPG video game',
        technologies: ['C#', 'Unity'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/skycrane.png',
    },
    {
        name: 'Autonomous Drone',
        description: 'Autonomous drone for package delivery controlled by finger tracking',
        technologies: ['C++', 'Python', 'Mediapipe', 'Ardupilot', 'Raspberry Pi'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/drone.png',
    },
    {
        name: 'SSH brute force map',
        description: 'Map of the world with SSH brute force attacks based on IP addresses',
        technologies: ['Python', 'React', 'SQL'],
        url: '',
        category: Categories.SYSTEM,
        background:
            'https://raw.githubusercontent.com/pierrelouisdelx/ssh-bruteforce-map/main/bruteforce-map.png',
    },
];

interface CategoryProps {
    category: string;
    index: number;
    setSelected: (index: number) => void;
}

export default function Projects() {
    const [selected, setSelected] = useState<Categories>(Categories.ALL);
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
            <div className='flex flex-wrap justify-start md:justify-center'>
                {cats.map((cat, index) => (
                    <Category
                        category={cat}
                        key={cat}
                        index={index - 1}
                        setSelected={setSelected}
                    />
                ))}
            </div>
            <div style={{ perspective: 1000 }} className='min-h-72'>
                <motion.div
                    layout
                    className='relative flex flex-wrap justify-center h-full transform-style preserve-3d'
                >
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
