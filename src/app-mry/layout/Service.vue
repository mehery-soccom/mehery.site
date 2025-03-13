<template>
    <div class="mx-4 sm:mx-12 py-3">
        <!-- Header Section -->
        <h1 class="text-2xl sm:text-3xl mx-4 font-bold mb-2">Solutions</h1>
        <p class="text-gray-600 mb-4 mx-4 max-w-2xl text-sm sm:text-md">
            <!-- At our digital marketing agency, we offer a range of services to help businesses grow and succeed online.
            These services include: -->
        </p>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-4 gap-4 mb-2">
            <ArticleList :contentType="'services'" v-slot="{ loading, results }">
                <template v-if="loading">
                    <div>Loading testimonials...</div>
                </template>
                <template v-else>
                    <div
                        v-for="(item, index) in results"
                        :key="index"
                        @click="handleNavigation(item.info.hyperlink)"
                        class="rounded-2xl sm:w-full p-6 transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer h-52"
                        :style="{
                            backgroundColor: item.info.divcolor,
                            borderBottom: `4px solid ${item.info.bordercolor}`
                        }"
                    >
                        <div class="h-28 relative">
                            <h2 class="text-xl sm:text-2xl font-bold">{{ item.info.title }}</h2>
                            <h2 class="text-xl sm:text-2xl font-bold">{{ item.info.subtitle }}</h2>
                            <img
                                :src="item.info.image"
                                alt="Service Image"
                                class="hidden sm:block absolute right-0 top-0 w-32 h-28"
                            />
                        </div>
                        <button class="inline-flex items-center gap-1" :style="{ color: item.info.textcolor }">
                            <img src="../../@assets/images/Icon.svg" class="w-6 sm:w-8 h-6 sm:h-8" />
                            <span class="text-sm sm:text-lg">Learn more</span>
                        </button>
                    </div>
                </template>
            </ArticleList>

            <!-- <div 
        @click="handleCustomer"
        class="rounded-2xl bg-blue-50 sm:w-full p-6 text-gray-800 transition-all hover:scale-[1.02] hover:shadow-lg border-b-4 border-blue-200 cursor-pointer h-52"
      >
        <div class="h-28 relative">
          <h2 class="text-xl sm:text-2xl font-bold">Customer</h2>
          <h2 class="text-xl sm:text-2xl font-bold mb-2">Management</h2>
          <img src="../../@assets/images/tokyo-many-browser-windows-with-different-information 1.svg" 
               alt="" 
               class="hidden sm:block absolute right-0 top-0 w-32 h-28" />
        </div>
        <button class="inline-flex items-center text-blue-600 hover:text-blue-700 gap-1">
          <img src="../../@assets/images/Icon.svg" class="w-6 sm:w-8 h-6 sm:h-8" />
          <span class="text-sm sm:text-lg">Learn more</span>
        </button>
      </div> -->

            <!-- Lead Management -->
            <!-- <div 
        @click="handleLead"
        class="rounded-2xl bg-purple-50 p-6 text-gray-800 transition-all hover:scale-[1.02] hover:shadow-lg border-b-4 border-purple-200 cursor-pointer h-52"
      >
        <div class="h-28 relative">
          <h2 class="text-xl sm:text-2xl font-bold">Lead</h2>
          <h2 class="text-xl sm:text-2xl font-bold">Management</h2>
          <img src="../../@assets/images/tokyo-selecting-a-value-in-the-browser-window 1.svg" 
               alt="" 
               class="hidden sm:block absolute right-0 top-0 w-32 h-28" />
        </div>
        <button class="inline-flex items-center text-purple-600 hover:text-purple-700 gap-1">
          <img src="../../@assets/images/Icon(1).svg" class="w-6 sm:w-8 h-6 sm:h-8" />
          <span class="text-sm sm:text-lg">Learn more</span>
        </button>
      </div> -->

            <!-- Relationship Management -->
            <!-- <div 
        @click="handleRelation"
        class="rounded-2xl bg-teal-50 p-6 text-gray-800 transition-all hover:scale-[1.02] hover:shadow-lg border-b-4 border-teal-200 cursor-pointer h-52"
      >
        <div class="h-28 relative">
          <h2 class="text-xl sm:text-2xl font-bold">Relationship</h2>
          <h2 class="text-xl sm:text-2xl font-bold">Management</h2>
          <img src="../../@assets/images/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.svg" 
               alt="" 
               class="hidden sm:block absolute right-0 top-0 w-32 h-28" />
        </div>
        <button class="inline-flex items-center text-teal-600 hover:text-teal-700 gap-1">
          <img src="../../@assets/images/Icon(1).svg" class="w-6 sm:w-8 h-6 sm:h-8" />
          <span class="text-sm sm:text-lg">Learn more</span>
        </button>
      </div> -->

            <!-- Conversation Management -->
            <!-- <div 
        @click="handleConvo"
        class="rounded-2xl bg-indigo-50 p-6 text-gray-800 transition-all hover:scale-[1.02] hover:shadow-lg border-b-4 border-indigo-200 cursor-pointer h-52"
      >
        <div class="h-28 relative">
          <h2 class="text-xl sm:text-2xl font-bold">Conversation</h2>
          <h2 class="text-xl sm:text-2xl font-bold">Management</h2>
          <img src="../../@assets/images/tokyo-sending-messages-from-one-place-to-another 1.svg" 
               alt="" 
               class="hidden sm:block absolute right-0 top-0 w-32 h-28" />
        </div>
        <button class="inline-flex items-center text-indigo-600 hover:text-indigo-700 gap-1">
          <img src="../../@assets/images/Icon.svg" class="w-6 sm:w-8 h-6 sm:h-8" />
          <span class="text-sm sm:text-lg">Learn more</span>
        </button>
      </div> -->

            <!-- API Services -->
            <!-- <div 
        @click="handleApi"
        class="rounded-2xl bg-rose-50 p-6 text-gray-800 transition-all hover:scale-[1.02] hover:shadow-lg border-b-4 border-rose-200 cursor-pointer h-52"
      >
        <div class="h-28 relative">
          <h2 class="text-xl sm:text-2xl font-bold">API</h2>
          <h2 class="text-xl sm:text-2xl font-bold">Services</h2>
          <img src="../../@assets/images/tokyo-magnifier-web-search-with-elements 2.svg" 
               alt="" 
               class="hidden sm:block absolute right-0 top-0 w-32 h-28" />
        </div>
        <button class="inline-flex items-center text-rose-600 hover:text-rose-700 gap-1">
          <img src="../../@assets/images/Icon.svg" class="w-6 sm:w-8 h-6 sm:h-8" />
          <span class="text-sm sm:text-lg">Learn more</span>
        </button>
      </div> -->

            <!-- Campaign Management -->
            <!-- <div @click="handleCampaign"
        class="rounded-2xl bg-amber-50 p-6 text-gray-800 transition-all hover:scale-[1.02] hover:shadow-lg border-b-4 border-amber-200 cursor-pointer h-52">
        <div class="h-28 relative">
          <h2 class="text-xl sm:text-2xl font-bold">Campaign</h2>
          <h2 class="text-xl sm:text-2xl font-bold">Management</h2>
          <img src="../../@assets/images/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg" alt=""
            class="hidden sm:block absolute right-0 top-0 w-32 h-28" />
        </div>
        <button class="inline-flex items-center text-amber-600 hover:text-amber-700 gap-1">
          <img src="../../@assets/images/Icon(1).svg" class="w-6 sm:w-8 h-6 sm:h-8" />
          <span class="text-sm sm:text-lg">Learn more</span>
        </button>
      </div> -->
        </div>

        <!-- BOTs Section -->
        <div
            @click="handleBot"
            class="rounded-2xl bg-emerald-50 px-6 py-3 text-gray-800 mx-4 transition-all hover:scale-[1.02] hover:shadow-lg border-b-4 border-emerald-200 cursor-pointer relative flex flex-col sm:flex-row justify-between items-center sm:items-start"
        >
            <div class="max-w-md mt-3">
                <h2 class="text-xl font-bold mb-3">BOTs & BOT Services</h2>
                <p class="mb-4 text-sm">
                    Our advanced BOTs efficiently manage up to 80% of repetitive inquiries, allowing your team to focus
                    on high-value, personalized interactions that drive deeper customer relationships.
                </p>
            </div>
            <img src="../../@assets/images/botService.png" alt="" class="hidden sm:block w-44 h-32" />
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ArticleList from "@components/ArticleList.vue";

const router = useRouter();

// Router functions
const handleNavigation = path => {
    if (path) router.push(path);
};

const handleBot = () => {
    router.push("/bot");
};
</script>
