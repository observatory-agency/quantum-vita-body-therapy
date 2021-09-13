export default {
    pages: './src/pages',
    dist: './dist',
    public: './public',
    buildOptions: {
        // site: 'http://example.com',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
        sitemap: true
    },
    devOptions: {
        tailwindConfig: './tailwind.config.js'
    },
    renderers: ['@astrojs/renderer-vue']
};
