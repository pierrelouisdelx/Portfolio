const svgToDataUri = require('mini-svg-data-uri');

const {
    default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

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
                    DEFAULT: '#000',
                    1: '#1a191d',
                },
                grey: {
                    1: '#030406',
                },
            },
            zIndex: {
                100: '100',
            },
            screens: {
                '3xl': '2200px',
            },
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant('child', '& > *');
            addVariant('child-hover', '& > *:hover');
        },
        addVariablesForColors,
        function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    'bg-dot': (value) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`,
                    }),
                },
                {
                    values: flattenColorPalette(theme('backgroundColor')),
                    type: 'color',
                }
            );
        },
    ],
};

function addVariablesForColors({ addBase, theme }) {
    let allColors = flattenColorPalette(theme('colors'));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ':root': newVars,
    });
}
