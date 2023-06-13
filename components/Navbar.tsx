import React, { useState } from 'react';
import { scrollTo } from './ScrollTo';

const Links = [
    {
        href: '#hero',
        title: 'Home',
    },
    {
        href: '#about',
        title: 'About',
    },
    {
        href: '#experience',
        title: 'Experience',
    },
    {
        href: '#projects',
        title: 'Projects',
    },
    {
        href: '#contact',
        title: 'Contact',
    },
];

export default function Navbar() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <nav className='bg-white dark:bg-[#030406] w-full fixed z-50'>
            <div className='flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto transition-all duration-300 ease-in-out md:justify-center'>
                <div className='flex md:order-2'>
                    <button
                        type='button'
                        className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='w-6 h-6'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                clip-rule='evenodd'
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={[
                        'w-full md:flex md:items-center md:w-auto transition-all duration-300 ease-in-out',
                        showMobileMenu ? '' : 'hidden',
                    ].join(' ')}
                    onClick={() => setShowMobileMenu(false)}
                >
                    <ul className='flex flex-col w-full py-4 mt-4 font-medium md:p-0 md:flex-row md:space-x-8 md:mt-0'>
                        {Links.map((link) => (
                            <Link {...link} key={link.title} />
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const Link = ({ href, title }) => {
    return (
        <li
            className='block py-2 pl-3 pr-4 text-gray-900 rounded cursor-pointer hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-400 md:p-0 md:dark:hover:text-orange-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 '
            onClick={() => scrollTo({ id: href.replace('#', '') })}
        >
            {title}
        </li>
    );
};
