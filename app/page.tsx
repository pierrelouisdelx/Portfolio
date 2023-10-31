'use client';

import About from '@/components/About';
import Contacts from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

import { useEffect, useRef } from 'react';

export default function Page() {
    const mainCursor = useRef<null | HTMLDivElement>(null);
    const secondaryCursor = useRef<null | HTMLDivElement>(null);
    const positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
    });

    const onMouseMove = (event: any) => {
        const { clientX, clientY } = event;

        const mouseX = clientX;
        const mouseY = clientY;

        if (secondaryCursor.current && mainCursor.current) {
            positionRef.current.mouseX =
                mouseX - secondaryCursor.current.clientWidth / 2;
            positionRef.current.mouseY =
                mouseY - secondaryCursor.current.clientHeight / 2;
            mainCursor.current.style.transform = `translate3d(${
                mouseX - mainCursor.current.clientWidth / 2
            }px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
        }
    };

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            onMouseMove(event);
        });

        return () => {
            document.removeEventListener('mousemove', (event) => {
                onMouseMove(event);
            });
        };
    }, []);

    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);
            const {
                mouseX,
                mouseY,
                destinationX,
                destinationY,
                distanceX,
                distanceY,
            } = positionRef.current;
            if (!destinationX || !destinationY) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
            } else {
                positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
                positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
                if (
                    Math.abs(positionRef.current.distanceX) +
                        Math.abs(positionRef.current.distanceY) <
                    0.1
                ) {
                    positionRef.current.destinationX = mouseX;
                    positionRef.current.destinationY = mouseY;
                } else {
                    positionRef.current.destinationX += distanceX;
                    positionRef.current.destinationY += distanceY;
                }
            }

            if (secondaryCursor.current)
                secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
        };

        followMouse();
    }, []);

    return (
        <>
            <div
                className='z-100 pointer-events-none fixed hidden md:flex'
                ref={mainCursor}
            >
                <div className='w-2 h-2 rounded-full bg-primary'></div>
            </div>
            <div
                className='w-12 h-12 z-100 pointer-events-none fixed hidden md:flex transition-opacity duration-[1s] ease-[cubic-bezier(0.77,0,0.175,1)] animate-[fadeIn_1s_cubic-bezier(0.77,0,0.175,1)_0s_forwards]'
                ref={secondaryCursor}
            >
                <div className='w-full h-full rounded-full border border-primary relative'></div>
            </div>
            <main className='text-center text-white child:px-5 md:child:px-20 child:py-20 child:min-h-screen'>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contacts />
            </main>
        </>
    );
}
