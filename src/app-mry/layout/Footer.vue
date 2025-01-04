<template>
  <footer class="bg-[#1C1C1F] text-white py-16">
    <div class="container px-4 md:px-12 mx-auto">
      <!-- Top Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <!-- Left Side -->
        <div class="space-y-8">
          <!-- Logo -->
          <div class="flex items-center space-x-2 transform hover:scale-105 transition-transform duration-300">
            <img src="../../@assets/images/logo.svg" alt="Mehery Logo" class="h-20" />
          </div>
          
          <!-- Navigation -->
          <nav class="flex flex-wrap gap-8">
            <a v-for="link in navLinks"
               :key="link"
               :href="`#${link.toLowerCase()}`"
               class="text-gray-300 hover:text-white transition-colors relative group">
              {{ link }}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
          
          <!-- Contact Info -->
          <div class="space-y-6">
            <h3 class="text-[#FFA726] font-semibold text-lg">Contact us:</h3>
            <div class="space-y-3 text-gray-300">
              <p class="flex items-center gap-2 hover:text-white transition-colors">
                <mail-icon size="18" />
                <a href="mailto:info@mehery.com">info@mehery.com</a>
              </p>
              <p class="flex items-center gap-2 hover:text-white transition-colors">
                <phone-icon size="18" />
                <a href="tel:555-567-8901">555-567-8901</a>
              </p>
              <div class="flex items-start gap-2">
                <map-pin-icon size="18" class="mt-1 flex-shrink-0" />
                <div>
                  <p>1234 Main St</p>
                  <p>Moonstone City, Stardust State 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Subscribe Form -->
        <div class="bg-[#23232B] p-8 rounded-lg shadow-xl transform hover:scale-[1.02] transition-all duration-300">
          <h3 class="text-xl font-semibold mb-4">Stay Updated</h3>
          <p class="text-gray-300 mb-6">Subscribe to our blog for the latest updates and insights.</p>
          <form @submit.prevent="handleSubscribe" class="space-y-4">
            <div class="relative">
              <mail-icon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size="18" />
              <input
                v-model="email"
                type="email"
                placeholder="Enter your email"
                class="w-full pl-10 pr-4 py-3 bg-[#2C2C35] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-[#FFA726] focus:ring-1 focus:ring-[#FFA726] transition-all"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full px-6 py-3 bg-[#FFA726] text-black font-semibold rounded-lg hover:bg-[#FF9800] transform hover:translate-y-[-2px] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#FFA726] focus:ring-opacity-50"
            >
              Subscribe to blog
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
        <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-6 md:mb-0">
          <p class="text-gray-400">© 2024 Mehery. All Rights Reserved.</p>
          <a href="#privacy" class="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
        
        <!-- Social Icons -->
        <div class="flex gap-6">
          <a href="https://linkedin.com" class="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
            <linkedin-icon size="24" />
          </a>
          <a href="https://facebook.com" class="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
            <facebook-icon size="24" />
          </a>
          <a href="https://twitter.com" class="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300">
            <twitter-icon size="24" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import {
  LinkedinIcon,
  FacebookIcon,
  TwitterIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon
} from 'vue-feather-icons'

const email = ref('')
const navLinks = ['Solutions', 'Feature', 'Pricing', 'FAQ']

const handleSubscribe = () => {
  if (email.value) {
    console.log('Subscribed:', email.value)
    email.value = ''
  }
}
</script>