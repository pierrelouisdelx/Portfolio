export enum Categories {
    ALL = -1,
    COMPUTERVISION = 0,
    SOFTWARE = 1,
    VIDEOGAME = 2,
}

export interface Project {
    name: string;
    description: string;
    technologies: string[];
    url: string;
    category: number;
    background?: string;
    height?: number;
    width?: number;
    demo?: string;
}

export const projects: Project[] = [
    {
        name: 'Research - Methane plume detection',
        description:
            'Research on Methane Plume Detection in Hyperspectral Images using Deep Learning',
        technologies: ['Python', 'Pytorch', 'CUDA'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/plume.webp',
    },
    {
        name: 'Research - Point Cloud Classification',
        description:
            'Research on Autonomous Driving Pre-Training with Large-scale Point Cloud Dataset',
        technologies: ['Python', 'CUDA'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/lidar.webp',
    },
    {
        name: "Brand's bike detection",
        description:
            "Detection of brand's bikes in the city of Paris for Sharelock",
        technologies: ['Tensorflow', 'Python'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/bike.webp',
    },
    {
        name: 'Brain tumor detection',
        description:
            'Following the development of a tumor in a brain with a longitudinal study',
        technologies: ['VTK', 'ITK', 'Python'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/brain.webp',
    },
    {
        name: 'Finalist of GottaGoHack Hackathon 2022',
        description:
            'Dating app in the metaverse developed in 48 hours with Unity and Mediapipe. The users dance in the metaverse to find their soulmate.',
        technologies: ['C#', 'Unity', 'Mediapipe'],
        url: '',
        category: Categories.COMPUTERVISION,
        demo: 'https://cdn.orbs.cloud/gottagohack.mp4',
        background: '/gottagohack.webp',
    },
    {
        name: 'Autonomous Drone',
        description:
            'Autonomous drone for package delivery controlled with finger tracking',
        technologies: [
            'C++',
            'Python',
            'Mediapipe',
            'Ardupilot',
            'Raspberry Pi',
        ],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/drone.webp',
    },
    {
        name: 'SchoolRunner',
        description: 'Educational endless runner video game for mobile',
        technologies: ['C#', 'Unity'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/schoolrunner.webp',
        demo: 'https://cdn.orbs.cloud/SchoolRunner.mp4',
        height: 3,
    },
    {
        name: 'HyperLiDAR Classification',
        description:
            'Classification of pixels in hyperspectral and LiDAR images to identify object classes in the environment',
        technologies: ['Python', 'Sklearn', 'SeaBorn', 'Pandas', 'Numpy'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/hyperspectral.webp',
    },
    {
        name: 'Moving objects detection',
        description:
            'Moving objects detection using FuzzyChoquet Integral in CUDA',
        technologies: ['CUDA', 'C++'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/cuda.webp',
    },
    {
        name: 'SkyCrane',
        description: 'RPG video game like Skyrim made in Unity with C#. ',
        technologies: ['C#', 'Unity'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/skycrane.webp',
    },
    {
        name: 'HydraFlow',
        description: 'Fluid simulation engine',
        technologies: ['OpenGL', 'C++'],
        url: '',
        category: Categories.SOFTWARE,
        background: '/fluid.webp',
        demo: 'https://cdn.orbs.cloud/fluid_75k.mp4',
    },
    {
        name: 'TerraNoise',
        description: 'Procedural terrain generation',
        technologies: ['C++', 'Unreal Engine'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/terranoise.webp',
    },
    {
        name: 'Multiplayer THREE.js Video Game',
        description: 'Agar.io like video game made in 3D with THREE.js',
        technologies: ['NextJS', 'React', 'THREE.js', 'NodeJS', 'Socket.io'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/balls.webp',
    },
    {
        name: 'Snow avalanche detection',
        description:
            'Snow avalanche detection using a self made CNN for my drone',
        technologies: ['Tensorflow', 'Python', 'OpenCV'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/avalanche.webp',
    },
    {
        name: 'Drone Choreography',
        description:
            'Trailer - Drone Choreography for Paris 2024 Olympic Games',
        technologies: ['Blender', 'Skybrush'],
        url: '',
        category: Categories.SOFTWARE,
        background: '/OlympicGames.webp',
        demo: 'https://cdn.orbs.cloud/OlympicGames.mp4',
    },
    {
        name: 'SSH brute force map',
        description:
            'Map of the world with SSH brute force attacks based on IP addresses',
        technologies: ['Python', 'React', 'SQL'],
        url: '',
        category: Categories.SOFTWARE,
        background: 'https://cdn.orbs.cloud/bruteforce-map.webp',
    },
    {
        name: 'Optical Character Recognition',
        description: 'OCR project made at Epita using C and GTK',
        technologies: ['C', 'GTK'],
        url: 'https://github.com/pierrelouisdelx/OCR',
        category: Categories.SOFTWARE,
        background: 'https://cdn.orbs.cloud/ocr.webp',
    },
];
