<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="">
            <section id="api" class="lg:-mt-20">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-12 items-center">
                        <div class="space-y-6 mb-20">
                            <h3 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight lg:mt-28">
                                Bot Services
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Our advanced BOTs efficiently manage up to 80% of repetitive inquiries, allowing your
                                team to focus on high-value, personalized interactions that drive deeper customer
                                relationships. With our intuitive no-code BOT builder, scripting tools, and seamless
                                Chat GPT integration, you can easily create complex, customized BOT workflows tailored
                                to your unique business needs. Whether automating simple tasks or building sophisticated
                                conversational journeys, our platform makes it easy to design highly effective
                                solutions.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Personalization is key—create custom BOT flows for each channel or user profile to
                                ensure tailored experiences that resonate with every customer. Now with native WhatsApp
                                flows, your BOTs can deliver richer, more collaborative engagements on the world’s most
                                popular messaging platform, improving response times and boosting customer satisfaction.
                                Our customizable, segmented flows support lead management and customer engagement,
                                providing a truly personalized experience for every interaction.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Maintain high-quality, consistent communication with the built-in Chat GPT paraphraser,
                                ensuring every message is clear, engaging, and on-brand. In addition, our expert BOT
                                development services are available to help you design high-performance BOTs that elevate
                                your customer service and enhance satisfaction at every touchpoint.
                            </p>
                        </div>
                        <div class="relative">
                            <img
                                src="../../@assets/images/bot.svg"
                                alt="Customer Management Illustration"
                                class="w-1/2 h-auto mx-auto"
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
