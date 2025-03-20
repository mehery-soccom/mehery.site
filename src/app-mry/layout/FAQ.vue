<template>
  <Navbar />
  <div class="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8 pb-16">
    <div class="max-w-5xl mx-auto">
      <!-- Title and Search Bar -->
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-bold">FAQs</h2>
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search FAQs..."
            class="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      </div>

      <!-- FAQs List -->
      <div class="space-y-8">
        <div
          v-for="(faq, index) in filteredFaqs"
          :key="index"
          class="border-2 rounded-3xl p-2 cursor-pointer transition-all duration-300"
          :class="[
            faq.isOpen ? 'shadow-lg' : 'hover:shadow-md',
            'hover:border-gray-400'
          ]"
          @click="toggleFaq(index)"
        >
          <div class="flex items-start justify-between gap-3 scale-90">
            <div class="flex gap-8 items-start flex-1">
              <span class="text-4xl font-medium text-gray-300 font-mono">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <div class="flex- min-w-0">
                <h3 class="text-xl font-medium mb-4 pt-2">{{ faq.title }}</h3>
                <Transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <div v-show="faq.isOpen" class="text-gray-600 text-lg leading-relaxed" v-html="faq.content"></div>
                </Transition>
              </div>
            </div>
            <button
              class="rounded-full border-2 w-10 h-10 flex justify-center text-2xl transition-all duration-300 flex-shrink-0 mt-2"
              :class="faq.isOpen
                ? 'bg-black text-white border-black'
                : 'bg-white text-black hover:bg-gray-50'"
            >
              <span class="transform transition-transform duration-300" :class="faq.isOpen ? 'rotate-180' : ''">
                {{ faq.isOpen ? '−' : '+' }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>


<script setup>
import { ref, computed, onMounted } from 'vue';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

// Predefined FAQs
const predefinedFaqs = [
  {
    title: 'Can I use my existing WhatsApp number with Mehery?',
    content: `
      Yes, you can use your existing WhatsApp number with Mehery. However, before onboarding:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>You must delete the WhatsApp account linked to that number.</li>
        <li>If your number is used with another WhatsApp Business API provider (BSP), you can migrate it to Mehery after disabling the Two-Factor Authentication (2FA) PIN from your existing BSP.</li>
        <li>Alternatively, you can provide a new phone number (virtual or regular SIM) to receive an OTP.</li>
      </ul>
      Once migrated:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Your number will be accessible only on the Mehery platform.</li>
        <li>Virtual numbers support regular voice calls but not WhatsApp voice and video calls via the WhatsApp Business API.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'What is conversation-based pricing on WhatsApp?',
    content: `
      WhatsApp introduced a conversation-based pricing model in February 2022. Key points:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Businesses are charged per 24-hour messaging session with a customer.</li>
        <li>Multiple messages within a 24-hour period incur a single charge for that session.</li>
        <li>For more details, refer to WhatsApp's official pricing documentation.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'If WhatsApp is free, why does conversation-based pricing apply?',
    content: `
      While WhatsApp is free for personal use, businesses using the WhatsApp Business API are charged:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Based on conversation pricing.</li>
        <li>Costs vary depending on the customer's country code and the type of message templates used.</li>
        <li>For pricing details, visit WhatsApp's official pricing page.</li>
      </ul>
    `,
    isOpen: false
  },
  // Continue with the rest of your FAQs in the same format
  // I've shown the pattern for the first few as examples
]
// Reactive state
const faqs = ref([]);
const searchQuery = ref('');

// Computed property to filter FAQs
const filteredFaqs = computed(() => {
  if (!searchQuery.value) return faqs.value;
  const query = searchQuery.value.toLowerCase();
  return faqs.value.filter(
    (faq) =>
      faq.title.toLowerCase().includes(query) ||
      faq.content.toLowerCase().includes(query)
  );
});

// Load FAQs from local storage or initialize with predefined FAQs
const loadFaqs = () => {
  const storedFaqs = JSON.parse(localStorage.getItem('faqs') || '[]');
  // Merge stored FAQs with predefined FAQs, avoiding duplicates
  const mergedFaqs = [...predefinedFaqs, ...storedFaqs.filter(storedFaq => 
    !predefinedFaqs.some(predefinedFaq => predefinedFaq.title === storedFaq.title)
  )];
  faqs.value = mergedFaqs;
  // Save the merged list back to local storage
  localStorage.setItem('faqs', JSON.stringify(mergedFaqs));
};

// Toggle FAQ open/close state
const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};

// Load FAQs on component mount
onMounted(() => {
  loadFaqs();
});
</script>