<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Header with Currency and View Toggles -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
      <h2 class="text-3xl font-bold">
        Compare Our <span class="text-red-500">Pricings</span>
      </h2>

      <!-- View Toggles -->
      <div class="flex items-center gap-4">
        <!-- Pricing or Features View Toggle -->
        <div class="flex items-center gap-2 bg-gray-100 p-2 rounded-full">
          <button
            @click="activeView = 'pricing'"
            :class="[
              'px-4 py-2 rounded-full transition-all',
              activeView === 'pricing' ? 'bg-white shadow' : ''
            ]"
          >
            Pricing
          </button>
          <button
            @click="activeView = 'features'"
            :class="[
              'px-4 py-2 rounded-full transition-all',
              activeView === 'features' ? 'bg-white shadow' : ''
            ]"
          >
            Features
          </button>
        </div>

        <!-- Currency Toggle -->
        <div class="flex items-center gap-2 bg-gray-100 p-2 rounded-full">
          <button
            @click="currency = 'INR'"
            :class="['px-4 py-2 rounded-full transition-all', currency === 'INR' ? 'bg-white shadow' : '']"
          >
            India
          </button>
          <button
            @click="currency = 'USD'"
            :class="['px-4 py-2 rounded-full transition-all', currency === 'USD' ? 'bg-white shadow' : '']"
          >
            USD
          </button>
        </div>
      </div>
    </div>

    <!-- Billing Period Toggle (shown only in Pricing view) -->
    <div v-if="activeView === 'pricing'" class="flex justify-center mb-8">
      <div class="flex items-center gap-2 bg-gray-100 p-2 rounded-full">
        <button
          v-for="period in ['monthly', 'quarterly', 'yearly']"
          :key="period"
          @click="billingPeriod = period"
          :class="[
            'px-4 py-2 rounded-full transition-all',
            billingPeriod === period ? 'bg-white shadow' : ''
          ]"
        >
          {{ period.charAt(0).toUpperCase() + period.slice(1) }}
        </button>
      </div>
    </div>

    <!-- Pricing View -->
    <template v-if="activeView === 'pricing'">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div
          v-for="plan in adjustedPlans"
          :key="plan.name"
          class="border p-4 rounded-lg text-center"
        >
          <div class="text-lg font-medium mb-2">{{ plan.name }}</div>
          <div class="text-3xl font-bold mb-4">
            {{ currency === "INR" ? "₹" : "$" }}
            {{ typeof plan.price === 'number' ? formatPrice(plan.price) : plan.price }}
            <span
              class="text-sm font-normal"
              >/{{ billingPeriod.slice(0, -2) }}</span
            >
          </div>
          <button
            class="w-full py-2 px-4 rounded-md transition-all text-sm bg-white text-black hover:bg-red-100 hover:text-red-600 border-2"
          >
            {{ plan.buttonText }}
          </button>
        </div>
      </div>

      <!-- Example of Fixed / Conversation Fees (like old Pricing.vue) -->
      <div class="mb-12">
        <h3 class="text-xl font-bold mb-6">Fixed Fees</h3>
        <div class="grid grid-cols-5 gap-4">
          <div></div>
          <div v-for="plan in plans" :key="plan.name" class="text-center font-medium">
            {{ plan.name }}
          </div>
        </div>
        <div
          v-for="period in ['Monthly','Quarterly','Annual']"
          :key="period"
          class="grid grid-cols-5 gap-4 mt-4"
        >
          <div class="font-medium">{{ period }}</div>
          <div
            v-for="plan in plans"
            :key="`${period}-${plan.name}`"
            class="text-center"
          >
            {{ formatFixedFee(period.toLowerCase(), plan.name) }}
          </div>
        </div>
      </div>

      <!-- Usage Based Fees -->
      <div class="mb-12">
        <h3 class="text-xl font-bold mb-6">Usage Based Fees</h3>
        <div class="grid grid-cols-5 gap-4 mt-4">
          <div class="font-medium">DAU - Per Daily Active User</div>
          <div
            v-for="plan in plans"
            :key="`dau-${plan.name}`"
            class="text-center"
          >
            {{ formatPrice(pricingDetails.usageBasedFees.dau[plan.name.toLowerCase()]) }}
          </div>
        </div>
        <div class="grid grid-cols-5 gap-4 mt-4">
          <div class="font-medium">Image Creation Fee - per image</div>
          <div
            v-for="plan in plans"
            :key="`image-${plan.name}`"
            class="text-center"
          >
            {{ formatPrice(pricingDetails.usageBasedFees.imageCreation[plan.name.toLowerCase()]) }}
          </div>
        </div>
        <div class="grid grid-cols-5 gap-4 mt-4">
          <div class="font-medium">CHAT GPT - Per conversation</div>
          <div
            v-for="plan in plans"
            :key="`chatgpt-${plan.name}`"
            class="text-center"
          >
            {{ pricingDetails.usageBasedFees.chatGPT[plan.name.toLowerCase()] }}
          </div>
        </div>
      </div>

      <!-- Free Utilities -->
      <div class="mb-12">
        <h3 class="text-xl font-bold mb-6">Free Utilities</h3>
        <div class="grid grid-cols-5 gap-4 mt-4">
          <div class="font-medium">Free DAU (calculated for month)</div>
          <div
            v-for="plan in plans"
            :key="`free-dau-${plan.name}`"
            class="text-center"
          >
            {{ pricingDetails.freeUtilities.monthlyDAU[plan.name.toLowerCase()] || '-' }}
          </div>
        </div>
        <div class="grid grid-cols-5 gap-4 mt-4">
          <div class="font-medium">Free images</div>
          <div
            v-for="plan in plans"
            :key="`free-images-${plan.name}`"
            class="text-center"
          >
            {{ pricingDetails.freeUtilities.freeImages[plan.name.toLowerCase()] || '-' }}
          </div>
        </div>
        <div class="grid grid-cols-5 gap-4 mt-4">
          <div class="font-medium">Free BOT conversations</div>
          <div
            v-for="plan in plans"
            :key="`free-bot-${plan.name}`"
            class="text-center"
          >
            {{ pricingDetails.freeUtilities.freeBotConversations[plan.name.toLowerCase()] || '-' }}
          </div>
        </div>
      </div>

      <!-- Per Agent Cost -->
      <div class="mb-12">
        <h3 class="text-xl font-bold mb-6">Per Agent Cost - pm</h3>
        <div class="grid grid-cols-5 gap-4 mt-4">
          <div class="font-medium">Cost per agent</div>
          <div
            v-for="plan in plans"
            :key="`agent-cost-${plan.name}`"
            class="text-center"
          >
            {{ formatPrice(pricingDetails.costs.perAgent[plan.name.toLowerCase()]) }}
          </div>
        </div>
      </div>

      <!-- Deposit -->
      <div class="mb-12">
        <h3 class="text-xl font-bold mb-6">Deposit - Top Up (Min)</h3>
        <div class="grid grid-cols-5 gap-4 mt-4">
          <div class="font-medium">Minimum deposit</div>
          <div
            v-for="plan in plans"
            :key="`deposit-${plan.name}`"
            class="text-center"
          >
            {{ formatPrice(pricingDetails.deposit.topUp[plan.name.toLowerCase()]) }}
          </div>
        </div>
      </div>

      <!-- Setup Fees -->
      <div class="mb-12">
        <h3 class="text-xl font-bold mb-6">Set-up Fees - Optional</h3>
        <div class="grid grid-cols-5 gap-4 mt-4">
          <div class="font-medium">Facebook Business Account Setup Consulting</div>
          <div
            v-for="plan in plans"
            :key="`fb-setup-${plan.name}`"
            class="text-center"
          >
            {{ formatPrice(pricingDetails.setupFees.facebook[plan.name.toLowerCase()]) }}
          </div>
        </div>
        <div class="grid grid-cols-5 gap-4 mt-4">
          <div class="font-medium">OpenAI - Setup and Training</div>
          <div
            v-for="plan in plans"
            :key="`openai-setup-${plan.name}`"
            class="text-center"
          >
            {{ pricingDetails.setupFees.openAI[plan.name.toLowerCase()] }}
          </div>
        </div>
        <div class="grid grid-cols-5 gap-4 mt-4">
          <div class="font-medium">
            OpenAI / CHAT GPT - Conversational BOT development
          </div>
          <div class="col-span-4 text-center">
            {{ pricingDetails.setupFees.botDevelopment }}
          </div>
        </div>
      </div>
    </template>

    <!-- Features View -->
    <template v-else>
      <!-- Fixed Fees (from Pricing2) -->
      

      <!-- Original "features" object sections from old Pricing.vue -->
      <div v-for="(section, key) in features" :key="key" class="mb-12">
        <h3 class="text-xl font-bold mb-6">
          {{ formatSectionTitle(key) }}
        </h3>
        <div
          v-for="feature in section"
          :key="feature.name"
          class="grid grid-cols-5 gap-4 mt-4"
        >
          <div class="flex items-center gap-2">
            {{ feature.name }}
          </div>
          <div
            v-for="(available, idx) in feature.availability"
            :key="idx"
            class="text-center "
          >
            <template v-if="available === 'Y'">
              <check-icon size="20" class="text-green-500 ml-28" />
            </template>
            <template v-else-if="available === 'X'">
              <x-icon size="20" class="text-gray-300 ml-28" />
            </template>
            <template v-else>
              {{ available }}
            </template>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { CheckIcon as checkIcon, XIcon as xIcon } from "vue-feather-icons";

const currency = ref("INR");
const activeView = ref("pricing");
const billingPeriod = ref("monthly");

const periodMultipliers = {
  monthly: 1,
  quarterly: 3,
  yearly: 12
};

const periodDiscounts = {
  monthly: 1,
  quarterly: 0.9,
  yearly: 0.8
};

const plans = ref([
  {
    name: "Lite",
    basePrice: 999,
    buttonText: "Get Started",
    users: "1",
    channels: "1",
    channel: "WhatsApp"
  },
  {
    name: "Eco",
    basePrice: 1999,
    buttonText: "Get Started",
    users: "5",
    channels: "Any 2",
    channel: "WhatsApp + Messenger"
  },
  {
    name: "Pro",
    basePrice: 3999,
    buttonText: "Get Started",
    users: "7",
    channels: "Any 3",
    channel: "Eco + Telegram"
  },
  {
    name: "Enterprise",
    basePrice: "Ask For Price",
    buttonText: "Contact Sales",
    users: "10",
    channels: "All",
    channel: "Pro + Email + SMS"
  }
]);

const features = ref({
  SmartConversations: [
    {
      name: "Users – Admin / Agent",
      availability: ["1", "5", "7", "10"]
    },
    {
      name: "Communication Channels",
      availability: ["1", "Any 2", "Any 3", "All"]
    }
  ],
  ConversationsInbound: [
    {
      name: "Team Inbox, Auto-routing, Tags, Masking, Grouping, Analytics",
      availability: ["Y", "Y", "Y", "Y"]
    },
    {
      name: "Agent Paraphrase - Open AI",
      availability: ["Y", "Y", "Y", "Y"]
    },
    {
      name: "Follow-up, Appointments, Table Bookings",
      availability: ["Y", "X", "Y", "Y"]
    }
  ],
  Bots: [
    {
      name: "Basic chatbots, Auto responders, OOO",
      availability: ["Y", "Y", "Y", "Y"]
    },
    {
      name: "Advanced Interconnected BOTs",
      availability: ["X", "Y", "Y", "Y"]
    }
  ],
  OpenAIChatGPT: [
    {
      name: "AI Handovers, Summaries, Sentiment Analysis",
      availability: ["X", "Y", "Y", "Y"]
    }
  ],
  WhatsApp: [
    {
      name: "Text, image, video messaging",
      availability: ["Y", "Y", "Y", "Y"]
    },
    {
      name: "Custom Image Templates",
      availability: ["Y", "Y", "Y", "Y"]
    },
    {
      name: "Flows, Catalog, Carousel, Single Product message, Authentication",
      availability: ["Y", "Y", "Y", "Y"]
    }
  ],
  MarketingLeadGeneration: [
    {
      name: "Campaign Management, CTA tracking, Analytics",
      availability: ["Y", "Y", "Y", "Y"]
    },
    {
      name: "Click to WhatsApp Ads Insights",
      availability: ["Y", "Y", "Y", "Y"]
    },
    {
      name: "Campaign Scheduling - WA",
      availability: ["Y", "X", "Y", "Y"]
    }
  ],
  CustomerManagement: [
    {
      name: "Customer Management",
      availability: ["Y", "X", "X", "Y"]
    },
    {
      name: "Dynamic Groups and filters",
      availability: ["Y", "X", "X", "Y"]
    },
    {
      name: "Relationship Management",
      availability: ["Y", "X", "X", "Y"]
    }
  ],
  AgentMobileApp: [
    {
      name: "IOS and Android",
      availability: ["Y", "Y", "Y", "Y"]
    }
  ],
  OnboardingAndSupportPlans: [
    {
      name: "Assisted onboarding",
      availability: ["Y", "Y", "Y", "Y"]
    },
    {
      name: "Email & WhatsApp support",
      availability: [
        "10 hrs/day x 7 days/week",
        "10 hrs/day x 7 days/week",
        "10 hrs/day x 7 days/week",
        "10 hrs/day x 7 days/week"
      ]
    },
    {
      name: "SLA - Response Times",
      availability: ["12 hrs", "6 hrs", "6 hrs", "4 hrs"]
    },
    {
      name: "WhatsApp, Email and Call based support",
      availability: ["X", "X", "included", "included"]
    },
    {
      name: "WhatsApp, Email and Call based support 12 * 6",
      availability: ["X", "X", "X", "included"]
    },
    {
      name: "Support Hours",
      availability: ["9am - 7pm", "9am - 7pm", "9am - 7pm", "9am - 7pm"]
    },
    {
      name: "Support Days",
      availability: [
        "Week Days, local Geo",
        "Week Days, local Geo",
        "Week Days, local Geo",
        "Week Days, local Geo"
      ]
    }
  ]
});



// Example pricingDetails object to match Pricing2 patterns
const pricingDetails = {
  usageBasedFees: {
    dau: {
      lite: 0.015,
      eco: 0.005,
      pro: 0.004,
      enterprise: 0.004
    },
    imageCreation: {
      lite: 0.003,
      eco: 0.0015,
      pro: 0.0015,
      enterprise: 0.0015
    },
    chatGPT: {
      lite: 0.006,
      eco: "x",
      pro: "x",
      enterprise: 0.003
    }
  },
  freeUtilities: {
    monthlyDAU: {
      lite: 100,
      eco: 200,
      pro: 500,
      enterprise: 1000
    },
    freeImages: {
      lite: 50,
      eco: 100,
      pro: 200,
      enterprise: 500
    },
    freeBotConversations: {
      lite: 100,
      eco: 150,
      pro: 200,
      enterprise: 500
    }
  },
  costs: {
    perAgent: {
      lite: 99,
      eco: 79,
      pro: 59,
      enterprise: 49
    }
  },
  deposit: {
    topUp: {
      lite: 500,
      eco: 1000,
      pro: 2000,
      enterprise: 5000
    }
  },
  setupFees: {
    facebook: {
      lite: 100,
      eco: 200,
      pro: 300,
      enterprise: 500
    },
    openAI: {
      lite: "x",
      eco: 99,
      pro: 199,
      enterprise: 499
    },
    botDevelopment: "Custom Pricing"
  },
  fixedFees: {
    monthly: {
      lite: 999,
      eco: 1999,
      pro: 3999,
      enterprise: "Ask"
    },
    quarterly: {
      lite: "x",
      eco: 4999,
      pro: 9999,
      enterprise: "Ask"
    },
    annual: {
      lite: "x",
      eco: 17999,
      pro: 29999,
      enterprise: "Ask"
    }
  }
};

const adjustedPlans = computed(() => {
  return plans.value.map(plan => {
    if (typeof plan.basePrice === "number") {
      const multiplier = periodMultipliers[billingPeriod.value];
      const discount = periodDiscounts[billingPeriod.value];
      return {
        ...plan,
        price: plan.basePrice * multiplier * discount
      };
    }
    return plan;
  });
});

const formatSectionTitle = key => {
  return key.split(/(?=[A-Z])/).join(" ");
};

const formatFixedFee = (period, planName) => {
  const fees = pricingDetails.fixedFees[period];
  const fee = fees[planName.toLowerCase()];
  if (fee === "x") return "x";
  if (typeof fee === "string") return fee;
  if (currency.value === "USD") {
    // Example different USD values for demonstration
    const usdPrices = {
      monthly: { lite: "x", eco: 29.99, pro: 49.99, enterprise: "Ask" },
      quarterly: { lite: "x", eco: 79.99, pro: 134.99, enterprise: "Ask" },
      annual: { lite: "x", eco: 289.99, pro: 469.99, enterprise: "Ask" }
    };
    return usdPrices[period][planName.toLowerCase()] || fee;
  }
  return fee;
};

const formatPrice = price => {
  if (typeof price === "string") return price;
  if (typeof price !== "number") return price;
  if (currency.value === "INR") {
    return price.toFixed(2);
  } else {
    // Quick approximation for USD
    return (price / 83).toFixed(2);
  }
};
</script>

<style scoped>
.grid-cols-5 > *:first-child {
  grid-column: 1;
}
</style>