<template>
    <header class="lg:absolute top-0 z-50 w-full max-w-[1680px]">
        <nav class="px-4 mx-auto sm:px-6 lg:px-8" aria-label="Top">
            <div class="flex items-center justify-between py-6 md:justify-start">
                <div class="flex justify-start lg:w-0 lg:flex-1">
                    <div class="hidden space-x-8 lg:block">
                        <a
                            v-for="link in navigation"
                            :key="link.name"
                            :href="link.href"
                            class="text-lg font-medium text-white hover:text-gray-400"
                        >
                            {{ link.name }}
                        </a>
                    </div>
                </div>
                <div>
                    <a href="/">
                        <span class="sr-only">Quantum Vita Body Therapy</span>
                        <img class="w-auto h-24" src="/assets/logo.png" alt="" />
                    </a>
                </div>
                <div class="items-center justify-end md:flex md:flex-1">
                    <a
                        href="/contact"
                        class="inline-block px-4 py-2 text-base font-medium border border-transparent rounded-md text-secondaryColor bg-primaryColor hover:bg-primaryColorDark"
                        >Book Now</a
                    >
                </div>
            </div>
            <div class="flex flex-wrap justify-center py-4 space-x-6 lg:hidden">
                <a
                    v-for="link in navigation"
                    :key="link.name"
                    :href="link.href"
                    class="text-base font-medium text-white hover:text-indigo-50"
                >
                    {{ link.name }}
                </a>
            </div>
        </nav>
    </header>
</template>

<script>
const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'FAQs', href: '/faqs' }
];

export default {
    setup() {
        return {
            navigation
        };
    }
};
</script>
