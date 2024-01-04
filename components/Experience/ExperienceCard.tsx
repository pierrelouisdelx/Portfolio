import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface ExperienceCardProps {
    company: string;
    link?: string;
    position: string;
    location: string;
    date: string;
    icon: string;
    description: string;
    skills?: string;
}

export default function ExperienceCard(props: ExperienceCardProps) {
    return (
        // @ts-ignore
        <VerticalTimelineElement
            className='text-left vertical-timeline-element--work'
            contentStyle={{ background: '#1f2937', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid orange' }}
            iconStyle={{ background: '#1f2937', color: '#fff' }}
            icon={
                <Image
                    src={props.icon}
                    className='w-full h-full p-2 bg-white rounded-full'
                    alt='Company Logo'
                    width={60}
                    height={60}
                />
            }
            date={props.date}
            dateClassName='text-gray-400'
            visible={true}
        >
            <div className='flex items-center'>
                <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 vertical-timeline-element-title dark:text-white'>
                    {props.company}
                </h3>
                {props.link ? (
                    <a href={props.link} target='_blank' rel='noreferrer'>
                        <ArrowTopRightOnSquareIcon className='w-6 h-6 pb-1 ml-2 text-primary cursor-pointer' />
                    </a>
                ) : null}
            </div>
            <h4 className='mb-3 font-normal text-gray-700 vertical-timeline-element-subtitle dark:text-gray-400'>
                {props.position} - {props.location}
            </h4>
            <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
            {props.skills && (
                <img
                    src={props.skills}
                    className='w-full h-full p-2'
                    alt='Skills'
                />
            )}
        </VerticalTimelineElement>
    );
}
