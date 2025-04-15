<template>
    <div id="page-top">
        <!-- Header -->
        Header

        <!-- Sections -->
        <div class="page-section-wrapper">
            Body

            <!-- section 1 -->
            <!-- <Hero></Hero> -->

            <!-- section 1 -->

            <!-- Example -->
            <!-- <ArticleList :contentType="'banner'" v-slot="{ loading, results }">
                <div v-if="loading" class="skeleton skeleton-banner"></div>
                <div v-else>
                    <Banner :banner="results" />
                </div>
            </ArticleList> -->
        </div>

        <!-- Footer-->
        Footer
    </div>
</template>

<script>
console.log("AppLayout loaded");

import { defineComponent } from "vue";

export default defineComponent({
    name: "AppLayout",
    components: {
        Hero: () => import("@pushapp/modules/Hero.vue"),
        ArticleList: () => import("@components/ArticleList.vue")
    }
});
</script>

<style lang="css"></style>
