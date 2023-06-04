import { VerticalTimelineElement } from 'react-vertical-timeline-component';

interface FreelanceCardProps {
    company: string;
    position: string;
    date: string;
    icon: string;
    description: string;
}

export default function FreelanceCard(props: ExperienceCardProps) {
    return (
        <VerticalTimelineElement
            className='vertical-timeline-element--work'
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date={props.date}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img src={props.icon} className='h-8 mr-3' alt='Company Logo' />}
        >
            <h3 className='vertical-timeline-element-title'>{props.company}</h3>
            <h4 className='vertical-timeline-element-subtitle'>{props.position}</h4>
            <p>{props.description}</p>
        </VerticalTimelineElement>
    );
}
