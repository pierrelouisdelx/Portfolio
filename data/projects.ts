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
    height: number;
    size?: number;
    video?: string;
    demo?: string;
}

export const projects: Project[] = [
    {
        name: 'Research - Point Cloud Classification',
        description:
            'Research on Autonomous Driving Pre-Training with Large-scale Point Cloud Dataset',
        technologies: ['Python', 'CUDA'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/lidar.webp',
        height: 217,
    },
    {
        name: "Brand's bike detection",
        description:
            "Detection of brand's bikes in the city of Paris for Sharelock",
        technologies: ['Tensorflow', 'Python'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/bike.webp',
        height: 217,
    },
    {
        name: 'Finalist of GottaGoHack Hackathon 2022',
        description: 'Dating app in the metaverse',
        technologies: ['C#', 'Unity', 'Mediapipe'],
        url: '',
        category: Categories.COMPUTERVISION,
        demo: 'https://cdn.orbs.cloud/gottagohack.mp4',
        background: '/gottagohack.webp',
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
        background: '/drone.webp',
        height: 217,
    },
    {
        name: 'HyperLiDAR Classification',
        description:
            'Classification of pixels in hyperspectral and LiDAR images to identify object classes in the environment',
        technologies: ['Python', 'Sklearn', 'SeaBorn', 'Pandas', 'Numpy'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/hyperspectral.webp',
        height: 217,
    },
    {
        name: 'SchoolRunner',
        description: 'Educational endless runner video game for mobile',
        technologies: ['C#', 'Unity'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/schoolrunner.webp',
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
        category: Categories.COMPUTERVISION,
        background: '/cuda.webp',
        height: 217,
    },
    {
        name: 'SkyCrane',
        description: 'RPG video game',
        technologies: ['C#', 'Unity'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/skycrane.webp',
        height: 217,
    },
    {
        name: 'HydraFlow',
        description: 'Fluid simulation engine',
        technologies: ['OpenGL', 'C++'],
        url: '',
        category: Categories.SOFTWARE,
        background: '/fluid.webp',
        demo: 'https://cdn.orbs.cloud/fluid_75k.mp4',
        height: 217,
    },
    {
        name: 'TerraNoise',
        description: 'Procedural terrain generation',
        technologies: ['C++', 'Unreal Engine'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/terranoise.webp',
        height: 217,
    },
    {
        name: 'Multiplayer THREE.js Video Game',
        description: 'Agar.io like video game made in 3D with THREE.js',
        technologies: ['NextJS', 'React', 'THREE.js', 'NodeJS', 'Socket.io'],
        url: '',
        category: Categories.VIDEOGAME,
        background: '/balls.webp',
        height: 217,
    },
    {
        name: 'Snow avalanche detection',
        description:
            'Snow avalanche detection using a self made CNN for my drone',
        technologies: ['Tensorflow', 'Python', 'OpenCV'],
        url: '',
        category: Categories.COMPUTERVISION,
        background: '/avalanche.webp',
        height: 217,
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
