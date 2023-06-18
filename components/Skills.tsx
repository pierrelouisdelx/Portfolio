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

export default function Skills() {
    return (
        <div className='flex flex-col w-full bg-[#1a191d]' id='skills'>
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
        <div className='flex flex-col md:w-1/3 md:p-5 items-left justify-left'>
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
        <div className='flex flex-col w-full p-2 text-left'>
            <h1 className='text-lg'>{props.name}</h1>
            <ProgressBar p={props.level} />
        </div>
    );
};

const ProgressBar = ({ p }: { p: number }) => {
    return (
        <div className='w-full h-1 bg-gray-300 rounded-md'>
            <div style={{ width: `${p}%` }} className='h-1 bg-orange-400 rounded-md'></div>
        </div>
    );
};
