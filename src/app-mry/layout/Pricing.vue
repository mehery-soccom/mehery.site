<template>
    <div class="max-w-7xl mx-auto py-8">
        <!-- Header Section -->
        <div class="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <h2 class="text-3xl font-bold">
                Affordable, Transparent, and Flexible
                <div class="text-[#00AEEF]">Pricing Plans for Every Stage of Growth</div>
            </h2>

            <div class="flex gap-4">


                <div class="flex items-center gap-2">
                    <!-- <span class="text-sm font-medium">Features:</span> -->
                    <button @click="toggleView"
                        class="px-4 py-2 rounded-md bg-[#00AEEF] hover:bg-[#00afefd2] text-white transition-colors">
                        {{ showFeatures ? "Show Pricing" : "Show Features" }}
                    </button>
                </div>

                <div class="flex items-center gap-2">
                    <!-- <span class="text-sm font-medium">Billing Cycle:</span> -->
                    <button @click="toggleBillingCycle"
                        class="px-4 py-2 rounded-md transition-colors bg-[#00AEEF] hover:bg-[#00afefd2] text-white">
                        {{ billingCycle }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Pricing Cards -->
        <div v-if="!showFeatures" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 text-sm">
            <div v-for="(plan, planIndex) in plans" :key="plan.name"
                class="border p-4 rounded-lg shadow-lg flex flex-col hover:shadow-xl transition-shadow ">
                <!-- Plan Header -->
                <div class="mb-6">
                    <h3 class="text-xl font-bold mb-2 text-center">{{ plan.name }}</h3>
                    <div class="text-2xl font-bold mb-3 text-center">
                        {{
                            showUSD
                                ? plan.fixedFees[billingCycle.toLowerCase()].usd
                                : plan.fixedFees[billingCycle.toLowerCase()].inr
                        }}
                        <!-- <span class="text-xs font-normal text-gray-500"> /{{ billingCycle.toLowerCase() }} </span> -->
                    </div>
                    <button
                        class="w-full py-2 rounded-md bg-[#00AEEF] hover:bg-[#00afefca] text-white transition-colors text-center">
                        {{ plan.buttonText }}
                    </button>
                </div>

                <!-- Plan Features -->
                <div class="space-y-4 flex-1">
                    <!-- Fixed Fees -->
                    <!-- <div>
            <h4 class="font-semibold mb-2 border-b pb-1">Fixed Fees</h4>
            <ul>
              <li class="flex justify-between"><span>Monthly</span><span>{{ plan.fixedFees.monthly }}</span></li>
              <li class="flex justify-between"><span>Quarterly</span><span>{{ plan.fixedFees.quarterly }}</span></li>
              <li class="flex justify-between"><span>Annual</span><span>{{ plan.fixedFees.annual }}</span></li>
            </ul>
          </div> -->

                    <!-- Mehery Fees - Per Conversation Fees -->
                    <div>
                        <h4 class="font-semibold mb-2 border-b pb-1">Per Conversation Fees</h4>
                        <ul>
                            <li v-for="(value, key) in plan['Mehery Fees – Per conversation Fees']" :key="key"
                                class="flex justify-between">
                                <span>{{ key }}</span>
                                <span :class="{ 'text-gray-400': value === 'X' }">{{
                                    value === "X" ? "✗" : showUSD ? value.usd : value.inr
                                }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Deposits -->
                    <div v-if="plan.depositFees.minimumDeposit !== 'N/A'">
                        <h4 class="font-semibold mb-2 border-b pb-1">Deposit Fees</h4>
                        <ul>
                            <li class="flex justify-between">
                                <span>Minimum Deposit</span>
                                <span>{{
                                    showUSD ? plan.depositFees.minimumDeposit.usd : plan.depositFees.minimumDeposit.inr
                                }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Number of Users -->
                    <div class="mb-2 ">
                        <h4 class="font-semibold mb-2 border-b pb-1">Users</h4>
                        <ul>
                            <li class="flex justify-between">
                                <span>Admin/Agent</span><span>{{ plan.users.adminAgent }}</span>
                            </li>

                            <li v-if="plan.users.additionalUser.inr && plan.users.additionalUser.inr !== 'X'"
                                class="flex justify-between">
                                <span>Additional User</span>
                                <span> {{ showUSD ? plan.users.additionalUser.usd : plan.users.additionalUser.inr
                                }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Free Utilities -->
                    <div v-if="plan.name === 'Free Forever'" class="mb-2">
                        <h4 class="font-semibold mb-2 border-b pb-1">Free Utilities</h4>
                        <ul>
                            <li class="flex justify-between">
                                <span>Free DAU</span><span>{{ plan.freeUtilities.monthlyDAU }}</span>
                            </li>
                            <li class="flex justify-between">
                                <span>Free Images</span><span>{{ plan.freeUtilities.freeImages }}</span>
                            </li>
                            <li class="flex justify-between">
                                <span>Free BOT conversations</span><span>{{ plan.freeUtilities.freeBotConversations
                                }}</span>
                            </li>
                        </ul>
                    </div>
                    <!--set up fees-->


                </div>
            </div>
        </div>
        <!-- Feature Comparison -->
        <div v-else class="bg-white rounded-lg shadow-lg p-4">
            <!-- Reduced padding from p-8 to p-4 -->
            <div class="overflow-x-auto">
                <table class="w-full border border-gray-300">
                    <thead class="bg-gray-100">
                        <tr class="border-b border-gray-300">
                            <th class="text-left py-2 px-2 w-1/3 border-r border-gray-300">Feature</th>
                            <!-- Reduced padding from py-4 px-4 to py-2 px-2 -->
                            <th v-for="plan in plans" :key="plan.name" class=" py-2 px-2 border-r border-gray-300 ">
                                <!-- Reduced padding -->
                                <div class=" text-center !important text-md font-bold">{{ plan.name }}</div>
                                <!-- Reduced font size from text-lg to text-md -->
                                <div class="text-center text-xs text-gray-500">
                                    <!-- Reduced font size from text-sm to text-xs -->
                                    {{
                                        showUSD
                                            ? plan.fixedFees[billingCycle.toLowerCase()].usd
                                            : plan.fixedFees[billingCycle.toLowerCase()].inr
                                    }}
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-300">
                        <template v-for="(section, sectionKey) in features" :key="sectionKey">
                            <!-- Section Header -->
                            <tr class="bg-gray-50 border-b border-gray-300">
                                <td colspan="6" class="py-2 px-2 font-semibold text-md border-gray-300">
                                    <!-- Reduced padding and font size -->
                                    {{ formatSectionTitle(sectionKey) }}
                                </td>
                            </tr>

                            <!-- Section Features -->
                            <tr v-for="feature in section" :key="feature.name"
                                class="border-b border-gray-300 hover:bg-gray-50 transition-colors">
                                <td class="py-2 px-2 border-r border-gray-300">{{ feature.name }}</td>
                                <!-- Reduced padding -->
                                <td v-for="(available, idx) in feature.availability" :key="idx"
                                    class="text-center py-2 px-2 border-r border-gray-300">
                                    <!-- Reduced padding -->
                                    <check-icon v-if="available === 'Y'" size="16"
                                        class="inline-block text-green-500" />
                                    <!-- Reduced icon size from 20 to 16 -->
                                    <x-icon v-else-if="available === 'X'" size="16" class="inline-block text-red-500" />
                                    <!-- Reduced icon size -->
                                    <span v-else class="text-xs">{{ available }}</span>
                                    <!-- Reduced font size -->
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="flex align-center justify-center mt-4 text-xl gap-4">
            <div>
                <a href="https://developers.facebook.com/docs/whatsapp/pricing/" target="_blank"
                    class="text-blue-500 ">Whatsapp
                    Conversation Fees</a>
            </div>
            <div>
                <p class="text-blue-500 ">•</p>
            </div>
            <div>
                <a href="https://openai.com/api/pricing/" target="_blank" class="text-blue-500 ">Chat GPT
                    Charges</a><span>, GPT
                    4o Mini is required for Mehery Services.</span>
            </div>
        </div>

    </div>
</template>

<script setup>
import axios from "axios";

import { ref, computed, onMounted } from "vue";
import { CheckIcon, XIcon } from "vue-feather-icons";

const showUSD = ref(false);
const showFeatures = ref(false);
const billingCycle = ref("Monthly");

// const toggleCurrency = () => {
//     showUSD.value = !showUSD.value;
// };

const toggleView = () => {
    showFeatures.value = !showFeatures.value;
};

const toggleBillingCycle = () => {
    if (billingCycle.value === "Monthly") {
        billingCycle.value = "Quarterly";
    } else if (billingCycle.value === "Quarterly") {
        billingCycle.value = "Annual";
    } else {
        billingCycle.value = "Monthly";
    }
};

const currencySymbol = computed(() => {
    return showUSD.value ? "$" : "₹";
});

const formatSectionTitle = key => {
    return key.split(/(?=[A-Z])/).join(" ");
};



onMounted(async () => {
    try {
        const response = await axios.get('https://ipinfo.io/json?token=1bfc162a759fb1');
        if (response.data.country === "IN") {
            showUSD.value = false; // Show INR prices for Indian users
        } else {
            showUSD.value = true; // Show USD prices for non-Indian users
        }
    } catch (error) {
        console.error("Error fetching IP data:", error);
        showUSD.value = true; // Default to USD prices if there's an error
    }
});
// Pricing Data
const plans = ref([
    {
        name: "FREE FOREVER",
        buttonText: "Get Started",
        fixedFees: {
            monthly: { usd: "Free", inr: "Free" },
            quarterly: { usd: "Free", inr: "Free" },
            annual: { usd: "Free", inr: "Free" }
        },
        "Mehery Fees – Per conversation Fees": {
            DAU: { inr: "Up to 10", usd: "Up to 10" },
            "Image Creation": { inr: "Up to 10", usd: "Up to 10" },
            "CHAT GPT ": { inr: "Up to 10", usd: "Up to 10" }
        },
        users: { adminAgent: "1", additionalUser: { inr: "X", usd: "X" } },
        depositFees: { minimumDeposit: "N/A" },
        setupFees: {
            facebookBusinessSetup: "N/A",
            openAISetupTraining: "N/A",
            openAIBotDevelopment: "N/A"
        },
        freeUtilities: {
            monthlyDAU: "100",
            freeImages: "50",
            freeBotConversations: "100"
        }
    },
    {
        name: "LITE",
        buttonText: "Get Started",
        fixedFees: {
            monthly: { usd: "NA", inr: "NA" },
            quarterly: { usd: "NA", inr: "NA" },
            annual: { usd: "NA", inr: "NA" }
        },
        "Mehery Fees – Per conversation Fees": {
            DAU: { inr: "1.25", usd: "0.050" },
            "Image Creation Fee": { inr: "0.25", usd: "0.012" },
            "CHAT GPT": { inr: "0.50", usd: "0.012" }
        },
        users: {
            adminAgent: "1",
            additionalUser: { inr: "500", usd: "9.9" }
        },
        depositFees: { minimumDeposit: { inr: "1000", usd: "25" } },
        setupFees: {
            facebookBusinessSetup: "$50",
            openAISetupTraining: "Price On Request",
            openAIBotDevelopment: "Based upon scope of work"
        }
    },
    {
        name: "ECO",
        buttonText: "Get Started",
        fixedFees: {
            monthly: { usd: "$69", inr: "₹2,499" }, // Updated INR value
            quarterly: { usd: "$189", inr: "₹6,750" }, // Updated INR value
            annual: { usd: "$649", inr: "₹24,000" } // Updated INR value
        },
        "Mehery Fees – Per conversation Fees": {
            DAU: { inr: "0.04", usd: "0.006" },
            "Image Creation Fee": { inr: "0.12", usd: "0.006" },
            // "CHAT GPT": "X"
        },
        users: { adminAgent: "5", additionalUser: { inr: "500", usd: "9.9" } },
        depositFees: { minimumDeposit: { inr: "1000", usd: "25" } },
        setupFees: {
            facebookBusinessSetup: "$50",
            openAISetupTraining: "X",
            openAIBotDevelopment: "Based upon scope of work"
        }
    },
    {
        name: "PRO",
        buttonText: "Get Started",
        fixedFees: {
            monthly: { usd: "$149", inr: "₹3,999" }, // Updated INR value
            quarterly: { usd: "$399", inr: "₹11,000" }, // Updated INR value
            annual: { usd: "$1,399", inr: "₹39,000" } // Updated INR value
        },
        "Mehery Fees – Per conversation Fees": {
            DAU: { inr: "0.03", usd: "0.006" },
            "Image Creation Fee": { inr: "0.12", usd: "0.006" },
            // "CHAT GPT": "X"
        },
        users: { adminAgent: "7", additionalUser: { inr: "600", usd: "19.9" } },
        depositFees: { minimumDeposit: { inr: "1000", usd: "25" } },
        setupFees: {
            facebookBusinessSetup: "$50",
            openAISetupTraining: "X",
            openAIBotDevelopment: "Based upon scope of work"
        }
    },
    {
        name: "ENTERPRISE",
        buttonText: "Contact Sales",
        fixedFees: {
            monthly: { usd: "On Req", inr: "On Req" },
            quarterly: { usd: "On Req", inr: "On Req" },
            annual: { usd: "On Req", inr: "On Req" }
        },
        "Mehery Fees – Per conversation Fees": {
            DAU: { inr: "On Req", usd: "On Req" },
            "Image Creation Fee": { inr: "On Req", usd: "On Req" },
            "CHAT GPT": { inr: "On Req", usd: "On Req" }
        },
        users: { adminAgent: "10", additionalUser: { inr: "On Req", usd: "On Req" } },
        depositFees: { minimumDeposit: { inr: "1000", usd: "25" } },
        setupFees: {
            facebookBusinessSetup: "$50",
            openAISetupTraining: "Price On Request",
            openAIBotDevelopment: "Based upon scope of work"
        }
    }
]);

// Features Data
const features = ref({
    Channels: [
        { name: "WhatsApp", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Webchat", availability: ["X", "X", "Y", "Y", "Y"] },
        { name: "Facebook Messenger", availability: ["X", "X", "X", "Y", "Y"] },
        { name: "Instagram DM", availability: ["X", "X", "Y", "Y", "Y"] },
        { name: "Telegram", availability: ["X", "X", "X", "Y", "Y"] },
        { name: "App Chat", availability: ["X", "X", "X", "X", "Y"] },
        { name: "Email", availability: ["X", "X", "X", "X", "Y"] }
    ],
    SmartConversations: [
        { name: "Team Inbox", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Chat Assignment / Auto routing", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Session Tags", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Number Masking", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "User roles/skills", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Conversation Analytics", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Chat GPT Paraphrase", availability: ["Y", "Y", "X", "Y", "Y"] },
        { name: "Follow-up", availability: ["Y", "Y", "X", "Y", "Y"] },
        { name: "Appointment / Table Booking", availability: ["Y", "Y", "X", "Y", "Y"] }
    ],
    Bots: [
        { name: "Basic chatbots", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Advanced interconnected BOTs", availability: ["Y", "Y", "X", "Y", "Y"] },
        { name: "Auto-reply BOTs", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Outside Working Hours, Weekends and Holidays", availability: ["Y", "Y", "X", "Y", "Y"] }
    ],
    OpenAIChatGPT: [
        { name: "Instructor, Knowledgebase", availability: ["Y", "Y", "X", "X", "Y"] },
        { name: "Agent AI conversational BOT", availability: ["Y", "Y", "X", "X", "Y"] },
        { name: "Custom BOT Scripting with OpenAI", availability: ["Y", "Y", "X", "X", "Y"] }
    ],
    WhatsAppBusinessAPI: [
        { name: "Text, image, video messaging", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Custom Image Templates", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "WhatsApp Flows", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "WhatsApp Carousels", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Authentication", availability: ["Y", "Y", "Y", "Y", "Y"] }
    ],
    MarketingLeadGeneration: [
        { name: "Campaign Management", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Campaign Scheduling", availability: ["Y", "Y", "X", "Y", "Y"] },
        { name: "Campaign Analytics, CTA Tracker", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "Custom Image (and HTML source) Templates", availability: ["Y", "Y", "X", "Y", "Y"] },
        { name: "Click to WhatsApp Ads Insights", availability: ["Y", "Y", "Y", "Y", "Y"] }
    ],
    APIs: [{ name: "APIs for Outbound communication", availability: ["X", "X", "Y", "Y", "Y"] }],
    CustomerManagement: [
        { name: "Customer master", availability: ["Y", "Y", "X", "X", "Y"] },
        { name: "Custom fields", availability: ["Y", "Y", "X", "X", "Y"] },
        { name: "Custom Filters for grouping", availability: ["Y", "Y", "X", "X", "Y"] },
        { name: "Customer Grouping for Campaigns", availability: ["Y", "Y", "X", "X", "Y"] },
        { name: "Relationship Management", availability: ["Y", "Y", "X", "X", "Y"] }
    ],
    AgentMobileApp: [{ name: "IOS and Android", availability: ["X", "X", "Y", "Y", "Y"] }],
    WebhookConnections: [{ name: "Number of Webhook Connections", availability: ["X", "X", "1", "2", "Custom"] }],
    SupportPlans: [
        { name: "Assisted onboarding", availability: ["Y", "Y", "Y", "Y", "Y"] },
        { name: "SLA - Response Times", availability: ["12 hrs", "12 hrs", " 6hrs", "4 hrs", "4 hrs"] },
        {
            name: "WhatsApp and Email support",
            availability: [
                "10 hrs/day x 7 days/week",
                "10 hrs/day x 7 days/week",
                "10 hrs/day x 7 days/week",
                "10 hrs/day x 7 days/week",
                "10 hrs/day x 7 days/week"
            ]
        },
        {
            name: "WhatsApp, Email and Call based support",
            availability: ["X", "X", "X", "included", "included"]
        },
        {
            name: "WhatsApp, Email and Call based support 9h * 6d",
            availability: ["X", "X", "X", "X", "included"]
        },
        {
            name: "Support Hours",
            availability: ["9 am - 7 pm", "9 am - 7 pm", "9 am - 7 pm", "9 am - 7 pm", "9 am - 7 pm"]
        },
        {
            name: "Support Days",
            availability: [
                "Week Days, local Geo",
                "Week Days, local Geo",
                "Week Days, local Geo",
                "Week Days, local Geo",
                "Week Days, local Geo"
            ]
        }
    ]
});
</script>