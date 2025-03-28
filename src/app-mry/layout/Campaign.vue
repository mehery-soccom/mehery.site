<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main class="py-6 px-4 sm:px-6 lg:px-8">
            <section id="customer" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-2 gap-10 items-center">
                        <div class="space-y-6 max-w-2xl">
                            <h3 class="text-left text-3xl sm:text-3xl lg:text-3xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Smart & Impactful Campaign Management 
                            </h3>
                            <div class="space-y-4">
                                <p class="text-gray-600 text-base sm:text-md">
                                    Empower your Marketing and Business Development teams to attract new customers and strengthen relationships effortlessly.
                                </p>
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Effortless Campaign Creation </h4>
                                            <p class="text-gray-600 text-md">Launch personalized WhatsApp campaigns in just a few clicks using our intuitive platform.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Branded Templates with Custom Image Builder </h4>
                                            <p class="text-gray-600 text-md">Design professional campaigns featuring your logo and tailored messaging for maximum brand impact.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Advanced Targeting & Segmentation </h4>
                                            <p class="text-gray-600 text-md">Use filters and audience segmentation to precisely target customer groups for higher engagement.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Smart Scheduling for Maximum Reach </h4>
                                            <p class="text-gray-600 text-md">Schedule campaigns at peak times, ensuring visibility even outside office hours.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Real-Time Analytics & CTA Tracking </h4>
                                            <p class="text-gray-600 text-md">Monitor campaign performance with detailed reports and track customer interest effectively.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="">○</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">High-Throughput Messaging & Seamless Integrations </h4>
                                            <p class="text-gray-600 text-md">Overcome WhatsApp’s template limitations with our scalable system and integrate with Moengage, Navitair, and more for streamlined outbound messaging.</p>
                                        </div>
                                    </li>
                                </ul>
                                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                                    Maximize your marketing impact with efficient, data-driven campaign management! 
                                </p>
                            </div>
                        </div>
                        <div class="relative pl-30">
                            <img
                                src="../../@assets/images/camp1.png"
                                alt="Campaign Management Illustration"
                                class="max-w-xl  mx-auto duration-300"
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

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
</script>