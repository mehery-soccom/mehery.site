<template>
  <div class="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-4xl font-bold mb-16 text-start">FAQs</h2>
      
      <div class="space-y-8">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border-2 rounded-3xl p-8 cursor-pointer transition-all duration-300"
          :class="[
            faq.isOpen ? 'shadow-lg' : 'hover:shadow-md',
            'hover:border-gray-400'
          ]"
          @click="toggleFaq(index)"
        >
          <div class="flex items-start justify-between gap-8">
            <div class="flex gap-8 items-start flex-1">
              <span class="text-4xl font-medium text-gray-300 font-mono">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <div class="flex-1 min-w-0">
                <h3 class="text-2xl font-medium mb-4">{{ faq.title }}</h3>
                <Transition
                  enter-active-class="transition duration-300 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <div
                    v-show="faq.isOpen"
                    class="text-gray-600 text-lg leading-relaxed"
                  >
                    {{ faq.content }}
                  </div>
                </Transition>
              </div>
            </div>
            <button
              class="rounded-full border-2 w-12 h-12 flex items-center justify-center text-2xl transition-all duration-300 flex-shrink-0"
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
</template>

<script setup>
import { ref } from 'vue'

const faqs = ref([
  {
    title: 'Consultation',
    content: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    isOpen: true
  },
  {
    title: 'Research and Strategy Development',
    content: 'We conduct thorough market research and develop comprehensive strategies tailored to your business objectives.',
    isOpen: false
  },
  {
    title: 'Implementation',
    content: 'Our team executes the developed strategies with precision and attention to detail.',
    isOpen: false
  },
  {
    title: 'Monitoring and Optimization',
    content: 'We continuously monitor performance metrics and optimize strategies for maximum effectiveness.',
    isOpen: false
  },
  {
    title: 'Reporting and Communication',
    content: 'Regular reports and updates keep you informed about progress and results.',
    isOpen: false
  },
  {
    title: 'Continual Improvement',
    content: 'We constantly refine and improve our approaches based on performance data and feedback.',
    isOpen: false
  }
])

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>