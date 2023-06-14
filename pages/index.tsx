import React, { useEffect } from 'react';

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
            <Navbar setCurrent={setCurrent} />

            <main className='text-center text-white md:child:px-20 child:py-20 snap-y snap-mandatory h-screen overflow-scroll child:snap-start child:min-h-screen scroll-smooth'>
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
