<template>
  <nav
    :class="{
      'bg-white/90 shadow-sm py-2': isScrolled,
      'py-4': !isScrolled
    }"
    class="w-full transition-all duration-300 sticky top-0 z-50 backdrop-blur-md"
  >
    <div class="flex items-center justify-between px-4">

      <div class="flex items-center">
        <img
          class="w-32 sm:w-40 md:w-44 hover:opacity-90 transition-opacity"
          src="../../@assets/images/logo.svg"
          alt="Logo"
        />
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-6">
        <template v-for="item in navItems" :key="item.id">
          <a
            @click="scrollToSection(item.id)"
            class="text-gray-700 hover:text-gray-900 cursor-pointer text-sm font-medium transition-colors duration-300 relative group"
          >
            {{ item.label }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </template>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button 
          @click="toggleMobileMenu" 
          class="text-gray-700 hover:text-gray-900 focus:outline-none p-1.5 rounded-lg transition-colors duration-300"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="transform -translate-y-2 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-2 opacity-0"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden mt-2 space-y-1 px-4 py-2 bg-white/95 rounded-md shadow-sm w-full"
      >
        <template v-for="item in navItems" :key="item.id">
          <a
            @click="scrollToSection(item.id)"
            class="block py-1.5 text-gray-700 hover:text-gray-900 text-sm cursor-pointer transition-colors duration-300"
          >
            {{ item.label }}
          </a>
        </template>
      </div>
    </transition>
  </nav>
  
  <!-- Rest of the template -->
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Service from './Service.vue';
import Features from './Features.vue';
import WhatsApp from './Whatsapp.vue';
import Pricing from './Pricing.vue';
import FAQ from './FAQ.vue';
import Footer from './Footer.vue';

const isScrolled = ref(false);
const mobileMenuOpen = ref(false); 

const navItems = [
  { id: 'solutions', label: 'Solutions' },
  { id: 'features', label: 'Features' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'faqs', label: 'FAQs' }
];

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    mobileMenuOpen.value = false
  }
}

const scrollPadding = ref(false)

const handleScroll = () => {
  const navbarHeight = 60;
  isScrolled.value = window.scrollY > -40
  scrollPadding.value = window.scrollY > navbarHeight;
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>