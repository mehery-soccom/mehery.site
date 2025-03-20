<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main class="py-6 px-4 sm:px-6 lg:px-8">
            <section id="team-inbox" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <!-- Left: Text, Right: Image -->
                    <div class="grid lg:grid-cols-2 gap-10 items-center mb-16">
                        <div class="space-y-6 max-w-2xl">
                            <h3 class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Unified Team Inbox for Seamless Customer Engagement 📥✨
                            </h3>
                            <div class="space-y-4">
                                <p class="text-gray-600 text-base sm:text-lg">
                                    Enhance collaboration and efficiency with a centralized inbox that consolidates conversations across multiple channels, enabling your team to manage interactions effortlessly.
                                </p>
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600">📌</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Centralized Inbox for All Channels 🌐</h4>
                                            <p class="text-gray-600 text-sm">Engage customers across WhatsApp, Messenger, Instagram DM, Telegram, Email (Outlook & Gmail), Web Chat, and App Chat—all in one place.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600">📝</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Predefined Message Templates 💬</h4>
                                            <p class="text-gray-600 text-sm">Quickly start or continue conversations using channel-specific predefined message templates for faster responses.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600">🎯</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Smart Prioritization ⏳</h4>
                                            <p class="text-gray-600 text-sm">Prioritize conversations based on time unattended or unanswered, reducing wait times and improving customer satisfaction.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600">📑</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Internal Notes for Seamless Handoffs 🔄</h4>
                                            <p class="text-gray-600 text-sm">Collaborate better by adding internal notes when transferring conversations—notes are visible only to teammates, ensuring smooth transitions.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="relative lg:pl-8">
                            <img    
                                src="../../@assets/images/image11.png"
                                alt="Team Inbox Illustration"
                                class="w-full h-auto max-w-2xl mx-auto  -300"
                            />
                        </div>
                    </div>

                    <!-- Left: Image, Right: Text -->
                    <div class="grid lg:grid-cols-2 gap-10 items-center">
                        <div class="relative lg:order-1">
                            <img
                                src="../../@assets/images/feature1.png"
                                alt="Team Inbox Illustration"
                                class="w-full h-auto max-w-xl mx-auto transform  transition-transform duration-300"
                            />
                        </div>
                        <div class="space-y-6 max-w-2xl lg:order-2">
                            <div class="space-y-4">
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600">🏷️</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Session Tags & Categorization 📊</h4>
                                            <p class="text-gray-600 text-sm">Create custom tags to categorize conversations, helping admins and users track interactions and analyze customer trends.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600">⏰</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Follow-Up Reminders 🔔</h4>
                                            <p class="text-gray-600 text-sm">Set reminders with contextual notes to ensure timely and proactive customer follow-ups.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600">📖</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Complete Conversation History 📜</h4>
                                            <p class="text-gray-600 text-sm">Access a detailed audit trail of past interactions for a 360° customer view.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600">👤</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Integrated Customer Profiling 🔍</h4>
                                            <p class="text-gray-600 text-sm">Sync with the Customer Management module to view key customer data for personalized engagement.</p>
                                        </div>
                                    </li>
                                </ul>
                                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                                    Stay organized, respond faster, and deliver exceptional customer service with our intelligent Team Inbox! 🚀
                                </p>
                            </div>
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