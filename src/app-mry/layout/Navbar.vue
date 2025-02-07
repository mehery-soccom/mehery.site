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
                <router-link :to="{ name: 'Home' }">
                    <img
                        class="w-32 sm:w-40 md:w-44 hover:opacity-90 transition-opacity"
                        src="../../@assets/images/logo2.png"
                        alt="Logo"
                    />
                </router-link>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-6 ml-4">
                <!-- Product Dropdown -->
                <div class="relative" @mouseenter="productMenuOpen = true" @mouseleave="productMenuOpen = false">
                    <button
                        class="text-gray-700 hover:text-gray-900 cursor-pointer text-md font-bold transition-colors duration-300 flex items-center space-x-1 focus:outline-none"
                        @mousedown="productMenuOpen = !productMenuOpen"
                    >
                        <span>Product</span>
                        <svg
                            class="w-4 h-4 transform transition-transform"
                            :class="{ 'rotate-180': productMenuOpen }"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        v-if="productMenuOpen"
                        class="absolute left-0 mt-3 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                    >
                        <a
                            @click="scrollToSection('solutions')"
                            class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-md font-bold cursor-pointer transition-colors"
                        >
                            Solutions
                        </a>
                        <a
                            @click="scrollToSection('features')"
                            class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-md font-bold cursor-pointer transition-colors"
                        >
                            Features
                        </a>

                        <a
                            @click="scrollToSection('WhatsApp')"
                            class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-md font-bold cursor-pointer transition-colors"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>

                <!-- Resources Dropdown -->
                <div class="relative" @mouseenter="resourcesMenuOpen = true" @mouseleave="resourcesMenuOpen = false">
                    <button
                        class="text-gray-700 hover:text-gray-900 cursor-pointer text-md font-bold transition-colors duration-300 flex items-center space-x-1 focus:outline-none"
                        @mousedown="resourcesMenuOpen = !resourcesMenuOpen"
                    >
                        <span>Resources</span>
                        <svg
                            class="w-4 h-4 transform transition-transform"
                            :class="{ 'rotate-180': resourcesMenuOpen }"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div
                        v-if="resourcesMenuOpen"
                        class="absolute left-0 mt-3 w-48 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                    >
                        <!-- About Us Link -->
                        <router-link
                            :to="{ name: 'About' }"
                            class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-md font-bold cursor-pointer transition-colors"
                        >
                            About Us
                        </router-link>

                        <!-- Blogs Link -->
                        <router-link
                            :to="{ name: 'Blog' }"
                            class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-md font-bold cursor-pointer transition-colors"
                        >
                            Blogs
                        </router-link>

                        <!-- Partner Link -->
                        <router-link
                            :to="{ name: 'Partner' }"
                            class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-md font-bold cursor-pointer transition-colors"
                        >
                            Partner
                        </router-link>

                        <!-- Testimonials Link -->
                        <a
                            @click="scrollToSection('testimonial')"
                            class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-md font-bold cursor-pointer transition-colors"
                        >
                            Testimonials
                        </a>

                        <!-- FAQs Link -->
                        <a
                            @click="scrollToSection('faqs')"
                            class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-md font-bold cursor-pointer transition-colors"
                        >
                            FAQs
                        </a>
                    </div>
                </div>

                <!-- Pricing Link -->
                <a
                    @click="scrollToSection('pricing')"
                    class="text-gray-700 hover:text-gray-900 cursor-pointer text-md font-bold transition-colors duration-300 relative group"
                >
                    Pricing
                    <span
                        class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"
                    ></span>
                </a>
            </div>

            <!-- Free Trial Button -->
            <div class="hidden md:block ml-auto space-x-4">
                <button
                    class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-4 py-2 rounded-md font-bold transition-colors duration-300"
                >
                    START FREE TRIAL
                </button>
                <a
                    href="https://calendly.com/shekhars"
                    target="_blank"
                    class="hover:bg-[#f3a840] hover:text-white border-2 border-[#F4B860] text-black px-4 py-2 rounded-md font-bold transition-colors duration-300 no-underline hover:no-underline"
                >
                    BOOK DEMO
                </a>
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
                <!-- Product Dropdown (Mobile) -->
                <div class="relative">
                    <button
                        @click="toggleProductMenu"
                        class="w-full text-left py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300 flex items-center justify-between"
                    >
                        <span>Product</span>
                        <svg
                            class="w-4 h-4 transform transition-transform"
                            :class="{ 'rotate-180': productMenuOpen }"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div v-if="productMenuOpen" class="pl-4">
                        <a
                            @click="scrollToSection('whatsapp')"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                        >
                            WhatsApp
                        </a>
                        <a
                            @click="scrollToSection('features')"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                        >
                            Features
                        </a>
                        <a
                            @click="scrollToSection('solutions')"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                        >
                            Solutions
                        </a>
                    </div>
                </div>

                <!-- Resources Dropdown (Mobile) -->
                <div class="relative">
                    <button
                        @click="toggleResourcesMenu"
                        class="w-full text-left py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300 flex items-center justify-between"
                    >
                        <span>Resources</span>
                        <svg
                            class="w-4 h-4 transform transition-transform"
                            :class="{ 'rotate-180': resourcesMenuOpen }"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <div v-if="resourcesMenuOpen" class="pl-4">
                        <!-- About Us Link (Mobile) -->
                        <router-link
                            :to="{ name: 'About' }"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                            @click="toggleMobileMenu"
                        >
                            About Us
                        </router-link>

                        <!-- Blogs Link (Mobile) -->
                        <router-link
                            :to="{ name: 'Blog' }"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                            @click="toggleMobileMenu"
                        >
                            Blogs
                        </router-link>

                        <!-- Partner Link (Mobile) -->
                        <router-link
                            :to="{ name: 'Partner' }"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                            @click="toggleMobileMenu"
                        >
                            Partner
                        </router-link>

                        <!-- Testimonials Link (Mobile) -->
                        <a
                            @click="scrollToSection('testimonials')"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                        >
                            Testimonials
                        </a>

                        <!-- FAQs Link (Mobile) -->
                        <a
                            @click="scrollToSection('faqs')"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                        >
                            FAQs
                        </a>
                    </div>
                </div>

                <!-- Pricing Link (Mobile) -->
                <a
                    @click="scrollToSection('pricing')"
                    class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                >
                    Pricing
                </a>

                <!-- Free Trial Button (Mobile) -->
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
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
const productMenuOpen = ref(false);
const resourcesMenuOpen = ref(false);

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // Close menus
    mobileMenuOpen.value = false;
    productMenuOpen.value = false;
    resourcesMenuOpen.value = false;
};

const handleScroll = () => {
    const navbarHeight = 60;
    isScrolled.value = window.scrollY > navbarHeight;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
