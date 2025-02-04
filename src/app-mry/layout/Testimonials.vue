<template>
  <div class="mb-10">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-12">What Our Clients Say</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="p-6">
            <div class="flex items-center mb-4">
              <div class="flex-shrink-0">
                <img class="h-12 w-12 rounded-full" :src="testimonial.avatar" alt="" />
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">{{ testimonial.name }}</h3>
                <p class="text-sm text-gray-500">{{ testimonial.designation }}</p>
              </div>
            </div>
            <div class="mb-4 flex items-center">
              <template v-for="i in 5" :key="i">
                <feather-icon
                  name="star"
                  :class="i <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
                  size="18"
                />
              </template>
            </div>
            <div class="relative">
              <feather-icon
                name="quote"
                class="absolute top-0 left-0 text-gray-200 transform -translate-x-2 -translate-y-2"
                size="36"
              />
              <p class="text-gray-600 italic relative z-10 pl-8">{{ testimonial.comment }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { FeatherIcon } from 'vue-feather-icons';

const testimonials = ref([
  {
    id: 1,
    name: 'Emily Johnson',
    designation: 'Marketing Director',
    rating: 5,
    comment: 'Working with this team has been an absolute pleasure. Their attention to detail and creative solutions have significantly improved our marketing efforts.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    designation: 'Tech Entrepreneur',
    rating: 4,
    comment: 'I\'m impressed by the innovative approach and technical expertise. They delivered beyond our expectations and were always responsive to our needs.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    designation: 'UX Designer',
    rating: 5,
    comment: 'The user-centric design approach and attention to accessibility have made our product stand out. It\'s been a game-changer for our user engagement.',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
]);
</script>