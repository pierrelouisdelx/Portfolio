'use client';

import { ArrowDownIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';

const animationSequence = [
    'Computer Vision Engineer',
    1000,
    'Software Engineer Freelance',
    1000
];

export default function Hero() {
    return (
        <section
            className='flex flex-col items-center justify-center text-center'
            id='hero'
        >
            <FallbackImage />
            <h1 className='text-4xl font-semibold tracking-wide uppercase md:text-7xl'>
                Pierre-Louis
            </h1>
            <h1 className='text-4xl font-semibold tracking-wide uppercase md:text-7xl'>
                Delcroix
            </h1>
            <div className='flex flex-col items-center md:flex-row'>
                <h2 className='text-xl tracking-wide uppercase'>I&apos;m a</h2>
                <h2
                    className='ml-2 text-xl leading-10 tracking-wide underline uppercase underline-offset-8 decoration-primary decoration-4'
                    datatype="['Computer Vision Engineer', 'Software Engineer Freelance']"
                >
                    <TypeAnimation
                        sequence={animationSequence}
                        wrapper='span'
                        cursor={true}
                        repeat={Infinity}
                    />
                </h2>
            </div>

            <a
                className='flex flex-row mt-20 cursor-pointer p-5'
                href='#about'
                aria-label='Scroll to about section'
            >
                <ArrowDownIcon className='w-10 h-10 mt-10 text-primary animate-bounce-slow focus:ring-primary rounded-full' />
            </a>
        </section>
    );
}

const FallbackImage = () => {
    const imageRef = useRef<HTMLImageElement>(null);

    const onMouseMove = (e: any) => {
        const rotateX = (e.clientY - window.innerHeight / 2) * 0.025;
        const rotateY = (e.clientX - window.innerWidth / 2) * -0.0125;

        if (imageRef.current)
            imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div className='flex justify-center items-center inset-0 bg-grey-1 fixed -z-10'>
            <Image
                src='/mushrooms.webp'
                className='w-3/4 h-auto md:w-2/3'
                loading='eager'
                fetchPriority='high'
                width={800}
                height={700}
                alt='Mushrooms'
                blurDataURL='/mushrooms.webp'
                placeholder='blur'
                ref={imageRef}
            />
        </div>
    );
};
