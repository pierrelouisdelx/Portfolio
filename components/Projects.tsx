'use client';

import DotGrid from '@/components/DotGrid';
import { Card } from '@/components/Projects/Card';
import Modal from '@/components/Projects/Modal';
import { useOutsideClick } from '@/hooks/outsideClick';
import { Title } from '@/ui';
import classNames from 'classnames';
import {
    AnimatePresence,
    animate,
    motion,
    useMotionValue,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Reveal } from './Reveal';

import { Categories, projects } from '@/data/projects';

const cats = ['all', 'computer vision', 'software', 'video games'];

interface CategoryProps {
    category: string;
    index: number;
    setSelectedCategory: (index: number) => void;
    isSelected: boolean;
}

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState<Categories>(
        Categories.ALL
    );
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const modalRef = useRef<any>();

    const mouseX = useMotionValue(
        typeof window !== 'undefined' ? window.innerWidth / 2 : 0
    );
    const mouseY = useMotionValue(
        typeof window !== 'undefined' ? window.innerHeight / 2 : 0
    );

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            animate(mouseX, e.clientX);
            animate(mouseY, e.clientY);
        };
        if (typeof window === 'undefined') return;

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        if (selectedCategory === Categories.ALL) setFilteredProjects(projects);
        else
            setFilteredProjects(
                projects.filter(
                    (project) => project.category === selectedCategory
                )
            );
    }, [selectedCategory]);

    useOutsideClick({
        ref: modalRef,
        callback: () => setSelectedProject(null),
    });

    return (
        <div className='flex flex-col w-full' id='projects'>
            <Title>Projects</Title>
            <div className='flex items-center justify-center mb-5'>
                <div className='portfolio-filters flex items-center justify-center border border-orange-400 border-dashed rounded-full'>
                    {cats.map((cat, index) => (
                        <Category
                            category={cat}
                            key={cat}
                            index={index - 1}
                            setSelectedCategory={setSelectedCategory}
                            isSelected={selectedCategory === index - 1}
                        />
                    ))}
                </div>
            </div>
            <div
                style={{ perspective: 1000 }}
                className='flex justify-center min-h-72'
            >
                <motion.div
                    layout
                    className='relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-flow-dense'
                >
                    <DotGrid />
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <Card
                                project={project}
                                key={project.name}
                                setSelectedProject={setSelectedProject}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
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

const Category = (props: CategoryProps) => {
    return (
        <Reveal>
            <div
                className={classNames(
                    'flex items-center justify-center px-2 py-1 text-white capitalize rounded-full cursor-pointer',
                    props.isSelected && 'bg-orange-400'
                )}
                onClick={() => props.setSelectedCategory(props.index)}
            >
                <h1 className='text-lg'>{props.category}</h1>
            </div>
        </Reveal>
    );
};
