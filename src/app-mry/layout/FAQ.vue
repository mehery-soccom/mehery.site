<template>
  <Navbar />
  <div class="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8 pb-16">
    <div class="max-w-5xl mx-auto">
      <!-- Title and Search Bar -->
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 class="text-3xl font-bold">FAQs</h2>
        <div class="relative w-full sm:w-64">
          <input v-model="searchQuery" type="text" placeholder="Search FAQs..."
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <span class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
        </div>
      </div>

      <!-- FAQs List -->
      <div class="space-y-4 sm:space-y-8">
        <div v-for="(faq, index) in filteredFaqs" :key="index"
          class="border-2 rounded-3xl p-2 cursor-pointer transition-all duration-300" :class="[
            faq.isOpen ? 'shadow-lg' : 'hover:shadow-md',
            'hover:border-gray-400'
          ]" @click="toggleFaq(index)">
          <div class="flex items-start justify-between gap-3 sm:scale-90">
            <div class="flex gap-4 sm:gap-8 items-start flex-1">
              <span class="text-2xl sm:text-4xl font-medium text-gray-300 font-mono">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <div class="flex-1 min-w-0">
                <h3 class="text-lg sm:text-xl font-medium mb-2 sm:mb-4 pt-1 sm:pt-2">{{ faq.title }}</h3>
                <Transition enter-active-class="transition duration-300 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                  <div v-show="faq.isOpen" class="text-gray-600 text-base sm:text-lg leading-relaxed" v-html="faq.content"></div>
                </Transition>
              </div>
            </div>
            <button
              class="rounded-full border-2 w-8 h-8 sm:w-10 sm:h-10 flex justify-center text-xl sm:text-2xl transition-all duration-300 flex-shrink-0 mt-1 sm:mt-2"
              :class="faq.isOpen
                ? 'bg-black text-white border-black'
                : 'bg-white text-black hover:bg-gray-50'">
              <span class="transform transition-transform duration-300" :class="faq.isOpen ? 'rotate-180' : ''">
                {{ faq.isOpen ? '−' : '+' }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { faqService } from '../../firebase/index';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';


// Predefined FAQs
// const predefinedFaqs = [
//   {
//     title: 'Can I use my existing WhatsApp number with Mehery?',
//     content: `
//       Yes, you can use your existing WhatsApp number with Mehery. However, before onboarding:
//       <ul class="list-disc pl-5 space-y-1 mt-2">
//         <li>You must delete the WhatsApp account linked to that number.</li>
//         <li>If your number is used with another WhatsApp Business API provider (BSP), you can migrate it to Mehery after disabling the Two-Factor Authentication (2FA) PIN from your existing BSP.</li>
//         <li>Alternatively, you can provide a new phone number (virtual or regular SIM) to receive an OTP.</li>
//       </ul>
//       Once migrated:
//       <ul class="list-disc pl-5 space-y-1 mt-2">
//         <li>Your number will be accessible only on the Mehery platform.</li>
//         <li>Virtual numbers support regular voice calls but not WhatsApp voice and video calls via the WhatsApp Business API.</li>
//       </ul>
//     `,
//     isOpen: false
//   },
//   {
//     title: 'What is conversation-based pricing on WhatsApp?',
//     content: `
//       WhatsApp introduced a conversation-based pricing model in February 2022. Key points:
//       <ul class="list-disc pl-5 space-y-1 mt-2">
//         <li>Businesses are charged per 24-hour messaging session with a customer.</li>
//         <li>Multiple messages within a 24-hour period incur a single charge for that session.</li>
//         <li>For more details, refer to WhatsApp's official pricing documentation.</li>
//       </ul>
//     `,
//     isOpen: false
//   },
//   {
//     title: 'If WhatsApp is free, why does conversation-based pricing apply?',
//     content: `
//       While WhatsApp is free for personal use, businesses using the WhatsApp Business API are charged:
//       <ul class="list-disc pl-5 space-y-1 mt-2">
//         <li>Based on conversation pricing.</li>
//         <li>Costs vary depending on the customer's country code and the type of message templates used.</li>
//         <li>For pricing details, visit WhatsApp's official pricing page.</li>
//       </ul>
//     `,
//     isOpen: false
//   },
//   // Continue with the rest of your FAQs in the same format
//   // I've shown the pattern for the first few as examples
// ]


const predefinedFaqs = [
  {
    title: 'Can I use my existing WhatsApp number with Mehery?',
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
    title: 'What is conversation-based pricing on WhatsApp?',
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
    title: 'If WhatsApp is free, why does conversation-based pricing apply?',
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
    title: 'How many social media messenger channels can I add on Mehery?',
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
    title: 'How easy is it to add a new channel on Mehery?',
    content: `
      Mehery offers an auto-configure capability:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Allows you to seamlessly add a new channel whenever needed.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'Can I use multiple WhatsApp Business API numbers with Mehery?',
    content: `
      Yes! Mehery allows businesses to:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Manage multiple WhatsApp Business API (WABA) numbers under the same domain.</li>
        <li>Add up to 10 WABA numbers depending on your requirements.</li>
        <li>Ensure flexibility for different teams, regions, or business units.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'What are the key requirements for a business to be approved for WhatsApp Business API?',
    content: `
      To be approved, your business must comply with:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>WhatsApp Business Solution Policy</li>
        <li>WhatsApp Business Solution Terms</li>
        <li>WhatsApp Commerce Policy</li>
      </ul>
      You must work with a Business Solution Provider (BSP) like Mehery.
    `,
    isOpen: false
  },
  {
    title: 'Can I use my existing customer engagement channels alongside WhatsApp Business API?',
    content: `
      Yes! WhatsApp Business API can be seamlessly integrated with your existing customer engagement channels. Contact Mehery to explore how this can be set up for your business.
    `,
    isOpen: false
  },
  {
    title: 'Are opt-ins required for WhatsApp Business API?',
    content: `
      Yes. WhatsApp requires businesses to obtain customer opt-ins before initiating conversations using Message Templates to ensure a high-quality customer experience.
      Opt-ins can be collected both on and off WhatsApp through various methods, including:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>WhatsApp Links</li>
        <li>WhatsApp QR Codes</li>
        <li>WhatsApp Ads</li>
        <li>Website Contact Forms</li>
        <li>Interactive Voice Response (IVR)</li>
      </ul>
      For example, you can ask customers to opt in when they subscribe to your newsletter or sign up through your website.
    `,
    isOpen: false
  },
  {
    title: 'What are the prerequisites for going live with WhatsApp API?',
    content: `
      To go live with the WhatsApp Business API, you need:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Facebook Business Manager Account access</li>
        <li>Credit or Debit Card (for billing purposes)</li>
        <li>A Phone number (not associated with a mobile WhatsApp) to set up the WhatsApp Business Account. This can be a landline, mobile, or virtual number.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'Why does Meta block a WhatsApp Business Account?',
    content: `
      Meta blocks WhatsApp Business Accounts for several reasons:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Customers report outbound messages (marketing or utility) as spam, leading to account blocks if the percentage of reports exceeds Meta’s internal threshold.</li>
        <li>Payment method failures or declined payments can also result in account blocks for outbound communication.</li>
      </ul>
      Suggestions to avoid blocks:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Run campaigns only with customers initially to ensure high-quality engagement.</li>
        <li>Include an “unsubscribe” or “stop” button in campaigns.</li>
        <li>Monitor campaign impact and pause if template quality is affected.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'Can Mehery help with getting me live when I have a blocked WhatsApp Business Account?',
    content: `
      Mehery has helped several customers resolve blocked WABA situations. However, this is done on a best-effort basis.
    `,
    isOpen: false
  },
  {
    title: 'What will be the stumbling blocks to getting my WhatsApp Business Account operational?',
    content: `
      Common points of failure when setting up a WhatsApp Business Account include:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Your Facebook Business Account is blocked or blacklisted by Meta.</li>
        <li>Your WABA ID is blocked or blacklisted.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'Why should I verify my FB Manager account (WhatsApp Business API)?',
    content: `
      A verified WhatsApp Business API account enhances credibility and builds customer trust. You can request verification on Facebook Business Manager. Mehery’s customer engagement team will help you with this process. To be eligible, your business must be notable and comply with WhatsApp’s Commerce and Business Policies.
    `,
    isOpen: false
  },
  {
    title: 'Does the WhatsApp Business API support multiple languages?',
    content: `
      Yes! WhatsApp Business API supports multiple languages, allowing businesses to engage with customers in their regional language. This multilingual support applies to both notifications and conversational flows, ensuring a personalized customer experience.
    `,
    isOpen: false
  },
  {
    title: 'What is a Daily Active User (DAU)?',
    content: `
      A Daily Active User (DAU) refers to:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>A unique user who interacts with your business on a given calendar day.</li>
        <li>The DAU charge covers all messages exchanged with that user across all channels included in your package.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'How is DAU Charged?',
    content: `
      DAU billing works as follows:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Billing is per unique user, per day – irrespective of the number of messages exchanged within that day.</li>
        <li>Conversations from different channels (WhatsApp, Facebook Messenger, Instagram DM, Webchat, etc.) are consolidated into a single DAU charge.</li>
      </ul>
      Example Calculation:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>For the Lite Package:
          <ul class="list-disc pl-5 space-y-1 mt-2">
            <li>Day 1: 20 DAUs → Cost = 20 × ₹1.25 = ₹25.00</li>
            <li>Day 2: 10 DAUs → Cost = 10 × ₹1.25 = ₹12.50</li>
            <li>Cumulative Cost (Day 1 + Day 2) = ₹37.50</li>
          </ul>
        </li>
      </ul>
      Payment & Continuity:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Mehery Conversation Charges (DAU-based billing) are prepaid.</li>
        <li>Your license remains active until the deposit amount is exhausted.</li>
        <li>To continue using the service, you must top up your deposit once the balance runs out.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'How does the Free Forever Plan Work?',
    content: `
      Mehery Free Forever Plan – Unlock Powerful Features at No Cost!
      With our Free Forever Plan, you gain full access to Mehery’s entire suite of powerful features—absolutely FREE!
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Explore all top-notch features without any subscription fees.</li>
        <li>Even if your Facebook Business Verification is pending, you can still access your inbox with limited messaging capabilities.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'What are the messaging restrictions in the free forever plan?',
    content: `
      With the Free Forever Plan, you get free access to all Mehery features. However, there are certain messaging restrictions if your Facebook Business Verification is pending:
      Messaging Limits:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>  Unlimited inbound messages – You can receive unlimited messages from users.</li>
        <li>🚫 Limited outbound chats – You can chat with only 10 unique users per day.</li>
        <li>🚫 Limited notifications – You can send WhatsApp template notifications to only 10 unique users per day. (Templates must be pre-approved by Facebook.)</li>
      </ul>
      Important Note:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>To unlock full functionality, you must complete your Facebook Business Verification.</li>
        <li>Until then, your messaging access remains restricted to a limited set of phone numbers.</li>
        <li>Once verified, you will gain access to higher messaging limits and additional features on your account.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'How to Get the WhatsApp Business Verified Blue Tick?',
    content: `
      The Blue Tick (Official Business Account - OBA Status) on WhatsApp is granted to businesses that WhatsApp verifies as authentic and reputable. This verification ensures that your business name appears instead of your phone number, even if your number is not saved by users.
      How Mehery Helps You Get Verified:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Mehery can apply for the Blue Tick on your behalf for free once you move to a paid subscription.</li>
        <li>Approval is entirely at WhatsApp's discretion, and we cannot influence their decision.</li>
      </ul>
      Factors Affecting Approval:
      WhatsApp considers multiple factors, including:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>  Brand credibility & recognition</li>
        <li>  Social media following</li>
        <li>  Mentions in external media</li>
        <li>  Website domain ranking</li>
      </ul>
      If Your Application is Rejected:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>🚫 Rejection does not impact your ability to use Mehery or the WhatsApp Business API.</li>
        <li>You can still continue using all WhatsApp features as usual.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'When can I start using Mehery?',
    content: `
      As an official WhatsApp Business service provider, Mehery helps you grow your online sales and transform customer experience at scale. If you’re looking to boost your revenue by leveraging WhatsApp as a sales channel, you can start using Mehery anytime.
      We also offer a Free Forever Plan:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>You can start using Mehery within minutes of signing up with us.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'WhatsApp Messaging Restrictions Before Facebook Verification',
    content: `
      Before completing your Facebook Business Verification, WhatsApp allows you to send messages in a restricted manner:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>  Unlimited inbound messages – You can receive unlimited messages from users.</li>
        <li>🚫 Limited outbound chats – You can chat with only 250 unique users per day.</li>
      </ul>
      Maximize Your Free Access:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Leverage Mehery's Free Forever Plan to test, explore, and optimize your communication strategies before scaling up.</li>
        <li>Experience firsthand how WhatsApp Business APIs can power up your customer engagement.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'How does Mehery’s pricing and Billing work?',
    content: `
      The pricing of Mehery Smart Conversations is based on the plan you choose for your business. Below are the key components:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Subscription Charges: Recurring charge based on the selected plan (monthly or annual).</li>
        <li>Pay-As-You-Go Model (Lite Plan): Requires a one-time deposit of $1000 towards Daily Active User (DAU) fees.</li>
        <li>WhatsApp Conversation Charges: Billed directly by Meta for conversations initiated by your business or customers.</li>
        <li>Non-WABA Channels (FB Messenger, Instagram DM, Webchat, etc.): Charges are based on session usage.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'What Media Formats are supported by WhatsApp Business API?',
    content: `
      Accepted File Types & Size Limits for WhatsApp Business API:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Images: JPEG, PNG (max size: 16 MB)</li>
        <li>Audio: AMR, MP3, Opus (max size: 16 MB)</li>
        <li>Video: MP4, 3GP (max size: 16 MB)</li>
        <li>Documents: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX, TXT (max size: 100 MB)</li>
        <li>Stickers: WebP (recommended size: ~100 KB)</li>
      </ul>
      Additional Considerations:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Compress or optimize files near or exceeding size limits for faster delivery.</li>
        <li>Specify correct MIME types when uploading files.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'Does Mehery Allow me to integrate my Instagram and Facebook Messengers Accounts and converse with my customers?',
    content: `
      Yes, you can add Instagram DM and Messenger as channels in Mehery and seamlessly communicate with your customers for all inbound messages. You can use the CHAT GPT conversational BOT, menu-driven BOTs, or human agents to engage your customers and prospects alike.
    `,
    isOpen: false
  },
  {
    title: 'Can I initiate messages to customers using Instagram DM & FB Messenger?',
    content: `
      Meta allows you to send outbound messages to customers within a 24-hour window of their first message to your business. We can guide you on how to extend this window to 7 days.
    `,
    isOpen: false
  },
  {
    title: 'What are the requirements to use the FB Messenger API?',
    content: `
      To use the API, you need to meet the following requirements:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Facebook Business Account: Your account must be a Business (Professional) account.</li>
        <li>Facebook Page Linkage: Your Instagram Business account must be linked to a Facebook Page.</li>
        <li>API Integration: Integrate your chatbot with your Instagram Business or Facebook Business account on a supported platform such as Mehery.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'What are the requirements to use the Instagram DM API?',
    content: `
      To use the API, you need to meet the following requirements:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>Instagram Business Account: Your account must be a Business (Professional) account.</li>
        <li>Facebook Page Linkage: Your Instagram Business account must be linked to a Facebook Page.</li>
        <li>API Integration: Integrate your chatbot with your Instagram Business or Facebook Business account on a supported platform such as Mehery.</li>
      </ul>
    `,
    isOpen: false
  },
  {
    title: 'What media formats are supported by the Instagram DM & FB Messenger API?',
    content: `
      The Instagram Messenger API supports the following media formats:
      <ul class="list-disc pl-5 space-y-1 mt-2">
        <li>  Text Messages</li>
        <li>  Stickers</li>
        <li>  Images – JPG, PNG, ICO, BMP (max size: 8MB)</li>
        <li>  Videos</li>
        <li>  Buttons</li>
        <li>🚫 Unsupported Media – Attachments of any kind are not supported.</li>
      </ul>
    `,
    isOpen: false
  }
];
// Reactive state
const faqs = ref([]);
const searchQuery = ref('');

const filteredFaqs = computed(() => {
  if (!searchQuery.value) return faqs.value;
  const query = searchQuery.value.toLowerCase();
  return faqs.value.filter(
    (faq) =>
      faq.title.toLowerCase().includes(query) ||
      faq.content.toLowerCase().includes(query)
  );
});

const loadFaqs = async () => {
  // Get stored FAQs from Firebase
  const storedFaqs = await faqService.getFaqs();
  
  // Merge with predefined FAQs
  const mergedFaqs = [...predefinedFaqs, ...storedFaqs.filter(storedFaq =>
    !predefinedFaqs.some(predefinedFaq => predefinedFaq.title === storedFaq.title)
  )];
  
  // Add isOpen property if not exists
  mergedFaqs.forEach(faq => {
    if (!faq.hasOwnProperty('isOpen')) {
      faq.isOpen = false;
    }
  });
  
  faqs.value = mergedFaqs;
};

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};

onMounted(() => {
  loadFaqs();
});
</script>