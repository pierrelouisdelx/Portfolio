import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkCard from '@/components/Experience/WorkCard';
import FreelanceCard from '@/components/Experience/FreelanceCard';

const workexperiences = [
    {
        company: 'OneCommerce',
        position: 'Software Engineer',
        date: '09/2022 - 01/2023',
        icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/isifma26whlciahngbqi',
        description:
            'OneCommerce is a startup that aims to revolutionize the way we buy online. I will be in charge of the development of the front-end of the website.',
    },
    {
        company: 'Freelance',
        position: 'Fullstack Developer',
        date: '09/2021 - Present',
        icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/isifma26whlciahngbqi',
        description: 'Working as a freelance in parallel of my studies',
    },
];

const freelanceexperiences = [
    {
        company: 'Sweez.io',
        position: 'Software Engineer',
        date: '09/2022 - 01/2023',
        icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/isifma26whlciahngbqi',
        description:
            'OneCommerce is a startup that aims to revolutionize the way we buy online. I will be in charge of the development of the front-end of the website.',
    },
    {
        company: 'Freelance',
        position: 'Fullstack Developer',
        date: '09/2021 - Present',
        icon: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/isifma26whlciahngbqi',
        description: 'Working as a freelance in parallel of my studies',
    },
];

export default function Experience() {
    return (
        <div className='flex flex-col items-center justify-center flex-1 px-20 text-center text-white'>
            <h1 className='text-5xl uppercase tracking-wide font-semibold'>Work Experience</h1>
            <VerticalTimeline animate={true} lineColor={'#fb923c'}>
                {workexperiences.map((experience) => (
                    <WorkCard {...experience} key={experience.company} />
                ))}
            </VerticalTimeline>

            <h1 className='text-5xl uppercase tracking-wide font-semibold'>Freelance Experience</h1>
            <VerticalTimeline animate={true} lineColor={'#fb923c'}>
                {freelanceexperiences.map((experience) => (
                    <FreelanceCard {...experience} key={experience.company} />
                ))}
            </VerticalTimeline>
        </div>
    );
}
