import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import { LoadingScreen } from '@/components/Preloader/LoadingScreen';

export default function App({ Component, pageProps }: AppProps) {
    return <LoadingScreen />;
}
