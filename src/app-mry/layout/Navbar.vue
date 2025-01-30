<template>
    <nav
        :class="{
            'shadow-sm py-2': isScrolled,
            'py-4': !isScrolled
        }"
        class="w-full transition-all duration-300 sticky top-0 z-50 bg-white"
    >
        <div class="flex items-center px-4">
            <!-- Logo -->
            <div class="flex items-center relative">
                <img
                    class="w-32 sm:w-40 md:w-44 hover:opacity-90 transition-opacity"
                    src="../../@assets/images/logo2.png"
                    alt="Logo"
                />
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-6 ml-4">
                <router-link
                    to="/about"
                    class="text-gray-700 hover:text-gray-900 cursor-pointer text-sm font-medium transition-colors duration-300 relative group"
                >
                    About Us
                    <span
                        class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"
                    ></span>
                </router-link>

                <router-link
                    to="/partner"
                    class="text-gray-700 hover:text-gray-900 cursor-pointer text-sm font-medium transition-colors duration-300 relative group"
                >
                    Partner
                    <span
                        class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"
                    ></span>
                </router-link>
                
                <!-- Updated Features Dropdown -->
                <div class="relative group">
                    <button
                        class="text-gray-700 hover:text-gray-900 cursor-pointer text-sm font-medium transition-colors duration-300 flex items-center space-x-1 focus:outline-none"
                    >
                        <span>Features</span>
                        <svg
                            class="w-4 h-4 transform transition-transform group-hover:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        class="absolute left-0 mt-3 w-48 bg-white rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100"
                    >
                        <router-link
                            v-for="(label, path) in featuresMenu"
                            :key="path"
                            :to="path"
                            class="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-sm cursor-pointer transition-colors"
                        >
                            {{ label }}
                        </router-link>
                    </div>
                </div>
            </div>

            <!-- Free Trial Button -->
            <div class="hidden md:block ml-auto">
                <button
                    class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-4 py-2 rounded-xl font-medium transition-colors duration-300"
                >
                    Free Trial
                </button>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden ml-auto">
                <button
                    @click="toggleMobileMenu"
                    class="text-gray-700 hover:text-gray-900 focus:outline-none p-1.5 rounded-lg transition-colors duration-300"
                >
                    <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
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

        <!-- Mobile Menu -->
        <transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="transform -translate-y-2 opacity-0"
            enter-to-class="transform translate-y-0 opacity-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="transform translate-y-0 opacity-100"
            leave-to-class="transform -translate-y-2 opacity-0"
        >
            <div
                v-if="mobileMenuOpen"
                class="md:hidden mt-2 space-y-1 px-4 py-2 bg-white/95 rounded-md shadow-sm w-full"
            >
                <router-link
                    to="/about"
                    class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                >
                    About Us
                </router-link>
                <router-link
                    to="/partner"
                    class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                >
                    Partner
                </router-link>
                <div class="relative">
                    <button
                        @click="toggleFeaturesMenu"
                        class="w-full text-left py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300 flex items-center justify-between"
                    >
                        <span>Features</span>
                        <svg
                            class="w-4 h-4 transform transition-transform"
                            :class="{ 'rotate-180': featuresMenuOpen }"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div v-if="featuresMenuOpen" class="pl-4">
                        <router-link
                            v-for="(route, path) in routes"
                            :key="path"
                            :to="path"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm"
                        >
                            {{ route }}
                        </router-link>
                    </div>
                </div>
                <button
                    class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-4 py-2 rounded-xl font-medium transition-colors duration-300 w-full text-sm"
                >
                    Free Trial
                </button>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const navLinks = [
  { type: 'route', path: '/about', label: 'About Us' },
  { type: 'route', path: '/partner', label: 'Partner' },
  { type: 'route', path: '/privacy', label: 'Privacy' }
];

const isScrolled = ref(false); // Declare isScrolled as a reactive variable
const mobileMenuOpen = ref(false); // Declare mobileMenuOpen as a reactive variable

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    mobileMenuOpen.value = false; // Update reactive variable
  }
};

const handleScroll = () => {
  const navbarHeight = 60;
  isScrolled.value = window.scrollY > navbarHeight; // Update reactive variable
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value; // Toggle reactive variable
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
