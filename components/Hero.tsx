import { TypeAnimation } from 'react-type-animation';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import Spline from '@splinetool/react-spline';
import { Suspense } from 'react';

const animationSequence = ['Web Developer Freelance', 1000, 'Computer Vision Engineer', 1000];

export default function Hero({ setCurrent }) {
    return (
        <div
            className='flex flex-col items-center justify-center w-screen min-h-screen mt-10 text-center'
            id='hero'
        >
            <Suspense fallback={null}>
                <Spline
                    scene='/mushroom.spline'
                    className='absolute inset-0 -z-10 items-center justify-center flex w-[80vw] h-[80vh]'
                />
            </Suspense>
            <h1 className='text-[5vw] uppercase tracking-wide font-semibold'>Pierre-Louis</h1>
            <h1 className='text-[5vw] uppercase tracking-wide font-semibold'>Delcroix</h1>
            <div className='flex flex-col items-center md:flex-row'>
                <h5 className='text-xl tracking-wide uppercase'>I'm a</h5>
                <h5 className='ml-2 text-xl leading-10 tracking-wide underline uppercase underline-offset-8 decoration-orange-400 decoration-4'>
                    <TypeAnimation
                        sequence={animationSequence}
                        wrapper='span'
                        cursor={true}
                        repeat={Infinity}
                    />
                </h5>
            </div>

            <div
                className='flex flex-row mt-20 cursor-pointer'
                onClick={() => setCurrent('#about')}
            >
                <ArrowDownIcon className='w-10 h-10 mt-10 text-orange-400 animate-bounce-slow' />
            </div>
        </div>
    );
}
