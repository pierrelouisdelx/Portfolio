'use client';

import About from '@/components/About';
import Contacts from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Page() {
    return (
        <div className='flex flex-col'>
            <Navbar />

            <main className='text-center text-white child:px-5 md:child:px-20 child:py-20 child:min-h-screen'>
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
