<template>
  <header class="absolute top-0 z-50 w-full">
    <nav class="content-wrapper" aria-label="Top">
      <div class="flex items-center justify-between w-full py-4 lg:py-6">
        <div class="flex items-center">
          <a href="/">
            <span class="sr-only">Quantum Vita Body Therapy</span>
            <img class="w-auto h-16 lg:h-20" src="/assets/logo.png" alt="" />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <a
              v-for="link in navigation"
              :key="link.name"
              :href="link.href"
              class="text-lg text-white transition-colors transform hover:text-primaryColor"
              :class="{ 'text-primaryColor': link.href === currenteRoute }"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <a
            href="/contact"
            class="hidden px-4 py-2 text-base font-medium text-gray-100 transition-all transform border border-transparent rounded-md lg:inline-block bg-primaryColor hover:bg-primaryColorDark"
            >Request an appointment</a
          >
          <div class="lg:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-primaryColor hover:text-primaryColorDark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryColor"
              aria-expanded="false"
              @click="mobileMenuState"
            >
              <span class="sr-only">Open menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div
        class="absolute inset-x-0 top-0 z-50 p-2 transition origin-top-right transform lg:hidden"
      >
        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <div
            v-show="mobileMenuFlag"
            class="divide-y-2 rounded-lg shadow-lg bg-primaryBlack ring-1 ring-black ring-opacity-5 divide-gray-50"
          >
            <div class="px-5 pt-5 pb-6">
              <div class="flex items-center justify-between">
                <div>
                  <img class="w-auto h-16 lg:h-20" src="/assets/logo.png" alt="" />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-primaryColor hover:text-primaryColorDark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primaryColor"
                    @click="mobileMenuState"
                  >
                    <span class="sr-only">Close menu</span>
                    <svg
                      class="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="mt-6 space-y-8">
                <nav class="grid gap-6">
                  <a
                    v-for="link in navigation"
                    :key="link.name"
                    :href="link.href"
                    class="block text-lg text-white hover:text-gray-100"
                  >
                    {{ link.name }}
                  </a>
                </nav>
                <a
                  href="/contact"
                  class="block w-full py-2 pl-2 text-lg text-gray-100 transition-all transform border border-transparent rounded-md lg:inline-block bg-primaryColor hover:bg-primaryColorDark"
                >
                  Request an appointment
                </a>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </nav>
  </header>
</template>

<script>
const navigation = [
  { name: 'Services', href: '/services', active: false },
  { name: 'About', href: '/about', active: false },
  { name: 'FAQs', href: '/faqs', active: false },
  { name: 'Gallery', href: '/gallery', active: false }
];

export default {
  data() {
    return {
      mobileMenuFlag: false,
      currentPage: ''
    };
  },
  methods: {
    mobileMenuState() {
      this.mobileMenuFlag = !this.mobileMenuFlag;
    },
    closeMobileMenu() {
      this.mobileMenuFlag = false;
    }
  },
  computed: {
    currenteRoute() {
      return (this.currentPage = window.location.pathname);
    }
  },
  setup() {
    return {
      navigation
    };
  }
};
</script>
