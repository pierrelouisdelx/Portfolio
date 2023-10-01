/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'raw.githubusercontent.com',
            'images.emojiterra.com',
            'cdn.fs.brandfolder.com',
            'uploads-ssl.webflow.com',
            'res.cloudinary.com',
            'parentsonboard.fr',
            'www.lomed.fr',
            'www.harmony-promotion.com',
            'd1hbpr09pwz0sk.cloudfront.net',
            'www.psychologies.com',
        ],
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;
