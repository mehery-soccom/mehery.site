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
                        class="w-24 sm:w-32 md:w-36 hover:opacity-90 transition-opacity"
                        src="../../../@assets/images/logo2.png"
                        alt="Logo"
                    />
                </router-link>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:flex items-center space-x-6 ml-4">
                <!-- Product Dropdown -->
                <div class="relative" @mouseenter="(productMenuOpen = true), (resourcesMenuOpen = false)">
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
                        @mouseleave="productMenuOpen = false"
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
                <div class="relative" @mouseenter="(resourcesMenuOpen = true), (productMenuOpen = false)">
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
                        @mouseleave="resourcesMenuOpen = false"
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

                        <router-link
                            :to="{ name: 'Faq' }"
                            class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-md font-bold cursor-pointer transition-colors"
                        >
                            FAQ
                        </router-link>

                        <!-- Testimonials Link -->
                        <a
                            @click="scrollToSection('testimonial')"
                            class="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-md font-bold cursor-pointer transition-colors"
                        >
                            Testimonials
                        </a>
                    </div>
                </div>

                <!-- Pricing Link -->
                <a
                    @click="scrollToSection('pricing')"
                    class="text-gray-700 hover:text-gray-900 cursor-pointer text-md font-bold transition-colors duration-300 relative group hover:no-underline"
                    @mouseenter="(productMenuOpen = false), (resourcesMenuOpen = false)"
                >
                    Pricing
                </a>
            </div>

            <!-- Free Trial Button -->
            <div class="hidden md:flex ml-auto space-x-4">
                <button
                    class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-4 py-2 rounded-md font-bold transition-colors duration-300 whitespace-nowrap text-de"
                >
                <a
                    href="https://app.mehery.com/partner/auth/register"
                    target="_blank"
                >
                    START FREE TRIAL
                </a>
                </button>
                <a
                    href="https://calendly.com/shekhars"
                    target="_blank"
                    class="hover:bg-[#f3a840] hover:text-white border-2 border-[#F4B860] text-black px-4 py-2 rounded-md font-bold transition-colors duration-300 no-underline hover:no-underline whitespace-nowrap"
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
                class="md:hidden mt-2 space-y-2 px-4 py-2 bg-white/95 rounded-md shadow-sm w-full"
            >
                <!-- Product Dropdown (Mobile) -->
                <div class="relative">
                    <button
                        @click="toggleProductMenu"
                        class="w-full text-left py-2 text-gray-700 hover:text-gray-900 text-sm font-medium cursor-pointer transition-colors duration-300 flex items-center justify-between"
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
                    <div v-if="productMenuOpen" class="pl-4 space-y-2 mt-2">
                        <a
                            @click="scrollToSection('WhatsApp')"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                        >
                            WhatsApp
                        </a>
                        <a
                            @click="handleMobileLinkClick('features')"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                        >
                            Features
                        </a>
                        <a
                            @click="handleMobileLinkClick('solutions')"
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
                        class="w-full text-left py-2 text-gray-700 hover:text-gray-900 text-sm font-medium cursor-pointer transition-colors duration-300 flex items-center justify-between"
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
                    <div v-if="resourcesMenuOpen" class="pl-4 space-y-2 mt-2">
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

                        <!-- FAQ Link (Mobile) -->
                        <router-link
                            :to="{ name: 'Faq' }"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                            @click="toggleMobileMenu"
                        >
                            FAQ
                        </router-link>

                        <!-- Testimonials Link (Mobile) -->
                        <a
                            @click="scrollToSection('WhatsApp')"
                            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                        >
                            Testimonials
                        </a>
                    </div>
                </div>

                <!-- Pricing Link (Mobile) -->
                <a
                    @click="handleMobileLinkClick('pricing')"
                    class="block py-2 text-gray-700 hover:text-gray-900 text-sm font-medium cursor-pointer transition-colors duration-300"
                >
                    Pricing
                </a>

                <!-- Action Buttons (Mobile) -->
                <div class="flex flex-col space-y-2 pt-1">
                    <a
                    href="https://app.mehery.com/partner/auth/register" target="_blank" rel="noopener noreferrer"
                        class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-4 py-2 rounded-md text-sm font-medium text-center transition-colors duration-300"
                        @click.stop
                    >
                        START FREE TRIAL
                    </a>
                    <a
                        href="https://calendly.com/shekhars"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="hover:bg-[#f3a840] hover:text-white border-2 border-[#F4B860] text-black px-4 py-2 rounded-md text-sm font-medium text-center transition-colors duration-300"
                        @click.stop
                    >
                        BOOK DEMO
                    </a>
                </div>
            </div>
        </transition>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);
const productMenuOpen = ref(false);
const resourcesMenuOpen = ref(false);

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

const toggleProductMenu = () => {
    productMenuOpen.value = !productMenuOpen.value;
    // Close resources menu when opening product menu
    if (productMenuOpen.value) resourcesMenuOpen.value = false;
};

const toggleResourcesMenu = () => {
    resourcesMenuOpen.value = !resourcesMenuOpen.value;
    // Close product menu when opening resources menu
    if (resourcesMenuOpen.value) productMenuOpen.value = false;
};

const handleMobileLinkClick = id => {
    mobileMenuOpen.value = false;
    productMenuOpen.value = false;
    resourcesMenuOpen.value = false;
    scrollToSection(id);
};

const scrollToSection = id => {
    // Check if the current route is the home page
    if (route.name === "Home") {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    } else {
        // Navigate to the home page with a hash
        router.push({ name: "Home", hash: `#${id}` });
    }
};

// Handle hash changes after navigation to the home page
onMounted(() => {
    window.addEventListener("scroll", handleScroll);

    // Check for a hash in the URL after the page loads
    if (route.name === "Home" && route.hash) {
        const sectionId = route.hash.replace("#", "");
        const element = document.getElementById(sectionId);
        if (element) {
            // Small timeout to ensure DOM is ready
            setTimeout(() => {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }, 100);
        }
    }
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
    const navbarHeight = 60;
    isScrolled.value = window.scrollY > navbarHeight;
};
</script>
