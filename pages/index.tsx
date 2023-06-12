import { useEffect } from 'react';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contact';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <Navbar />

            <main className='flex flex-col items-center justify-center flex-1 px-5 text-center text-white md:px-20 child:py-20'>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contacts />
            </main>
        </div>
    );
}
