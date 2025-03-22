<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main class="py-6 px-4 sm:px-6 lg:px-8">
            <section id="analytics" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <!-- Left: Text, Right: Image -->
                    <div class="grid lg:grid-cols-2 gap-10 items-center mb-3">
                        <div class="space-y-6 max-w-2xl">
                            <h3 class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Comprehensive Analytics for Smarter Decisions 
                            </h3>
                            <div class="space-y-4">
                                <p class="text-gray-600 text-base sm:text-lg">
                                    Gain deep insights into your customer engagement system with powerful, real-time analytics designed for better performance tracking and optimization.
                                </p>
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Conversational Analytics </h4>
                                            <p class="text-gray-600 text-sm">Get a bird’s-eye view of inbound & outbound communication, agent performance, channel efficiency, and response analytics.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Segmented Channel-Specific Daily Analytics </h4>
                                            <p class="text-gray-600 text-sm">Analyze message flow per channel with hourly and daily breakdowns of inbound & outbound conversations.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Campaign Analytics </h4>
                                            <p class="text-gray-600 text-sm">Track campaign performance, including delivery rates, read rates, and response metrics—view data online or download for deeper analysis.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">BOT Analytics </h4>
                                            <p class="text-gray-600 text-sm">Monitor BOT flow execution, ensuring success criteria are met while improving BOT efficiency & customer interactions.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="relative lg:pl-8">
                            <img
                                src="../../@assets/images/feature51.png"
                                alt="Analytics Illustration"
                                class="w-full h-auto max-w-2xl mx-auto transform transition-transform duration-300"
                            />
                        </div>
                    </div>

                    <!-- Left: Image, Right: Text -->
                    <div class="grid lg:grid-cols-2 gap-10 items-center">
                        <!-- <div class="relative lg:order-1">
                            <img
                                src="../../@assets/images/feature5.png"
                                alt="Analytics Illustration"
                                class="w-full h-auto max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
                            />
                        </div> -->
                        <div class="space-y-6 max-w-2xl lg:order-2">
                            <div class="space-y-4">
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Turn Data into Actionable Insights </h4>
                                            <p class="text-gray-600 text-sm">Optimize customer engagement with data-driven decisions and real-time performance tracking.</p>
                                        </div>
                                    </li>
                                </ul>
                                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                                    Transform your customer engagement with smart, scalable, and easy-to-use analytics! 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
</script>