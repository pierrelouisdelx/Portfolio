'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contacts from '@/components/Contact';

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
