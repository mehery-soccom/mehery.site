<template>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold mb-6">WhatsApp Specific Features</h1>

        <!-- Grid Container -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <!-- Feature Cards -->
            <ArticleList :contentType="'whatsapp'" v-slot="{ loading, results }">
                <!-- Loading State -->
                <div v-if="loading">
                    <div>Loading features...</div>
                </div>

                <!-- Results -->
                <template v-else>
                    <!-- Loop through results and render cards -->
                    <div v-for="(item, index) in results" :key="index" @click="handleCardClick(item)"
                        :class="`bg-gradient-to-br  ${item.info.bgtint} rounded-xl p-4 relative hover:shadow-lg transition-shadow duration-300 cursor-pointer`">
                        <!-- Dot Indicator -->
                        <div :class="`w-2 h-2 rounded-full mb-3 ${item.info.dotcolor}`"></div>
                        <!-- console.log({item.info.bgtint}) -->
                        <!-- {{ item.info.bgtint }} -->
                        <!-- Content -->
                        <div class="space-y-4 pr-12">
                            <h2 class="text-xl font-semibold">{{ item.info.title }}</h2>
                            <p class="text-gray-600 text-sm leading-relaxed">{{ item.info.maindescription }}</p>
                        </div>
                    </div>
                </template>
            </ArticleList>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import ArticleList from "@components/ArticleList.vue";

const router = useRouter();

const handleCardClick = (item) => {
    router.push(`/connect${item.info.hash}`);
};
</script>