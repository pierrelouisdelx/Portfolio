import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from '@/components/Experience/WorkCard';
import { useState } from 'react';
import { Title } from '@/ui';

const workexperiences = [
    {
        company: 'OneCommerce',
        position: 'Software Engineer',
        location: 'London, UK',
        date: '09/2022 - 01/2023',
        icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/isifma26whlciahngbqi',
        description:
            'OneCommerce is a startup that aims to revolutionize the way we buy online. I will be in charge of the development of the front-end of the website.',
    },
    {
        company: 'Freelance',
        position: 'Fullstack Developer',
        location: 'Worldwide',
        date: '09/2021 - Present',
        icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/isifma26whlciahngbqi',
        description: 'Working as a freelance in parallel of my studies',
    },
];

const freelanceexperiences = [
    {
        company: 'Sweez.io',
        location: 'Paris, France',
        position: 'Software Engineer',
        date: '09/2022 - 01/2023',
        icon: 'https://images.emojiterra.com/google/android-11/512px/1f349.png',
        description:
            'OneCommerce is a startup that aims to revolutionize the way we buy online. I will be in charge of the development of the front-end of the website.',
    },
    {
        company: 'Freelance',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '09/2021 - Present',
        icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/isifma26whlciahngbqi',
        description: 'Working as a freelance in parallel of my studies',
    },
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='flex flex-col'>
            <Title>Experience</Title>
            <div
                className='mb-4 border-b border-gray-200 dark:border-gray-700 flex justify-center'
                id='experience'
            >
                <ul className='flex text-sm font-medium text-center'>
                    <li className='mr-2'>
                        <button
                            className={classNames(
                                'inline-block p-4 border-b-2 rounded-t-lg',
                                activeTab === 0
                                    ? 'border-gray-600 text-white dark:border-gray-300 dark:text-gray-300'
                                    : 'border-transparent text-gray-400 hover:border-gray-300 dark:hover:text-gray-300'
                            )}
                            onClick={() => setActiveTab(0)}
                        >
                            Work Experience
                        </button>
                    </li>
                    <li className='mr-2'>
                        <button
                            className={classNames(
                                'inline-block p-4 border-b-2 rounded-t-lg',
                                activeTab === 1
                                    ? 'border-gray-600 text-white dark:border-gray-300 dark:text-gray-300'
                                    : 'border-transparent text-gray-400 hover:border-gray-300 dark:hover:text-gray-300'
                            )}
                            onClick={() => setActiveTab(1)}
                        >
                            Freelance Experience
                        </button>
                    </li>
                </ul>
            </div>
            <div id='myTabContent'>
                <div className={classNames('p-4 rounded-lg', activeTab === 0 ? 'block' : 'hidden')}>
                    <VerticalTimeline animate={true} lineColor={'#fb923c'}>
                        {workexperiences.map((experience) => (
                            <ExperienceCard {...experience} key={experience.company} />
                        ))}
                    </VerticalTimeline>
                </div>

                <div className={classNames('p-4 rounded-lg', activeTab === 1 ? 'block' : 'hidden')}>
                    <VerticalTimeline animate={true} lineColor={'#fb923c'}>
                        {freelanceexperiences.map((experience) => (
                            <ExperienceCard {...experience} key={experience.company} />
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    );
}
