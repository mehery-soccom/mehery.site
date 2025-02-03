<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="py-16 px-4 sm:px-6 lg:px-8">
            <section id="relation" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="space-y-8 max-w-2xl">
                            <h3 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Relationship Management
                            </h3>
                            <div class="space-y-6">
                                <p class="text-gray-600 text-base sm:text-lg lg:text-xl">
                                    Building strong, lasting relationships is essential for successful B2C engagement, and
                                    our Relationship Management module helps you achieve just that. By assigning dedicated
                                    Relationship Managers or Sales Agents to high-value customers, you add a personal touch
                                    that can significantly boost customer loyalty and unlock new revenue opportunities.
                                </p>
                                <p class="text-gray-600 text-base sm:text-lg">
                                    Our Relationship Management module integrates seamlessly with Customer and Lead
                                    Management, providing your team with a complete view of each customer's journey.
                                </p>
                                <p class="text-gray-600 text-base sm:text-lg">
                                    Relationship Managers can access relevant customer data and communication history across
                                    channels, allowing them to deliver personalized, impactful interactions at every
                                    touchpoint. This consolidated approach not only improves the quality of customer
                                    engagement but also enables your team to address individual needs and preferences,
                                    making customers feel valued and understood. In addition, all interactions are captured
                                    centrally, ensuring better monitoring, compliance, and team coordination. This
                                    flexibility empowers you to maintain organized, structured outreach while ensuring every
                                    customer receives tailored support. With our Relationship Management module, you'll
                                    maximize your revenue potential by fostering deep connections that drive long-term
                                    loyalty and business growth.
                                </p>
                            </div>
                        </div>
                        <div class="relative lg:pl-8">
                            <img
                                src="../../@assets/images/image 6.svg"
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

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
</script>