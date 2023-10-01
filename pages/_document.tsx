import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html className='scroll-smooth' lang='en'>
            <Head>
                <meta name='theme-color' content='#000000' />
                <title>Portfolio</title>
                <meta name='description' content='Portfolio' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
