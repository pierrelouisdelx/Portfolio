import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: "Pierre-Louis Delcroix's Portfolio",
    applicationName: "Pierre-Louis Delcroix's Portfolio",
    authors: [{ name: 'Pierre-Louis Delcroix' }],
    keywords: [
        "Pierre-Louis Delcroix's Portfolio",
        'Computer Vision Engineer',
        'Deep Learning Engineer',
    ],
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
            <body className='flex flex-col cursor-none'>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
