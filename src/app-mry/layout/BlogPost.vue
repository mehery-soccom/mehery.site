<!-- src/pages/BlogPost.vue -->
<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <div v-if="!$route.params.contentName" class="p-6 text-red-500 text-center">
      Invalid blog URL. Please check and try again.
    </div>
    <div v-else>
      <Article
        :contentType="'blog'"
        :src="$route.params.contentName"
        :query="$route.query"
        :props="props"
      />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "../components/common/Navbar.vue";
import Footer from "../components/common/Footer.vue";
import Article from "@components/Article.vue";
</script>
