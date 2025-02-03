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
                    <!-- About Us Link -->
                    <router-link
                        :to="{ name: 'About' }"
                        class="text-gray-700 hover:text-gray-900 cursor-pointer text-md font-bold transition-colors duration-300 relative group"
                    >
                        About Us
                        <span
                            class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"
                        ></span>
                    </router-link>

                    <!-- Partner Link -->
                    <router-link
                        :to="{ name: 'Partner' }"
                        class="text-gray-700 hover:text-gray-900 cursor-pointer text-md font-bold transition-colors duration-300 relative group"
                    >
                        Partner
                        <span
                            class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"
                        ></span>
                    </router-link>

                    <!-- Blog -->
                    <router-link
                        :to="{ name: 'Blog' }"
                        class="text-gray-700 hover:text-gray-900 cursor-pointer text-md font-bold transition-colors duration-300 relative group"
                    >
                        Blog
                        <span
                            class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"
                        ></span>
                    </router-link>
                    
                    <!-- Features Dropdown -->
                    <div class="relative">
                        <button
                            @click="toggleFeaturesMenu"
                            class="text-gray-700 hover:text-gray-900 cursor-pointer text-md font-bold transition-colors duration-300 flex items-center space-x-1 focus:outline-none"
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
                        <div
                            v-if="featuresMenuOpen"
                            class="absolute left-0 mt-3 w-64 bg-white rounded-lg shadow-xl py-2 z-50 border border-gray-100"
                        >
                            <a
                                v-for="(label, id) in featuresMenu"
                                :key="id"
                                @click="scrollToSection(id)"
                                class="block px-6 py-4 text-gray-700 hover:bg-gray-50 hover:text-gray-900 text-md font-bold cursor-pointer transition-colors"
                            >
                                {{ label }}
                            </a>
                        </div>
                    </div>
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
            class=" hover:bg-[#f3a840] hover:text-white border-2 border-[#F4B860] text-black px-4 py-2 rounded-md font-bold transition-colors duration-300 no-underline hover:no-underline"
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
                    <!-- About Us Link (Mobile) -->
                    <router-link
                        :to="{ name: 'About' }"
                        class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                        @click="toggleMobileMenu"
                    >
                        About Us
                    </router-link>

                    <!-- Partner Link (Mobile) -->
                    <router-link
                        :to="{ name: 'Partner' }"
                        class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                        @click="toggleMobileMenu"
                    >
                        Partner
                    </router-link>
                    <!-- Blog -->
                    <router-link
                        :to="{ name: 'Blog' }"
                        class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                        @click="toggleMobileMenu"
                    >
                        Blog
                    </router-link>

                    <!-- Features Dropdown (Mobile) -->
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
                            <a
                                v-for="(label, id) in featuresMenu"
                                :key="id"
                                @click="scrollToSection(id)"
                                class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
                            >
                                {{ label }}
                            </a>
                        </div>
                    </div>

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
    import { ref, onMounted, onUnmounted, nextTick } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    // Features dropdown menu (scroll to sections)
    const featuresMenu = {
        "solutions": "Solutions",
        "features": "Core Features",
        "WhatsApp": "WhatsApp Integration",
        "pricing": "Pricing Plans",
        "faqs": "FAQs"
    };

    const isScrolled = ref(false);
    const mobileMenuOpen = ref(false);
    const featuresMenuOpen = ref(false);

    const toggleFeaturesMenu = () => {
        featuresMenuOpen.value = !featuresMenuOpen.value;
    };

    const toggleMobileMenu = () => {
        mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const scrollToSection = async (id) => {
        // If not on the home page, navigate to home first
        if (router.currentRoute.value.name !== 'Home') {
            await router.push({ name: 'Home' });
            
            // Wait for a short moment to ensure the home page has loaded
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Scroll to the section
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }

        // Close menus
        mobileMenuOpen.value = false;
        featuresMenuOpen.value = false;
    };

    const handleScroll = () => {
        const navbarHeight = 60;
        isScrolled.value = window.scrollY > navbarHeight;
    };

    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
    });
    </script>