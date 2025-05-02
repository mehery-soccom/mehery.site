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
                                Smart Customer Management
                            </h3>
                            <div class="space-y-4">
                                <p class="text-gray-600 text-base sm:text-lg">
                                    Streamline and strengthen customer relationships across social media and email, all
                                    from a single, unified platform.
                                </p>
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"> </span>
                                        <span>○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">360° Customer View</h4>
                                            <p class="text-gray-600 text-md">
                                                Integrate interactions across multiple channels to get a complete
                                                picture of each customer, ensuring personalized and effective
                                                engagement.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600"></span>
                                        <span>○</span>

                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">
                                                Intelligent Segmentation
                                            </h4>
                                            <p class="text-gray-600 text-md">
                                                Group customers dynamically based on custom criteria, enabling highly
                                                targeted campaigns that resonate with their needs.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <span>○</span>

                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">
                                                Seamless Data Integration
                                            </h4>
                                            <p class="text-gray-600 text-md">
                                                Effortlessly import customer data from your eCommerce or transactional
                                                systems, equipping your team with the insights they need to boost
                                                productivity.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600"></span>
                                        <span>○</span>

                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">
                                                Dedicated Relationship Management
                                            </h4>
                                            <p class="text-gray-600 text-md">
                                                Assign Relationship Managers to nurture personalized connections, with
                                                every interaction centrally recorded for compliance and oversight.
                                            </p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <span>○</span>

                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">
                                                Automated Campaigns & Outreach
                                            </h4>
                                            <p class="text-gray-600 text-md">
                                                Build custom cohorts and schedule structured campaigns to maintain
                                                consistent, high-touch engagement with your customers.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                                    Deliver exceptional customer experiences with an intelligent, data-driven approach
                                    to management and engagement.
                                </p>
                            </div>
                        </div>
                        <div class="relative lg:p-16">
                            <img
                                src="../../@assets/images/image3.png"
                                alt="Customer Management Illustration"
                                class="h-xl max-w-xl mx-auto duration-300"
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
</script>
