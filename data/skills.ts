export interface Skill {
    name: string;
    level: number;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

const skills: SkillCategory[] = [
    {
        title: 'frontend',
        skills: [
            {
                name: 'React',
                level: 90,
            },
            {
                name: 'Next.js',
                level: 90,
            },
            {
                name: 'TailwindCSS',
                level: 100,
            },
            {
                name: 'ThreeJS',
                level: 75,
            },
        ],
    },
    {
        title: 'backend',
        skills: [
            {
                name: 'Node.js',
                level: 90,
            },
            {
                name: 'Django',
                level: 75,
            },
            {
                name: 'PostgreSQL',
                level: 80,
            },
            {
                name: 'MongoDB',
                level: 90,
            },
        ],
    },
    {
        title: 'DevOps',
        skills: [
            {
                name: 'Docker',
                level: 80,
            },
            {
                name: 'Kubernetes',
                level: 60,
            },
            {
                name: 'AWS',
                level: 50,
            },
        ],
    },
    {
        title: 'Software Engineering',
        skills: [
            {
                name: 'C',
                level: 80,
            },
            {
                name: 'C#',
                level: 80,
            },
            {
                name: 'C++',
                level: 90,
            },
            {
                name: 'Java',
                level: 70,
            },
            {
                name: 'Python',
                level: 90,
            },
        ],
    },
    {
        title: 'Machine Learning',
        skills: [
            {
                name: 'Tensorflow',
                level: 80,
            },
            {
                name: 'PyTorch',
                level: 70,
            },
            {
                name: 'Scikit-Learn',
                level: 75,
            },
        ],
    },
    {
        title: 'Video Games',
        skills: [
            {
                name: 'Unity',
                level: 80,
            },
            {
                name: 'Unreal Engine',
                level: 65,
            },
            {
                name: 'OpenGL',
                level: 70,
            },
        ],
    },
    {
        title: '3D Modeling',
        skills: [
            {
                name: 'Blender',
                level: 75,
            },
            {
                name: 'Fusion 360',
                level: 70,
            },
        ],
    },
];

export default skills;
