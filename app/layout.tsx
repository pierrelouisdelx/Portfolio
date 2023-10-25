import Navbar from '@/components/Navbar';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: "Pierre-Louis Delcroix's Portfolio",
    themeColor: '#030406',
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
