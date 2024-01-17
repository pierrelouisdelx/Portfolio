'use client';

import ExperienceCard from '@/components/Experience/ExperienceCard';
import { Title } from '@/ui';
import classNames from 'classnames';
import { useState } from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { freelanceexperiences, workexperiences } from '@/data/experience';

export default function Experience() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className='flex flex-col w-full' id='experience'>
            <Title>Experience</Title>
            <div className='flex justify-center mb-4 border-b border-gray-700'>
                <ul className='flex text-sm font-medium text-center'>
                    <li className='mr-2'>
                        <button
                            className={classNames(
                                'inline-block p-4 border-b-2 rounded-t-lg cursor-pointer',
                                activeTab === 0
                                    ? 'border-gray-300 text-gray-300'
                                    : 'border-transparent text-gray-400 hover:text-gray-300'
                            )}
                            onClick={() => setActiveTab(0)}
                        >
                            Work Experience
                        </button>
                    </li>
                    <li className='mr-2'>
                        <button
                            className={classNames(
                                'inline-block p-4 border-b-2 rounded-t-lg cursor-pointer',
                                activeTab === 1
                                    ? 'border-gray-300 text-gray-300'
                                    : 'border-transparent text-gray-400 hover:text-gray-300'
                            )}
                            onClick={() => setActiveTab(1)}
                        >
                            Freelance Experience
                        </button>
                    </li>
                </ul>
            </div>
            <div
                className={classNames(
                    'md:p-4 rounded-lg',
                    activeTab === 0 ? 'block' : 'hidden'
                )}
            >
                <VerticalTimeline animate={true} lineColor={'#fb923c'}>
                    {workexperiences.map((experience) => (
                        <ExperienceCard
                            {...experience}
                            key={experience.company}
                        />
                    ))}
                </VerticalTimeline>
            </div>

            <div
                className={classNames(
                    'p-4 rounded-lg',
                    activeTab === 1 ? 'block' : 'hidden'
                )}
            >
                <VerticalTimeline animate={true} lineColor={'#fb923c'}>
                    {freelanceexperiences.map((experience) => (
                        <ExperienceCard
                            {...experience}
                            key={experience.company}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </section>
    );
}
