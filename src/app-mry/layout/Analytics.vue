<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="mb-10">
            <section id="" class="lg: mt-24">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        
                        <div class="space-y-6">
                            <h3
                                class="text-6xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight lg:-mt-20"
                            >
                                Analytics
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Analytics is a crucial component of any customer engagement system. Our analytics cover various segments of the platform based on utility and applicability.
                            </p>
                            <ul class="space-y-3 mb-10 text-gray-600">
                                <li v-for="(point, index) in bulletPoints" :key="index" class="flex items-start">
                                    <span
                                        class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                                    ></span>
                                    <span class="text-lg">{{ point }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="relative -mt-32">
                            <img src="../../@assets/images/feature5.png" />
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
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

const bulletPoints = ref([
    "Conversational Analytics: Get a bird’s-eye view of inbound and outbound communication, with insights on agent, channel, and team-specific performance, as well as response and closure analytics.",
    "Segmented Channel-Specific Daily Analytics: Drill down into the number of inbound and outbound messages and conversations handled by each channel, broken down by hour and day.",
    "Campaign Analytics: Monitor campaign delivery, read rates, and response rates, along with user-specific responses. View analytics online or download data for further analysis.",
    "BOT Analytics: Track BOT flow execution to determine if success criteria are met, providing visibility into BOT performance and customer interactions.",
]);
</script>
