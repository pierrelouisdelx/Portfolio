import { TypeAnimation } from 'react-type-animation';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';

const animationSequence = [
    'Software Engineer',
    1000,
    'Computer Vision Engineer',
    1000,
    'Web Developper Freelance',
    1000,
];

interface HeroProps {
    setCurrent: (index: any) => void;
}

export default function Hero({ setCurrent }: HeroProps) {
    const obj = useRef<any>();

    function onLoad(spline: any) {
        obj.current = spline.findObjectByName('Mushrooms');
    }

    useEffect(() => {
        window.addEventListener('mousemove', animateMushrooms);
        return () => {
            window.removeEventListener('mousemove', animateMushrooms);
        };
    }, []);

    function animateMushrooms(event: MouseEvent) {
        if (!obj.current) return;

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const x = mouseX / window.innerWidth;
        const y = mouseY / window.innerHeight;

        obj.current.rotation.x = x * 0.1;
        obj.current.rotation.y = y * 0.1;
    }

    return (
        <div
            className='flex flex-col items-center justify-center w-screen min-h-screen mt-10 text-center'
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
                <h5 className='text-xl tracking-wide uppercase'>I&apos;m a</h5>
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

const FallbackImage = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen bg-[#030406] absolute -z-10'>
            <img src='/mushrooms.png' className='w-3/4 h-auto md:w-2/3' />
        </div>
    );
};
