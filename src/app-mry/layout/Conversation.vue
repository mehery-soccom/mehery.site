<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="">
            <section id="customer" class="lg:-mt-2">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6">
                            <h3 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight lg:-mt-10">
                                Conversation Management
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Our advanced conversation management system streamlines team collaboration with a shared
                                inbox, driving productivity and efficiency. Accessible via both mobile and web apps, our
                                platform empowers your team to manage conversations anytime, anywhere.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Key features like automated routing, rule-based assignments, real-time filtering, and
                                customizable alerts ensure your agents stay focused and responsive, minimizing manual
                                tasks while maximizing performance. We go beyond traditional customer service tools with
                                cross-channel customer profiling, session tagging, follow-up scheduling, and appointment
                                booking—all working in harmony to deliver a proactive, personalized experience for every
                                customer interaction.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Security is a top priority, with robust measures like contact detail masking to protect
                                sensitive information and prevent misuse. With powerful conversation analytics and
                                advanced segmentation capabilities, our platform equips your team with the insights
                                needed for smarter, more efficient customer engagement. With our Relationship Management
                                module, you’ll maximize your revenue potential by fostering deep connections that drive
                                long-term loyalty and business growth.
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

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
</script>
