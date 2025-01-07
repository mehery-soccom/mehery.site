<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Header with Currency Toggle -->
    <div class="flex justify-between items-center mb-12">
      <h2 class="text-3xl font-bold">Compare Our <span class="text-red-500">Pricings</span></h2>
      <div class="flex items-center gap-2 bg-gray-100 p-2 rounded-full">
        <button 
          @click="currency = 'INR'"
          :class="['px-4 py-2 rounded-full transition-all', 
                  currency === 'INR' ? 'bg-white shadow' : '']"
        >
          India
        </button>
        <button 
          @click="currency = 'USD'"
          :class="['px-4 py-2 rounded-full transition-all', 
                  currency === 'USD' ? 'bg-white shadow' : '']"
        >
          International
        </button>
      </div>
    </div>

    <!-- Billing Information -->
    <div class="mb-8 text-sm text-gray-600">
      <p>Billing Frequency and Pricing constraints</p>
      <p>of Mehery Smart Conversations</p>
    </div>

    <!-- Pricing Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div 
            v-for="plan in plans" 
            :key="plan.name" 
            :class="[
            'p-6 rounded-lg border transition-all hover:shadow-lg', 
            
                'bg-white-500  hover:bg-red-500 hover:text-white text-black' 
                
            ]"
        >
            <div class="text-lg font-medium mb-2">{{ plan.name }}</div>
            <div class="text-3xl font-bold mb-4">
            {{ currency === 'INR' ? '₹' : '$' }}{{ formatPrice(plan.price) }}
            <span class="text-sm font-normal" v-if="plan.period">/{{ plan.period }}</span>
            </div>
            <button 
            :class="[
                'w-full py-2 px-4 rounded-md transition-all text-sm', 
                
                'bg-white text-black hover:bg-red-100 hover:text-red-600 border-2 ' 
                
            ]"
            >
            {{ plan.buttonText }}
            </button>
        </div>
    </div>


    <!-- Per Conversation Fee -->
    <div class="mb-12">
      <h3 class="text-xl font-bold mb-6">Per Conversation Fee</h3>
      
      <div class="grid grid-cols-5 gap-4 mt-4">
        <div class="font-medium">Per Conversation - M</div>
        <div v-for="plan in plans" :key="`m-${plan.name}`" class="text-center">
          {{ currency === 'INR' ? '₹' : '$' }}0.10
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4 mt-4">
        <div class="font-medium">Per Conversation - U</div>
        <div v-for="plan in plans" :key="`u-${plan.name}`" class="text-center">
          {{ currency === 'INR' ? '₹' : '$' }}0.02
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4 mt-4">
        <div class="font-medium">Per Conversation - A</div>
        <div v-for="plan in plans" :key="`a-${plan.name}`" class="text-center">
          {{ currency === 'INR' ? '₹' : '$' }}0.02
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4 mt-4">
        <div class="font-medium">Per Conversation - S</div>
        <div v-for="plan in plans" :key="`s-${plan.name}`" class="text-center">
          {{ currency === 'INR' ? '₹' : '$' }}0.10
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4 mt-4">
        <div class="font-medium">Deposit - Minimum</div>
        <div v-for="plan in plans" :key="`deposit-${plan.name}`" class="text-center">
          {{ currency === 'INR' ? '₹' : '$' }}{{ formatPrice(1000) }}
        </div>
      </div>
    </div>

    <!-- Smart Conversations -->
    <div class="mb-12">
      <h3 class="text-xl font-bold mb-6">Smart Conversations</h3>
      <div class="grid grid-cols-5 gap-4">
        <div class="flex items-center gap-2">
          Number of Users/Admin
          <info-icon size="16" class="text-gray-400" />
        </div>
        <div v-for="plan in plans" :key="`users-${plan.name}`" class="text-center">
          {{ plan.users }}
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4 mt-4">
        <div class="flex items-center gap-2">
          Communication Channels
          <info-icon size="16" class="text-gray-400" />
        </div>
        <div v-for="plan in plans" :key="`channels-${plan.name}`" class="text-center">
          {{ plan.channels }}
        </div>
      </div>
      <div class="grid grid-cols-5 gap-4 mt-4">
        <div class="flex items-center gap-2">  
        </div>
        <div v-for="plan in plans" :key="`channels-${plan.name}`" class="text-center">
          {{ plan.channel }}
        </div>
      </div>
    </div>

    <!-- Conversations -->
    <div class="mb-12">
      <h3 class="text-xl font-bold mb-6">Conversations</h3>
      <div v-for="feature in features.conversations" :key="feature.name" 
           class="grid grid-cols-5 gap-4 mt-4">
        <div class="flex items-center gap-2">
          {{ feature.name }}
          <info-icon v-if="feature.hasInfo" size="16" class="text-gray-400" />
        </div>
        <div v-for="(available, index) in feature.availability" 
             :key="index" 
             class="flex justify-center">
          <check-icon v-if="available" size="20" class="text-green-500" />
          <x-icon v-else size="20" class="text-gray-300" />
        </div>
      </div>
    </div>

    <!-- Marketing Lead -->
    <div class="mb-12">
      <h3 class="text-xl font-bold mb-6">Marketing Lead</h3>
      <div v-for="feature in features.marketing" :key="feature.name" 
           class="grid grid-cols-5 gap-4 mt-4">
        <div class="flex items-center gap-2">
          {{ feature.name }}
          <info-icon v-if="feature.hasInfo" size="16" class="text-gray-400" />
        </div>
        <div v-for="(available, index) in feature.availability" 
             :key="index" 
             class="flex justify-center">
          <check-icon v-if="available" size="20" class="text-green-500" />
          <x-icon v-else size="20" class="text-gray-300" />
        </div>
      </div>
    </div>

    <!-- Bots -->
    <div class="mb-12">
      <h3 class="text-xl font-bold mb-6">Bots</h3>
      <div v-for="feature in features.bots" :key="feature.name" 
           class="grid grid-cols-5 gap-4 mt-4">
        <div class="flex items-center gap-2">
          {{ feature.name }}
          <info-icon v-if="feature.hasInfo" size="16" class="text-gray-400" />
        </div>
        <div v-for="(available, index) in feature.availability" 
             :key="index" 
             class="flex justify-center">
          <check-icon v-if="available" size="20" class="text-green-500" />
          <x-icon v-else size="20" class="text-gray-300" />
        </div>
      </div>
    </div>

    <!-- Whatsapp -->
    <div class="mb-12">
      <h3 class="text-xl font-bold mb-6">Whatsapp</h3>
      <div v-for="feature in features.whatsapp" :key="feature.name" 
           class="grid grid-cols-5 gap-4 mt-4">
        <div class="flex items-center gap-2">
          {{ feature.name }}
          <info-icon v-if="feature.hasInfo" size="16" class="text-gray-400" />
        </div>
        <div v-for="(available, index) in feature.availability" 
             :key="index" 
             class="flex justify-center">
          <check-icon v-if="available" size="20" class="text-green-500" />
          <x-icon v-else size="20" class="text-gray-300" />
        </div>
      </div>
    </div>

    <!-- Customer Management -->
    <div class="mb-12">
      <h3 class="text-xl font-bold mb-6">Customer Management</h3>
      <div v-for="feature in features.customerManagement" :key="feature.name" 
           class="grid grid-cols-5 gap-4 mt-4">
        <div class="flex items-center gap-2">
          {{ feature.name }}
          <info-icon v-if="feature.hasInfo" size="16" class="text-gray-400" />
        </div>
        <div v-for="(available, index) in feature.availability" 
             :key="index" 
             class="flex justify-center">
          <check-icon v-if="available" size="20" class="text-green-500" />
          <x-icon v-else size="20" class="text-gray-300" />
        </div>
      </div>
    </div>

    <div class="mb-12">
      <h3 class="text-xl font-bold mb-6">Onboarding & Support Plans</h3>
      <div v-for="feature in features.onboardingManagement" :key="feature.name" 
           class="grid grid-cols-5 gap-4 mt-4">
        <div class="flex items-center gap-2">
          {{ feature.name }}
          <info-icon v-if="feature.hasInfo" size="16" class="text-gray-400" />
        </div>
        <div v-for="(available, index) in feature.availability" 
             :key="index" 
             class="flex justify-center">
          <check-icon v-if="available" size="20" class="text-green-500" />
          <x-icon v-else size="20" class="text-gray-300" />
        </div>
      </div>
    </div>


    <div class="mb-12">
      <h3 class="text-xl font-bold mb-6">Support</h3>
      <div v-for="support in support" :key="support.name" 
           class="grid grid-cols-5 gap-4 mt-4">
        <div class="flex items-center gap-2">
          {{ support.name }}
        </div>
        <div v-for="(available, index) in support.availability" 
             :key="index" 
             class="flex justify-center">
          <check-icon v-if="available" size="20" class="text-green-500" />
          <x-icon v-else size="20" class="text-gray-300" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { 
  CheckIcon, 
  XIcon, 
  InfoIcon 
} from 'vue-feather-icons'

const currency = ref('INR')

const plans = ref([
  {
    name: 'Lite',
    price: 0,
    period: 'annually',
    buttonText: 'Get Started',
    conversationFee: 0.10,
    users: '1',
    channels: '1',
    channel: "WhatsApp"
  },
  {
    name: 'Eco',
    price: 2499,
    period: 'annually',
    buttonText: 'Get Started',
    conversationFee: 0.10,
    users: '5',
    channels: 'Any 2',
    channel: "Lite + Webchat, Insta DM"
  },
  {
    name: 'Pro',
    price: 3999,
    period: 'annually',
    buttonText: 'Get Started',
    conversationFee: 0.10,
    users: '5',
    channels: 'Any 2',
    channel: "Eco + Messenger, Telegram, Email"
  },
  {
    name: 'Custom',
    price: 'Ask For Price',
    buttonText: 'Contact Our Sales',
    conversationFee: 0.10,
    users: 'Custom',
    channels: 'All',
    channel: "Pro + Email"
  }
])

const features = ref({
  conversations: [
    {
      name: 'Team Inbox, Assignment',
      hasInfo: true,
      availability: [true, true, true, true]
    },
    {
      name: 'Chat GPT Paraphrase',
      hasInfo: true,
      availability: [false, false, true, true]
    },
    {
      name: 'Follow-up, Appointments',
      hasInfo: true,
      availability: [false, false, true, true]
    }
  ],
  marketing: [
    {
      name: 'Campaign Management',
      hasInfo: true,
      availability: [true, true, true, true]
    },
    {
      name: 'Click to Whatsapp',
      hasInfo: true,
      availability: [false, false, true, true]
    },
    {
      name: 'Campaign Scheduling',
      hasInfo: true,
      availability: [false, false, true, true]
    }
  ],
  bots: [
    {
      name: 'Basic Chatbot',
      hasInfo: true,
      availability: [true, true, true, true]
    },
    {
      name: 'Advanced Interconnected bot',
      hasInfo: true,
      availability: [false, false, false, true]
    },
    {
      name: 'Outside working hours',
      hasInfo: true,
      availability: [false, false, true, true]
    }
  ],
  whatsapp: [
    {
      name: 'Text, image, video messaging',
      hasInfo: true,
      availability: [true, true, true, true]
    },
    {
      name: 'Custom image templates',
      hasInfo: true,
      availability: [false, false, false, true]
    },
    {
      name: 'Flowm Catalog, Carousel',
      hasInfo: true,
      availability: [false, false, false, true]
    }
  ],
  customerManagement: [
    {
      name: 'Customer management',
      hasInfo: true,
      availability: [false, false, false, true]
    }
  ],

  onboardingManagement: [
    {
      name: 'Assisted Onboarding',
      hasInfo: true,
      availability: [true, true, true, true]
    }
  ],

})

const support = ref([
  {
    name: 'Email & Whatsapp',
    hasInfo: true,
    availability: [true, true, true, true]
  },
  {
    name: 'Support Hours',
    hasInfo: true,
    availability: [true, true, true, true]
  },
  {
    name: 'Support Days',
    hasInfo: true,
    availability: [true, true, true, true]
  }
])

const formatPrice = (price) => {
  if (typeof price === 'string') return price
  if (currency.value === 'INR') {
    return price.toFixed(2)
  }
  return (price / 83).toFixed(2) 
}

watch(currency, (newCurrency) => {

  plans.value = plans.value.map(plan => ({
    ...plan,
    conversationFee: newCurrency === 'INR' 
      ? plan.conversationFee 
      : plan.conversationFee / 83
  }))
})
</script>

<style scoped>
.grid-cols-5 > *:first-child {
  grid-column: 1;
}
</style>