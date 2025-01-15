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
                                Marketing Campaigns
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Professional marketing campaigns are essential for lead generation, customer acquisition, and ongoing customer engagement. Our campaign management component is highly user-friendly and works seamlessly.
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
                            <img src="../../@assets/images/feature3.png" />
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
    "Cohort Creation: Build customer cohorts from your customer management module using dynamic filters, session tags from conversations, or external data sources.",
    "Flexible Campaign Execution: Run campaigns on demand or schedule them for optimal dates and times to suit your customers.",
    "A/B Testing: Test campaign effectiveness by running A/B campaigns with a small test group before rolling out to a larger audience.",
    "Customer Response Tracking: Monitor customer responses to campaigns and link them to a BOT flow triggered by customer interactions, driving engagement and achieving campaign objectives.",
    "API-Driven Campaigns: Launch campaigns via externally exposed APIs and connect them to a BOT flow that activates in response to customer feedback."
]);
</script>
