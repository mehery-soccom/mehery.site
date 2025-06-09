<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <!-- 1) Navbar stays -->
    <Navbar />

    <!-- 2) Main content pulls in our three About sections via ArticleList -->
    <main class="py-6 px-4 sm:px-6 lg:px-8 flex-1">
      <section id="about" class="max-w-7xl mx-auto">
        <ArticleList :contentType="'about'" v-slot="{ loading, results }">
          <!-- Loading Spinner -->
          <div v-if="loading" class="flex justify-center py-16">
            <div class="text-center">
              <div
                class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-900"
              ></div>
              <p class="mt-2">Loading About Us…</p>
            </div>
          </div>

          <!-- Once loaded, render each info block in order -->
          <div v-else class="space-y-16">
            <div
              v-for="(item, idx) in results"
              :key="idx"
              class="grid lg:grid-cols-2 gap-10 items-center"
            >
              <!-- Text Block: Title + Content -->
              <div
                :class="[
                  'space-y-6 max-w-2xl',
                  { 'lg:order-1': idx % 2 === 0, 'lg:order-2': idx % 2 !== 0 }
                ]"
              >
                <h3
                  class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  {{ item.info.title }}
                </h3>
                <p
                  class="text-gray-600 text-base sm:text-lg"
                  v-html="item.info.maindescription || item.info.content"
                ></p>
              </div>

              <!-- Image Block -->
              <div
                :class="[
                  'relative flex justify-center',
                  { 'lg:order-2': idx % 2 === 0, 'lg:order-1': idx % 2 !== 0 }
                ]"
              >
                <img
                  :src="resolveLink(item.info.image)"
                  alt="About Section Image"
                  loading="lazy"
                  class="w-full h-auto max-w-xl mx-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
                  :style="idx === 2 ? 'max-width: 400px;' : ''"
                />
              </div>
            </div>
          </div>
        </ArticleList>
      </section>
    </main>

    <!-- 3) Footer stays -->
    <Footer />
  </div>
</template>

<script setup>
/* Imports */
import { onMounted } from "vue";
import Navbar from "../components/common/Navbar.vue";
import Footer from "../components/common/Footer.vue";
import ArticleList from "@components/ArticleList.vue";
import { resolveLink } from "../../@utils/linkResolver";

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
</script>
