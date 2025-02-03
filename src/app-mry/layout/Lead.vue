<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="py-16 px-4 sm:px-6 lg:px-8">
            <section id="customer" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="space-y-8 max-w-2xl">
                            <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Lead Management
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Easily capture and nurture leads across social media, transforming initial interest into
                                loyal customers. Leverage platforms like Instagram and Facebook to attract new
                                prospects, seamlessly tagging and categorizing interested users as leads. Track every
                                stage of the lead journey—from awareness and engagement to conversion—with targeted
                                campaigns that keep potential customers engaged at each step.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Our lead management tool is designed specifically for messenger-based interactions,
                                enabling real-time communication with prospects. Tailored for industries of all kinds,
                                our platform allows you to set custom lead criteria and define segmentation parameters.
                            </p>
                            <p class="text-gray-600 text-lg">
                                With these features, you can create dynamic cohorts that organize your leads into
                                actionable groups, ensuring each lead receives the right message at the right time. Once
                                your leads are segmented, easily integrate them into campaigns across WhatsApp, email,
                                or SMS, nurturing each group with personalized, high-touch engagement. This holistic
                                approach to lead management keeps your sales funnel full and active, helping your teams
                                maximize conversion rates and boost revenue potential.
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
