<template>
    <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <!-- Features Heading -->
        <h2 class="text-3xl font-bold mb-2">Features</h2>
        <p class="text-base text-gray-600 max-w-3xl mb-4 ">
            Leverage the power of the WhatsApp Business API—the most advanced communication platform to connect and
            engage with your users effectively. More on WhatsApp and the channel capability, is available here
        </p>


        <ArticleList :contentType="'features'" v-slot="{ loading, results }">
            <!-- console.log(results) -->

            <div v-if="loading">
                <div>Loading team inbox features...</div>
            </div>

            <div v-else>
                <div v-for="(item, index) in results" :key="index"
                    class="grid lg:grid-cols-2 gap-8 mb-8 items-center">
                    <!-- Left Column: Text Content -->
                    <div :class="['space-y-6', index % 2 === 0 ? 'order-1' : 'order-2']">
                        <!-- Title and Description -->
                        <div>
                            <h3 class="text-xl font-bold mb-2">{{ item.info.title }}</h3>
                            <p class="text-gray-600 mb-4">{{ item.info.maindescription }}</p>
                        </div>

                        <!-- Features List -->
                        <div v-for="(feature, featureIndex) in JSON.parse(item.info.features)" :key="featureIndex"
                            class="flex items-start gap-3">
                            <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                            <div>
                                <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm">{{ feature.subtext
                                    }}</span>
                                <p class="mt-1 text-gray-600">{{ feature.description }}</p>
                            </div>
                        </div>

                        <!-- Learn More Button -->
                        <button @click="handleNavigation(item.info.hyperlink)"
                            class="bg-[#FFA726] hover:bg-[#FB8C00] text-black px-4 py-1 rounded-md font-medium transition-colors">
                            {{ item.info.button }}
                        </button>
                    </div>

                    <!-- Right Column: Image -->
                    <div :class="['rounded-lg', index % 2 === 0 ? 'order-2' : 'order-1']">
                        <img :src="item.info.image" alt="Feature Image" class="w-full h-auto" />
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