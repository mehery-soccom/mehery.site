<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="">
            <section id="customer" class="lg:-mt-16">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6">
                            <h3
                                class="text-6xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight lg:-mt-20"
                            >
                                Customer Management
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Effortlessly manage customer relationships across social media email, and SMS— all in
                                one place. Easily segment customers into dynamic groups based on custom criteria to
                                enable highly personalized, targeted campaigns. Gain a comprehensive 360° view of each
                                customer by integrating interactions across multiple channels.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Our Customer Management feature empowers you to merge communication with detailed
                                customer data, helping you develop impactful, organization-wide engagement strategies.
                                Seamlessly import customer data from your transactional or eCommerce systems, equipping
                                your agents with essential information to boost productivity.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Assign Relationship Managers to ensure personalized interactions, all centrally captured
                                for compliance and oversight. Build custom cohorts and schedule structured campaigns to
                                maintain consistent, meaningful connections with your customers.
                            </p>
                        </div>
                        <div class="relative">
                            <img
                                src="../../@assets/images/image 2.svg"
                                alt="Customer Management Illustration"
                                class="w-full h-auto"
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
