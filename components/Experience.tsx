import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExperienceCard from '@/components/Experience/WorkCard';
import { useState } from 'react';
import { Title } from '@/ui';

const workexperiences = [
    {
        company: 'OneCommerce',
        link: 'https://onecommerce.group',
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
        icon: '/malt.png',
        description: 'Working as a freelance in parallel of my studies',
    },
];

const freelanceexperiences = [
    {
        company: 'Sweez',
        link: 'https://sweez.io',
        location: 'Paris, France',
        position: 'Software Engineer',
        date: '09/2022 - 01/2023',
        icon: 'https://images.emojiterra.com/google/android-11/512px/1f349.png',
        description:
            'OneCommerce is a startup that aims to revolutionize the way we buy online. I will be in charge of the development of the front-end of the website.',
    },
    {
        company: 'IROC',
        link: 'https://iroc.app',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '09/2021 - Present',
        icon: 'https://cdn.fs.brandfolder.com/YeH8YOVsQcCYC00c5fMw/convert?rotate=exif&fit=max&w=400&h=300&format=png',
        description: 'Working as a freelance in parallel of my studies',
    },
    {
        company: 'OneGrid',
        link: 'https://onegrid.me',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '09/2021 - Present',
        icon: 'https://uploads-ssl.webflow.com/6448183e496bc3264491c91a/646ca8ebece104b428536f80_OG%20Favicon%20s.png',
        description: 'Working as a freelance in parallel of my studies',
    },
    {
        company: 'Mobility Care',
        link: 'https://mobilitycare.fr',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '09/2021 - Present',
        icon: 'https://res.cloudinary.com/dg6kenloy/image/upload/v1665392448/static/logo_xhhlzi.png',
        description: 'Working as a freelance in parallel of my studies',
    },
    {
        company: 'Lomed',
        link: 'https://www.lomed.fr',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '09/2021 - Present',
        icon: 'https://www.lomed.fr/hubfs/logoipsum-logo-50-1-_2_-1-_1_-_1_-2.png',
        description: 'Working as a freelance in parallel of my studies',
    },
    {
        company: 'Harmony Promotion',
        link: 'https://www.harmony-promotion.com',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '09/2021 - Present',
        icon: 'https://www.harmony-promotion.com/wp-content/uploads/2022/09/image001.gif',
        description: 'Working as a freelance in parallel of my studies',
    },
    {
        company: 'Legaware',
        link: 'https://legaware.com',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '09/2021 - Present',
        icon: 'https://d1hbpr09pwz0sk.cloudfront.net/logo_url/legaware-db493ab3',
        description: 'Working as a freelance in parallel of my studies',
    },
    {
        company: 'Psychologies',
        link: 'https://www.psychologies.com',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '09/2021 - Present',
        icon: 'https://www.psychologies.com/wp-content/themes/psycho/assets/images/psychologies.svg',
        description: 'Working as a freelance in parallel of my studies',
    },
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='flex flex-col w-full'>
            <Title>Experience</Title>
            <div
                className='flex justify-center mb-4 border-b border-gray-200 dark:border-gray-700'
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
