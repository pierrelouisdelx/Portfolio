'use client';

import { Card } from '@/components/Projects/Card';
import Modal from '@/components/Projects/Modal';
import { Project, projects } from '@/data/projects';
import { useOutsideClick } from '@/hooks/outsideClick';
import { Title } from '@/ui';
import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

const cats = ['all', 'computer-vision', 'software', 'video-games'];

interface CategoryProps {
    categories: string[];
    filterKey: string;
    handleFilterKeyChange: (key: string) => () => void;
}

export default function Projects() {
    const isotope = useRef<Isotope>();
    const [filterKey, setFilterKey] = useState('computer-vision');
    const modalRef = useRef<HTMLDivElement>(null);
    const [selectedProject, setSelectedProject] = useState<Project | null>();

    useEffect(() => {
        setTimeout(() => {
            if (typeof window === 'undefined') return;

            (async () => {
                const Isotope = (await import('isotope-layout')).default;

                isotope.current = new Isotope('.portfolio-items', {
                    itemSelector: '.item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: '.item',
                        fitWidth: true,
                    },
                });

                setFilterKey('all');
            })();
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

    useOutsideClick({
        ref: modalRef,
        callback: () => setSelectedProject(null),
    });

    return (
        <div className='flex flex-col w-full' id='projects'>
            <Title>Projects</Title>
            <Categories
                categories={cats}
                filterKey={filterKey}
                handleFilterKeyChange={handleFilterKeyChange}
            />
            <div className='flex items-center justify-center'>
                <div className='w-full xl:w-2/3 flex items-center justify-center'>
                    <div className='flex flex-wrap relative portfolio-items m-0 p-0'>
                        {projects.map((project) => (
                            <Card
                                project={project}
                                key={project.name}
                                setSelectedProject={setSelectedProject}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {selectedProject && (
                <Modal
                    project={selectedProject}
                    setSelectedProject={setSelectedProject}
                    innerRef={modalRef}
                />
            )}
        </div>
    );
}

const Categories = ({
    categories,
    filterKey,
    handleFilterKeyChange,
}: CategoryProps) => {
    return (
        <div className='flex items-center justify-center mb-5'>
            <Reveal>
                <div className='portfolio-filters flex items-center justify-center border border-orange-400 border-dashed rounded-full'>
                    {categories.map((category) => (
                        <div
                            className={classNames(
                                'flex items-center justify-center px-2 py-1 text-white capitalize rounded-full cursor-pointer',
                                category === filterKey && 'bg-orange-400'
                            )}
                            onClick={handleFilterKeyChange(category)}
                            data-filter={`.${category}`}
                            key={category}
                        >
                            <h1 className='text-lg'>
                                {category.replace('-', ' ')}
                            </h1>
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
    );
};
