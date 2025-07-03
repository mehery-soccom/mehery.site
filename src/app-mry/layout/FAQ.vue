<template>
    <div class="bg-white py-6 px-4 sm:px-6 lg:px-8 pb-16">
        <div class="max-w-5xl mx-auto">
            <!-- Title and Search Bar -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h2 class="text-3xl font-bold">FAQs</h2>

            </div>

            <ArticleList :contentType="'faqs'" v-slot="{ loading, results }">
              <div v-if="loading" class="flex justify-center py-8">
                <div class="text-center">
                  <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-900"></div>
                  <p class="mt-2">Loading FAQs…</p>
                </div>
              </div>

              <div v-else class="space-y-4">
                <div
                  v-for="(faq, index) in results"
                  :key="index"
                  class="border-2 rounded-3xl p-2 sm:p-4 cursor-pointer transition-all duration-300"
                  :class="[faq.isOpen ? 'shadow-lg' : 'hover:shadow-md', 'hover:border-gray-400']"
                  @click="faq.isOpen = !faq.isOpen"
                >
                  <div class="flex items-start justify-between gap-2 sm:scale-90">
                    <div class="flex gap-2 items-center w-full">
                      <!-- <span class="text-base sm:text-2xl font-medium text-gray-700 font-mono pt-1">
                        {{ String(index + 1).padStart(2) }}.
                      </span> -->
                      <div class="flex-1 min-w-0">
                        <h3 class="text-left text-lg sm:text-xl font-medium mb-1 sm:mb-2 pt-0 sm:pt-1 px-1 sm:px-0 mt-1">
                          {{ faq.info.title }}
                        </h3>
                        <Transition
                          enter-active-class="transition duration-300 ease-out"
                          enter-from-class="transform scale-95 opacity-0"
                          enter-to-class="transform scale-100 opacity-100"
                          leave-active-class="transition duration-200 ease-in"
                          leave-from-class="transform scale-100 opacity-100"
                          leave-to-class="transform scale-95 opacity-0"
                        >
                          <div
                            v-show="faq.isOpen"
                            class="text-left text-gray-600 text-base sm:text-lg leading-relaxed px-1 sm:px-0"
                            v-html="faq.info.content"
                          ></div>
                        </Transition>
                      </div>
                    </div>
                    <button
                      class="rounded-full border-2 w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center text-xl sm:text-2xl transition-all duration-300 flex-shrink-0 mt-1"
                      :class="
                        faq.isOpen ? 'bg-black text-white border-black' : 'bg-white text-black hover:bg-gray-50'
                      "
                    >
                      <span
                        class="transform transition-transform duration-300"
                        :class="faq.isOpen ? 'rotate-180' : ''"
                      >
                        {{ faq.isOpen ? '−' : '+' }}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </ArticleList>


            <div class="mt-8 text-center">
              <p class="text-2xl font-semibold text-center">
                For more FAQ's Chat with us on any of these Channels :
              </p>
              <div class="flex justify-center gap-6 mt-4">
                <!-- Facebook Messenger -->
                <a
                  href="https://m.me/MeherY.SocCom"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Channel id: fb:101842438530284"
                  class="transform hover:scale-110 transition-all duration-300"
                  style="color: #1877F2;"
                >
                  <BIconFacebook class="w-8 h-8" />
                </a>

                <!-- Instagram DM -->
                <a
                  href="https://www.instagram.com/meherysoccom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Channel id: ig:17841447833002213"
                  class="transform hover:scale-110 transition-all duration-300"
                  style="color: #E4405F;"
                >
                  <BIconInstagram class="w-8 h-8" />
                </a>

                <!-- Telegram -->
                <a
                  href="https://t.me/meherybot"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Channel id: tg:meherybot"
                  class="transform hover:scale-110 transition-all duration-300"
                  style="color: #0088CC;"
                >
                  <BIconTelegram class="w-8 h-8" />
                </a>

                <!-- WhatsApp -->
                <a
                  href="https://api.whatsapp.com/send/?phone=919372280725"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Message us on WhatsApp"
                  class="transform hover:scale-110 transition-all duration-300"
                  style="color: #25D366;"
                >
                  <BIconWhatsapp class="w-8 h-8" />
                </a>
              </div>
            </div>
        </div>
    </div>     
</template>

<script setup>
// import { ref } from "vue";
import { BIconFacebook, BIconInstagram, BIconTelegram,BIconWhatsapp } from 'bootstrap-vue'
import ArticleList from '@components/ArticleList.vue';

</script>
