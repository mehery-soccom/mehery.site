<template>

    <Navbar />
    <div class="min-h-screen px-4 md:px-20 bg-white">
        <!-- Existing Hero Section -->
        <div class="container mx-auto px-6 py-16 pt-7 flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:pr-20">
                <h1 class="text-5xl md:text-5xl font-bold leading-tight mb-8">
                    Engage Customers Seamlessly with Unified Messaging
                </h1>
                <p class="text-gray-600 text-lg font-bold mb-6">
                    WhatsApp, Email, SMS, Facebook Messenger, Instagram, Webchat, and More
                </p>
                <p class="text-gray-600  text-md mb-3">
                    Our platform offers a seamless, omnichannel experience that unifies all customer interactions across
                    multiple messaging platforms. With native connections to WhatsApp Business API, Facebook Messenger,
                    Instagram DM, WebChat, AppChat, Email, and SMS, we enable businesses to manage inbound and outbound
                    communications in one place.
                </p>
                <p class="text-gray-600 text-md mb-4">
                    Set up is fast and intuitive, with automatic configuration to get you up and running in minutes. As
                    a proud Meta Technology Partner, we ensure top-tier integration and reliability across channels.
                </p>
                <button
                    class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-8 py-3 rounded-xl font-bold transition-colors duration-300">
                    START FREE TRIAL
                </button>
                <div class="mt-2 space-y-1 flex gap-3">
                    <div class="flex items-center text-gray-600 text-sm">
                        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        <span>Free Forever Plan</span>
                    </div>
                    <div class="flex items-center text-gray-600 text-sm">
                        <svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        <span>All Features Unlocked</span>
                    </div>
                </div>
            </div>
            <div class="md:w-1/2 mt-10 md:mt-0 relative">
                <div class="relative">
                    <div class="relative w-full h-[400px]">
                        <div class="absolute -top-12 right-0 flex space-x-4">
                            <img src="../../@assets/images/header.svg" alt="Header Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div> <!-- New Features Section -->
        <div class="scroll-mt-[60px]" id="solutions">
            <div class="container mx-auto px-6">
                <Service />
            </div>
        </div>
        <div class="scroll-mt-[60px]" id="features">
            <div class="container mx-auto px-6">
                <Features />
            </div>
        </div>
        <div class="scroll-mt-[60px]" id="WhatsApp">
            <div class="container mx-auto px-6">
                <WhatsApp />
            </div>
        </div>
        <div class="scroll-mt-[60px]" id="pricing">
            <div class="container mx-auto px-6">
                <Pricing />
            </div>
        </div>
        <div class="scroll-mt-[60px]" id="testimonial">
            <div class="container mx-auto px-6">
                <Testimonial />
            </div>
        </div>
        <!-- <div class="scroll-mt-[60px] -mb-28" id="faqs">
            <div class="container mx-auto px-6">
                <FAQ />
            </div>
        </div> -->
    </div>
    <div>
        <div>
    <ConversationalBot />
        </div>
    </div>
    <div class="scroll-mt-[60px]" id="">
        <div class="">
            <Footer />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Service from "./Service.vue";
import Features from "./Features.vue";
import WhatsApp from "./Whatsapp.vue";
import Pricing from "./Pricing.vue";
import FAQ from "./FAQ.vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue"
import Customer from "./Customer.vue";
import About from "./About.vue"
import Partner from "./Partner.vue";
import ConversationalBot from "./Conversational.vue";
import Testimonial from "./Testimonials.vue"
const routes = {
    "/": "home",
    "/customer": "customer",
    "/lead": "lead",
    "/relation": "relation",
    "/conversation": "conversation",
    "/api": "api",
    "/campaign": "campaign",
    "/bot": "bot",
    "/inbox": "inbox",
    "/botbuilder": "botbuilder",
    "/market": "market",
    "/cohort": "cohort",
    "/analytics": "analytics",
    "/about": "About",
    "/partner": "Partner",

    "/clickConnect": "click-to-connect",
    "/flows": "flows",
    "/media": "media",
    "/singleProduct": "single-product",
    "/authentication": "authentication"
};

// const featuresMenu = {
//     "/solutions": "Solutions",
//     "/features": "Core Features",
//     "/whatsapp": "WhatsApp Integration",
//     "/pricing": "Pricing Plans",
//     "/automation": "Automation Tools",
//     "/analytics": "Advanced Analytics"
// };

const isScrolled = ref(false);
const mobileMenuOpen = ref(false);

// const navItems = [
//     { id: "solutions", label: "Solutions" },
//     { id: "features", label: "Features" },
//     { id: "pricing", label: "Pricing" },
//     { id: "faqs", label: "FAQs" },

// ];

const navLinks = [
    { type: "route", path: "about", label: "About Us" },
    { type: "route", path: "partner", label: "Partner" },
    { type: "route", path: "privacy", label: "Privacy" }
];

const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
        mobileMenuOpen.value = false;
    }
};

const scrollPadding = ref(false);

const handleScroll = () => {
    const navbarHeight = 60;
    isScrolled.value = window.scrollY > -40;
    scrollPadding.value = window.scrollY > navbarHeight;
};

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>

<!-- <style scoped></style> -->
