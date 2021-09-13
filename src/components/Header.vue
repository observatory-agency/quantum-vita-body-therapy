<template>
    <header class="top-0 z-50 w-full lg:absolute">
        <nav class="content-wrapper" aria-label="Top">
            <div
                class="flex items-center justify-between w-full py-6 border-b border-indigo-500 lg:border-none"
            >
                <div class="flex items-center">
                    <a href="/">
                        <span class="sr-only">Quantum Vita Body Therapy</span>
                        <img class="w-auto h-20" src="/assets/logo.png" alt="" />
                    </a>
                    <div class="hidden ml-10 space-x-8 lg:block">
                        <a
                            v-for="link in navigation"
                            :key="link.name"
                            :href="link.href"
                            class="text-base font-medium text-white hover:text-indigo-50"
                        >
                            {{ link.name }}
                        </a>
                    </div>
                </div>
                <div class="ml-10 space-x-4">
                    <a
                        href="/contact"
                        class="inline-block px-4 py-2 text-base font-medium text-gray-100 transition-all transform border border-transparent rounded-md bg-primaryColor hover:bg-primaryColorDark"
                        >Make your appointment</a
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
