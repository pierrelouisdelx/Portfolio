import Navbar from '@/components/Navbar';
import { Locale, i18n } from '@/i18n.config';
import { SpeedInsights } from '@vercel/speed-insights/next';
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

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: Locale };
}) {
    return (
        <html lang={params.lang} className='scroll-smooth'>
            <body className='flex flex-col cursor-none'>
                <Navbar lang={params.lang} />
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
