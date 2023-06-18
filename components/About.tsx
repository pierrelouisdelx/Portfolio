import { Title } from '@/ui';

const education = [
    {
        from: 'September 2019',
        to: 'July 2024',
        title: 'Epita - School of Engineering and Computer Science, Major in Computer Vision',
        description:
            'EPITA, the school of engineers in computer intelligence. Since its creation in 1984, EPITA is the first engineering school in Paris. It prepares her passionate students in computer engineering jobs to build the world of tomorrow. ',
    },
];

const international = [
    {
        from: 'September 2015',
        to: 'July 2019',
        title: 'International Lycee of London Winston Churchill',
        description: 'High School Student, London, UK',
    },
    {
        from: 'September 2007',
        to: 'July 2011',
        title: 'Lived in Seoul, Hong Kong and Tokyo',
        description: 'International Student',
    },
];

export default function About() {
    return (
        <div className='flex flex-col w-full text-left snap-center' id='about'>
            <Title>About</Title>
            <p>
                My name is Pierre-Louis Delcroix and I've been coding since High School. During this
                past 6 years I did several projects such as a Music streaming Web App, an Optical
                Character Recognition, a POSIX shell, video games and many others. I'm passionate
                about computer since 2016 especially by cybersecurity and computer vision.{' '}
            </p>

            <h3 className='mt-5 mb-3 text-2xl font-semibold tracking-wide text-left underline uppercase underline-offset-8'>
                Education
            </h3>
            {education.map((item) => (
                <Timeline
                    from={item.from}
                    to={item.to}
                    title={item.title}
                    description={item.description}
                />
            ))}

            <h3 className='mt-5 mb-3 text-2xl font-semibold tracking-wide text-left underline uppercase underline-offset-8'>
                International
            </h3>
            {international.map((item) => (
                <Timeline
                    from={item.from}
                    to={item.to}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    );
}

interface TimelineProps {
    from: string;
    to: string;
    title: string;
    description: string;
}

const Timeline = (props: TimelineProps) => {
    return (
        <ol className='relative border-l border-orange-400'>
            <li className='ml-4'>
                <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-500 bg-orange-400'></div>
                <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
                    {props.to}
                </time>
                <h3 className='text-lg font-semibold text-white'>{props.title}</h3>
                <p className='text-base italic font-normal text-gray-200'>{props.description}</p>
                <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-500 bg-orange-400'></div>
                <time className='text-sm font-normal leading-none text-gray-400'>{props.from}</time>
            </li>
        </ol>
    );
};
