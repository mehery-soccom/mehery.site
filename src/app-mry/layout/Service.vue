<template>
  <div class="mx-auto py-12">
    <!-- Header Section -->
    <h1 class="text-4xl mr-10 font-bold mb-4">Solutions</h1>
    <p class="text-gray-600 mb-12 max-w-3xl">
      At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
    </p>

    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- Customer Management -->
      <div 
        @click="handleCustomer"
        class="rounded-3xl bg-[#1D1D26] p-8 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-48 relative">
          <h2 class="text-3xl font-bold">Customer</h2>
          <h2 class="text-3xl font-bold mb-4">Management</h2>
          <img src="../../@assets/images/tokyo-many-browser-windows-with-different-information 1.svg" alt="" class="absolute right-0 top-0 size-44" />
        </div>
        <button class="inline-flex items-center text-white hover:opacity-75 gap-2">
          <img src="../../@assets/images/Icon(1).svg" class="w-10 h-10" />
          <span class="text-xl">Learn more</span>
        </button>
      </div>

      <!-- Lead Management -->
      <div 
        @click="handleLead"
        class="rounded-3xl bg-[#1D1D26] p-8 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-48 relative">
          <h2 class="text-3xl font-bold">Lead</h2>
          <h2 class="text-3xl font-bold">Management</h2>
          <img src="../../@assets/images/tokyo-selecting-a-value-in-the-browser-window 1.svg?height=120&width=120" alt="" class="absolute size-48 right-0 top-0" />
        </div>
        <button class="inline-flex items-center text-white hover:opacity-75 gap-2">
          <img src="../../@assets/images/Icon(1).svg" class="w-10 h-10" />
          <span class="text-xl">Learn more</span>
        </button>
      </div>

      <!-- Relationship Management -->
      <div 
        @click="handleRelation"
        class="rounded-3xl bg-[#1D1D26] p-8 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-48 relative">
          <h2 class="text-3xl font-bold">Relationship</h2>
          <h2 class="text-3xl font-bold">Management</h2>
          <img src="../../@assets/images/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.svg?height=120&width=120" alt="" class="absolute right-0 top-0 size-44" />
        </div>
        <button class="inline-flex items-center text-white hover:opacity-75 gap-2">
          <img src="../../@assets/images/Icon(1).svg" class="w-10 h-10" />
          <span class="text-xl">Learn more</span>
        </button>
      </div>

      <!-- Conversation Management -->
      <div 
        @click="handleConvo"
        class="rounded-3xl bg-[#1D1D26] p-8 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-48 relative">
          <h2 class="text-3xl font-bold">Conversation</h2>
          <h2 class="text-3xl font-bold">Management</h2>
          <img src="../../@assets//images/tokyo-sending-messages-from-one-place-to-another 1.svg?height=120&width=120" alt="" class="absolute right-0 top-0" />
        </div>
        <button class="inline-flex items-center text-black hover:opacity-75 gap-2">
          <img src="../../@assets/images/Icon.svg" class="w-10 h-10" />
          <span class="text-xl">Learn more</span>
        </button>
      </div>

      <!-- API Services -->
      <div 
        @click="handleApi"
        class="rounded-3xl bg-[#1D1D26] p-8 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-48 relative">
          <h2 class="text-3xl font-bold">API</h2>
          <h2 class="text-3xl font-bold">Services</h2>
          <img src="../../@assets/images/tokyo-magnifier-web-search-with-elements 2.svg" alt="" class="absolute right-0 top-0" />
        </div>
        <button class="inline-flex items-center text-black hover:opacity-75 gap-2">
          <img src="../../@assets/images/Icon.svg" class="w-10 h-10" />
          <span class="text-xl">Learn more</span>
        </button>
      </div>

      <!-- Campaign Management -->
      <div 
        @click="handleCampaign"
        class="rounded-3xl bg-[#1D1D26] p-8 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer"
      >
        <div class="h-48 relative">
          <h2 class="text-3xl font-bold">Campaign</h2>
          <h2 class="text-3xl font-bold">Management</h2>
          <img src="../../@assets/images/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg?height=120&width=120" alt="" class="absolute right-0 top-0" />
        </div>
        <button class="inline-flex items-center text-white hover:opacity-75 gap-2">
          <img src="../../@assets/images/Icon(1).svg" class="w-10 h-10" />
          <span class="text-xl">Learn more</span>
        </button>
      </div>
    </div>

    <!-- BOTs Section -->
    <div 
      @click="handleBot"
      class="rounded-3xl bg-[#1D1D26] p-8 text-white transition-transform hover:scale-[1.02] border-b-4 border-[#000] cursor-pointer relative"
    >
      <div class="max-w-lg">
        <h2 class="text-3xl font-bold mb-4">BOTs & BOT Services</h2>
        <p class="mb-6 text-gray-100">
          Our advanced BOTs efficiently manage up to 80% of repetitive inquiries, allowing your team to focus on high-value, personalized interactions that drive deeper customer relationships.
        </p>
        <button class="bg-white text-black px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
          Get your free trial
        </button>
      </div>
      <img 
        src="../../@assets/images/Illustration(1).svg?height=200&width=200" 
        alt="" 
        class="absolute right-8 bottom-8 size-60"
      />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const handleCustomer = () => router.push('/customer');
const handleLead = () => router.push('/lead');
const handleRelation = () => router.push('/relation');
const handleConvo = () => router.push('/conversation');
const handleApi = () => router.push('/api');
const handleCampaign = () => router.push('/campaign');
const handleBot = () => router.push('/bot');
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>