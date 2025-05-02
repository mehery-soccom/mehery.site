<template>
  <footer class="bg-[#241d31] text-white rounded-t-[4rem] pt-8 pb-5">
    <div class="container mx-auto px-4">
      <!-- Top Section -->
      <div class="flex flex-col sm:flex-row justify-between gap-8 mb-10">
        <!-- Logo + Contact -->
        <div class="w-full sm:w-1/3 space-y-6">
          <img src="@assets/images/footer/logo.png" alt="Mehery" class="w-52 h-auto mx-auto sm:mx-0" />
          <div class="space-y-3 text-gray-300">
            <p class="flex items-center space-x-2 justify-center sm:justify-start">
              <MailIcon class="w-5 h-5" />
              <a href="mailto:sales@mehery.com" class="hover:text-white">sales@mehery.com</a>
            </p>
            <p class="flex items-center space-x-2 justify-center sm:justify-start">
              <PhoneIcon class="w-5 h-5" />
              <a href="tel:+919619203759" class="hover:text-white">+91 96192 03759</a>
            </p>
            <div class="flex items-start space-x-2 justify-center sm:justify-start">
              <MapPinIcon class="w-5 h-5 mt-1" />
              <div class="text-center sm:text-left">
                <p>1-34, A H Wadia Baug</p>
                <p>Parel Tank Road, Mumbai 400033</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Meta Partner -->
        <div class="w-full sm:w-1/3 flex flex-col items-center text-center">
          <img src="@assets/images/footer/meta.png" alt="Meta Partner" class="w-52 h-auto mb-4" />
          <p class="italic text-gray-300 max-w-[300px] leading-relaxed">
            As a proud Meta Technology Partner,<br />
            we ensure top-tier integration and reliability across channels.
          </p>
        </div>

        <!-- Quick Links & Company -->
        <div class="w-full sm:w-1/3 flex flex-col sm:flex-row sm:justify-end gap-6">
          <!-- Quick Links -->
          <div class="text-center sm:text-left">
            <h3 class="text-[#FFA726] font-semibold mb-4">Quick Links</h3>
            <ul class="space-y-2 text-gray-300">
              <li><button @click="handleNavigation('landingFeatures')" class="hover:text-white">Features</button></li>
              <li><button @click="handleNavigation('landingPricing')" class="hover:text-white">Pricing</button></li>
              <!-- <li><button @click="handleNavigation('landingReviews')" class="hover:text-white">Customers</button></li> -->
            </ul>
          </div>
          <!-- Company -->
          <div class="text-center sm:text-left">
            <h3 class="text-[#FFA726] font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-gray-300">
              <li><router-link to="/terms" class="hover:text-white">Terms of Use</router-link></li>
              <li><router-link to="/privacy-policy" class="hover:text-white">Privacy Policy</router-link></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div
        class="border-t border-gray-700 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-center lg:text-left"
      >
        <div class="text-gray-400">
          © {{ year }} Mehery. All Rights Reserved.
        </div>
        <div class="flex space-x-4">
          <a href="https://www.facebook.com/MeherY.SocCom" target="_blank" class="text-gray-400 hover:text-white">
            <font-awesome-icon :icon="['fab','facebook']" />
          </a>
          <a href="https://x.com/mehery_soccom" target="_blank" class="text-gray-400 hover:text-white">
            <font-awesome-icon :icon="['fab','twitter']" />
          </a>
          <a href="https://www.linkedin.com/company/mehery/posts/?feedView=all" target="_blank" class="text-gray-400 hover:text-white">
            <font-awesome-icon :icon="['fab','linkedin']" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { MailIcon, PhoneIcon, MapPinIcon } from 'vue-feather-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faTwitter, faLinkedin)

const router = useRouter()
const route = useRoute()
const year = new Date().getFullYear()

function handleNavigation(targetId) {
  if (route.name !== 'Home') {
    router.push({ name: 'Home', hash: `#${targetId}` })
  } else {
    const el = document.getElementById(targetId)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
