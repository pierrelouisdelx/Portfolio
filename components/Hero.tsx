import { TypeAnimation } from 'react-type-animation';
import { ArrowDownIcon } from '@heroicons/react/24/solid';
import Spline from '@splinetool/react-spline';
import { useRef } from 'react';

const animationSequence = ['Web Developer Freelance', 1000, 'Computer Vision Engineer', 1000];

export default function Hero() {
    const objectToAnimate = useRef();

    function onLoad(spline) {
        const obj = spline.findObjectByName('Mushrooms');
        // save the object in a ref for later use
        objectToAnimate.current = obj;
    }

    function triggerAnimation() {
        objectToAnimate.current?.emitEvent('mouseHover');
    }

    return (
        <div
            className='flex flex-col items-center justify-center flex-1 px-20 text-center min-h-screen w-screen mt-10'
            onMouseMove={triggerAnimation}
        >
            <Spline
                scene='/mushroom.spline'
                className='absolute inset-0 -z-10 items-center justify-center flex w-[80vw] h-[80vh]'
                onLoad={onLoad}
            />
            <h1 className='text-[5vw] uppercase tracking-wide font-semibold'>Pierre-Louis</h1>
            <h1 className='text-[5vw] uppercase tracking-wide font-semibold'>Delcroix</h1>
            <div className='flex flex-col md:flex-row'>
                <h5 className='text-xl uppercase tracking-wide'>I'm a</h5>
                <h5 className='text-xl uppercase tracking-wide underline underline-offset-8 decoration-orange-400 decoration-4 ml-2 leading-10'>
                    <TypeAnimation
                        sequence={animationSequence}
                        wrapper='span'
                        cursor={true}
                        repeat={Infinity}
                    />
                </h5>
            </div>

            <div className='flex flex-row mt-20'>
                <ArrowDownIcon className='h-10 w-10 animate-bounce-slow mt-10 text-orange-400' />
            </div>
        </div>
    );
}
