<template>
    <div class="flex flex-wrap gap-6">
      <div
        v-for="review in reviews"
        :key="review.ReviewerName"
        class="bg-gray-800 text-white p-6 rounded-lg shadow-md w-80"
      >
        <h3 class="text-lg font-semibold text-[#FFA726]">{{ review.ReviewerName }}</h3>
        <p class="text-sm text-gray-400">{{ review.Designation }} at {{ review.Organization }}</p>
        <div class="flex items-center my-2">
          <span v-for="n in review.Stars" :key="n" class="text-yellow-400">★</span>
          <span v-for="n in 5 - review.Stars" :key="n" class="text-gray-600">★</span>
        </div>
        <p class="text-sm text-gray-300">{{ review.Comments }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      reviews: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional custom styles */
  </style>
  