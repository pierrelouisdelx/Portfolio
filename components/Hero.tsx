import Typical from 'react-typical';
import { ArrowDownIcon } from '@heroicons/react/24/solid';

export default function Hero() {
    return (
        <div className='flex flex-col items-center justify-center flex-1 px-20 text-center min-h-screen'>
            <h1 className='text-[5vw] uppercase tracking-wide font-semibold'>Pierre-Louis</h1>
            <h1 className='text-[5vw] uppercase tracking-wide font-semibold'>Delcroix</h1>
            <div className='flex flex-row'>
                <h5 className='text-xl uppercase tracking-wide'>I'm a</h5>
                <h5 className='text-xl uppercase tracking-wide underline underline-offset-8 decoration-orange-400 decoration-4'>
                    {' '}
                    <Typical
                        steps={['Web Developper Freelance', 1000, 'Computer Vision Engineer', 1000]}
                        loop={Infinity}
                    />
                </h5>
            </div>

            <div className='flex flex-row mt-20'>
                <ArrowDownIcon className='h-10 w-10 animate-bounce-slow mt-10 text-orange-400' />
            </div>
        </div>
    );
}
