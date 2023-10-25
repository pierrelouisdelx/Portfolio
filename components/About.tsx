import { education, international } from '@/data/about';
import { Title } from '@/ui';
import { Reveal } from './Reveal';

export default function About() {
    return (
        <div
            className='flex flex-col w-full text-left snap-center bg-black-1'
            id='about'
        >
            <Title>About</Title>

            <Reveal>
                <div className='flex items-center justify-center w-full my-5'>
                    <video
                        controls
                        className='w-full max-w-3xl rounded-2xl'
                        poster='/poster.webp'
                        preload='none'
                    >
                        <source
                            src='https://cdn.orbs.cloud/story_720p.mp4'
                            type='video/mp4'
                        />
                    </video>
                </div>
            </Reveal>

            <Reveal>
                <h3 className='mt-5 mb-3 text-2xl font-semibold tracking-wide text-left underline uppercase underline-offset-8'>
                    Education
                </h3>
            </Reveal>
            {education.map((item) => (
                <Timeline
                    from={item.from}
                    to={item.to}
                    title={item.title}
                    description={item.description}
                    key={item.title}
                />
            ))}

            <Reveal>
                <h3 className='mt-5 mb-3 text-2xl font-semibold tracking-wide text-left underline uppercase underline-offset-8'>
                    International
                </h3>
            </Reveal>
            {international.map((item) => (
                <Timeline
                    from={item.from}
                    to={item.to}
                    title={item.title}
                    description={item.description}
                    key={item.title}
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
        <Reveal>
            <ol className='relative border-l border-primary'>
                <li className='ml-4'>
                    <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-500 bg-primary'></div>
                    <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
                        {props.to}
                    </time>
                    <h3 className='text-lg font-semibold text-white'>
                        {props.title}
                    </h3>
                    <p className='text-base italic font-normal text-gray-200'>
                        {props.description}
                    </p>
                    <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-500 bg-primary'></div>
                    <time className='text-sm font-normal leading-none text-gray-400'>
                        {props.from}
                    </time>
                </li>
            </ol>
        </Reveal>
    );
};
