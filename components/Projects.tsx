'use client';

import { Card } from '@/components/Projects/Card';
import { projects } from '@/data/projects';
import { Title } from '@/ui';
import Isotope from 'isotope-layout';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

const cats = ['all', 'computer-vision', 'software', 'video-games'];

interface CategoryProps {
    category: string;
    filterKey: string;
    handleFilterKeyChange: (key: string) => () => void;
}

export default function Projects() {
    const isotope = useRef<Isotope>();
    const [filterKey, setFilterKey] = useState('all');

    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope('.portfolio-items', {
                itemSelector: '.item',
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: '.item',
                },
            });
        }, 1000);
    }, []);

    useEffect(() => {
        if (isotope.current) {
            filterKey === 'all'
                ? isotope.current?.arrange({ filter: '*' })
                : isotope.current?.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);

    const handleFilterKeyChange = useCallback(
        (key: string) => () => {
            setFilterKey(key);
        },
        []
    );

    return (
        <div className='flex flex-col w-full' id='projects'>
            <Title>Projects</Title>
            <div className='flex flex-wrap justify-center portfolio-filter'>
                {cats.map((cat) => (
                    <Category
                        category={cat}
                        key={cat}
                        filterKey={filterKey}
                        handleFilterKeyChange={handleFilterKeyChange}
                    />
                ))}
            </div>
            <div className='flex flex-wrap relative portfolio-items'>
                {projects.map((project) => (
                    <Card project={project} key={project.name} />
                ))}
            </div>
        </div>
    );
}

const Category = ({
    category,
    filterKey,
    handleFilterKeyChange,
}: CategoryProps) => {
    const active = filterKey === category;

    return (
        <Reveal>
            <div
                className={`flex items-center justify-center px-2 py-1 m-2 text-white capitalize rounded-lg cursor-pointer hover:bg-orange-800
            ${active ? 'bg-orange-800' : 'bg-orange-400'}`}
                onClick={handleFilterKeyChange(category)}
                data-filter={`.${category}`}
            >
                <h1 className='text-lg'>{category}</h1>
            </div>
        </Reveal>
    );
};
