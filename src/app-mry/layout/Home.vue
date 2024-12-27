<template>
 <div class="min-h-screen bg-white">
  <!-- Existing Navigation -->
  <nav :class="{'bg-white shadow-md py-2': isScrolled, 'py-4': !isScrolled}" class="container mx-auto px-6 transition-all duration-300">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <img style="size: 10rem;" src="../../@assets/images/logo.svg">
      </div>
      <div class="hidden md:flex items-center space-x-8">
        <a href="#" class="text-gray-800 hover:text-gray-600">Solutions</a>
        <a href="#" class="text-gray-800 hover:text-gray-600">Features</a>
        <a href="#" class="text-gray-800 hover:text-gray-600">Pricing</a>
        <a href="#" class="text-gray-800 hover:text-gray-600">FAQs</a>
      </div>
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
      <button class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-8 py-3 rounded-lg font-medium transition-colors duration-300">
        Free Trial
      </button>
    </div>
    <div class="md:w-1/2 mt-12 md:mt-0 relative">
      <div class="relative">
        <div class="relative w-full h-[400px]">
          <div class="absolute top-0 right-0 flex space-x-4">
            <img src="../../@assets/images/header.svg" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- New Features Section -->
  <div class="bg-gray-50 py-24">
    <div class="container mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform</h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover how our unified messaging solution can transform your customer engagement
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <!-- Feature Card 1 -->
        <div class="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
          <div class="h-12 w-12 bg-[#F4B860] rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-4">Lightning Fast Setup</h3>
          <p class="text-gray-600">
            Get started in minutes with our intuitive onboarding process and automatic channel configuration.
          </p>
        </div>

        <!-- Feature Card 2 -->
        <div class="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
          <div class="h-12 w-12 bg-[#F4B860] rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-4">Advanced Analytics</h3>
          <p class="text-gray-600">
            Track engagement metrics and customer interactions with detailed analytics and reporting tools.
          </p>
        </div>

        <!-- Feature Card 3 -->
        <div class="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
          <div class="h-12 w-12 bg-[#F4B860] rounded-lg flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-4">Team Collaboration</h3>
          <p class="text-gray-600">
            Enable seamless communication between team members with built-in collaboration tools.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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