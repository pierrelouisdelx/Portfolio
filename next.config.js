/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com'
            },
            {
                protocol: 'https',
                hostname: 'images.emojiterra.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.fs.brandfolder.com'
            },
            {
                protocol: 'https',
                hostname: 'uploads-ssl.webflow.com'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            },
            {
                protocol: 'https',
                hostname: 'parentsonboard.fr'
            },
            {
                protocol: 'https',
                hostname: 'www.lomed.fr'
            },
            {
                protocol: 'https',
                hostname: 'www.harmony-promotion.com'
            },
            {
                protocol: 'https',
                hostname: 'd1hbpr09pwz0sk.cloudfront.net'
            },
            {
                protocol: 'https',
                hostname: 'www.psychologies.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.orbs.cloud'
            }
        ]
    }
};

module.exports = nextConfig;
