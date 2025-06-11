<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <div v-if="!$route.params.contentName">Invalid content details. Check url and try again</div>
        <div v-else>
            <Article
                :contentType="'features'"
                :src="$route.params.contentName" 
                :query="$route.query"
                :props="props"
            >
            </Article>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import Navbar from "../components/common/Navbar.vue";
import Footer from "../components/common/Footer.vue";
import Article from "@components/Article.vue";

</script>