<template>
    <footer class="bg-[#1C1C1F] text-white px-4 sm:px-8 py-6 sm:py-12 z-0">
        <!-- Top Section -->
        <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-evenly mb-6">
            <!-- Left Side - Logo and Contact Info -->
            <div class="space-y-6">
                <!-- Logo -->
                <div class="flex items-center transform hover:scale-105 transition-transform duration-300">
                    <img src="../../@assets/images/logo.png" alt="Header Image" class="w-40 sm:w-64 h-auto" />
                </div>

                <!-- Contact Info -->
                <div class="space-y-4 sm:ml-8">
                    <h3 class="text-[#FFA726] font-semibold text-lg">Contact us:</h3>
                    <div class="space-y-2 text-gray-300">
                        <p class="flex items-center gap-2 hover:text-white transition-colors">
                            <MailIcon size="18" />
                            <a href="mailto:info@mehery.com">sales@mehery.com</a>
                        </p>
                        <p class="flex items-center gap-2 hover:text-white transition-colors">
                            <PhoneIcon size="18" />
                            <a href="tel:555-567-8901">+91 96192 03759</a>
                        </p>
                        <div class="flex items-start gap-2">
                            <MapPinIcon size="18" class="mt-1 flex-shrink-0" />
                            <div>
                                <p>1-34, A H Wadia Baug</p>
                                <p>Parel Tank Road, Mumbai 400033</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Meta Partner Section -->
            <div class="flex flex-col justify-center items-center">
                <img src="../../@assets/images/meta.png" alt="Meta Partner Logo" class="w-32 sm:w-60" />
                <p class="text-white-30 text-sm italic font-bold mt-3 text-center max-w-md">
                    "As a proud Meta Technology Partner, we ensure top-tier integration and reliability across
                    channels."
                </p>
            </div>

            <!-- Quick Links and Company Links -->
            <div class="flex flex-col sm:flex-row gap-x-8 gap-6">
                <!-- Quick Links -->
                <div class="flex flex-col gap-2">
                    <h3 class="text-[#FFA726] font-semibold text-lg">Quick Links</h3>
                    <template v-for="link in navLinks" :key="link.path">
                        <div v-if="link.type === 'scroll'">
                            <button
                                @click="handleScroll(link.path)"
                                class="text-gray-300 hover:text-white transition-colors focus:outline-none"
                            >
                                {{ link.label }}
                            </button>
                        </div>
                    </template>
                </div>

                <!-- Company Links -->
                <div class="flex flex-col gap-2">
                    <h3 class="text-[#FFA726] font-semibold text-lg">Company</h3>
                    <template v-for="link in navLinks" :key="link.path">
                        <div v-if="link.type === 'route'">
                            <router-link :to="link.path" class="text-gray-300 hover:text-white transition-colors">
                                {{ link.label }}
                            </router-link>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <!-- Bottom Section -->
        <div class="flex flex-col md:flex-row gap-6  pt-6 border-t border-gray-700">
            <div class="flex flex-col md:flex-row md:items-center gap-3 md:gap-4 ">
                <p class="text-gray-400">© 2024 Mehery. All Rights Reserved.</p>
                <router-link :to="{ name: 'Privacy' }" class="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                </router-link>
            </div>

            <!-- Subscribe to Blogs Input and Button -->
            <div class="flex items-center gap-2">
                <input
                    v-model="email"
                    type="email"
                    placeholder="Enter your email"
                    class="pl-3 py-2 bg-[#2C2C35] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-[#FFA726] focus:ring-1 focus:ring-[#FFA726] transition-all"
                    required
                />
                <button
                    @click="handleSubscribe"
                    class="px-4 py-2 bg-[#FFA726] text-black font-semibold rounded-lg hover:bg-[#FF9800] transition-all duration-300"
                >
                    Subscribe to Blogs
                </button>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from "vue";
import { MailIcon, PhoneIcon, MapPinIcon } from "vue-feather-icons";
import { useRouter } from "vue-router";

const email = ref("");
const router = useRouter();

const navLinks = [
    { type: "scroll", path: "features", label: "Features" },
    { type: "scroll", path: "solutions", label: "Solutions" },
    { type: "scroll", path: "pricing", label: "Pricing" },
    { type: "route", path: "about", label: "About Us" },
    { type: "route", path: "/career", label: "Career" },
    { type: "route", path: "/privacy", label: "Privacy Policy" },
    { type: "route", path: "/partner", label: "Partner" },
    { type: "route", path: "/faq", label: "FAQs" }
];

const handleScroll = id => {
    if (router.currentRoute.value.path !== "/") {
        router.push("/").then(() => {
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }, 500);
        });
    } else {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
};

const handleSubscribe = () => {
    if (email.value) {
        console.log("Subscribed:", email.value);
        email.value = "";
    }
};
</script>