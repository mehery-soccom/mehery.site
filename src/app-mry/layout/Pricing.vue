<template>
    <div v-if="!loading" class="max-w-7xl mx-auto py-8">
        <!-- Header Section -->
        <div class="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
            <h2 class="text-3xl font-bold">
                Affordable, Transparent, and Flexible
                <div class="text-[#00AEEF]">Pricing Plans for Every Stage of Growth</div>
            </h2>

            <div class="flex gap-4">
                <div class="flex items-center gap-4 mr-2">
                    <button
                        @click="toggleView"
                        class="px-6 py-2 rounded-md bg-[#00AEEF] hover:bg-[#00afefd2] text-white transition-colors font-bold"
                    >
                        {{ showFeatures ? "Pricing" : "Features" }}
                    </button>
                </div>

                <div class="flex items-center gap-2">
                    <button
                        @click="toggleBillingCycle"
                        class="px-4 py-2 rounded-md transition-colors bg-[#00AEEF] hover:bg-[#00afefd2] text-white font-bold"
                    >
                        {{ billingCycle }}
                    </button>
                </div>
            </div>
        </div>

        <!-- Pricing Cards -->
        <div v-if="!showFeatures" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12 text-sm">
            <div
                v-for="(plan, planIndex) in plans"
                :key="plan.name"
                class="border p-4 rounded-lg shadow-lg flex flex-col hover:shadow-xl transition-shadow"
            >
                <!-- Plan Header -->
                <div class="mb-6">
                    <h3 class="text-xl font-bold mb-2 text-center">{{ plan.name }}</h3>
                    <div class="text-2xl font-bold mb-3 text-center">
                        {{
                            showUSD
                                ? plan.fixedFees[billingCycle.toLowerCase()].usd
                                : plan.fixedFees[billingCycle.toLowerCase()].inr
                        }}
                    </div>
                    <a :href="plan.buttonLink" target="_blank" rel="noopener noreferrer">
                        <button
                            class="w-full py-2 rounded-md bg-[#00AEEF] hover:bg-[#00afefca] text-white transition-colors text-center font-bold"
                        >
                            {{ plan.buttonText }}
                        </button>
                    </a>
                </div>

                <!-- Plan Features -->
                <div class="space-y-4 flex-1">
                    <!-- Mehery Fees - Per Conversation Fees -->
                    <div>
                        <h4 class="font-semibold mb-2 border-b pb-1">Mehery Fees</h4>
                        <ul>
                            <li
                                v-for="(value, key) in plan['Mehery Fees – Per conversation Fees']"
                                :key="key"
                                class="flex justify-between"
                            >
                                <span>{{ key }}</span>
                                <span :class="{ 'text-red-700': value === 'X'}" >{{
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
                    <div class="mb-2">
                        <h4 class="font-semibold mb-2 border-b pb-1">Users</h4>
                        <ul>
                            <li class="flex justify-between">
                                <span>Admin/Agent</span><span>{{ plan.users.adminAgent }}</span>
                            </li>

                            <li
                                v-if="plan.users.additionalUser.inr && plan.users.additionalUser.inr !== 'X'"
                                class="flex justify-between"
                            >
                                <span>Additional User</span>
                                <span>
                                    {{ showUSD ? plan.users.additionalUser.usd : plan.users.additionalUser.inr }}</span
                                >
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
                                <span>Free BOT conversations</span
                                ><span>{{ plan.freeUtilities.freeBotConversations }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Feature Comparison -->
        <div v-else class="bg-white rounded-lg shadow-lg p-4">
            <div class="overflow-x-auto">
                <table class="w-full border border-gray-300">
                    <thead class="bg-gray-100">
                        <tr class="border-b border-gray-300">
                            <th class="text-left py-2 px-2 w-1/3 border-r border-gray-300">Feature</th>
                            <th v-for="plan in plans" :key="plan.name" class="py-2 px-2 border-r border-gray-300">
                                <div class="text-center !important text-md font-bold">{{ plan.name }}</div>
                                <div class="text-center text-xs text-gray-500">
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
                                    {{ formatSectionTitle(sectionKey) }}
                                </td>
                            </tr>

                            <!-- Section Features -->
                            <tr
                                v-for="feature in section"
                                :key="feature.name"
                                class="border-b border-gray-300 hover:bg-gray-50 transition-colors"
                            >
                                <td class="py-2 px-2 border-r border-gray-300">{{ feature.name }}</td>
                                <td
                                    v-for="(available, idx) in feature.availability"
                                    :key="idx"
                                    class="text-center py-2 px-2 border-r border-gray-300"
                                >
                                    <check-icon
                                        v-if="available === 'Y'"
                                        size="16"
                                        class="inline-block text-green-500"
                                    />
                                    <x-icon v-else-if="available === 'X'" size="16" class="inline-block text-red-500" />
                                    <span v-else class="text-xs">{{ available }}</span>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="flex align-center justify-center mt-4 text-xl gap-4">
            <div>
                <a href="https://developers.facebook.com/docs/whatsapp/pricing/" target="_blank" class="text-blue-500"
                    >Whatsapp Conversation Fees</a
                >
            </div>
            <div>
                <p class="text-blue-500">•</p>
            </div>
            <div>
                <a href="https://openai.com/api/pricing/" target="_blank" class="text-blue-500">Chat GPT Charges</a
                ><span>, GPT 4o Mini is required for Mehery Services.</span>
            </div>
        </div>
    </div>
    <div v-else class="flex justify-center items-center h-64">
        <p>Loading pricing data...</p>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { CheckIcon, XIcon } from "vue-feather-icons";
import resource from "@components/Resource"

const loading = ref(true);
const showUSD = ref(false);
const showFeatures = ref(false);
const billingCycle = ref("Monthly");
const plans = ref([]);
const features = ref({});

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
        // Fetch all plans in parallel
        const [freePlanRes, enterprisePlanRes, ecoPlanRes, litePlanRes, proPlanRes] = await Promise.all([
            resource.read({ contentType: "pricing", src: "free_plan.xlsx", query: {} }),
            resource.read({ contentType: "pricing", src: "enterprise_plan.xlsx", query: {} }),
            resource.read({ contentType: "pricing", src: "eco_plan.xlsx", query: {} }),
            resource.read({ contentType: "pricing", src: "lite_plan.xlsx", query: {} }),
            resource.read({ contentType: "pricing", src: "pro_plan.xlsx", query: {} })
        ]);

        plans.value = [
            // FREE FOREVER
            {
                name: freePlanRes.results[0]?.name || "FREE FOREVER",
                buttonText: freePlanRes.results[0]?.buttonText || "Get Started",
                buttonLink: freePlanRes.results[0]?.buttonLink || "https://app.mehery.com/partner/auth/register",
                fixedFees: {
                    monthly: { 
                        usd: freePlanRes.results[0]?.fixedFees_monthly_usd || "Free", 
                        inr: freePlanRes.results[0]?.fixedFees_monthly_inr || "Free" 
                    },
                    quarterly: { 
                        usd: freePlanRes.results[0]?.fixedFees_quarterly_usd || "Free", 
                        inr: freePlanRes.results[0]?.fixedFees_quarterly_inr || "Free" 
                    },
                    annual: { 
                        usd: freePlanRes.results[0]?.fixedFees_annual_usd || "Free", 
                        inr: freePlanRes.results[0]?.fixedFees_annual_inr || "Free" 
                    }
                },
                "Mehery Fees – Per conversation Fees": {
                    DAU: { 
                        inr: freePlanRes.results[0]?.MeheryFeesPerConversationFees_DAU_inr || "Up to 10", 
                        usd: freePlanRes.results[0]?.MeheryFeesPerConversationFees_DAU_usd || "Up to 10" 
                    },
                    "Email": { 
                        inr: freePlanRes.results[0]?.MeheryFeesPerConversationFees_Email_inr || "Up to 1000", 
                        usd: freePlanRes.results[0]?.MeheryFeesPerConversationFees_Email_usd || "Up to 1000" 
                    },
                    "Image Creation": { 
                        inr: freePlanRes.results[0]?.MeheryFeesPerConversationFees_ImageCreation_inr || "Up to 10", 
                        usd: freePlanRes.results[0]?.MeheryFeesPerConversationFees_ImageCreation_usd || "Up to 10" 
                    },
                    "Conversational Bot": { 
                        inr: freePlanRes.results[0]?.MeheryFeesPerConversationFees_ConversationalBot_inr || "Up to 10", 
                        usd: freePlanRes.results[0]?.MeheryFeesPerConversationFees_ConversationalBot_usd || "Up to 10" 
                    }
                },
                users: { 
                    adminAgent: freePlanRes.results[0]?.users_adminAgent || "1", 
                    additionalUser: { 
                        inr: freePlanRes.results[0]?.users_additionalUser_inr || "X", 
                        usd: freePlanRes.results[0]?.users_additionalUser_usd || "X" 
                    } 
                },
                depositFees: { 
                    minimumDeposit: freePlanRes.results[0]?.depositFees_minimumDeposit || "N/A" 
                },
                setupFees: {
                    facebookBusinessSetup: freePlanRes.results[0]?.setupFees_facebookBusinessSetup || "N/A",
                    openAISetupTraining: freePlanRes.results[0]?.setupFees_openAISetupTraining || "N/A",
                    openAIBotDevelopment: freePlanRes.results[0]?.setupFees_openAIBotDevelopment || "Based on work scope"
                },
                freeUtilities: {
                    monthlyDAU: freePlanRes.results[0]?.freeUtilities_monthlyDAU || "10",
                    freeImages: freePlanRes.results[0]?.freeUtilities_freeImages || "10",
                    freeBotConversations: freePlanRes.results[0]?.freeUtilities_freeBotConversations || "10"
                }
            },

            // LITE
            {
                name: litePlanRes.results[0]?.name || "LITE",
                buttonText: litePlanRes.results[0]?.buttonText || "Get Started",
                buttonLink: litePlanRes.results[0]?.buttonLink || "https://app.mehery.com/partner/auth/register",
                fixedFees: {
                    monthly: { 
                        usd: litePlanRes.results[0]?.fixedFees_monthly_usd || "NA", 
                        inr: litePlanRes.results[0]?.fixedFees_monthly_inr || "NA" 
                    },
                    quarterly: { 
                        usd: litePlanRes.results[0]?.fixedFees_quarterly_usd || "NA", 
                        inr: litePlanRes.results[0]?.fixedFees_quarterly_inr || "NA" 
                    },
                    annual: { 
                        usd: litePlanRes.results[0]?.fixedFees_annual_usd || "NA", 
                        inr: litePlanRes.results[0]?.fixedFees_annual_inr || "NA" 
                    }
                },
                "Mehery Fees – Per conversation Fees": {
                    DAU: { 
                        inr: litePlanRes.results[0]?.MeheryFeesPerConversationFees_DAU_inr || "₹1.25", 
                        usd: litePlanRes.results[0]?.MeheryFeesPerConversationFees_DAU_usd || "$0.050" 
                    },
                    "Email (1000 Free)": { 
                        inr: litePlanRes.results[0]?.MeheryFeesPerConversationFees_Email_inr || "₹0.12", 
                        usd: litePlanRes.results[0]?.MeheryFeesPerConversationFees_Email_usd || "$0.0014" 
                    },
                    "Image Creation Fee": { 
                        inr: litePlanRes.results[0]?.MeheryFeesPerConversationFees_ImageCreation_inr || "₹0.25", 
                        usd: litePlanRes.results[0]?.MeheryFeesPerConversationFees_ImageCreation_usd || "$0.012" 
                    },
                    "Conversational Bot": { 
                        inr: litePlanRes.results[0]?.MeheryFeesPerConversationFees_ConversationalBot_inr || "₹0.50", 
                        usd: litePlanRes.results[0]?.MeheryFeesPerConversationFees_ConversationalBot_usd || "$0.012" 
                    }
                },
                users: { 
                    adminAgent: litePlanRes.results[0]?.users_adminAgent || "1", 
                    additionalUser: { 
                        inr: litePlanRes.results[0]?.users_additionalUser_inr || "₹500", 
                        usd: litePlanRes.results[0]?.users_additionalUser_usd || "$9.9" 
                    } 
                },
                depositFees: { 
                    minimumDeposit: { 
                        inr: litePlanRes.results[0]?.depositFees_minimumDeposit_inr || "₹1000", 
                        usd: litePlanRes.results[0]?.depositFees_minimumDeposit_usd || "$25" 
                    } 
                },
                setupFees: {
                    facebookBusinessSetup: { 
                        inr: litePlanRes.results[0]?.setupFees_facebookBusinessSetup_inr || "₹5000", 
                        usd: litePlanRes.results[0]?.setupFees_facebookBusinessSetup_usd || "$50" 
                    },
                    openAISetupTraining: { 
                        inr: litePlanRes.results[0]?.setupFees_openAISetupTraining_inr || "X", 
                        usd: litePlanRes.results[0]?.setupFees_openAISetupTraining_usd || "X" 
                    },
                    openAIBotDevelopment: { 
                        inr: litePlanRes.results[0]?.setupFees_openAIBotDevelopment_inr || "Based on work scope", 
                        usd: litePlanRes.results[0]?.setupFees_openAIBotDevelopment_usd || "Based on work scope" 
                    }
                }
            },

            // ECO
            {
                name: ecoPlanRes.results[0]?.name || "ECO",
                buttonText: ecoPlanRes.results[0]?.buttonText || "Get Started",
                buttonLink: ecoPlanRes.results[0]?.buttonLink || "https://app.mehery.com/partner/auth/register",
                fixedFees: {
                    monthly: { 
                        usd: ecoPlanRes.results[0]?.fixedFees_monthly_usd || "$69", 
                        inr: ecoPlanRes.results[0]?.fixedFees_monthly_inr || "₹2,499" 
                    },
                    quarterly: { 
                        usd: ecoPlanRes.results[0]?.fixedFees_quarterly_usd || "$189", 
                        inr: ecoPlanRes.results[0]?.fixedFees_quarterly_inr || "₹6,750" 
                    },
                    annual: { 
                        usd: ecoPlanRes.results[0]?.fixedFees_annual_usd || "$649", 
                        inr: ecoPlanRes.results[0]?.fixedFees_annual_inr || "₹24,000" 
                    }
                },
                "Mehery Fees – Per conversation Fees": {
                    DAU: { 
                        inr: ecoPlanRes.results[0]?.MeheryFeesPerConversationFees_DAU_inr || "₹0.04", 
                        usd: ecoPlanRes.results[0]?.MeheryFeesPerConversationFees_DAU_usd || "$0.006" 
                    },
                    "Email (1000 Free)": { 
                        inr: ecoPlanRes.results[0]?.MeheryFeesPerConversationFees_Email_inr || "₹0.08", 
                        usd: ecoPlanRes.results[0]?.MeheryFeesPerConversationFees_Email_usd || "$0.0009" 
                    },
                    "Image Creation Fee": { 
                        inr: ecoPlanRes.results[0]?.MeheryFeesPerConversationFees_ImageCreation_inr || "₹0.12", 
                        usd: ecoPlanRes.results[0]?.MeheryFeesPerConversationFees_ImageCreation_usd || "$0.006" 
                    },
                    "Conversational Bot": ecoPlanRes.results[0]?.MeheryFeesPerConversationFees_ConversationalBot || "X"
                },
                users: { 
                    adminAgent: ecoPlanRes.results[0]?.users_adminAgent || "5", 
                    additionalUser: { 
                        inr: ecoPlanRes.results[0]?.users_additionalUser_inr || "₹500", 
                        usd: ecoPlanRes.results[0]?.users_additionalUser_usd || "$9.9" 
                    } 
                },
                depositFees: { 
                    minimumDeposit: { 
                        inr: ecoPlanRes.results[0]?.depositFees_minimumDeposit_inr || "₹1000", 
                        usd: ecoPlanRes.results[0]?.depositFees_minimumDeposit_usd || "$25" 
                    } 
                },
                setupFees: {
                    facebookBusinessSetup: { 
                        inr: ecoPlanRes.results[0]?.setupFees_facebookBusinessSetup_inr || "₹5000", 
                        usd: ecoPlanRes.results[0]?.setupFees_facebookBusinessSetup_usd || "$50" 
                    },
                    openAISetupTraining: { 
                        inr: ecoPlanRes.results[0]?.setupFees_openAISetupTraining_inr || "X", 
                        usd: ecoPlanRes.results[0]?.setupFees_openAISetupTraining_usd || "X" 
                    },
                    openAIBotDevelopment: { 
                        inr: ecoPlanRes.results[0]?.setupFees_openAIBotDevelopment_inr || "Based on work scope", 
                        usd: ecoPlanRes.results[0]?.setupFees_openAIBotDevelopment_usd || "Based on work scope" 
                    }
                }
            },

            // PRO
            {
                name: proPlanRes.results[0]?.name || "PRO",
                buttonText: proPlanRes.results[0]?.buttonText || "Get Started",
                buttonLink: proPlanRes.results[0]?.buttonLink || "https://app.mehery.com/partner/auth/register",
                fixedFees: {
                    monthly: { 
                        usd: proPlanRes.results[0]?.fixedFees_monthly_usd || "$149", 
                        inr: proPlanRes.results[0]?.fixedFees_monthly_inr || "₹3,999" 
                    },
                    quarterly: { 
                        usd: proPlanRes.results[0]?.fixedFees_quarterly_usd || "$399", 
                        inr: proPlanRes.results[0]?.fixedFees_quarterly_inr || "₹11,000" 
                    },
                    annual: { 
                        usd: proPlanRes.results[0]?.fixedFees_annual_usd || "$1,399", 
                        inr: proPlanRes.results[0]?.fixedFees_annual_inr || "₹39,000" 
                    }
                },
                "Mehery Fees – Per conversation Fees": {
                    DAU: { 
                        inr: proPlanRes.results[0]?.MeheryFeesPerConversationFees_DAU_inr || "₹0.03", 
                        usd: proPlanRes.results[0]?.MeheryFeesPerConversationFees_DAU_usd || "$0.006" 
                    },
                    "Email (1000 Free)": { 
                        inr: proPlanRes.results[0]?.MeheryFeesPerConversationFees_Email_inr || "₹0.07", 
                        usd: proPlanRes.results[0]?.MeheryFeesPerConversationFees_Email_usd || "$0.0008" 
                    },
                    "Image Creation Fee": { 
                        inr: proPlanRes.results[0]?.MeheryFeesPerConversationFees_ImageCreation_inr || "₹0.12", 
                        usd: proPlanRes.results[0]?.MeheryFeesPerConversationFees_ImageCreation_usd || "$0.006" 
                    },
                    "Conversational Bot": proPlanRes.results[0]?.MeheryFeesPerConversationFees_ConversationalBot || "X"
                },
                users: { 
                    adminAgent: proPlanRes.results[0]?.users_adminAgent || "7", 
                    additionalUser: { 
                        inr: proPlanRes.results[0]?.users_additionalUser_inr || "₹600", 
                        usd: proPlanRes.results[0]?.users_additionalUser_usd || "$19.9" 
                    } 
                },
                depositFees: { 
                    minimumDeposit: { 
                        inr: proPlanRes.results[0]?.depositFees_minimumDeposit_inr || "₹1000", 
                        usd: proPlanRes.results[0]?.depositFees_minimumDeposit_usd || "$25" 
                    } 
                },
                setupFees: {
                    facebookBusinessSetup: { 
                        inr: proPlanRes.results[0]?.setupFees_facebookBusinessSetup_inr || "₹5000", 
                        usd: proPlanRes.results[0]?.setupFees_facebookBusinessSetup_usd || "$50" 
                    },
                    openAISetupTraining: { 
                        inr: proPlanRes.results[0]?.setupFees_openAISetupTraining_inr || "X", 
                        usd: proPlanRes.results[0]?.setupFees_openAISetupTraining_usd || "X" 
                    },
                    openAIBotDevelopment: { 
                        inr: proPlanRes.results[0]?.setupFees_openAIBotDevelopment_inr || "Based on work scope", 
                        usd: proPlanRes.results[0]?.setupFees_openAIBotDevelopment_usd || "Based on work scope" 
                    }
                }
            },

            // ENTERPRISE
            {
                name: enterprisePlanRes.results[0]?.name || "ENTERPRISE",
                buttonText: enterprisePlanRes.results[0]?.buttonText || "Contact Sales",
                buttonLink: enterprisePlanRes.results[0]?.buttonLink || "https://calendly.com/shekhars",
                fixedFees: {
                    monthly: { 
                        usd: enterprisePlanRes.results[0]?.fixedFees_monthly_usd || "On Req", 
                        inr: enterprisePlanRes.results[0]?.fixedFees_monthly_inr || "On Req" 
                    },
                    quarterly: { 
                        usd: enterprisePlanRes.results[0]?.fixedFees_quarterly_usd || "On Req", 
                        inr: enterprisePlanRes.results[0]?.fixedFees_quarterly_inr || "On Req" 
                    },
                    annual: { 
                        usd: enterprisePlanRes.results[0]?.fixedFees_annual_usd || "On Req", 
                        inr: enterprisePlanRes.results[0]?.fixedFees_annual_inr || "On Req" 
                    }
                },
                "Mehery Fees – Per conversation Fees": {
                    DAU: { 
                        inr: enterprisePlanRes.results[0]?.MeheryFeesPerConversationFees_DAU_inr || "On Req", 
                        usd: enterprisePlanRes.results[0]?.MeheryFeesPerConversationFees_DAU_usd || "On Req" 
                    },
                    "Email (1000 Free)": { 
                        inr: enterprisePlanRes.results[0]?.MeheryFeesPerConversationFees_Email_inr || "On Req", 
                        usd: enterprisePlanRes.results[0]?.MeheryFeesPerConversationFees_Email_usd || "On Req" 
                    },
                    "Image Creation Fee": { 
                        inr: enterprisePlanRes.results[0]?.MeheryFeesPerConversationFees_ImageCreation_inr || "On Req", 
                        usd: enterprisePlanRes.results[0]?.MeheryFeesPerConversationFees_ImageCreation_usd || "On Req" 
                    },
                    "Conversational Bot": { 
                        inr: enterprisePlanRes.results[0]?.MeheryFeesPerConversationFees_ConversationalBot_inr || "On Req", 
                        usd: enterprisePlanRes.results[0]?.MeheryFeesPerConversationFees_ConversationalBot_usd || "On Req" 
                    }
                },
                users: { 
                    adminAgent: enterprisePlanRes.results[0]?.users_adminAgent || "On Req", 
                    additionalUser: { 
                        inr: enterprisePlanRes.results[0]?.users_additionalUser_inr || "On Req", 
                        usd: enterprisePlanRes.results[0]?.users_additionalUser_usd || "On Req" 
                    } 
                },
                depositFees: { 
                    minimumDeposit: { 
                        inr: enterprisePlanRes.results[0]?.depositFees_minimumDeposit_inr || "₹1000", 
                        usd: enterprisePlanRes.results[0]?.depositFees_minimumDeposit_usd || "$25" 
                    } 
                },
                setupFees: {
                    facebookBusinessSetup: { 
                        inr: enterprisePlanRes.results[0]?.setupFees_facebookBusinessSetup_inr || "₹5000", 
                        usd: enterprisePlanRes.results[0]?.setupFees_facebookBusinessSetup_usd || "$50" 
                    },
                    openAISetupTraining: { 
                        inr: enterprisePlanRes.results[0]?.setupFees_openAISetupTraining_inr || "On Req", 
                        usd: enterprisePlanRes.results[0]?.setupFees_openAISetupTraining_usd || "On Req" 
                    },
                    openAIBotDevelopment: { 
                        inr: enterprisePlanRes.results[0]?.setupFees_openAIBotDevelopment_inr || "Based on work scope", 
                        usd: enterprisePlanRes.results[0]?.setupFees_openAIBotDevelopment_usd || "Based on work scope" 
                    }
                }
            }
        ];

        // Set features data
        features.value = {
            Channels: [
                { name: "WhatsApp", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Webchat", availability: ["X", "X", "Y", "Y", "Y"] },
                { name: "Facebook Messenger", availability: ["X", "X", "X", "Y", "Y"] },
                { name: "Instagram DM", availability: ["X", "X", "Y", "Y", "Y"] },
                { name: "Telegram", availability: ["X", "X", "X", "Y", "Y"] },
                { name: "App Chat", availability: ["X", "X", "X", "X", "Y"] },
                { name: "Email", availability: ["Y", "Y", "Y", "Y", "Y"] }
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
        };

        // Check user location for currency
        try {
            const response = await axios.get("https://ipinfo.io/json?token=1bfc162a759fb1");
            if (response.data.country === "IN") {
                showUSD.value = false;
            } else {
                showUSD.value = true;
            }
        } catch (error) {
            console.error("Error fetching IP data:", error);
            showUSD.value = true;
        }

        loading.value = false;
    } catch (error) {
        console.error("Error loading pricing data:", error);
        loading.value = false;
    }
});
</script>