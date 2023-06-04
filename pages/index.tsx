import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <Navbar />

            <main className='flex flex-col items-center justify-center flex-1 px-20 text-center text-white'>
                <Hero />
                <About />
            </main>
        </div>
    );
}
