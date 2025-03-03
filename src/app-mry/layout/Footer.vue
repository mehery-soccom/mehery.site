<template>
  <footer class="bg-[#1C1C1F] text-white px-4 sm:px-12 py-8 sm:py-16 z-0">
    <!-- Top Section -->
    <div class="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-evenly mb-8">
      <!-- Left Side -->
      <div class="space-y-8">
        <!-- Logo -->
        <div class="flex items-center transform hover:scale-105 transition-transform duration-300 sm:mr-24">
          <img src="../../@assets/images/logo.png" alt="Header Image" class="w-48 sm:w-80 h-auto sm:h-50" />
        </div>

        <!-- Contact Info -->
        <div class="space-y-6 sm:ml-10">
          <h3 class="text-[#FFA726] font-semibold text-lg">Contact us:</h3>
          <div class="space-y-3 text-gray-300">
            <p class="flex items-center gap-2 hover:text-white transition-colors">
              <MailIcon size="18" />
              <a href="mailto:info@mehery.com">sales@mehery.com</a>
            </p>
            <p class="flex items-center gap-2 hover:text-white transition-colors">
              <PhoneIcon size="18" />
              <a href="tel:555-567-8901">+91 96192 03759</a>
            </p>
            <div class="flex items-start gap-2">
              <MapPinIcon size="18" class="mt-1 flex-shrink-0" />
              <div>
                <p>1-34, A H Wadia Baug</p>
                <p>Parel Tank Road, Mumbai 400033</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row justify-between sm:mr-16 gap-8 sm:gap-16">
        <!-- Quick Links -->
        <div class="flex flex-col gap-2">
          <h3 class="text-[#FFA726] font-semibold text-lg">Quick Links</h3>
          <template v-for="link in navLinks" :key="link.path">
            <!-- Scroll Links -->
            <div v-if="link.type === 'scroll'">
              <button @click="handleScroll(link.path)"
                class="text-gray-300 hover:text-white transition-colors focus:outline-none">
                {{ link.label }}
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>
          </template>
        </div>

        <!-- Company Links -->
        <div class="flex flex-col gap-2">
          <h3 class="text-[#FFA726] font-semibold text-lg">Company</h3>
          <template v-for="link in navLinks" :key="link.path">
            <!-- Route Links -->
            <div v-if="link.type === 'route'">
              <router-link :to="link.path" class="text-gray-300 hover:text-white transition-colors">
                {{ link.label }}
                <span
                  class="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"></span>
              </router-link>
            </div>
          </template>
        </div>
      </div>

      <!-- Right Side - Subscribe Form -->
      <div class="w-full sm:w-auto">
        <h3 class="text-xl font-semibold mb-4">Stay Updated</h3>
        <p class="text-gray-300 mb-6">Subscribe to our blog for the latest updates and insights.</p>
        <form @submit.prevent="handleSubscribe" class="space-y-4 z-[0]">
          <input v-model="email" type="email" placeholder="Enter your email"
            class="w-full pl-3 py-3 bg-[#2C2C35] text-white rounded-lg border border-gray-600 focus:outline-none focus:border-[#FFA726] focus:ring-1 focus:ring-[#FFA726] transition-all"
            required />
          <button type="submit"
            class="w-full px-6 py-3 bg-[#FFA726] text-black font-semibold rounded-lg hover:bg-[#FF9800] transition-all duration-300">
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
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import {
  InstagramIcon,
  FacebookIcon,
  TwitterIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon
} from 'vue-feather-icons'
import { useRouter } from 'vue-router'

const email = ref('')

const router = useRouter()

const navLinks = [
  // Scroll Links
  { type: 'scroll', path: 'features', label: 'Features' },
  { type: 'scroll', path: 'solutions', label: 'Solutions' },
  { type: 'scroll', path: 'pricing', label: 'Pricing' },

  // Route Links
  { type: 'route', path: 'about', label: 'About Us' },
  { type: 'route', path: '/docs', label: 'Docs' },
  { type: 'route', path: '/career', label: 'Career' },
  { type: 'route', path: '/privacy', label: 'Privacy Policy' },
  { type: 'route', path: '/terms', label: 'Terms of Service' },
  { type: 'route', path: '/partner', label: 'Partner' },
  { type: 'route', path: '/faq', label: 'FAQs' },
]

const handleScroll = (id) => {
  if (router.currentRoute.value.path !== '/') {
    router.push('/').then(() => {
      // Delay to ensure the home page has loaded
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }, 500) // Adjust the timeout as needed
    })
  } else {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
}

const handleSubscribe = () => {
  if (email.value) {
    console.log('Subscribed:', email.value)
    email.value = ''
  }
}
</script>