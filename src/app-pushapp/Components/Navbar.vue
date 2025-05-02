<template>
  <nav
    class="fixed top-4 left-0 right-0 mx-auto max-w-6xl p-4 bg-white/60 backdrop-blur-lg rounded-lg shadow-lg z-50 transition-colors"
  >
    <div class="flex items-center justify-between">
      <!-- Mobile Hamburger (left) -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden p-2 rounded hover:bg-gray-200 transition"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <!-- Logo -->
      <button
        @click="handleNavigation('landingHero')"
        class="flex items-center focus:outline-none mx-4 md:mx-0"
      >
        <img src="@assets/images/logo2.png" alt="Mehery Logo" class="h-12 w-auto" />
      </button>

      <!-- Desktop Links -->
      <div class="hidden md:flex space-x-10 ml-8">
        <button
          v-for="link in links"
          :key="link.id"
          @click="handleNavigation(link.id)"
          class="text-gray-700 hover:text-purple-400 text-lg font-medium transition-colors"
          :class="{ 'text-purple-400': activeSection === link.id }"
        >
          {{ link.label }}
        </button>
      </div>

      <!-- Spacer -->
      <div class="flex-1"></div>

      <!-- Desktop Purchase & Mobile Cart -->
      <div class="flex items-center space-x-4">
        <!-- Purchase Now (md+) -->
        <button
          @click="handleNavigation('landingPricing')"
          class="hidden md:inline-flex items-center bg-[#7f72f7] hover:bg-[#685dd8] text-white px-4 py-2 rounded transition"
        >
          Purchase Now
        </button>

        <!-- Cart Icon (sm only) -->
        <button
         @click="handleNavigation('landingPricing')"
         class="inline-flex md:hidden items-center bg-[#7f72f7] hover:bg-[#685dd8] p-2 rounded transition"
       >
         <svg
           class="w-6 h-6 text-white"
           fill="currentColor"
           viewBox="0 0 24 24"
         >
          <path d="M7 4h-2l-1 2H0v2h2l3.6 7.59-1.35 2.44a1 1 0 0 0 .9 1.57h12v-2h-11l1.1-2h7.45a1 1 0 0 0 .92-.61l3.58-8.59H6.21l-.94-2zm0 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
         </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileOpen" class="md:hidden mt-4 bg-white/90 rounded-md p-2 shadow transition">
      <button
        v-for="link in links"
        :key="link.id"
        @click="handleNavigation(link.id)"
        class="block w-full text-left px-4 py-2 rounded transition-colors text-lg"
        :class="{
          'bg-purple-50 text-purple-700': activeSection === link.id,
          'hover:bg-gray-100': activeSection !== link.id
        }"
      >
        {{ link.label }}
      </button>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'Navbar',
  setup() {
    const mobileOpen = ref(false)
    const router = useRouter()
    const route = useRoute()

    const links = [
      { id: 'landingHero', label: 'Home' },
      { id: 'landingFeatures', label: 'Features' },
      // { id: 'landingTeam', label: 'Team' },
      // { id: 'landingFAQ', label: 'FAQ' },
      { id: 'landingContact', label: 'Contact' }
    ]

    const activeSection = ref(route.hash.replace('#', '') || 'landingHero')

    function handleNavigation(targetId) {
      if (route.name !== 'Home') {
        router.push({ name: 'Home', hash: `#${targetId}` })
      } else {
        const el = document.getElementById(targetId)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
      mobileOpen.value = false
    }

    function updateActiveSection() {
      let current = activeSection.value
      for (const link of links) {
        const el = document.getElementById(link.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.3) {
            current = link.id
          }
        }
      }
      activeSection.value = current
    }

    onMounted(() => {
      if (route.hash) handleNavigation(activeSection.value)
      window.addEventListener('scroll', updateActiveSection, { passive: true })
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', updateActiveSection)
    })

    return { mobileOpen, links, activeSection, handleNavigation }
  }
}
</script>

<style scoped>
/* All styling via Tailwind */
</style>
