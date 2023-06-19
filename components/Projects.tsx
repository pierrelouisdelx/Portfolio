import { Title } from '@/ui';
import { useEffect, useState } from 'react';
import { Card } from '@/components/Projects/Card';
import { AnimatePresence, motion, useMotionValue, animate } from 'framer-motion';
import DotGrid from '@/components/DotGrid';
import { XMarkIcon } from '@heroicons/react/24/solid';

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
        name: 'Finalist of the GottaGoHack Hackathon 2022',
        description: 'Dating app in the metaverse',
        technologies: ['C#', 'Unity', 'Mediapipe'],
        url: '',
        category: Categories.WEB,
        background: '/metavers.gif',
    },
    {
        name: 'TerraNoise',
        description: 'Procedural terrain generation',
        technologies: ['C++', 'Unreal Engine'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/terranoise.png',
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
        height: 3,
    },
    {
        name: 'HydraFlow',
        description: 'Fluid simulation engine',
        technologies: ['OpenGL', 'C++'],
        url: '',
        category: Categories.SOFTWARE,
        background: '/fluid.png',
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
        name: 'Multiplayer THREE.js Video Game',
        description: 'Agar.io like video game made in 3D with THREE.js',
        technologies: ['NextJS', 'React', 'THREE.js', 'NodeJS', 'Socket.io'],
        url: '',
        category: Categories.WEB,
        background: '/balls.png',
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
    {
        name: 'Aqualand',
        description: 'Aquarium website prototype',
        technologies: ['React', 'tailwindcss'],
        url: '',
        category: Categories.WEB,
        background: '/balena.png',
    },
    {
        name: 'Optical Character Recognition',
        description: 'OCR project made at Epita using C and GTK',
        technologies: ['C', 'GTK'],
        url: 'https://github.com/pierrelouisdelx/OCR',
        category: Categories.SOFTWARE,
        background:
            'https://raw.githubusercontent.com/pierrelouisdelx/OCR/main/images/gui-intro.png',
    },
];

interface CategoryProps {
    category: string;
    index: number;
    setSelectedCategory: (index: number) => void;
    isSelected: boolean;
}

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<Categories>(Categories.ALL);
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [selectedProject, setSelectedProject] = useState(null);

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
        if (selectedCategory === Categories.ALL) setFilteredProjects(projects);
        else
            setFilteredProjects(
                projects.filter((project) => project.category === selectedCategory)
            );
    }, [selectedCategory]);

    return (
        <div className='flex flex-col w-full' id='projects'>
            <Title>Projects</Title>
            <div className='flex flex-wrap justify-start md:justify-center'>
                {cats.map((cat, index) => (
                    <Category
                        category={cat}
                        key={cat}
                        index={index - 1}
                        setSelectedCategory={setSelectedCategory}
                        isSelected={selectedCategory === index - 1}
                    />
                ))}
            </div>
            <div style={{ perspective: 1000 }} className='min-h-72'>
                <motion.div
                    layout
                    className='relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense'
                >
                    <DotGrid />
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <Card
                                project={project}
                                key={project.name}
                                setSelectedProject={setSelectedProject}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
                <AnimatePresence>
                    {/*selectedProject && (
                        <motion.div
                            layoutId={selectedProject}
                            className='absolute inset-0 flex flex-col items-center justify-center w-full h-full p-5 text-white bg-black rounded-lg bg-opacity-80'
                        >
                            <motion.button onClick={() => setSelectedProject(null)}>
                                <XMarkIcon className='w-6 h-6' />
                            </motion.button>

                            <motion.h5>{selectedProject.name}</motion.h5>
                            <motion.h2>{selectedProject.description}</motion.h2>
                        </motion.div>
                    )*/}
                </AnimatePresence>
            </div>
        </div>
    );
}

const Category = (props: CategoryProps) => {
    return (
        <div
            className={`flex items-center justify-center px-2 py-1 m-2 text-white capitalize rounded-lg cursor-pointer hover:bg-orange-400
            ${props.isSelected ? 'bg-orange-400' : 'bg-orange-300'}`}
            onClick={() => props.setSelectedCategory(props.index)}
        >
            <h1 className='text-lg'>{props.category}</h1>
        </div>
    );
};
