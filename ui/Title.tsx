import { ReactNode } from 'react';
import { Reveal } from '@/components/Reveal';

export default function Title({ children }: { children: ReactNode }) {
    return (
        <Reveal>
            <h1
                className='uppercase tracking-wide font-semibold text-left mt-5 mb-3 underline underline-offset-8'
                style={{ fontSize: 'clamp(3rem, 5vw, 2.5rem)' }}
            >
                {children}
            </h1>
        </Reveal>
    );
}
