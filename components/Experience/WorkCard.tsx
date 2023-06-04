import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface ExperienceCardProps {
    company: string;
    position: string;
    location: string;
    date: string;
    icon: string;
    description: string;
}

export default function ExperienceCard(props: ExperienceCardProps) {
    return (
        <VerticalTimelineElement
            className='vertical-timeline-element--work text-left'
            contentStyle={{ background: '#1f2937', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid orange' }}
            iconStyle={{ background: '#1f2937', color: '#fff' }}
            icon={
                <img src={props.icon} className='h-full w-full rounded-full' alt='Company Logo' />
            }
            date={props.date}
            dateClassName='text-gray-400'
        >
            <h3 className='vertical-timeline-element-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                {props.company}
            </h3>
            <h4 className='vertical-timeline-element-subtitle mb-3 font-normal text-gray-700 dark:text-gray-400'>
                {props.position} - {props.location}
            </h4>
            <p>{props.description}</p>
        </VerticalTimelineElement>
    );
}
