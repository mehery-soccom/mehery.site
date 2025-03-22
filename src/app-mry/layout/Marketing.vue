<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main class="py-6 px-4 sm:px-6 lg:px-8">
            <section id="marketing-campaigns" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <!-- Left: Text, Right: Image -->
                    <div class="grid lg:grid-cols-2 gap-10 items-center mb-16">
                        <div class="space-y-6 max-w-2xl">
                            <h3 class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Powerful & Smart Marketing Campaigns 
                            </h3>
                            <div class="space-y-4">
                                <p class="text-gray-600 text-base sm:text-lg">
                                    Run professional marketing campaigns that drive lead generation, customer acquisition, and engagement—all through an intuitive, seamless platform.
                                </p>
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Cohort Creation </h4>
                                            <p class="text-gray-600 text-sm">Build customer cohorts using dynamic filters, session tags from conversations, or external data sources for precise targeting.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Flexible Campaign Execution </h4>
                                            <p class="text-gray-600 text-sm">Run campaigns on demand or schedule them for the best time to maximize customer engagement.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">A/B Testing for Better Performance </h4>
                                            <p class="text-gray-600 text-sm">Optimize campaigns by testing different variations with a small audience before rolling them out at scale.</p>
                                        </div>
                                    </li>
                                              <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600">   </span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Customer Response Tracking </h4>
                                            <p class="text-gray-600 text-sm">Monitor customer responses in real-time and connect them to BOT flows for automated, goal-driven interactions.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">API-Driven Campaigns </h4>
                                            <p class="text-gray-600 text-sm">Launch campaigns via external APIs and trigger BOT responses based on customer feedback.</p>
                                        </div>
                                    </li>
                                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                                    Drive Engagement, Convert More Leads & Grow Your Business! 
                                </p>
                                </ul>
                            </div>
                        </div>
                        <div class="relative lg:pl-8">
                            <img
                                src="../../@assets/images/camp1.png"
                                alt="Marketing Campaigns Illustration"
                                class="w-full h-auto max-w-2xl mx-auto transform  duration-300"
                            />
                        </div>
                    </div>

                    <!-- Left: Image, Right: Text -->
                    <!-- <div class="grid lg:grid-cols-2 gap-10 items-center">
                        <div class="relative lg:order-1">
                            <img
                                src="../../@assets/images/feature3.png"
                                alt="Marketing Campaigns Illustration"
                                class="w-full h-auto max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div class="space-y-6 max-w-2xl lg:order-2">
                            <div class="space-y-4">
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600">📞</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Customer Response Tracking 📡</h4>
                                            <p class="text-gray-600 text-sm">Monitor customer responses in real-time and connect them to BOT flows for automated, goal-driven interactions.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">API-Driven Campaigns </h4>
                                            <p class="text-gray-600 text-sm">Launch campaigns via external APIs and trigger BOT responses based on customer feedback.</p>
                                        </div>
                                    </li>
                                </ul>
                                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                                    Drive Engagement, Convert More Leads & Grow Your Business! 
                                </p>
                            </div>
                        </div>
                    </div> -->
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
</script>