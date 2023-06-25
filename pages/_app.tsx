import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/Preloader/LoadingScreen';
import { AnimatePresence, motion } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <LoadingScreen />
                </motion.div>
            )}
            <Component {...pageProps} />
        </AnimatePresence>
    );
}
