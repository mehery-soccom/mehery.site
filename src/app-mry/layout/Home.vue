<template>
  <div class="min-h-screen px-20 bg-white">
    <!-- Existing Navigation -->
    <nav
      :class="{
        'bg-white shadow-md py-4': isScrolled,
        'py-4': !isScrolled
      }"
      class="container  transition-all duration-300 sticky top-0 z-50"
    >
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            class="w-40 sm:w-48 md:w-52"
            src="../../@assets/images/logo.svg"
            alt="Logo"
          />
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-gray-800 hover:text-gray-600">Solutions</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">Features</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">Pricing</a>
          <a href="#" class="text-gray-800 hover:text-gray-600">FAQs</a>
        </div>
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-gray-800 hover:text-gray-600 focus:outline-none">
            <svg
              class="w-6 h-6"
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
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 space-y-2">
        <a href="#" class="block text-gray-800 hover:text-gray-600">Solutions</a>
        <a href="#" class="block text-gray-800 hover:text-gray-600">Features</a>
        <a href="#" class="block text-gray-800 hover:text-gray-600">Pricing</a>
        <a href="#" class="block text-gray-800 hover:text-gray-600">FAQs</a>
      </div>
    </nav>

    <!-- Existing Hero Section -->
    <div class="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 lg:pr-20">
        <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-8">
          Engage Customers Seamlessly with Unified Messaging
        </h1>
        <p class="text-gray-600 text-lg mb-8">
          Set up is fast and intuitive, with automatic configuration to get you up and running in minutes. As
          a proud Meta Technology Partner, we ensure top-tier integration and reliability across channels.
        </p>
        <button class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-8 py-3 rounded-xl font-medium transition-colors duration-300">
          Free Trial
        </button>
      </div>
      <div class="md:w-1/2 mt-12 md:mt-0 relative">
        <div class="relative">
          <div class="relative w-full h-[400px]">
            <div class="absolute top-0 right-0 flex space-x-4">
              <img src="../../@assets/images/header.svg" alt="Header Image" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- New Features Section -->
    <div class="">
      <div class="container mx-auto px-6">
        <Service />
      </div>
    </div>
    <div class="">
      <div class="container mx-auto px-6">
        <Features />
      </div>
    </div>
      
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Service from './Service.vue';
import Features from './Features.vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>