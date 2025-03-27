<template>
    <div class="mx-4 sm:mx-6 md:mx-8 lg:mx-12 py-3 sm:py-5">
        <!-- Header Section -->
        <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Solutions</h1>
        <p class="text-gray-600 mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base">
        </p>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <ArticleList :contentType="'services'" v-slot="{ loading, results }">
                <div v-if="loading" class="col-span-1 sm:col-span-2 flex justify-center py-8">
                    <div class="text-center">
                        <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-900"></div>
                        <p class="mt-2 text-gray-600">Loading solutions...</p>
                    </div>
                </div>
                <template v-else>
                    <div
                        v-for="(item, index) in results"
                        :key="index"
                        @click="handleNavigation(item.info.hyperlink)"
                        class="rounded-2xl w-full p-4 sm:p-6 transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer min-h-[180px] sm:min-h-[200px] flex flex-col"
                        :style="{
                            backgroundColor: item.info.divcolor,
                            borderBottom: `4px solid ${item.info.bordercolor}`
                        }"
                    >
                        <div class="flex-1 flex flex-col sm:flex-row items-start sm:items-center">
                            <div class="w-full sm:w-2/3 mb-3 sm:mb-0">
                                <h2 class="text-xl sm:text-2xl font-bold">{{ item.info.title }}</h2>
                                <h2 class="text-xl sm:text-2xl font-bold">{{ item.info.subtitle }}</h2>
                            </div>
                            <div class="w-full sm:w-1/3 flex justify-start sm:justify-center items-center">
                                <img
                                    :src="item.info.image"
                                    alt="Service Image"
                                    class="w-16 h-16 sm:w-24 sm:h-20 object-contain"
                                />
                            </div>
                        </div>
                        <button class="inline-flex items-center gap-1 mt-4 sm:mt-auto" :style="{ color: item.info.textcolor }">
                            <img src="../../@assets/images/Icon.svg" class="w-5 h-5 sm:w-6 sm:h-6" />
                            <span class="text-sm sm:text-base md:text-lg">Learn more</span>
                        </button>
                    </div>
                </template>
            </ArticleList>
        </div>
        
        <!-- BOTs Section -->
        <div
            @click="handleBot"
            class="rounded-2xl bg-emerald-50 px-4 sm:px-6 py-4 sm:py-6 text-gray-800 transition-all hover:scale-[1.02] hover:shadow-lg border-b-4 border-emerald-200 cursor-pointer"
        >
            <div class="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                <div class="flex-1 max-w-full sm:max-w-md">
                    <h2 class="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center sm:text-left">BOTs & BOT Services</h2>
                    <p class="mb-4 text-xs sm:text-sm text-center sm:text-left">
                        Our advanced BOTs efficiently manage up to 80% of repetitive inquiries, allowing your team to focus
                        on high-value, personalized interactions that drive deeper customer relationships.
                    </p>
                </div>
                <img 
                    src="../../@assets/images/botService.png" 
                    alt="BOT Services" 
                    class="w-28 h-20 sm:w-32 sm:h-24 md:w-44 md:h-32 object-contain"
                />
            </div>
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