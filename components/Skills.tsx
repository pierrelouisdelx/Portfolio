import { Progress } from '@material-tailwind/react';

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
        ],
    },
];

export default function Skills() {
    return (
        <div className='flex flex-col items-center justify-center flex-1 px-20 text-center text-white'>
            <h1 className='text-5xl uppercase tracking-wide font-semibold'>Skills</h1>
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
        <div className='flex flex-col items-center justify-left w-1/2'>
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
        <div className='flex flex-col items-center justify-center w-1/2'>
            <h1 className='text-lg'>{props.name}</h1>
            <Progress value={props.level} />
        </div>
    );
};
