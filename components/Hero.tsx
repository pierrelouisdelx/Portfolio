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
            className='flex flex-col items-center justify-center flex-1 px-20 text-center min-h-screen'
            onMouseMove={triggerAnimation}
        >
            <Spline
                scene='https://prod.spline.design/3vT6YOc2K22A30tk/scene.splinecode'
                style={{ width: '80vw', height: '80vh', marginTop: '10vh', marginLeft: '10vw' }}
                className='absolute inset-0 -z-10 items-center justify-center flex'
                onLoad={onLoad}
            />
            <h1 className='text-[5vw] uppercase tracking-wide font-semibold'>Pierre-Louis</h1>
            <h1 className='text-[5vw] uppercase tracking-wide font-semibold'>Delcroix</h1>
            <div className='flex flex-row'>
                <h5 className='text-xl uppercase tracking-wide'>I'm a</h5>
                <h5 className='text-xl uppercase tracking-wide underline underline-offset-8 decoration-orange-400 decoration-4 ml-2'>
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
