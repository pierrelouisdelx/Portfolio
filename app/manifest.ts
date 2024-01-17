import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Pierre-Louis Delcroix Portfolio',
        description:
            'Portfolio of Pierre-Louis Delcroix showing his experiences, skills and projects',
        start_url: '/',
        display: 'standalone',
        background_color: '#030406',
        theme_color: '#030406',
        lang: 'en',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon'
            },
            {
                src: '/apple-touch-icon.png',
                sizes: 'any',
                type: 'image/png'
            }
        ]
    };
}
