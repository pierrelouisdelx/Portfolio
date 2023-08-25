import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { letter } from '@/variants/animations';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contact';

export default function App() {
    const [current, setCurrent] = React.useState('#hero');

    useEffect(() => {
        document.querySelector(`${current}`)?.scrollIntoView();
    }, [current]);

    return (
        <div className='flex flex-col'>
            <motion.div
                className='h-full absolute bg-white z-40'
                initial={{ width: '50%' }}
                animate={{
                    width: '0%',
                    transition: {
                        ease: [0.455, 0.03, 0.515, 0.955],
                        duration: 3,
                        delay: 2,
                    },
                }}
            ></motion.div>
            <motion.div
                className='absolute w-full h-full z-50 flex justify-center items-center flex-col'
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: {
                        duration: 0.5,
                        delay: 4,
                    },
                }}
            >
                <motion.h1
                    className='text-4xl font-semibold tracking-wide uppercase md:text-7xl'
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            ease: [0.455, 0.03, 0.515, 0.955],
                            duration: 1.5,
                        },
                    }}
                >
                    Pierre-Louis
                </motion.h1>
                <motion.h1
                    className='text-4xl font-semibold tracking-wide uppercase md:text-7xl'
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            ease: [0.455, 0.03, 0.515, 0.955],
                            duration: 1.5,
                            delay: 0.5,
                        },
                    }}
                >
                    Delcroix
                </motion.h1>
            </motion.div>
            <motion.div
                className='h-full absolute bg-white z-40 right-0'
                initial={{ width: '50%' }}
                animate={{
                    width: '0%',
                    transition: {
                        ease: [0.455, 0.03, 0.515, 0.955],
                        duration: 3,
                        delay: 2,
                    },
                }}
            ></motion.div>
            <Navbar setCurrent={setCurrent} />

            <main className='h-screen overflow-x-hidden overflow-y-scroll text-center text-white max-w-screen child:px-5 md:child:px-20 child:py-20 snap-y snap-mandatory child:snap-start child:min-h-screen scroll-smooth'>
                <Hero setCurrent={setCurrent} />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contacts />
            </main>
        </div>
    );
}
