<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="py-16 mr-16 sm:px-6 lg:px-8">
            <section id="" class="max-w-7xl mt-24 mx-auto">
                <div class="container sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="relative -mt-12">
                            <img src="../../@assets/images/feature4.png" />
                        </div>
                        <div class="space-y-6">
                            <h3
                                class="text-6xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight lg:-mt-20"
                            >
                                Customer Cohorts
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Build dynamic customer cohorts with our advanced filtering system, and leverage these cohorts for lead management and customer acquisition campaigns.
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
    "Effortless Cohort Creation: Easily create cohorts from the Customer Management module.",
    "Reusable Cohorts: Use cohorts on demand in outbound campaigns for lead management, customer engagement, or marketing.",
    
]);
</script>
