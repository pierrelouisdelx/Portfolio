import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <Navbar />

            <main className='flex flex-col items-center justify-center flex-1 md:px-20 px-5 text-center text-white'>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
            </main>
        </div>
    );
}
