<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main class="py-6 px-4 sm:px-6 lg:px-8">
            <section id="customer-cohorts" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <!-- Left: Image, Right: Text -->
                    <div class="grid lg:grid-cols-2 gap-10 items-center">
                        <div class="relative">
                            <img
                                src="../../@assets/images/custom1.png"
                                alt="Customer Cohorts Illustration"
                                class="w-full h-auto max-w-2xl mx-auto transform transition-transform duration-300"
                            />
                        </div>
                        <div class="space-y-6 max-w-2xl">
                            <h3
                                class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                            >
                                Smart & Dynamic Customer Cohorts
                            </h3>
                            <div class="space-y-4">
                                <p class="text-gray-600 text-base sm:text-md">
                                    Unlock powerful segmentation with advanced filtering to enhance lead management and
                                    customer acquisition campaigns.
                                </p>
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">
                                                Effortless Cohort Creation
                                            </h4>
                                            <p class="text-gray-600 text-md">
                                                Seamlessly build customer cohorts from the Customer Management module
                                                for targeted engagement.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Reusable Cohorts</h4>
                                            <p class="text-gray-600 text-md">
                                                Utilize predefined cohorts anytime in outbound campaigns for lead
                                                nurturing, customer engagement, and marketing.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                                    Enhance Conversions & Drive Business Growth with Precision Targeting!
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
