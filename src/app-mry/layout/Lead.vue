<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main class="py-6 px-4 sm:px-6 lg:px-8">
            <section id="customer" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-2 gap-10 items-center">
                        <div class="space-y-6 max-w-2xl">
                            <h3
                                class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                            >
                                Lead Management Made Simple
                            </h3>
                            <div class="space-y-4">
                                <p class="text-gray-600 text-base sm:text-md">
                                    Capture, categorize, and convert leads effortlessly across social media and
                                    messaging platforms. With our intelligent lead management system, transform casual
                                    interactions into long-term customer relationships.
                                </p>
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Seamless Lead Capture</h4>
                                            <p class="text-gray-600 text-sm">
                                                Engage with prospects on Instagram, Facebook, and WhatsApp,
                                                automatically tagging and organizing interested users into leads.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Smart Lead Tracking</h4>
                                            <p class="text-gray-600 text-sm">
                                                Monitor every stage of the journey—from awareness to conversion—with
                                                targeted campaigns that nurture potential customers at the right time.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Real-Time Engagement</h4>
                                            <p class="text-gray-600 text-sm">
                                                Designed for messenger-based interactions, our platform enables instant,
                                                personalized communication, keeping your leads engaged and moving
                                                through the sales funnel.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">
                                                Custom Segmentation & Automation
                                            </h4>
                                            <p class="text-gray-600 text-sm">
                                                Define your own lead criteria, create dynamic cohorts, and integrate
                                                them into personalized campaigns across WhatsApp, email, and SMS.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                                    Maximize conversions with an organized, data-driven approach to lead management.
                                    Keep your pipeline active and accelerate business growth with ease!
                                </p>
                            </div>
                        </div>
                        <div class="relative -">
                            <img
                                src="../../@assets/images/image1.png"
                                alt="Lead Management Illustration"
                                class="w-full h-auto max-w-2xl transform transition-transform duration-300 ml-28 scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "../components/common/Navbar.vue";
import Footer from "../components/common/Footer.vue";
onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
</script>
