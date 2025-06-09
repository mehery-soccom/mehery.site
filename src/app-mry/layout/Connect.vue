<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <Navbar />

    <main class="flex-grow py-6 px-12 sm:px-6 lg:px-12">
      <div class="container mx-auto px-4 sm:px-6 lg:px-12 space-y-24">
        <ArticleList :contentType="'connect'" v-slot="{ loading, results }">
          <div v-if="loading" class="flex justify-center py-16">
            <div class="text-center">
              <div
                class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-900"
              ></div>
              <p class="mt-2">Loading Connect details…</p>
            </div>
          </div>

          <div v-else>
            <template v-for="(item, idx) in results" :key="idx">
              <section :id="item.info.hash.replace('#','')" class="grid lg:grid-cols-2 gap-10 items-center">
                <div
                  :class="[
                    'relative',
                    { 'lg:order-1': idx % 2 === 0, 'lg:order-2': idx % 2 !== 0 }
                  ]"
                >
                  <img
                    :src="resolveLink(item.info.image)"
                    :alt="item.info.title"
                    loading="lazy"
                    class="w-full h-auto max-w-md mx-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                    :style="(idx === 2 || idx === 3) ? 'max-width: 700px;' : ''"
                  />
                </div>

                <div
                  :class="[
                    'space-y-6 max-w-2xl',
                    { 'lg:order-2': idx % 2 === 0, 'lg:order-1': idx % 2 !== 0 }
                  ]"
                >
                  <h3
                    class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    {{ item.info.title }}
                  </h3>
                  <div class="text-gray-700 text-lg leading-relaxed" v-html="item.info.maindescription" />
                </div>
              </section>
              <br><br>
            </template>
          </div>
        </ArticleList>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from "../components/common/Navbar.vue";
import Footer from "../components/common/Footer.vue";
import ArticleList from "@components/ArticleList.vue";
import { resolveLink } from "../../@utils/linkResolver";

/* Scroll to top on mount */
import { onMounted } from "vue";
onMounted(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>
