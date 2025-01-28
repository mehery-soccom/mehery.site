<template>
  <div class="mx-auto py-8">
    <!-- Header Section -->
    <h1 class="text-4xl  mx-4 font-bold mb-3">Solutions</h1>
    <p class="text-gray-600 mb-8 mx-4 max-w-2xl text-lg">
      At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
    </p>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 mx-4 gap-4 mb-4">
      <!-- Customer Management -->
      <div 
        @click="handleCustomer"
        class="rounded-2xl bg-[#1D1D26] p-6 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-40 relative">
          <h2 class="text-2xl font-bold">Customer</h2>
          <h2 class="text-2xl font-bold mb-2">Management</h2>
          <img src="../../@assets/images/tokyo-many-browser-windows-with-different-information 1.svg" 
               alt="" 
               class="absolute right-0 top-0 w-32 h-32" />
        </div>
        <button class="inline-flex items-center text-white hover:opacity-75 gap-1">
          <img src="../../@assets/images/Icon(1).svg" class="w-8 h-8" />
          <span class="text-lg">Learn more</span>
        </button>
      </div>

      <!-- Other Service Cards (Apply same scaling to all) -->
      <!-- Lead Management -->
      <div 
        @click="handleLead"
        class="rounded-2xl bg-[#1D1D26] p-6 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-40 relative">
          <h2 class="text-2xl font-bold">Lead</h2>
          <h2 class="text-2xl font-bold">Management</h2>
          <img src="../../@assets/images/tokyo-selecting-a-value-in-the-browser-window 1.svg" 
               alt="" 
               class="absolute right-0 top-0 w-32 h-32" />
        </div>
        <button class="inline-flex items-center text-white hover:opacity-75 gap-1">
          <img src="../../@assets/images/Icon(1).svg" class="w-8 h-8" />
          <span class="text-lg">Learn more</span>
        </button>
      </div>

      <!-- Relationship Management -->
      <div 
        @click="handleRelation"
        class="rounded-2xl bg-[#1D1D26] p-6 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-40 relative">
          <h2 class="text-2xl font-bold">Relationship</h2>
          <h2 class="text-2xl font-bold">Management</h2>
          <img src="../../@assets/images/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.svg" 
               alt="" 
               class="absolute right-0 top-0 w-32 h-32" />
        </div>
        <button class="inline-flex items-center text-white hover:opacity-75 gap-1">
          <img src="../../@assets/images/Icon(1).svg" class="w-8 h-8" />
          <span class="text-lg">Learn more</span>
        </button>
      </div>

      <!-- Conversation Management -->
      <div 
        @click="handleConvo"
        class="rounded-2xl bg-[#1D1D26] p-6 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-40 relative">
          <h2 class="text-2xl font-bold">Conversation</h2>
          <h2 class="text-2xl font-bold">Management</h2>
          <img src="../../@assets/images/tokyo-sending-messages-from-one-place-to-another 1.svg" 
               alt="" 
               class="absolute right-0 top-0 w-32 h-32" />
        </div>
        <button class="inline-flex items-center text-black hover:opacity-75 gap-1">
          <img src="../../@assets/images/Icon.svg" class="w-8 h-8" />
          <span class="text-lg">Learn more</span>
        </button>
      </div>

      <!-- API Services -->
      <div 
        @click="handleApi"
        class="rounded-2xl bg-[#1D1D26] p-6 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-40 relative">
          <h2 class="text-2xl font-bold">API</h2>
          <h2 class="text-2xl font-bold">Services</h2>
          <img src="../../@assets/images/tokyo-magnifier-web-search-with-elements 2.svg" 
               alt="" 
               class="absolute right-0 top-0 w-32 h-32" />
        </div>
        <button class="inline-flex items-center text-black hover:opacity-75 gap-1">
          <img src="../../@assets/images/Icon.svg" class="w-8 h-8" />
          <span class="text-lg">Learn more</span>
        </button>
      </div>

      <!-- Campaign Management -->
      <div 
        @click="handleCampaign"
        class="rounded-2xl bg-[#1D1D26] p-6 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-40 relative">
          <h2 class="text-2xl font-bold">Campaign</h2>
          <h2 class="text-2xl font-bold">Management</h2>
          <img src="../../@assets/images/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg" 
               alt="" 
               class="absolute right-0 top-0 w-32 h-32" />
        </div>
        <button class="inline-flex items-center text-white hover:opacity-75 gap-1">
          <img src="../../@assets/images/Icon(1).svg" class="w-8 h-8" />
          <span class="text-lg">Learn more</span>
        </button>
      </div>
    </div>

    <!-- BOTs Section -->
    <div 
      @click="handleBot"
      class="rounded-2xl bg-[#1D1D26] p-6 mx-4 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer relative"
    >
      <div class="max-w-md">
        <h2 class="text-2xl font-bold mb-3">BOTs & BOT Services</h2>
        <p class="mb-4 text-gray-100 text-sm">
          Our advanced BOTs efficiently manage up to 80% of repetitive inquiries, allowing your team to focus on high-value, personalized interactions that drive deeper customer relationships.
        </p>
        <button class="bg-white text-black px-4 py-2 rounded-lg hover:opacity-90 transition-opacity text-sm">
          Get your free trial
        </button>
      </div>
      <img 
        src="../../@assets/images/Illustration(1).svg" 
        alt="" 
        class="absolute right-6 bottom-6 w-48 h-48"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

// Keep the same router functions as before
const handleCustomer = () => router.push('/customer');
const handleLead = () => router.push('/lead');
const handleRelation = () => router.push('/relation');
const handleConvo = () => router.push('/conversation');
const handleApi = () => router.push('/api');
const handleCampaign = () => router.push('/campaign');
const handleBot = () => router.push('/bot');
</script>

<style scoped>
/* Optional: Add custom scaling if needed */
.cursor-pointer {
  cursor: pointer;
}
</style>