<template>
  <div class="relative py-16 bg-gradient-to-br from-gray-50 to-white">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          What Our Clients Say
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover why companies trust us to deliver exceptional results
        </p>
      </div>

      <div class="relative">
        <transition name="fade" mode="out-in">
          <div
            :key="currentTestimonial.id"
            class="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
          >
            <div class="p-8 md:p-10">
              <QuoteIcon
                class="absolute top-8 right-8 text-indigo-100 w-16 h-16 transform rotate-180"
              />

              <div class="relative z-10">
                <div class="flex items-center mb-6 space-x-1">
                  <template v-for="i in 5" :key="i">
                    <div
                      :class="
                        i <= currentTestimonial.rating
                          ? 'text-yellow-400'
                          : 'text-gray-200'
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
                  {{ currentTestimonial.comment }}
                </p>

                <div class="flex items-center">
                  <div
                    class="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center border-4 border-white shadow-lg"
                  >
                    <UserIcon class="w-10 h-10 text-gray-600" />
                  </div>
                  <div class="ml-6">
                    <h3 class="text-xl font-semibold text-gray-900">
                      {{ currentTestimonial.name }}
                      <a
                        href="https://www.capterra.com/p/241882/Mehery/"
                        target="_blank"
                        class="text-indigo-600 font-large text-sm ml-2"
                      >
                        Source
                      </a>
                    </h3>
                    <p class="text-gray-600 mb-1">{{ currentTestimonial.designation }}</p>
                    <p class="text-indigo-600 font-medium">{{ currentTestimonial.company }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>

        <button
          @click="prevTestimonial"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
        >
          <ChevronLeftIcon class="w-6 h-6 text-gray-600" />
        </button>
        <button
          @click="nextTestimonial"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
        >
          <ChevronRightIcon class="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div class="flex justify-center mt-8 space-x-2">
        <button
          v-for="(_, index) in testimonials"
          :key="index"
          @click="setTestimonial(index)"
          class="w-3 h-3 rounded-full transition-all duration-200 focus:outline-none"
          :class="
            currentIndex === index
              ? 'bg-indigo-600 scale-125'
              : 'bg-gray-300 hover:bg-gray-400'
          "
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { ChevronLeftIcon, ChevronRightIcon, UserIcon } from "vue-feather-icons";

const testimonials = ref([
  {
    id: 1,
    name: "Yuvraj Singh P",
    designation: "Sales Head",
    company: "Information Technology and services",
    rating: 5,
    comment:
      "Working with this team has been an absolute pleasure. Their attention to detail and creative solutions have significantly improved our marketing efforts.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Devang T",
    designation: "Software Developer",
    company: "Financial Services",
    rating: 4,
    comment:
      "I'm impressed by the innovative approach and technical expertise. They delivered beyond our expectations and were always responsive to our needs.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Manish B",
    designation: "HOD IT",
    company: "Financial Service",
    rating: 5,
    comment:
      "The user-centric design approach and attention to accessibility have made our product stand out. It's been a game-changer for our user engagement.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Anurangi R",
    designation: "Co-Founder & CEO",
    company: "Educational managements",
    rating: 5,
    comment:
      "The financial insights and strategic planning provided by this team have been instrumental in our company's growth. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Jackson T",
    designation: "Tech Support Engineer",
    company: "Telecommunications",
    rating: 4,
    comment:
      "Their agile approach and ability to adapt to changing requirements made our product launch a huge success. Great communication throughout the project.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
]);

const currentIndex = ref(0);
const currentTestimonial = computed(() => testimonials.value[currentIndex.value]);

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  currentIndex.value =
    (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const setTestimonial = (index) => {
  currentIndex.value = index;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>