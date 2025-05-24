<template>
    <Navbar />
    <div class="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8 pb-16">
        <div class="max-w-5xl mx-auto">
            <!-- Title and Search Bar -->
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h2 class="text-3xl font-bold">FAQs</h2>

            </div>

            <!-- FAQs List -->
            <div class="space-y-4">
                <div
                    v-for="(faq, index) in predefinedFaqs"
                    :key="index"
                    class="border-2 rounded-3xl p-2 cursor-pointer transition-all duration-300"
                    :class="[faq.isOpen ? 'shadow-lg' : 'hover:shadow-md', 'hover:border-gray-400']"
                    @click="toggleFaq(index)"
                >
                    <div class="flex items-start justify-between sm:scale-90">
                        <div class="flex sm:gap-2 items-start flex-1">
                            <span class="text-xl sm:text-3xl font-medium text-gray-700 font-mono">
                                {{ String(index + 1).padStart(2) }}.
                            </span>
                            <div class="flex-1 min-w-0">
                                <h3 class="text-lg sm:text-xl font-medium mb-2 sm:mb-4 pt-1 sm:pt-2">
                                    {{ faq.title }}
                                </h3>
                                <Transition
                                    enter-active-class="transition duration-300 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-200 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0"
                                >
                                    <div
                                        v-show="faq.isOpen"
                                        class="text-gray-600 text-base sm:text-lg leading-relaxed"
                                        v-html="faq.content"
                                    ></div>
                                </Transition>
                            </div>
                        </div>
                        <button
                            class="rounded-full border-2 w-8 h-8 sm:w-10 sm:h-10 flex justify-center text-xl sm:text-2xl transition-all duration-300 flex-shrink-0 mt-1 sm:mt-2"
                            :class="
                                faq.isOpen ? 'bg-black text-white border-black' : 'bg-white text-black hover:bg-gray-50'
                            "
                        >
                            <span
                                class="transform transition-transform duration-300"
                                :class="faq.isOpen ? 'rotate-180' : ''"
                            >
                                {{ faq.isOpen ? "−" : "+" }}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="mt-8 text-center">
              <p class="text-2xl font-semibold text-center">
                For more FAQ's Chat with us on any of these Channels :
              </p>
              <div class="flex justify-center gap-6 mt-4">
                <!-- Facebook Messenger -->
                <a
                  href="https://m.me/MeherY.SocCom"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Channel id: fb:101842438530284"
                  class="transform hover:scale-110 transition-all duration-300"
                  style="color: #1877F2;"
                >
                  <BIconFacebook class="w-8 h-8" />
                </a>

                <!-- Instagram DM -->
                <a
                  href="https://www.instagram.com/meherysoccom/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Channel id: ig:17841447833002213"
                  class="transform hover:scale-110 transition-all duration-300"
                  style="color: #E4405F;"
                >
                  <BIconInstagram class="w-8 h-8" />
                </a>

                <!-- Telegram -->
                <a
                  href="https://t.me/meherybot"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Channel id: tg:meherybot"
                  class="transform hover:scale-110 transition-all duration-300"
                  style="color: #0088CC;"
                >
                  <BIconTelegram class="w-8 h-8" />
                </a>

                <!-- WhatsApp -->
                <a
                  href="https://api.whatsapp.com/send/?phone=919372280725"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Message us on WhatsApp"
                  class="transform hover:scale-110 transition-all duration-300"
                  style="color: #25D366;"
                >
                  <BIconWhatsapp class="w-8 h-8" />
                </a>
              </div>
            </div>
        </div>
    </div>     

    <Footer />
</template>

<script setup>
import { ref } from "vue";
import Navbar from "../components/common/Navbar.vue";
import Footer from "../components/common/Footer.vue";
import { BIconFacebook, BIconInstagram, BIconTelegram,BIconWhatsapp } from 'bootstrap-vue'

const predefinedFaqs = ref([
    {
        title: "Can I use my existing WhatsApp number with Mehery?",
        content: `
      Yes, you can use your existing WhatsApp number with Mehery. However, before onboarding:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>You must delete the WhatsApp account linked to that number.</li>
        <li>If your number is used with another WhatsApp Business API provider (BSP), you can migrate it to Mehery after disabling the Two-Factor Authentication (2FA) PIN from your existing BSP.</li>
        <li>Alternatively, you can provide a new phone number (virtual or regular SIM) to receive an OTP.</li>
      </ul>
      Once migrated:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Your number will be accessible only on the Mehery platform.</li>
        <li>Virtual numbers support regular voice calls but not WhatsApp voice and video calls via the WhatsApp Business API.</li>
      </ul>
    `,
        isOpen: false
    },
    {
        title: "What is conversation-based pricing on WhatsApp?",
        content: `
      WhatsApp introduced a conversation-based pricing model in February 2022. Key points:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Businesses are charged per 24-hour messaging session with a customer.</li>
        <li>Multiple messages within a 24-hour period incur a single charge for that session.</li>
        <li>For more details, refer to 
          <span class = "text-blue-500"> 
            <a href = "https://developers.facebook.com/docs/whatsapp/pricing/"> WhatsApp’s official pricing documentation. <a/>
          </span>
        </li>
      </ul>
    `,
        isOpen: false
    },
    {
        title: "If WhatsApp is free, why does conversation-based pricing apply?",
        content: `
      While WhatsApp is free for personal use, businesses using the WhatsApp Business API are charged:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Based on conversation pricing.</li>
        <li>Costs vary depending on the customer's country code and the type of message templates used.</li>
        <li>For pricing details, visit 
          <span class = "text-blue-500"> 
            <a href = "https://developers.facebook.com/docs/whatsapp/pricing/"> WhatsApp’s official pricing documentation. <a/>
          </span>
  
        </li>
      </ul>
    `,
        isOpen: false
    },
    {
        title: "How many social media messenger channels can I add on Mehery?",
        content: `
      The number of channels depends on your license type:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>You can have one, two, three, or more channels on the same platform.</li>
        <li>Channels can be of the same type (e.g., multiple WhatsApp accounts) or a combination of different platforms.</li>
      </ul>
    `,
        isOpen: false
    },
    {
        title: "How easy is it to add a new channel on Mehery?",
        content: `
      Mehery offers an auto-configure capability:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Allows you to seamlessly add a new channel whenever needed.</li>
      </ul>
    `,
        isOpen: false
    },
]);


const toggleFaq = (index) => {
  predefinedFaqs.value[index].isOpen = !predefinedFaqs.value[index].isOpen
}

</script>
