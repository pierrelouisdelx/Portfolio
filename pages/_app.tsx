import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, []);

    return <>{loading ? <Component {...pageProps} /> : <LoadingScreen />}</>;
}

const LoadingScreen = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center h-screen w-screen text-white'>
            <h1 className='text-[5vw] uppercase tracking-wide font-semibold'>Pierre-Louis</h1>
            <h1 className='text-[5vw] uppercase tracking-wide font-semibold'>Delcroix</h1>
        </div>
    );
};
