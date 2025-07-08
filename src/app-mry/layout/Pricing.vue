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
                        <h4 class="font-semibold mb-2 border-b pb-1">
                            {{ plan.name === 'FREE FOREVER' ? 'Limits' : 'Cost per' }}
                        </h4>
                        <ul>
                            <li
                                v-for="(value, key) in plan['Mehery Fees – Per conversation Fees']"
                                :key="key"
                                class="flex justify-between"
                            >
                                <span>{{ key }}</span>
                                <span :class="{ 'text-red-700': displayValue(value) === '✗' }">{{ displayValue(value) }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Deposits -->
                    <div >
                        <h4 class="font-semibold mb-2 border-b pb-1">Deposit</h4>
                        <ul>
                            <li class="flex justify-between">
                                <span>Minimum</span>
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
                                <span>Admin/Mod/Agent</span><span>{{ plan.users.adminAgent }}</span>
                            </li>

                            <li class="flex justify-between">
                                <span>Additional User</span>
                                <span
                                    :class="{ 'text-red-700':
                                    (showUSD 
                                        ? plan.users.additionalUser[billingCycle.toLowerCase()].usd 
                                        : plan.users.additionalUser[billingCycle.toLowerCase()].inr) === 'X' 
                                    }"
                                >
                                    {{
                                    (showUSD 
                                        ? plan.users.additionalUser[billingCycle.toLowerCase()].usd
                                        : plan.users.additionalUser[billingCycle.toLowerCase()].inr
                                    ) === 'X'
                                        ? '✗'
                                        : (showUSD 
                                            ? plan.users.additionalUser[billingCycle.toLowerCase()].usd
                                            : plan.users.additionalUser[billingCycle.toLowerCase()].inr
                                        )
                                    }}
                                </span>
                            </li>
                        </ul>
                    </div>

                    <!-- Channel Licenses -->
                    <div class="mb-2">
                        <h4 class="font-semibold mb-2 border-b pb-1">Channel Licenses</h4>
                        <ul>
                            <!-- Included channels -->
                            <li class="flex justify-between">
                                <span>Permissioned Number</span>
                                <span>{{ plan.channels.permissionedNumber }}</span>
                            </li>

                            <!-- Additional channels cost -->
                            <li class="flex justify-between">
                            <span>Additional Channels</span>
                            <span
                                :class="{ 'text-red-700':
                                (showUSD
                                    ? plan.channels.additionalChannels[billingCycle.toLowerCase()].usd
                                    : plan.channels.additionalChannels[billingCycle.toLowerCase()].inr
                                ) === 'X'
                                }"
                            >
                                {{
                                (showUSD
                                    ? plan.channels.additionalChannels[billingCycle.toLowerCase()].usd
                                    : plan.channels.additionalChannels[billingCycle.toLowerCase()].inr
                                ) === 'X'
                                    ? '✗'
                                    : (showUSD
                                        ? plan.channels.additionalChannels[billingCycle.toLowerCase()].usd
                                        : plan.channels.additionalChannels[billingCycle.toLowerCase()].inr
                                    )
                                }}
                            </span>
                            </li>
                        </ul>
                    </div>

                    <!-- Set-up Fees (optional) -->
                    <div class="mb-2">
                        <h4 class="font-semibold mb-2 border-b pb-1">Set-up Fees (optional)</h4>
                        <ul>
                            <li
                                v-for="(fee, name) in plan.setupFees"
                                :key="name"
                                class="flex justify-between"
                            >
                            <span>{{ name }}</span>
                            <span
                                :class="{ 'text-red-700': (showUSD ? fee.usd : fee.inr) === 'X' }"
                            >
                                {{
                                (showUSD ? fee.usd : fee.inr) === 'X'
                                    ? '✗'
                                    : (showUSD ? fee.usd : fee.inr)
                                }}
                            </span>
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
                    <thead class="bg-gray-200">
                        <tr class="border-b border-gray-300">
                            <th class="text-left py-2 px-2 w-1/3 border-r border-gray-300">Packages</th>
                            <th class="py-2 px-2 border-r border-gray-300 text-center font-bold">Freemium</th>
                            <th class="py-2 px-2 border-r border-gray-300 text-center font-bold">Lite</th>
                            <th class="py-2 px-2 border-r border-gray-300 text-center font-bold">Eco</th>
                            <th class="py-2 px-2 border-r border-gray-300 text-center font-bold">Pro</th>
                            <th class="py-2 px-2 border-r border-gray-300 text-center font-bold">Enterprise</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-300">
                        <template v-for="(section, sectionKey) in features" :key="sectionKey">
                            <!-- Section Header -->
                            <tr class="bg-gray-100 border-b border-gray-300">
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
                <a href="https://developers.facebook.com/docs/whatsapp/pricing/updates-to-pricing" target="_blank" class="text-blue-500"
                    >Whatsapp Conversation Fees</a
                >
            </div>
            <div>
                <p class="text-blue-500">•</p>
            </div>
            <div>
                <a href="https://platform.openai.com/docs/pricing" target="_blank" class="text-blue-500">Chat GPT Charges</a
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

// const toggleCurrency = () => {
//      showUSD.value = !showUSD.value;
//  };

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

// const currencySymbol = computed(() => {
//     return showUSD.value ? "$" : "₹";
// });

const displayValue = (value) => {
    if (typeof value === 'object' && value !== null) {
        const val = showUSD.value ? value.usd : value.inr;
        return val === 'X' ? '✗' : val;
    }
    return value;
};

const formatSectionTitle = key => {
    return key.replace(/([A-Z])(?=[A-Z])/g, '$1').replace(/\s{2,}/g, ' ');
};

function unflattenObject(obj) {
  const result = {};
  for (const key in obj) {
    const keys = key.split(".");
    keys.reduce((acc, part, i) => {
      if (i === keys.length - 1) {
        acc[part] = obj[key];
      } else {
        acc[part] = acc[part] || {};
      }
      return acc[part];
    }, result);
  }
  return result;
}

onMounted(async () => {

    // Check user location for currency
    try {
            const response = await axios.get("https://ipinfo.io/json?token=1bfc162a759fb1");
            if (response.data.country === "IN") {
                showUSD.value = false;
                // showUSD.value = true;
            } else {
                showUSD.value = true;
            }
    } catch (error) {
            console.error("Error fetching IP data:", error);
            showUSD.value = true;
    }

    try {
        const [pricingUSD, pricingINR] = await Promise.all([
            resource.read({ contentType: "pricing", src: "pricing_usd.xlsx", query: {} }),
            resource.read({ contentType: "pricing", src: "pricing_inr.xlsx", query: {} })
        ]);

        // Unflatten the flat JSON results
        const unflattenedUSD = pricingUSD.results.map(unflattenObject);
        const unflattenedINR = pricingINR.results.map(unflattenObject);

        // Create maps of plans by name for easy lookup
        const plansUSD = unflattenedUSD.reduce((acc, plan) => {
            acc[plan.name] = plan;
            return acc;
        }, {});

        const plansINR = unflattenedINR.reduce((acc, plan) => {
            acc[plan.name] = plan;
            return acc;
        }, {});

        // Get all plan names (assuming USD and INR have the same plans)
        const planNames = Object.keys(plansUSD);

        // Construct the plans array by combining USD and INR data
        plans.value = planNames.map(name => {
            const usdPlan = plansUSD[name];
            const inrPlan = plansINR[name];

            return {
                name: name,
                buttonText: usdPlan.button?.text || "Get Started",
                buttonLink: usdPlan.button?.link || "https://app.mehery.com/partner/auth/register",
                fixedFees: {
                    monthly: {
                        usd: usdPlan.fees?.monthly || "X",
                        inr: inrPlan.fees?.monthly || "X"
                    },
                    quarterly: {
                        usd: usdPlan.fees?.quaterly || "X",
                        inr: inrPlan.fees?.quaterly || "X"
                    },
                    annual: {
                        usd: usdPlan.fees?.annualy || "X",
                        inr: inrPlan.fees?.annualy || "X"
                    }
                },
                "Mehery Fees – Per conversation Fees": {
                    "WABA - Marketing": {
                        usd: usdPlan.mfees?.wabaMarketing || "X",
                        inr: inrPlan.mfees?.wabaMarketing || "X"
                    },
                    "WABA - U, A, S": {
                        usd: usdPlan.mfees?.wabaUtil || "X",
                        inr: inrPlan.mfees?.wabaUtil || "X"
                    },
                    "Social Conv": {
                        usd: usdPlan.mfees?.social || "X",
                        inr: inrPlan.mfees?.social || "X"
                    },
                    "Email": {
                        usd: usdPlan.mfees?.email || "X",
                        inr: inrPlan.mfees?.email || "X"
                    },
                    "SMS": {
                        usd: usdPlan.mfees?.sms || "X",
                        inr: inrPlan.mfees?.sms || "X"
                    },
                    "Image Creation": {
                        usd: usdPlan.mfees?.image || "X",
                        inr: inrPlan.mfees?.image || "X"
                    },
                    "Conversational Bot": {
                        usd: usdPlan.mfees?.gpt || "X",
                        inr: inrPlan.mfees?.gpt || "X"
                    }
                },
                users: {
                    adminAgent: usdPlan.user?.num || "1",
                    additionalUser: {
                        monthly: {
                            usd: usdPlan.user?.month || "X",
                            inr: inrPlan.user?.month || "X"
                        },
                        quarterly: {
                            usd: usdPlan.user?.quater || "X",
                            inr: inrPlan.user?.quater || "X"
                        },
                        annual: {
                            usd: usdPlan.user?.year || "X",
                            inr: inrPlan.user?.year || "X"
                        }
                    }
                },
                depositFees: {
                    minimumDeposit: {
                        usd: usdPlan.minDeposit || "X",
                        inr: inrPlan.minDeposit || "X"
                    }
                },
                setupFees: {
                    "FB Biz Act": {
                        usd: usdPlan.setup?.fb || "X",
                        inr: inrPlan.setup?.fb || "X"
                    },
                    "Open AI Training": {
                        usd: usdPlan.setup?.openAi || "X",
                        inr: inrPlan.setup?.openAi || "X"
                    },
                    "BOT Development": {
                        usd: usdPlan.setup?.bot || "X",
                        inr: inrPlan.setup?.bot || "X"
                    }
                },
                channels: {
                    permissionedNumber: usdPlan.channel?.num || "All",
                    additionalChannels: {
                        monthly: {
                            usd: usdPlan.channel?.month || "X",
                            inr: inrPlan.channel?.month || "X"
                        },
                        quarterly: {
                            usd: usdPlan.channel?.quater || "X",
                            inr: inrPlan.channel?.quater || "X"
                        },
                        annual: {
                            usd: usdPlan.channel?.year || "X",
                            inr: inrPlan.channel?.year || "X"
                        }
                    }
                }
            };
        });

        console.log("plan-value", plans);

        // Set features data
        features.value = {
            "Channels (#), Any of the below": [
                { name: "", availability: ["-", "1", "2", "3", "all"] },
                { name: "WhatsApp", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Webchat", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Facebook Messenger", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "Instagram DM", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Telegram", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "App Chat", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "Email", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "SMS", availability: ["Y", "Y", "X", "Y", "Y"] }
            ],
            "SmartConversations : Conversations-Inbound": [
                { name: "Team Inbox", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Chat Assignment / Auto routing", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Session Tags", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Follow-up", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "Appointment / Table Booking", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "Number Masking", availability: ["Y", "Y", "X", "X", "Y"] },
                { name: "User roles/skills", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Conversation Analytics", availability: ["Y", "Y", "X", "X", "Y"] },
                
            ],
            "Conversations - AI enabled with CHAT GPT": [
                { name: "Smart Session Tags", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "Paraphrase", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "Language Translation", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "Summary of Conversation", availability: ["Y", "Y", "X", "Y", "Y"] }
            ],
            Bots: [
                { name: "Basic chatbots", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Advanced interconnected BOTs", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "Auto-reply BOTs", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Outside Working Hours, Weekends and Holidays", availability: ["Y", "Y", "X", "Y", "Y"] }
            ],
            "Conversational BOTs - CHAT GPT": [
                { name: "Instructor, Knowledgebase - RAG Approach", availability: ["Y", "Y", "X", "X", "Y"] },
                { name: "Agent AI conversational BOT", availability: ["Y", "Y", "X", "X", "Y"] },
                { name: "Custom BOT Scripting with OpenAI", availability: ["Y", "Y", "X", "X", "Y"] }
            ],
            "WhatsApp - Business API": [
                { name: "Text, image, video messaging", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Custom Image Templates", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "WhatsApp Flows", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "WhatsApp Carousels", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Authentication", availability: ["Y", "Y", "Y", "Y", "Y"] }
            ],
            "Marketing / Lead Generation": [
                { name: "Campaign Management", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "Campaign Scheduling", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "Campaign Analytics, CTA Tracker", availability: ["Y", "Y", "X", "X", "Y"] },
                { name: "Template Analytics, CTA Tracker", availability: ["Y", "Y", "X", "X", "Y"] },
                { name: "Custom Image (and HTML source) Templates", availability: ["Y", "Y", "X", "Y", "Y"] },
                { name: "Click to WhatsApp Ads Insights", availability: ["Y", "Y", "Y", "Y", "Y"] }
            ],
            APIs: [{ name: "APIs for Outbound communication", availability: ["Y", "X", "Y", "Y", "Y"] }],
            "Customer Management": [
                { name: "Customer master", availability: ["Y", "Y", "X", "X", "Y"] },
                { name: "Custom fields", availability: ["Y", "Y", "X", "X", "Y"] },
                { name: "Custom Filters for grouping", availability: ["Y", "Y", "X", "X", "Y"] },
                { name: "Customer Grouping for Campaigns", availability: ["Y", "Y", "X", "X", "Y"] },
                { name: "Relationship Management", availability: ["Y", "Y", "X", "X", "Y"] }
            ],
            "Agent Mobile App": [{ name: "IOS and Android", availability: ["Y", "X", "Y", "Y", "Y"] }],
            "Webhook Connections": [{ name: "Number of Webhook Connections", availability: ["X", "X", "1", "2", "Custom"] }],
            "Support Plans": [
                { name: "Assisted onboarding", availability: ["Y", "Y", "Y", "Y", "Y"] },
                { name: "SLA - Response Times", availability: ["2 days", "12 hrs", " 8 hrs", "6 hrs", "4 hrs"] },
                {
                    name: "WhatsApp and Email support",
                    availability: [
                        "9 hrs/day x 7 days/week",
                        "9 hrs/day x 7 days/week",
                        "9 hrs/day x 7 days/week",
                        "9 hrs/day x 7 days/week",
                        "9 hrs/day x 7 days/week"
                    ]
                },
                {
                    name: "WhatsApp, Email and Call based support",
                    availability: ["X", "X", "X", "included", "included"]
                },
                {
                    name: "Support Hours",
                    availability: ["9 am - 6 pm", "9 am - 6 pm", "9 am - 6 pm", "9 am - 6 pm", "9 am - 6 pm"]
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
    } catch (error) {
        console.error("Error fetching pricing data:", error);
    }finally {
        loading.value = false; 
    }  
});
</script>

<style scoped>
th > div {
    letter-spacing: normal !important;
}
</style>
