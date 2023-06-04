import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from '@/components/Experience/WorkCard';
import { useState } from 'react';

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

export default function Experience() {
    const [activeTab, setActiveTab] = useState('work');

    return (
        <>
            <div className='mb-4 border-b border-gray-200 dark:border-gray-700'>
                <ul
                    className='flex text-sm font-medium text-center'
                    id='myTab'
                    data-tabs-toggle='#myTabContent'
                    role='tablist'
                >
                    <li className='mr-2' role='presentation'>
                        <button
                            className='inline-block p-4 border-b-2 rounded-t-lg'
                            id='profile-tab'
                            data-tabs-target='#work'
                            type='button'
                            role='tab'
                            aria-controls='work'
                            aria-selected='true'
                        >
                            Work Experience
                        </button>
                    </li>
                    <li className='mr-2' role='presentation'>
                        <button
                            className='inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
                            id='freelance-tab'
                            data-tabs-target='#freelance'
                            type='button'
                            role='tab'
                            aria-controls='freelance'
                            aria-selected='false'
                        >
                            Freelance Experience
                        </button>
                    </li>
                </ul>
            </div>
            <div id='myTabContent'>
                <div
                    className='hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800'
                    id='work'
                    role='tabpanel'
                    aria-labelledby='work-tab'
                >
                    <VerticalTimeline animate={true} lineColor={'#fb923c'}>
                        {workexperiences.map((experience) => (
                            <ExperienceCard {...experience} key={experience.company} />
                        ))}
                    </VerticalTimeline>
                </div>

                <div
                    className='hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800'
                    id='freelance'
                    role='tabpanel'
                    aria-labelledby='freelance-tab'
                >
                    <VerticalTimeline animate={true} lineColor={'#fb923c'}>
                        {freelanceexperiences.map((experience) => (
                            <ExperienceCard {...experience} key={experience.company} />
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
}
