<template>
    <div class="relative py-16 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-4xl mx-auto px-4">
            <div class="text-center mb-16">
                <h2 class="text-3xl font-bold text-gray-900 mb-2 tracking-tight text-center">What Our Clients Say</h2>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto text-center">
                    Discover why companies trust us to deliver exceptional results
                </p>
            </div>

            <ArticleList :contentType="'testimonials'" v-slot="{ results }">
              <div class="relative" v-if="results && results.length">
                  <transition name="fade" mode="out-in">
                      <div
                          class="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
                          :key="currentIndex"
                      >
                          <div class="p-8 md:p-10">
                              <QuoteIcon class="absolute top-8 right-8 text-indigo-100 w-16 h-16 transform rotate-180" />

                              <div class="relative z-10">
                                  <div class="flex items-center mb-6 space-x-1">
                                      <template v-for="i in 5" :key="i">
                                          <div
                                              :class="
                                                  i <= results[currentIndex].info.rating ? 'text-yellow-400' : 'text-gray-200'
                                              "
                                              class="w-6 h-6"
                                          >
                                              <svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full">
                                                  <path
                                                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                  />
                                              </svg>
                                          </div>
                                      </template>
                                  </div>

                                  <p class="text-xl text-gray-700 leading-relaxed mb-8 italic">
                                      {{ results[currentIndex].info.comment }}
                                  </p>

                                  <div class="flex items-center">
                                      <div
                                          class="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white shadow-lg"
                                      >
                                          <img :src="results[currentIndex].info.avatar" alt="Testimonial Avatar" />
                                      </div>
                                      <div class="ml-6">
                                          <h3 class="text-xl font-semibold text-gray-900">
                                              {{ results[currentIndex].info.title }}
                                          </h3>
                                          <p class="text-gray-600 mb-1">{{ results[currentIndex].info.designation }}</p>
                                          <p class="text-indigo-600 font-medium">{{ results[currentIndex].info.company }}</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </transition>

                  <button
                      @click="() => prevTestimonial(results.length)"
                      class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                  >
                      <ChevronLeftIcon class="w-6 h-6 text-gray-600" />
                  </button>
                  <button
                      @click="() => nextTestimonial(results.length)"
                      class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                  >
                      <ChevronRightIcon class="w-6 h-6 text-gray-600" />
                  </button>
                  
                  <div class="flex justify-center mt-8 space-x-2">
                      <button
                          v-for="(_, index) in results"
                          :key="index"
                          @click="setTestimonial(index)"
                          class="w-3 h-3 rounded-full transition-all duration-200 focus:outline-none"
                          :class="currentIndex === index ? 'bg-indigo-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'"
                      ></button>
                  </div>
              </div>
            </ArticleList>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { ChevronLeftIcon, ChevronRightIcon, UserIcon } from "vue-feather-icons";
import ArticleList from "@components/ArticleList.vue";

const currentIndex = ref(0);

const nextTestimonial = (length) => {
    currentIndex.value = (currentIndex.value + 1) % length;
};

const prevTestimonial = (length) => {
    currentIndex.value = (currentIndex.value - 1 + length) % length;
};

const setTestimonial = (index) => {
    currentIndex.value = index;
};
</script>