<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main class="py-6 px-4 sm:px-6 lg:px-8">
            <section id="customer" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-2 gap-10 items-center">
                        <div class="space-y-6 max-w-2xl">
                            <h3 class="text-left text-3xl sm:text-4xl lg:text-3xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Seamless Conversation Management 
                            </h3>
                            <div class="space-y-4">
                                <p class="text-gray-600 text-base sm:text-lg">
                                    Boost team collaboration and customer engagement with our advanced conversation management system—accessible anytime, anywhere via mobile and web apps.
                                </p>
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Shared Inbox for Team Collaboration </h4>
                                            <p class="text-gray-600 text-sm">Streamline communication with a unified inbox that enhances teamwork and productivity.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Smart Automation & Routing </h4>
                                            <p class="text-gray-600 text-sm">Reduce manual work with automated routing, rule-based assignments, real-time filtering, and customizable alerts to keep agents focused.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Cross-Channel Customer Insights </h4>
                                            <p class="text-gray-600 text-sm">Access customer profiles, session tagging, follow-up scheduling, and appointment booking—all in one place for personalized, proactive engagement.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Enterprise-Grade Security </h4>
                                            <p class="text-gray-600 text-sm">Protect sensitive data with contact detail masking to ensure compliance and prevent misuse.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600"></span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Powerful Analytics & Segmentation </h4>
                                            <p class="text-gray-600 text-sm">Gain deep insights into conversations and customer interactions, allowing for smarter, data-driven engagement.</p>
                                        </div>
                                    </li>
                                </ul>
                                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                                    Elevate your customer experience with a secure, AI-powered conversation management platform that enhances efficiency, responsiveness, and long-term customer loyalty! 
                                </p>
                            </div>
                        </div>
                        <div class="relative lg:pl-8">
                            <img
                                src="../../@assets/images/image7.png"
                                alt="Conversation Management Illustration"
                                class="w-full h-auto max-w-2xl mx-auto transform  transition-transform duration-300"
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