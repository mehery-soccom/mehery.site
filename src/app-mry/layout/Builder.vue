<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="py-16 mr-16 scale-90 sm:px-6 lg:px-8">
            <section id="" class="max-w-7xl mt-24 mx-auto">
                <div class="container sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="relative -mt-14">
                            <img src="../../@assets/images/feature2.png" />
                        </div>
                        <div class="space-y-8 max-w-2xl">
                            <h3
                                class="text-6xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight lg:-mt-20"
                            >
                                Bot Builder
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Our BOT Builder empowers marketing teams to create and deploy bots independently,
                                without needing a developer. It’s a DIY toolkit designed to give you a competitive edge.
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
    "Intuitive BOT Flow Builder: Create bots using an extremely user-friendly, UI-based BOT flow builder.",
    "Quick Deployment: Build and deploy bots within minutes to drive seamless customer engagement.",
    "Event-Driven and Timed Responses: Set bots to respond to specific events and include time-delayed responses as needed.",
    "Infrastructure for Native App Integration: Use our infrastructure to build native apps that connect to downstream applications via webhooks, enabling two-way communication and seamless BOT integration.",
    "Template Creation and Flow Stitching: Create templates and combine them on an easy-to-use UI flow builder, providing a bird's-eye view of the customer journey.",
    "Versatile BOT Triggers: Trigger bots based on external events, such as inbound conversations, responses to outbound campaigns, events in your transactional system, or CRM activities."
]);
</script>
