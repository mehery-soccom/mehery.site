<template>
  <div @click="handleClickOutside" class="font-sans chatbot-container">
    <!-- Bot Icon with Tooltip -->
    <div class=" bottom-32 right-6 group chatbot-element">
      <!-- Tooltip -->
      <div class="absolute -top-0 right-20 bg-gray-800 text-white text-xs py-1 rounded w-auto px-2 whitespace-nowrap chatbot-tooltip">
        Chat with us
      </div>
      <!-- Bot Button -->
      <button @click.stop="toggleBot"
        class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Open chat">
        <message-circle-icon size="24" class="group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>

    <!-- Bot Popup -->
    <transition name="slide-fade">
      <div v-if="isOpen"
        class="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 chatbot-popup"
        @click.stop>
        <!-- Success Feedback Overlay -->
        <transition name="fade">
          <div v-if="showSuccessOverlay"
            class="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 z-50 flex flex-col items-center justify-center text-white p-6 text-center">
            <check-circle-icon size="48" class="mb-4 animate-pulse" />
            <h3 class="text-xl font-bold mb-2">Partnership Request Submitted!</h3>
            <p class="text-sm mb-4">We'll review your application and get back to you soon.</p>
            <button @click="closeSuccessOverlay"
              class="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">
              Close
            </button>
          </div>
        </transition>

        <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4">
          <h2 class="text-lg font-bold flex items-center">
            <users-icon size="20" class="mr-2" />
            Become a Mehery Partner
          </h2>
          <p class="text-xs mt-1 text-indigo-100">Join our network of successful partners</p>
        </div>
        <div class="chat-container">
          <div v-for="(message, index) in conversation" :key="index" :class="['message', message.type]">
            <img v-if="message.type === 'bot'" src="../../@assets/images/bot.svg" alt="Bot" class="avatar">
            <img v-else src="../../@assets/images/bot.svg" alt="You" class="avatar">
            <div class="bubble">{{ message.text }}</div>
          </div>
        </div>
        <div class="input-container">
          <input v-model="userInput" type="text" placeholder="Type a message"  @keydown.enter="handleUserResponse" >
          <button @click="handleUserResponse" >Send</button>
        </div>
        <button @click="toggleBot"  class="absolute top-2 right-2 text-white hover:text-gray-200 focus:outline-none"
          aria-label="Close chat">
          <x-icon size="20" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { MessageCircleIcon, UsersIcon, CheckCircleIcon, XIcon } from 'vue-feather-icons'

export default {
  components: {
    MessageCircleIcon,
    UsersIcon,
    CheckCircleIcon,
    XIcon
  },
  data() {
    return {
      isOpen: false,
      showSuccessOverlay: false,
      userInput: '',
      conversation: [
        { type: 'bot', text: 'Welcome! What is your full name?' }
      ],
      form: {
        name: '',
        email: '',
        phone: ''
      },
      currentStep: 0
    };
  },
  methods: {
    toggleBot() {
      this.isOpen = !this.isOpen;
      if (!this.isOpen) {
        this.resetConversation();
      }
    },
    handleUserResponse() {
      const input = this.userInput.trim();
      if (input === '') return;
      this.conversation.push({ type: 'user', text: input });
      this.userInput = '';
      this.nextStep(input);
    },
    nextStep(input) {
      this.currentStep++;
      switch (this.currentStep) {
        case 1:
          this.form.name = input;
          this.conversation.push({ type: 'bot', text: 'Great! What is your business email?' });
          break;
        case 2:
          this.form.email = input;
          this.conversation.push({ type: 'bot', text: 'Lastly, your phone number, please.' });
          break;
        case 3:
          this.form.phone = input;
          this.submitForm();
          break;
        default:
          break;
      }
    },
    submitForm() {
      console.log('Form submitted:', this.form);
      this.showSuccessOverlay = true;
    },
    closeSuccessOverlay() {
      this.showSuccessOverlay = false;
      this.toggleBot();
    },
    resetConversation() {
      this.conversation = [
        { type: 'bot', text: 'Welcome! What is your full name?' }
      ];
      this.currentStep = 0;
      this.form = { name: '', email: '', phone: '' };
      this.userInput = '';
    },
    handleClickOutside(event) {
      if (this.isOpen && !this.$el.contains(event.target)) {
        this.isOpen = false;
        this.resetConversation();
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
    setTimeout(() => {
    this.isOpen = true;
  }, 5000);
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

/* Chat container styles */
.chat-container {
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow-y: auto;
  padding: 10px;
  background-color: #f5f5f5;
}

.message {
  display: flex;
  margin-bottom: 10px;
  animation: fadeIn 0.5s;
}

.message.bot {
  justify-content: flex-start;
}

.message.user {
  justify-content: flex-end;
}

.message .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.message.user .avatar {
  margin-left: 10px;
  margin-right: 0;
}

.message .bubble {
  max-width: 70%;
  padding: 10px 15px;
  border-radius: 20px;
  position: relative;
  font-size: 14px;
}

.message.bot .bubble {
  background-color: #e4e6eb;
  color: #000;
  border-bottom-left-radius: 0;
}

.message.user .bubble {
  background-color: #0b93f6;
  color: #fff;
  border-bottom-right-radius: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Input container styles */
.input-container {
  display: flex;
  padding: 10px;
  background-color: #fff;
  border-top: 1px solid #ddd;
}

.input-container input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  outline: none;
  margin-right: 10px;
}

.input-container button {
  padding: 10px 20px;
  background-color: #0b93f6;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.input-container button:hover {
  background-color: #0a7cd5;
}
</style>