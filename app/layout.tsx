import { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Portfolio website',
    themeColor: '#000000',
};

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en' className='scroll-smooth'>
            <body>{children}</body>
        </html>
    );
}
