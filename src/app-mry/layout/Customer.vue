<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="py-16 px-4 sm:px-6 lg:px-8">
            <section id="customer" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="space-y-8 max-w-2xl">
                            <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Customer Management
                            </h3>
                            <div class="space-y-6">
                                <p class="text-gray-600 text-base sm:text-lg lg:text-xl">
                                    Effortlessly manage customer relationships across social media email, and SMS— all in
                                    one place. Easily segment customers into dynamic groups based on custom criteria to
                                    enable highly personalized, targeted campaigns. Gain a comprehensive 360° view of each
                                    customer by integrating interactions across multiple channels.
                                </p>
                                <p class="text-gray-600 text-base sm:text-lg">
                                    Our Customer Management feature empowers you to merge communication with detailed
                                    customer data, helping you develop impactful, organization-wide engagement strategies.
                                    Seamlessly import customer data from your transactional or eCommerce systems, equipping
                                    your agents with essential information to boost productivity.
                                </p>
                                <p class="text-gray-600 text-base sm:text-lg">
                                    Assign Relationship Managers to ensure personalized interactions, all centrally captured
                                    for compliance and oversight. Build custom cohorts and schedule structured campaigns to
                                    maintain consistent, meaningful connections with your customers.
                                </p>
                            </div>
                        </div>
                        <div class="relative lg:pl-8">
                            <img
                                src="../../@assets/images/image 2.svg"
                                alt="Customer Management Illustration"
                                class="w-full h-auto max-w-2xl mx-auto"
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
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>