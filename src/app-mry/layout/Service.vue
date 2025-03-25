<template>
    <div class="mx-4 sm:mx-12 py-3">
        <!-- Header Section -->
        <h1 class="text-2xl sm:text-3xl mx-4 font-bold mb-2">Solutions</h1>
        <p class="text-gray-600 mb-4 mx-4 max-w-2xl text-sm sm:text-md">
        </p>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mx-4 gap-4 mb-2">
            <ArticleList :contentType="'services'" v-slot="{ loading, results }">
                <template v-if="loading">
                    <div>Loading testimonials...</div>
                </template>
                <template v-else>
                    <div
                        v-for="(item, index) in results"
                        :key="index"
                        @click="handleNavigation(item.info.hyperlink)"
                        class="rounded-2xl w-full p-6 transition-all hover:scale-[1.02] hover:shadow-lg cursor-pointer h-52 flex flex-col"
                        :style="{
                            backgroundColor: item.info.divcolor,
                            borderBottom: `4px solid ${item.info.bordercolor}`
                        }"
                    >
                        <div class="flex-1 flex flex-col sm:flex-row ">
                            <div class="sm:w-2/3">
                                <h2 class="text-xl sm:text-2xl font-bold">{{ item.info.title }}</h2>
                                <h2 class="text-xl sm:text-2xl font-bold">{{ item.info.subtitle }}</h2>
                            </div>
                            <div class="sm:w-1/3 flex justify-center items-center">
                                <img
                                    :src="item.info.image"
                                    alt="Service Image"
                                    class="w-24 h-20 object-contain sm:self-start sm:mx-auto"
                                />
                            </div>
                        </div>
                        <button class="inline-flex items-center gap-1 mt-auto" :style="{ color: item.info.textcolor }">
                            <img src="../../@assets/images/Icon.svg" class="w-6 sm:w-8 h-6 sm:h-8" />
                            <span class="text-sm sm:text-lg">Learn more</span>
                        </button>
                    </div>
                </template>
            </ArticleList>
        </div>
        <!-- BOTs Section -->
        <div
            @click="handleBot"
            class="rounded-2xl bg-emerald-50 px-6 py-6 text-gray-800 mx-4 transition-all hover:scale-[1.02] hover:shadow-lg border-b-4 border-emerald-200 cursor-pointer flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6"
        >
            <div class="flex-1 max-w-md">
                <h2 class="text-xl font-bold mb-3">BOTs & BOT Services</h2>
                <p class="mb-4 text-sm">
                    Our advanced BOTs efficiently manage up to 80% of repetitive inquiries, allowing your team to focus
                    on high-value, personalized interactions that drive deeper customer relationships.
                </p>
            </div>
            <img 
                src="../../@assets/images/botService.png" 
                alt="BOT Services" 
                class="w-32 h-24 sm:w-44 sm:h-32 object-contain sm:self-start"
            />
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