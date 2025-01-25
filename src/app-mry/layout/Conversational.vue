<template>
  <div @click="handleClickOutside">
    <!-- Bot Icon -->
    <button
      @click.stop="toggleBot"
      class="fixed bottom-6 right-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
      aria-label="Open chat"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </button>

    <!-- Bot Popup -->
    <transition name="fade">
      <div 
        v-if="isOpen" 
        class="fixed bottom-24 right-6 w-96 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100" 
        @click.stop
      >
        <!-- Success Feedback Overlay -->
        <div 
          v-if="showSuccessOverlay" 
          class="absolute inset-0 bg-green-500 bg-opacity-90 z-50 flex flex-col items-center justify-center text-white p-6 text-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-xl font-bold mb-2">Partnership Request Submitted!</h3>
          <p class="text-sm mb-4">We'll review your application and get back to you soon.</p>
          <button 
            @click="closeSuccessOverlay"
            class="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Close
          </button>
        </div>

        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
          <h2 class="text-xl font-bold">Become a Mehery Partner 🚀</h2>
          <p class="text-sm mt-2 text-indigo-100">Join our network of successful partners</p>
        </div>
        <form @submit.prevent="submitForm" class="p-6 space-y-6">
          <div>
            <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
            <input
              v-model="form.name"
              type="text"
              id="name"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              placeholder="Enter your name"
            >
          </div>
          <div>
            <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">Business Email</label>
            <input
              v-model="form.email"
              type="email"
              id="email"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              placeholder="you@company.com"
            >
          </div>
          <div>
            <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
            <input
              v-model="form.phone"
              type="tel"
              id="phone"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              placeholder="Enter your phone number"
            >
          </div>
          <button
            type="submit"
            class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg py-3 px-6 font-semibold hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:scale-[1.02] transition-all duration-200"
          >
            Start Partnership
          </button>
        </form>
        <button
          @click="toggleBot"
          class="absolute top-4 right-4 text-white hover:text-gray-200 focus:outline-none"
          aria-label="Close chat"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      showSuccessOverlay: false,
      form: {
        name: '',
        email: '',
        phone: ''
      }
    };
  },
  methods: {
    toggleBot() {
      this.isOpen = !this.isOpen;
      // Reset form when closing
      if (!this.isOpen) {
        this.resetForm();
      }
    },
    submitForm() {
      // Simulated form submission
      console.log('Form submitted:', this.form);
      
      // Show success overlay
      this.showSuccessOverlay = true;
    },
    closeSuccessOverlay() {
      this.showSuccessOverlay = false;
      this.isOpen = false;
      this.resetForm();
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: ''
      };
    },
    handleClickOutside(event) {
      if (this.isOpen && !this.$el.contains(event.target)) {
        this.isOpen = false;
        this.resetForm();
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
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
  animation-play-state: paused;
}

.animate-bounce:hover {
  animation-play-state: running;
}
</style>