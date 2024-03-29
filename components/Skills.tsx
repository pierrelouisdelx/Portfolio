import { Reveal } from '@/components/Reveal';
import skills, { SkillCategory, Skill as SkillProps } from '@/data/skills';
import { Title } from '@/ui';

export default function Skills() {
    return (
        <section className='flex flex-col w-full bg-black-1' id='skills'>
            <Title>Skills</Title>
            <div className='flex flex-row flex-wrap'>
                {skills.map((skill) => (
                    <CategorySkills
                        title={skill.title}
                        skills={skill.skills}
                        key={skill.title}
                    />
                ))}
            </div>
        </section>
    );
}

const CategorySkills = (props: SkillCategory) => {
    return (
        <div className='flex flex-col w-full py-5 md:w-1/3 md:px-5 items-left justify-left'>
            <Reveal>
                <h1 className='text-2xl uppercase'>{props.title}</h1>
                <div className='flex flex-row flex-wrap'>
                    {props.skills.map((skill) => (
                        <Skill
                            name={skill.name}
                            level={skill.level}
                            key={skill.name}
                        />
                    ))}
                </div>
            </Reveal>
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
            <div
                style={{ width: `${p}%` }}
                className='h-1 bg-primary rounded-md'
            ></div>
        </div>
    );
};
