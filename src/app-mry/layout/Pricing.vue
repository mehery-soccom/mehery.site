<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Header Section -->
    <div class="flex flex-col sm:flex-row justify-between items-center mb-12 gap-4">
      <h2 class="text-3xl font-bold">

        Affordable, Transparent, and Flexible <span class="text-red-500">Pricing Plans for Every Stage of Growth</span>
      </h2>
      
      <div class="flex gap-4">
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium">Currency:</span>
          <button 
            @click="toggleCurrency"
            class="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {{ showUSD ? 'USD' : 'INR' }}
          </button>
        </div>
        
        <div class="flex items-center gap-2">
          <span class="text-sm font-medium">Features:</span>
          <button 
            @click="toggleView"
            class="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {{ showFeatures ? 'Show Pricing' : 'Show Features' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Pricing Cards -->
    <div v-if="!showFeatures" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <div 
        v-for="(plan, planIndex) in plans" 
        :key="plan.name" 
        class="border p-6 rounded-lg shadow-lg flex flex-col hover:shadow-xl transition-shadow"
      >
        <!-- Plan Header -->
        <div class="mb-8">
          <h3 class="text-2xl font-bold mb-2">{{ plan.name }}</h3>
          <div class="text-3xl font-bold mb-4">
            {{ showUSD ? plan.prices.usd : plan.prices.inr }}
            <span class="text-sm font-normal text-gray-500">/month</span>
          </div>
          <button class="w-full py-3 rounded-md bg-red-500 hover:bg-red-600 text-white transition-colors">
            {{ plan.buttonText }}
          </button>
        </div>

        <!-- Plan Features -->
        <div class="space-y-6 flex-1">
          <!-- Fixed Fees -->
          <div>
            <h4 class="font-semibold mb-3 border-b pb-2">Fixed Fees</h4>
            <div class="flex items-center">
              <check-icon size="18" class="text-green-500 mr-2 flex-shrink-0"/>
              <span>{{ showUSD ? plan.fixedFees.usd : plan.fixedFees.inr }}</span>
            </div>
          </div>

          <!-- Usage-Based Fees -->
          <div>
            <h4 class="font-semibold mb-3 border-b pb-2">Usage Based Fees</h4>
            <ul class="space-y-2">
              <li 
                v-for="(value, key) in plan.usageBasedFees" 
                :key="key" 
                class="flex items-center"
              >
                <template v-if="value !== 'x'">
                  <check-icon size="16" class="text-green-500 mr-2 flex-shrink-0"/>
                  <span>{{ key }}: {{ currencySymbol }}{{ showUSD ? value.usd : value.inr }}</span>
                </template>
                <template v-else>
                  <x-icon size="16" class="text-gray-300 mr-2 flex-shrink-0"/>
                  <span class="text-gray-400">{{ key }}: Not included</span>
                </template>
              </li>
            </ul>
          </div>

          <!-- Free Utilities -->
          <div>
            <h4 class="font-semibold mb-3 border-b pb-2">Free Utilities</h4>
            <ul class="space-y-2">
              <li 
                v-for="(value, key) in plan.freeUtilities" 
                :key="key" 
                class="flex items-center"
              >
                <check-icon size="16" class="text-green-500 mr-2 flex-shrink-0"/>
                <span>{{ formatUtilityKey(key) }}: {{ value }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature Comparison -->
    <div v-else class="bg-white rounded-lg shadow-lg p-8">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b">
              <th class="text-left py-4 px-4 w-1/3">Feature</th>
              <th v-for="plan in plans" :key="plan.name" class="text-center py-4 px-4">
                {{ plan.name }}
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(section, sectionKey) in features" :key="sectionKey">
              <!-- Section Header -->
              <tr class="bg-gray-50">
                <td colspan="5" class="py-4 px-4 font-bold text-lg">
                  {{ formatSectionTitle(sectionKey) }}
                </td>
              </tr>
              
              <!-- Section Features -->
              <tr 
                v-for="feature in section" 
                :key="feature.name"
                class="border-b hover:bg-gray-50 transition-colors"
              >
                <td class="py-4 px-4">{{ feature.name }}</td>
                <td 
                  v-for="(available, idx) in feature.availability" 
                  :key="idx"
                  class="text-center py-4 px-4"
                >
                  <check-icon 
                    v-if="available === 'Y'" 
                    size="20" 
                    class="inline-block text-green-500" 
                  />
                  <x-icon 
                    v-else-if="available === 'X'" 
                    size="20" 
                    class="inline-block text-gray-300" 
                  />
                  <span 
                    v-else 
                    class="text-sm"
                  >{{ available }}</span>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { CheckIcon, XIcon } from 'vue-feather-icons';

const showUSD = ref(false);
const showFeatures = ref(false);

const toggleCurrency = () => {
  showUSD.value = !showUSD.value;
};

const toggleView = () => {
  showFeatures.value = !showFeatures.value;
};

const currencySymbol = computed(() => {
  return showUSD.value ? '$' : '₹';
});

const formatSectionTitle = (key) => {
  return key.split(/(?=[A-Z])/).join(' ');
};

const formatUtilityKey = (key) => {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase())
    .replace('Dau', 'DAU');
};

// Pricing Data
const plans = ref([
  {
    name: 'Lite',
    prices: { inr: 'NA', usd: 'NA' },
    buttonText: 'Get Started',
    fixedFees: { inr: 'NA', usd: 'NA' },
    usageBasedFees: {
      DAU: { inr: '1.25', usd: '0.05' },
      'Image Creation': { inr: '0.25', usd: '0.012' },
      ChatGPT: { inr: '0.50', usd: '0.012' }
    },
    freeUtilities: {
      monthlyDAU: '100',
      freeImages: '50',
      freeBotConversations: '100'
    }
  },
  {
    name: 'Eco',
    prices: { inr: '₹2,499', usd: '$65' },
    buttonText: 'Get Started',
    fixedFees: { inr: '₹2,499/month', usd: '$65/month' },
    usageBasedFees: {
      DAU: { inr: '0.04', usd: '0.006' },
      'Image Creation': { inr: '0.12', usd: '0.006' },
      ChatGPT: 'x'
    },
    freeUtilities: {
      monthlyDAU: '100',
      freeImages: '50',
      freeBotConversations: '100'
    }
  },
  {
    name: 'Pro',
    prices: { inr: '₹3,999', usd: '$149' },
    buttonText: 'Get Started',
    fixedFees: { inr: '₹3,999/month', usd: '$149/month' },
    usageBasedFees: {
      DAU: { inr: '0.03', usd: '0.006' },
      'Image Creation': { inr: '0.12', usd: '0.006' },
      ChatGPT: 'x'
    },
    freeUtilities: {
      monthlyDAU: '100',
      freeImages: '50',
      freeBotConversations: '100'
    }
  },
  {
    name: 'Enterprise',
    prices: { inr: 'On Request', usd: 'On Request' },
    buttonText: 'Contact Sales',
    fixedFees: { inr: 'On Request', usd: 'On Request' },
    usageBasedFees: {
      DAU: { inr: '0.03', usd: '0.006' },
      'Image Creation': { inr: '0.12', usd: '0.006' },
      ChatGPT: { inr: '0.25', usd: '0.006' }
    },
    freeUtilities: {
      monthlyDAU: '100',
      freeImages: '50',
      freeBotConversations: '100'
    }
  }
]);

// Features Data
const features = ref({
  SmartConversations: [
    { name: 'Users – Admin / Agent', availability: ['1', '5', '7', '10'] },
    { name: 'Communication Channels', availability: ['1', 'Any 2', 'Any 3', 'All'] }
  ],
  ConversationsInbound: [
    { name: 'Team Inbox, Auto-routing, Tags, Masking, Grouping, Analytics', availability: ['Y', 'Y', 'Y', 'Y'] },
    { name: 'Chat GPT Paraphrase', availability: ['Y', 'X', 'Y', 'Y'] },
    { name: 'Follow-up, Appointments, Table Bookings', availability: ['Y', 'X', 'Y', 'Y'] }
  ],
  Bots: [
    { name: 'Basic chatbots, Auto responders, OOO', availability: ['Y', 'Y', 'Y', 'Y'] },
    { name: 'Advanced Interconnected BOTs', availability: ['Y', 'Y', 'Y', 'Y'] }
  ],
  OpenAIChatGPT: [
    { name: 'Instructor, Knowledgebase', availability: ['Y', 'X', 'X', 'Y'] },
    { name: 'Agent AI conversational BOT', availability: ['Y', 'X', 'X', 'Y'] },
    { name: 'Custom BOT Scripting with OpenAI', availability: ['Y', 'X', 'X', 'Y'] }
  ],
  WhatsApp: [
    { name: 'Text, image, video messaging', availability: ['Y', 'Y', 'Y', 'Y'] },
    { name: 'Custom Image Templates', availability: ['Y', 'Y', 'Y', 'Y'] },
    { name: 'Flows, Catalog, Carousel, Single Product message, Authentication', availability: ['Y', 'Y', 'Y', 'Y'] }
  ],
  MarketingLeadGeneration: [
    { name: 'Campaign Management, CTA tracking, Analytics', availability: ['Y', 'Y', 'Y', 'Y'] },
    { name: 'Click to WhatsApp Ads Insights', availability: ['Y', 'Y', 'Y', 'Y'] },
    { name: 'Campaign Scheduling - WA', availability: ['Y', 'X', 'Y', 'Y'] }
  ],
  CustomerManagement: [
    { name: 'Customer Management', availability: ['Y', 'X', 'X', 'Y'] },
    { name: 'Dynamic Groups and filters', availability: ['Y', 'X', 'X', 'Y'] },
    { name: 'Relationship Management', availability: ['Y', 'X', 'X', 'Y'] }
  ],
  AgentMobileApp: [
    { name: 'IOS and Android', availability: ['Y', 'Y', 'Y', 'Y'] }
  ],
  OnboardingAndSupportPlans: [
    { name: 'Assisted onboarding', availability: ['Y', 'Y', 'Y', 'Y'] },
    { name: 'Email & WhatsApp support', availability: ['10 hrs/day x 7 days/week', '10 hrs/day x 7 days/week', '10 hrs/day x 7 days/week', '10 hrs/day x 7 days/week'] },
    { name: 'SLA - Response Times', availability: ['12 hrs', '6 hrs', '6 hrs', '4 hrs'] },
    { name: 'WhatsApp, Email and Call based support', availability: ['X', 'X', 'included', 'included'] },
    { name: 'WhatsApp, Email and Call based support 12 * 6', availability: ['X', 'X', 'X', 'included'] },
    { name: 'Support Hours', availability: ['9am - 7pm', '9am - 7pm', '9am - 7pm', '9am - 7pm'] },
    { name: 'Support Days', availability: ['Week Days, local Geo', 'Week Days, local Geo', 'Week Days, local Geo', 'Week Days, local Geo'] }
  ]
});
</script>