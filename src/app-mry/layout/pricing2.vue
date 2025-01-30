<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-12 text-center">
      Compare Our <span class="text-red-500">Pricings</span>
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      <div v-for="plan in plans" :key="plan.name" class="border p-6 rounded-lg shadow-lg">
        <h3 class="text-2xl font-bold mb-4">{{ plan.name }}</h3>
        <div class="text-3xl font-bold mb-6">
          {{ plan.price }}
          <span class="text-sm font-normal">/month</span>
        </div>
        <button class="w-full py-2 px-4 rounded-md transition-all text-sm bg-red-500 text-white hover:bg-red-600 mb-6">
          {{ plan.buttonText }}
        </button>

        <div class="space-y-4">
          <div>
            <h4 class="font-semibold mb-2">Fixed Fees</h4>
            <p>{{ plan.fixedFees }}</p>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Usage Based Fees</h4>
            <ul class="list-none pl-0">
              <li v-for="(value, key) in plan.usageBasedFees" :key="key" class="flex items-center">
                <check-icon v-if="value !== 'x'" size="16" class="text-green-500 mr-2" />
                <x-icon v-else size="16" class="text-gray-300 mr-2" />
                {{ key }}: {{ value }}
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-2">Free Utilities</h4>
            <ul class="list-none pl-0">
              <li v-for="(value, key) in plan.freeUtilities" :key="key" class="flex items-center">
                <check-icon size="16" class="text-green-500 mr-2" />
                {{ formatUtilityKey(key) }}: {{ value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div v-for="(section, key) in features" :key="key" class="mb-12">
      <h3 class="text-xl font-bold mb-6">{{ formatSectionTitle(key) }}</h3>
      <div v-for="feature in section" :key="feature.name" class="grid grid-cols-5 gap-4 mt-4">
        <div class="col-span-2">{{ feature.name }}</div>
        <div v-for="(available, idx) in feature.availability" :key="idx" class="text-center">
          <check-icon v-if="available === 'Y'" size="20" class="inline-block text-green-500" />
          <x-icon v-else-if="available === 'X'" size="20" class="inline-block text-gray-300" />
          <span v-else>{{ available }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { CheckIcon, XIcon } from 'vue-feather-icons';

const plans = ref([
  {
    name: 'Lite',
    price: '999',
    buttonText: 'Get Started',
    fixedFees: '999/month',
    usageBasedFees: {
      DAU: '0.015',
      'Image Creation': '0.003',
      ChatGPT: '0.006'
    },
    freeUtilities: {
      monthlyDAU: '100',
      freeImages: '50',
      freeBotConversations: '100'
    }
  },
  {
    name: 'Eco',
    price: '1,999',
    buttonText: 'Get Started',
    fixedFees: '1,999/month',
    usageBasedFees: {
      DAU: '0.005',
      'Image Creation': '0.0015',
      ChatGPT: 'x'
    },
    freeUtilities: {
      monthlyDAU: '200',
      freeImages: '100',
      freeBotConversations: '150'
    }
  },
  {
    name: 'Pro',
    price: '3,999',
    buttonText: 'Get Started',
    fixedFees: '3,999/month',
    usageBasedFees: {
      DAU: '0.004',
      'Image Creation': '0.0015',
      ChatGPT: 'x'
    },
    freeUtilities: {
      monthlyDAU: '500',
      freeImages: '200',
      freeBotConversations: '200'
    }
  },
  {
    name: 'Enterprise',
    price: 'Ask For Price',
    buttonText: 'Contact Sales',
    fixedFees: 'Custom',
    usageBasedFees: {
      DAU: '0.004',
      'Image Creation': '0.0015',
      ChatGPT: '0.003'
    },
    freeUtilities: {
      monthlyDAU: '1000',
      freeImages: '500',
      freeBotConversations: '500'
    }
  }
]);

const features = ref({
  SmartConversations: [
    { name: 'Users – Admin / Agent', availability: ['1', '5', '7', '10'] },
    { name: 'Communication Channels', availability: ['1', 'Any 2', 'Any 3', 'All'] }
  ],
  ConversationsInbound: [
    { name: 'Team Inbox, Auto-routing, Tags, Masking, Grouping, Analytics', availability: ['Y', 'Y', 'Y', 'Y'] },
    { name: 'Agent Paraphrase - Open AI', availability: ['Y', 'Y', 'Y', 'Y'] },
    { name: 'Follow-up, Appointments, Table Bookings', availability: ['Y', 'X', 'Y', 'Y'] }
  ],
  Bots: [
    { name: 'Basic chatbots, Auto responders, OOO', availability: ['Y', 'Y', 'Y', 'Y'] },
    { name: 'Advanced Interconnected BOTs', availability: ['X', 'Y', 'Y', 'Y'] }
  ],
  OpenAIChatGPT: [
    { name: 'AI Handovers, Summaries, Sentiment Analysis', availability: ['X', 'Y', 'Y', 'Y'] }
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

const formatSectionTitle = (key) => {
  return key.split(/(?=[A-Z])/).join(' ');
};

const formatUtilityKey = (key) => {
  return key
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
};
</script>