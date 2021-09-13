module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    darkMode: false,
    theme: {
        fontFamily: {
            body: ['Poppins'],
            display: ['Yeseva One']
        },
        extend: {
            colors: {
                primaryColor: '#CC5500',
                primaryColorDark: '#A34400',
                secondaryColor: '#F0E2A3',
                primaryBlack: '#121619',
                headerText: '#1E1E24',
                subHeadline: '#0f3433',
                cardParagraph: '#e8e4e6'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp')
    ]
};
