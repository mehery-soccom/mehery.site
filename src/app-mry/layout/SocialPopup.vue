<template>
    <div @click="handleClickOutside" class="font-sans chatbot-container">
      <!-- Bot Icon with Tooltip -->
      <div class="fixed bottom-8 right-6 group chatbot-element">
        <!-- Tooltip -->
        <div class="absolute -top-0 right-20 bg-gray-800 text-white text-xs py-1 rounded w-auto px-2 whitespace-nowrap chatbot-tooltip">
          Follow us
        </div>
        <!-- Bot Button -->
        <button @click.stop="toggleBot"
          class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
          aria-label="Open social media links">
          <share-2-icon size="24" class="group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>
  
      <!-- Social Media Popup -->
      <transition name="slide-fade">
        <div v-if="isOpen"
          class="fixed bottom-12 right-28 w-40 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 chatbot-popup"
          @click.stop>
          <!-- Social Media Icons -->
          <div class="flex gap-4 py-3 justify-center">
            <a href="https://www.instagram.com/meherysoccom/" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-indigo-600 transform hover:scale-110 transition-all duration-300">
              <BIconInstagram class="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/MeherY.SocCom/" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-indigo-600 transform hover:scale-110 transition-all duration-300">
              <BIconFacebook class="w-6 h-6" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=919372280725" target="_blank" rel="noopener noreferrer"
              class="text-gray-400 hover:text-indigo-600 transform hover:scale-110 transition-all duration-300">
              <BIconWhatsapp class="w-6 h-6" />
            </a>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  import { BIconFacebook, BIconInstagram, BIconWhatsapp } from 'bootstrap-vue';
  import { Share2Icon, InstagramIcon, FacebookIcon, TwitterIcon, XIcon  } from 'vue-feather-icons'
  
  export default {
    components: {
      Share2Icon,
      InstagramIcon,
      FacebookIcon,
      TwitterIcon,
      XIcon,
    },
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggleBot() {
        this.isOpen = !this.isOpen;
      },
      handleClickOutside(event) {
        if (this.isOpen && !this.$el.contains(event.target)) {
          this.isOpen = false;
        }
      }
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
    }
  };
  </script>
  
  <style scoped>
  /* Base container styles with high z-index */
  .chatbot-container {
    position: relative;
    z-index: 99999 !important;
  }
  
  .chatbot-element {
    position: fixed;
    z-index: 99999 !important;
  }
  
  .chatbot-popup {
    position: fixed;
    z-index: 99999 !important;
  }
  
  .chatbot-tooltip {
    z-index: 100000 !important;
  }
  
  /* Transitions */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 99999 !important;
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  /* Social Media Icons Container */
  .flex.gap-6 {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    align-items: center;
  }
  
  /* Icon Hover Effects */
  .text-gray-400:hover {
    color: #4f46e5; /* Indigo-600 */
  }
  
  .transform.hover\:scale-110 {
    transform: scale(1.1);
  }
  
  .transition-all.duration-300 {
    transition: all 0.3s ease;
  }
  </style>
