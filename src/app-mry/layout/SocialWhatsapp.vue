<template>
  <!--  Just the WhatsApp button, fixed above the other popup -->
  <div class="fixed bottom-20 right-6 z-50">
    <a
      href="https://api.whatsapp.com/send/?phone=919372280725"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      class="block p-2 rounded-full bg-white shadow-lg hover:shadow-2xl transition-shadow"
    >
      <BIconWhatsapp class="w-10 h-10 text-green-500 hover:text-green-600 transition-colors" />
    </a>
  </div>
</template>

<script>
import { BIconWhatsapp } from 'bootstrap-vue'

export default {
  name: 'SocialWhatsapp',
  components: { BIconWhatsapp }
}
</script>

<style scoped>
/* nothing else needed—size, colours and positioning are all inline */
</style>
