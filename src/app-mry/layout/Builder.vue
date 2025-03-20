<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main class="py-6 px-4 sm:px-6 lg:px-8">
            <section id="bot-builder" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <!-- Text on the left, Image on the right -->
                    <div class="grid lg:grid-cols-2 gap-10 items-center">
                        <!-- Text Content -->
                        <div class="space-y-6 max-w-2xl">
                            <h3 class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Powerful & Intuitive BOT Builder 🤖✨
                            </h3>
                            <div class="space-y-4">
                                <p class="text-gray-600 text-base sm:text-lg">
                                    Empower your marketing teams to create and deploy AI-driven bots independently—no developer needed! Our DIY BOT Builder gives you a competitive edge with smart automation and seamless integration.
                                </p>
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600">🖥️</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Intuitive BOT Flow Builder 🔄</h4>
                                            <p class="text-gray-600 text-sm">Easily design bots with a user-friendly, UI-based drag-and-drop BOT flow builder—no coding required!</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600">⚡</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Quick Deployment 🚀</h4>
                                            <p class="text-gray-600 text-sm">Build and launch bots in minutes, ensuring instant customer engagement and automation.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600">⏳</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Event-Driven & Timed Responses ⏰</h4>
                                            <p class="text-gray-600 text-sm">Set bots to respond to specific customer actions and time-delayed triggers for better engagement.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600">🔗</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Native App Integration with Webhooks 🔄</h4>
                                            <p class="text-gray-600 text-sm">Leverage our powerful infrastructure to build native apps that enable two-way communication via webhooks.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600">📝</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Template Creation & Flow Stitching 🔍</h4>
                                            <p class="text-gray-600 text-sm">Design custom bot templates and stitch them together on an intuitive UI, ensuring a smooth customer journey.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600">🎯</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Versatile BOT Triggers 🔔</h4>
                                            <p class="text-gray-600 text-sm">Activate bots based on:
                                                <br>✔ Inbound conversations
                                                <br>✔ Outbound campaign responses
                                                <br>✔ Events in transactional systems
                                                <br>✔ CRM activities
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                                    Transform your customer engagement with a smart, scalable, and easy-to-use BOT Builder! �
                                </p>
                            </div>
                        </div>

                        <!-- Image on the right -->
                        <div class="relative lg:pl-24">
                            <img
                                src="../../@assets/images/bot1.png"
                                alt="Bot Builder Illustration"
                                class="w-full h-auto max-w-2xl mx-auto transform  scale-125 transition-transform duration-300"
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