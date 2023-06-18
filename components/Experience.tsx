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
        description: `<ul class="list-disclosure-closed px-4">
        <li>Reduced test suite runtime by 80% through parallelization</li>
        <li>Developed a tool extracting geolocation from inaccurate addresses in MENA with 60%+ accuracy</li>
        <li>Developed a business-oriented web application from scratch for managing Shopify's discount codes</li.
        </ul>`,
    },
    {
        company: 'Freelance',
        position: 'Fullstack Developer',
        location: 'Worldwide',
        date: '09/2021 - Present',
        icon: '/malt.png',
        description:
            'Currently working as a freelance in parallel of my studies on malt.fr for french companies and upwork.com for international companies.',
    },
];

const freelanceexperiences = [
    {
        company: 'Sweez',
        link: 'https://sweez.io',
        location: 'Paris, France',
        position: 'Software Engineer',
        date: '05/2023 - present',
        icon: 'https://images.emojiterra.com/google/android-11/512px/1f349.png',
        description: `<ul class="list-disclosure-closed px-4">
            <li>Implemented real time collaboration on slatejs using CRDTs</li>
            <li>Developed a notification system</li>
            <li>Contributed to slate-yjs project</li>
            <li>Developed UI components & fixed errors</li>
            </ul>
            `,
    },
    {
        company: 'IROC',
        link: 'https://iroc.app',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '04/2023 - 06/2023',
        icon: 'https://cdn.fs.brandfolder.com/YeH8YOVsQcCYC00c5fMw/convert?rotate=exif&fit=max&w=400&h=300&format=png',
        description: `<ul class="list-disclosure-closed px-4">
        <li>Implemented an NLP API using Celery message broker</li>
        <li>Improved web scrapers runtime by 95% through parallelization and caching techniques</li>
        <li>Developed UI components & fixed errors</li>
        </ul>`,
    },
    {
        company: 'OneGrid',
        link: 'https://onegrid.me',
        location: 'Worldwide',
        position: 'Fullstack Developer - CTO',
        date: '03/2023',
        icon: 'https://uploads-ssl.webflow.com/6448183e496bc3264491c91a/646ca8ebece104b428536f80_OG%20Favicon%20s.png',
        description: `
        <ul class="list-disclosure-closed px-4">
        <li>Managed of team of 4 developers based in Pakistan to develop a web application from scratch</li>
        <li>Introduced daily meetings and code reviews to improve the quality of the code</li>
        <li>Implemented a CI/CD pipeline using Github Actions</li>
        <li>Developed UI components & fixed errors</li>
        </ul>
        `,
    },
    {
        company: 'Mobility Care',
        link: 'https://mobilitycare.fr',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '10/2022 - 01/2023',
        icon: 'https://res.cloudinary.com/dg6kenloy/image/upload/v1665392448/static/logo_xhhlzi.png',
        description: `
        <ul class="list-disclosure-closed px-4">
        <li>Contributed to the development of an app used by french hospitals</li>
        <li>Implemented a live chat for users using pubnub</li>
        <li>Developed UI components & fixed errors</li>
        </ul>
        `,
    },
    {
        company: 'Smartmoms',
        link: 'https://smartmoms.fr',
        location: 'London, UK',
        position: 'Fullstack Developer',
        date: '09/2022 - 11/2022',
        icon: 'https://parentsonboard.fr/wp-content/uploads/2023/04/POB-Logo-Officiel-transparent.png',
        description: `
        <ul class="list-disclosure-closed px-4">
        <li>Developed the first version of the website</li>
        <li>Live chat integration using websocket</li>
        </ul>
        `,
    },
    {
        company: 'Lomed',
        link: 'https://www.lomed.fr',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '05/2022',
        icon: 'https://www.lomed.fr/hubfs/logoipsum-logo-50-1-_2_-1-_1_-_1_-2.png',
        description: 'Development of a landing page for hubspot CRM',
    },
    {
        company: 'Harmony Promotion',
        link: 'https://www.harmony-promotion.com',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '10/2021',
        icon: 'https://www.harmony-promotion.com/wp-content/uploads/2022/09/image001.gif',
        description: 'Added fonctionalities to an admin panel',
    },
    {
        company: 'Legaware',
        link: 'https://legaware.com',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '03/2022 - Present',
        icon: 'https://d1hbpr09pwz0sk.cloudfront.net/logo_url/legaware-db493ab3',
        description: `
        <ul class="list-disclosure-closed px-4">
        <li>Contributed to the UI development of <a href='https://infogreffe.mesobligations.fr/' target='_blank' class='text-orange-400'>https://infogreffe.mesobligations.fr/</a></li>
        <li>Developed from scratch a platform that has hundreds of users per day</li>
        <li>Currenly working on a new platform for entrepreneurs</li>
        </ul>
        `,
    },
    {
        company: 'Psychologies',
        link: 'https://www.psychologies.com',
        location: 'Worldwide',
        position: 'Fullstack Developer',
        date: '09/2021',
        icon: 'https://www.psychologies.com/wp-content/themes/psycho/assets/images/psychologies.svg',
        description: `🎉 My very first freelance mission 🎉<br> Fixed a javascript error on the website`,
    },
];

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className='flex flex-col w-full' id='experience'>
            <Title>Experience</Title>
            <div className='flex justify-center mb-4 border-b border-gray-200 dark:border-gray-700'>
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
