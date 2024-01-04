'use client';

import { links, socials } from '@/data/navbar';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const top = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: 45,
            translateY: 7.5,
        },
    };
    const center = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };
    const bottom = {
        closed: {
            rotate: 0,
            translateY: 0,
        },
        opened: {
            rotate: -45,
            translateY: -7.5,
        },
    };

    return (
        <nav className='bg-white dark:bg-grey-1 w-full fixed z-30'>
            <div className='flex flex-wrap items-center justify-between w-full max-w-screen-xl p-4 mx-auto md:flex-row-reverse'>
                <div className='flex items-center justify-between w-full md:w-auto'>
                    <button
                        type='button'
                        className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <span className='sr-only'>Open main menu</span>
                        <motion.svg
                            className='w-6 h-6'
                            viewBox='0 0 20 20'
                            overflow='visible'
                            preserveAspectRatio='none'
                        >
                            <motion.line
                                x1='0'
                                x2='20'
                                y1='3'
                                y2='3'
                                variants={top}
                                stroke='white'
                                vectorEffect='non-scaling-stroke'
                                initial='closed'
                                animate={showMobileMenu ? 'opened' : 'closed'}
                            />
                            <motion.line
                                x1='0'
                                x2='20'
                                y1='10.5'
                                y2='10.5'
                                variants={center}
                                stroke='white'
                                vectorEffect='non-scaling-stroke'
                                initial='closed'
                                animate={showMobileMenu ? 'opened' : 'closed'}
                            />
                            <motion.line
                                x1='0'
                                x2='20'
                                y1='18'
                                y2='18'
                                variants={bottom}
                                stroke='white'
                                vectorEffect='non-scaling-stroke'
                                initial='closed'
                                animate={showMobileMenu ? 'opened' : 'closed'}
                            />
                        </motion.svg>
                    </button>
                    <ul className='flex flex-row justify-center pl-3 space-x-4 md:justify-end md:pl-0'>
                        {socials.map((social) => (
                            <Social {...social} key={social.link} />
                        ))}
                    </ul>
                </div>
                <motion.div
                    className='w-full md:flex md:items-center md:w-auto overflow-hidden md:overflow-visible'
                    onClick={() => setShowMobileMenu(false)}
                    initial={{ height: 0 }}
                    animate={{ height: showMobileMenu ? 'auto' : 0 }}
                >
                    <ul className='flex flex-col w-full py-4 mt-4 font-medium md:p-0 md:flex-row md:space-x-8 md:mt-0'>
                        {links.map((link) => (
                            <HyperLink {...link} key={link.title} />
                        ))}
                    </ul>
                </motion.div>
                <div />
            </div>
        </nav>
    );
}

interface HyperLinkProps {
    href: string;
    title: string;
}

const HyperLink = ({ href, title }: HyperLinkProps) => {
    return (
        <li className='relative group'>
            <a
                className='block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                href={href}
            >
                {title}
            </a>
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full'></span>
        </li>
    );
};

interface SocialProps {
    image: string;
    link: string;
}

const Social = (props: SocialProps) => {
    return (
        <a href={props.link} target='_blank'>
            <Image src={props.image} width={25} height={25} alt={props.image} />
        </a>
    );
};
