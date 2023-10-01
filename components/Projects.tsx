import { Title } from '@/ui';
import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/Projects/Card';
import Modal from '@/components/Projects/Modal';
import {
    AnimatePresence,
    motion,
    useMotionValue,
    animate,
} from 'framer-motion';
import DotGrid from '@/components/DotGrid';
import { useOutsideClick } from '@/hooks/outsideClick';
import { Reveal } from './Reveal';

enum Categories {
    ALL = -1,
    COMPUTERVISION,
    SOFTWARE,
    VIDEOGAME,
}

const cats = ['all', 'computer vision', 'software', 'video games'];
const projects = [
    {
        name: 'Finalist of the GottaGoHack Hackathon 2022',
        description: 'Dating app in the metaverse',
        technologies: ['C#', 'Unity', 'Mediapipe'],
        url: '',
        category: Categories.COMPUTERVISION,
        video: '/gottagohack.mp4',
        height: 217,
    },
    {
        name: 'Autonomous Drone',
        description:
            'Autonomous drone for package delivery controlled by finger tracking',
        technologies: [
            'C++',
            'Python',
            'Mediapipe',
            'Ardupilot',
            'Raspberry Pi',
        ],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/drone.png',
        height: 217,
    },
    {
        name: 'HyperLiDAR Classification',
        description:
            'Classification pixels in hyperspectral and LiDAR images to identify object classes in the environment',
        technologies: ['Python', 'Sklearn', 'SeaBorn', 'Pandas', 'Numpy'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/hyperspectral.png',
        height: 217,
    },
    {
        name: 'SchoolRunner',
        description: 'Educational endless runner video game for mobile',
        technologies: ['C#', 'Unity'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/schoolrunner.png',
        demo: 'https://cdn.orbs.cloud/SchoolRunner.mp4',
        size: 3,
        height: 217,
    },
    {
        name: 'Moving objects detection',
        description:
            'Moving objects detection using FuzzyChoquet Integral in CUDA',
        technologies: ['CUDA', 'C++'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/cuda.png',
        height: 217,
    },
    {
        name: 'SkyCrane',
        description: 'RPG video game',
        technologies: ['C#', 'Unity'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/skycrane.png',
        height: 217,
    },
    {
        name: 'HydraFlow',
        description: 'Fluid simulation engine',
        technologies: ['OpenGL', 'C++'],
        url: '',
        category: Categories.SOFTWARE,
        background: '/fluid.png',
        demo: 'https://cdn.orbs.cloud/fluid_75k.mp4',
        height: 217,
    },
    {
        name: 'TerraNoise',
        description: 'Procedural terrain generation',
        technologies: ['C++', 'Unreal Engine'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/terranoise.png',
        height: 217,
    },
    {
        name: 'Multiplayer THREE.js Video Game',
        description: 'Agar.io like video game made in 3D with THREE.js',
        technologies: ['NextJS', 'React', 'THREE.js', 'NodeJS', 'Socket.io'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/balls.png',
        height: 217,
    },
    {
        name: 'Snow avalanche detection',
        description: 'Computer vision project',
        technologies: ['Python', 'OpenCV'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/avalanche.png',
        height: 217,
    },
    {
        name: 'Drone Choreography',
        description:
            'Trailer - Drone Choreography for Paris 2024 Olympic Games',
        technologies: ['Blender', 'Skybrush'],
        url: '',
        category: Categories.SOFTWARE,
        background: '/OlympicGames.jpg',
        demo: 'https://cdn.orbs.cloud/OlympicGames.mp4',
        height: 217,
    },
    {
        name: 'SSH brute force map',
        description:
            'Map of the world with SSH brute force attacks based on IP addresses',
        technologies: ['Python', 'React', 'SQL'],
        url: '',
        category: Categories.SOFTWARE,
        background:
            'https://raw.githubusercontent.com/pierrelouisdelx/ssh-bruteforce-map/main/bruteforce-map.png',
        height: 217,
    },
    {
        name: 'Optical Character Recognition',
        description: 'OCR project made at Epita using C and GTK',
        technologies: ['C', 'GTK'],
        url: 'https://github.com/pierrelouisdelx/OCR',
        category: Categories.SOFTWARE,
        background:
            'https://raw.githubusercontent.com/pierrelouisdelx/OCR/main/images/gui-intro.png',
        height: 217,
    },
];

interface CategoryProps {
    category: string;
    index: number;
    setSelectedCategory: (index: number) => void;
    isSelected: boolean;
}

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<Categories>(
        Categories.ALL
    );
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const modalRef = useRef<any>();

    const mouseX = useMotionValue(
        typeof window !== 'undefined' ? window.innerWidth / 2 : 0
    );
    const mouseY = useMotionValue(
        typeof window !== 'undefined' ? window.innerHeight / 2 : 0
    );

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
                projects.filter(
                    (project) => project.category === selectedCategory
                )
            );
    }, [selectedCategory]);

    useOutsideClick({
        ref: modalRef,
        callback: () => setSelectedProject(null),
    });

    return (
        <div className='flex flex-col w-full' id='projects'>
            <Title>Projects</Title>
            <div className='flex flex-wrap justify-center'>
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
            <div
                style={{ perspective: 1000 }}
                className='flex justify-center min-h-72'
            >
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
            </div>
            {selectedProject && (
                <Modal
                    {...selectedProject}
                    setSelectedProject={setSelectedProject}
                    innerRef={modalRef}
                />
            )}
        </div>
    );
}

const Category = (props: CategoryProps) => {
    return (
        <Reveal>
            <div
                className={`flex items-center justify-center px-2 py-1 m-2 text-white capitalize rounded-lg cursor-pointer hover:bg-orange-800
            ${props.isSelected ? 'bg-orange-800' : 'bg-orange-400'}`}
                onClick={() => props.setSelectedCategory(props.index)}
            >
                <h1 className='text-lg'>{props.category}</h1>
            </div>
        </Reveal>
    );
};
