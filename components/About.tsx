import { Title } from '@/ui';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from '@material-tailwind/react';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const education = [
    {
        from: 'August 2023',
        to: 'December 2023',
        title: 'NTNU - Norwegian University of Science and Technology, Gjovik',
        description:
            'Deep Learning for computer vision, Specialisation in colour imaging, Game programming, Flexible Automation and Artificial Intelligence',
    },
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
    const [open, setOpen] = useState(false);

    return (
        <div
            className='flex flex-col w-full text-left snap-center bg-[#1a191d]'
            id='about'
        >
            <Title>About</Title>

            <Accordion
                open={open}
                icon={
                    <ChevronDownIcon
                        width={24}
                        height={24}
                        className={`transition-transform ${
                            open ? 'rotate-180' : 'rotate-0'
                        }`}
                    />
                }
                className='px-4 mb-2 border rounded-lg border-blue-gray-100'
            >
                <AccordionHeader
                    onClick={() => setOpen(!open)}
                    className='border-b-0'
                >
                    Read text instead of watching the video
                </AccordionHeader>
                <AccordionBody className='text-white'>
                    <p className='text-justify'>
                        Hi, my name is Pierre-Louis Delcroix, and my journey
                        into computer science began at the age of 15. I quickly
                        discovered my passion for coding and started with web
                        development, where I gained a strong foundation in
                        programming and creating websites. But my curiosity led
                        me to explore computer vision, and at 17, I started
                        using OpenCV and Python to learn the basics. It was an
                        exciting introduction that opened doors to endless
                        possibilities.
                        <br />
                        <br />
                        Currently, I&apos;m studying at Epita, one of
                        France&apos;s esteemed engineering schools, specialising
                        in computer vision to further develop my skills in this
                        field.
                    </p>

                    <h3 className='mt-5 mb-3 text-2xl font-semibold tracking-wide text-left underline uppercase underline-offset-8'>
                        My businesses
                    </h3>
                    <p className='text-justify'>
                        In 2017, using my brother&apos;s old phone, I discovered
                        an app called AppLike that allowed me to earn money by
                        playing games. I found a clever trick: playing games at
                        night for more points and earnings. I downloaded an app
                        to keep the screen active throughout the night. After
                        five months, I had £35, which felt like a fortune. I
                        turned to eBay, bought broken laptops, and refurbished
                        them. One incredible find was a laptop priced at just
                        0.99£ with a severed power cable. With a soldering iron,
                        I skillfully repaired it, cleaned it thoroughly, and
                        listed it as &quot;Like new&quot; on eBay. It sold for
                        100£, a 100-fold profit. Encouraged, I continued
                        acquiring broken laptops, restoring them, and reselling
                        them. With the profits, I bought my own laptop and
                        focused on web scraping in web development. In one week,
                        I created a Python bot to retrieve phone prices from
                        Chinese websites. I took advantage of discounts and
                        consistently made a minimum profit of 75£ per device.
                        Within two weeks, I sold ten units of the intriguing
                        VKWorld S8 phone.
                        <br />
                        <br />
                        While pursuing my studies, I initially struggled to
                        maintain my businesses. However, two years later, I
                        found myself freelancing as a full-stack web developer.
                        Drawing upon the experience I had been cultivating since
                        the age of 15, I quickly attracted a tenth of clients,
                        successfully earning over $30,000 in less than two
                        years. This marked the turning point where my passion
                        transformed into a sustainable livelihood. One notable
                        example of my collaborative work was during my mission
                        at sweez.io. I was tasked with implementing a
                        collaborative editor in their main component, the Sweez
                        editor, within a tight deadline. Recognizing the
                        urgency, I worked closely with other developers to
                        seamlessly integrate the functionality into the main
                        app, ensuring a fast and efficient delivery. This
                        experience further solidified my expertise in client
                        management, deadline management, and effective teamwork,
                        paving the way for future projects and opportunities in
                        my journey as a web developer.
                        <br />
                        <br />
                        Today, I&apos;m still in college, balancing my studies
                        while earning a living doing what I love. I&apos;ve
                        remained committed to continuous learning, exploring and
                        mastering various languages and technologies beyond my
                        formal education. From Mediapipe and Tensorflow to
                        Pytorch and Cuda, I&apos;ve embraced these tools to
                        broaden my knowledge and skill set. Learning has become
                        a way of life for me, and I take pride in how far
                        I&apos;ve come. This ongoing self-improvement has
                        allowed me to pursue my passion and thrive in the
                        ever-evolving world of computer science and computer
                        vision.
                        <br />
                        <br />I immerse myself in computer vision projects,
                        constantly fueling my curiosity and expertise.
                        Currently, I&apos;m developing my own drone, applying
                        computer vision principles like finger recognition for
                        control and object detection using the onboard camera.
                        This hands-on application deepens my understanding and
                        opens up new avenues for innovation.
                    </p>

                    <h3 className='mt-5 mb-3 text-2xl font-semibold tracking-wide text-left underline uppercase underline-offset-8'>
                        Future
                    </h3>
                    <p className='text-justify'>
                        Computer vision and video game development have become
                        the central focus of my professional aspirations. I am
                        determined to dedicate my time, energy, and expertise to
                        these fields, as they offer tremendous opportunities to
                        make a lasting impact. At Epita, my primary focus is on
                        computer vision, where I aim to apply my skills to
                        tackle real-world challenges. Whether it&apos;s
                        developing computer vision solutions or creating
                        immersive experiences in video games, I am passionate
                        about using these technologies to solve practical
                        problems and make significant contributions. By pursuing
                        a career in computer vision or video game development, I
                        believe I can make a meaningful difference in addressing
                        real-world challenges and pushing the boundaries of what
                        is possible.
                    </p>
                </AccordionBody>
            </Accordion>

            <div className='flex items-center justify-center w-full my-5'>
                <video controls className='w-full max-w-3xl'>
                    <source
                        src='https://cdn.orbs.cloud/story_720p.mp4'
                        type='video/mp4'
                    />
                </video>
            </div>

            <h3 className='mt-5 mb-3 text-2xl font-semibold tracking-wide text-left underline uppercase underline-offset-8'>
                Education
            </h3>
            {education.map((item) => (
                <Timeline
                    from={item.from}
                    to={item.to}
                    title={item.title}
                    description={item.description}
                    key={item.title}
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
        <ol className='relative border-l border-orange-400'>
            <li className='ml-4'>
                <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-500 bg-orange-400'></div>
                <time className='mb-1 text-sm font-normal leading-none text-gray-400'>
                    {props.to}
                </time>
                <h3 className='text-lg font-semibold text-white'>
                    {props.title}
                </h3>
                <p className='text-base italic font-normal text-gray-200'>
                    {props.description}
                </p>
                <div className='absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-orange-500 bg-orange-400'></div>
                <time className='text-sm font-normal leading-none text-gray-400'>
                    {props.from}
                </time>
            </li>
        </ol>
    );
};
