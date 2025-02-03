<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="py-16 mr-16 sm:px-6 lg:px-8">
            <section id="" class="max-w-7xl mt-24 mx-auto">
                <div class="container sm:px-6 lg:px-8">
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="space-y-6">
                            <h3
                                class="text-6xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight lg:-mt-20"
                            >
                                Team Inbox
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Empower your team to engage with customers seamlessly through a centralized inbox that aggregates all conversations across multiple channels. Our inbox is highly optimized to manage hundreds of conversations effectively. Key features include:
                            </p>
                            <ul class="space-y-3 mb-10 text-gray-600">
                                <li v-for="(point, index) in bulletPoints" :key="index" class="flex items-start">
                                    <span
                                        class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                                    ></span>
                                    <span class="text-lg">{{ point }}</span>
                                </li>
                            </ul>
                        </div>
                        <div class="relative -mt-32">
                            <img src="../../@assets/images/feature1.png" />
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

const bulletPoints = ref([
    "Centralized Inbox for All Channels: Communicate with customers on WhatsApp, Messenger, Instagram DM, Telegram, Email (Outlook and corporate Gmail accounts can be configured), Web Chat, and App Chat.",
    "Predefined Message Templates: Start new conversations or continue existing ones using predefined messages according to channel-specific rules.",
    "Prioritization: Enable team members to prioritize conversations based on time unattended or unanswered, minimizing customer wait times.",
    "Internal Notes: Write brief notes for teammates when transferring a conversation, providing quick insights. These notes are not visible to customers.",
    "Session Tags: Create categories and tags to define critical conversation elements, allowing users and admins to review or create cohorts for marketing analysis.",
    "Follow-Up Reminders: Set up follow-up reminders with notes to ensure timely continuation of customer conversations",
    "Conversation History: Access a complete audit trail of all past conversations with each customer.",
    "Customer Profiling: Integrate with the Customer Management module to view all relevant customer data points."
]);
</script>
