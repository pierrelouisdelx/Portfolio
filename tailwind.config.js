/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            animation: {
                'bounce-slow': 'bounce 1.5s infinite',
            },
            backgroundImage: {
                'gradient-radial':
                    'radial-gradient(circle at 1px 1px, grey 2px, transparent 0)',
                'backdrop-filter':
                    'backdrop-filter: blur(4px) brightness(120%)',
            },
            listStyleType: {
                'disclosure-closed': 'disclosure-closed',
            },
            colors: {
                primary: {
                    DEFAULT: '#fb923c',
                },
                black: {
                    '1': '#1a191d'
                },
                grey: {
                    '1': '#030406'
                }
            },
            zIndex: {
                '100': '100',
            }
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        },
    ],
};
