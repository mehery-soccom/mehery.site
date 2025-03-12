<template>
  <Navbar />
  <div class="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8 pb-16 ">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-start">FAQs</h2>

      <div class="space-y-8">
        <div
          v-for="(faq, index) in faqs"
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
              class="rounded-full border-2 w-10 h-10 flex  justify-center text-2xl transition-all duration-300 flex-shrink-0 mt-2"
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
import { ref, onMounted } from 'vue'
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

const faqs = ref([]);

onMounted(() => {
  loadFaqs();
});

const loadFaqs = () => {
  faqs.value = JSON.parse(localStorage.getItem('faqs') || '[]');
};

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>