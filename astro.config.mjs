export default {
    // projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
    pages: './src/pages',
    dist: './dist',
    public: './public',
    buildOptions: {
        // site: 'http://example.com',           // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
        sitemap: true
    },
    devOptions: {
        // hostname: 'localhost',  // The hostname to run the dev server on.
        // port: 3000,             // The port to run the dev server on.
        tailwindConfig: './tailwind.config.js'
    },
    renderers: ['@astrojs/renderer-vue']
};
