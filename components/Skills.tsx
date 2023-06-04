import { Title } from '@/ui';

interface SkillProps {
    name: string;
    level: number;
}

interface CategorySkillProps {
    title: string;
    skills: SkillProps[];
}

const skills = [
    {
        title: 'frontend',
        skills: [
            {
                name: 'React',
                level: 80,
            },
            {
                name: 'Next.js',
                level: 80,
            },
            {
                name: 'TailwindCSS',
                level: 80,
            },
            {
                name: 'ThreeJS',
                level: 80,
            },
        ],
    },
    {
        title: 'backend',
        skills: [
            {
                name: 'Node.js',
                level: 80,
            },
            {
                name: 'Django',
                level: 80,
            },
            {
                name: 'PostgreSQL',
                level: 80,
            },
            {
                name: 'MongoDB',
                level: 80,
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
                level: 80,
            },
            {
                name: 'AWS',
                level: 80,
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
                level: 80,
            },
            {
                name: 'Java',
                level: 80,
            },
            {
                name: 'Python',
                level: 80,
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
                level: 80,
            },
            {
                name: 'Scikit-Learn',
                level: 80,
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
                level: 80,
            },
            {
                name: 'OpenGL',
                level: 80,
            },
        ],
    },
    {
        title: '3D Modeling',
        skills: [
            {
                name: 'Blender',
                level: 80,
            },
            {
                name: 'Fusion 360',
                level: 80,
            },
        ],
    },
];

export default function Skills() {
    return (
        <div className='flex flex-col w-full'>
            <Title>Skills</Title>
            <div className='flex flex-row flex-wrap'>
                {skills.map((skill) => (
                    <CategorySkills title={skill.title} skills={skill.skills} key={skill.title} />
                ))}
            </div>
        </div>
    );
}

const CategorySkills = (props: CategorySkillProps) => {
    return (
        <div className='flex flex-col items-left justify-left w-1/2 py-5'>
            <h1 className='text-2xl uppercase'>{props.title}</h1>
            <div className='flex flex-row flex-wrap'>
                {props.skills.map((skill) => (
                    <Skill name={skill.name} level={skill.level} key={skill.name} />
                ))}
            </div>
        </div>
    );
};

const Skill = (props: SkillProps) => {
    return (
        <div className='flex flex-col text-left w-full p-2'>
            <h1 className='text-lg'>{props.name}</h1>
            <ProgressBar p={props.level} />
        </div>
    );
};

const ProgressBar = ({ p }: { p: number }) => {
    return (
        <div className='h-1 w-full bg-gray-300 rounded-md'>
            <div style={{ width: `${p}%` }} className='h-1 bg-orange-400 rounded-md'></div>
        </div>
    );
};
