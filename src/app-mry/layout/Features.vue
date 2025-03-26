<template>
    <div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <!-- Features Heading - Responsive text sizes -->
        <h2 class="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Features</h2>
        <p class="text-sm sm:text-base text-gray-600 max-w-3xl mb-4 sm:mb-6 lg:mb-8">
            Leverage the power of the WhatsApp Business API—the most advanced communication platform to connect and
            engage with your users effectively. More on WhatsApp and the channel capability, is available here
        </p>

        <ArticleList :contentType="'features'" v-slot="{ loading, results }">
            <div v-if="loading" class="flex justify-center py-8">
                <div class="text-center">
                    <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-900"></div>
                    <p class="mt-2">Loading team inbox features...</p>
                </div>
            </div>

            <div v-else class="space-y-12 sm:space-y-16 lg:space-y-20">
                <div v-for="(item, index) in results" :key="index"
                    class="grid md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                    <!-- Text Content - Order changes based on screen size -->
                    <div :class="[
                        'space-y-4 sm:space-y-6',
                        {'lg:order-1': index % 2 === 0, 'lg:order-2': index % 2 !== 0}
                    ]">
                        <!-- Title and Description -->
                        <div>
                            <h3 class="text-lg sm:text-xl font-bold mb-2">{{ item.info.title }}</h3>
                            <p class="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{{ item.info.maindescription }}</p>
                        </div>

                        <!-- Features List -->
                        <div class="space-y-3 sm:space-y-4">
                            <div v-for="(feature, featureIndex) in JSON.parse(item.info.features)" :key="featureIndex"
                                class="flex items-start gap-2 sm:gap-3">
                                <CheckCircleIcon class="w-4 h-4 sm:w-5 sm:h-5 text-gray-900 mt-1 flex-shrink-0" />
                                <div>
                                    <span class="bg-gray-900 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs sm:text-sm">
                                        {{ feature.subtext }}
                                    </span>
                                    <p class="mt-1 text-xs sm:text-sm md:text-base text-gray-600">{{ feature.description }}</p>
                                </div>
                            </div>
                        </div>

                        <!-- Learn More Button -->
                        <button @click="handleNavigation(item.info.hyperlink)"
                            class="bg-[#FFA726] hover:bg-[#FB8C00] text-black px-3 sm:px-4 py-1.5 rounded-md text-sm sm:text-base font-medium transition-colors">
                            {{ item.info.button }}
                        </button>
                    </div>

                    <!-- Image - Order changes based on screen size -->
                    <div :class="[
                        'rounded-lg overflow-hidden',
                        {'lg:order-2': index % 2 === 0, 'lg:order-1': index % 2 !== 0}
                    ]">
                        <img :src="item.info.image" alt="Feature Image" class="w-full h-auto object-cover shadow-md" loading="lazy" />
                    </div>
                </div>
            </div>
        </ArticleList>
    </div>
</template>

<script setup>
import { CheckCircleIcon } from "vue-feather-icons";
import { useRouter } from "vue-router";
import ArticleList from "@components/ArticleList.vue";

const router = useRouter();

const handleNavigation = (link) => {
    router.push(link);
};
</script>