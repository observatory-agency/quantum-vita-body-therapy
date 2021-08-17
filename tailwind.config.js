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
                primaryColor: '#EBD07F',
                primaryColorDark: '#DABB5D',
                secondaryColor: '#1E1E24',
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
