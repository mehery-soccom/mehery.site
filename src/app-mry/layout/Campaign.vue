<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="py-16 px-4 sm:px-6 lg:px-8">
            <section id="customer" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="space-y-8 max-w-2xl">
                            <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Campaign Management
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Empower your Marketing and Business Development teams to attract new customers and
                                strengthen relationships with ease.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Effortlessly create, personalize, and launch WhatsApp campaigns in just a few clicks.
                                Design and deploy campaigns using our intuitive platform, complete with a custom image
                                builder for branded templates featuring your logo and tailored messaging. With advanced
                                filters and audience segmentation, you can precisely target customer groups for maximum
                                impact. Scheduling tools allow you to reach audiences at peak times, even outside office
                                hours.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Overcome WhatsApp’s template limitations with our robust, high-throughput system. Plus,
                                seamlessly integrate with Moengage, Navitair, and more for streamlined outbound
                                messaging on WhatsApp.
                            </p>
                        </div>
                        <div class="relative">
                            <img
                                src="../../@assets/images/image 4.svg"
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

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
</script>
