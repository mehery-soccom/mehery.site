<!-- <template>
  <Navbar />
  <div class="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8 pb-16 ">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-start">FAQs</h2>

      <div class="space-y-8">
        <div v-for="(faq, index) in faqs" :key="index"
          class="border-2 rounded-3xl p-2 cursor-pointer transition-all duration-300" :class="[
            faq.isOpen ? 'shadow-lg' : 'hover:shadow-md',
            'hover:border-gray-400'
          ]" @click="toggleFaq(index)">
          <div class="flex items-start justify-between gap-3 scale-90">
            <div class="flex gap-8 items-start flex-1">
              <span class="text-4xl font-medium text-gray-300 font-mono">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <div class="flex- min-w-0">
                <h3 class="text-xl font-medium mb-4 pt-2">{{ faq.title }}</h3>
                <Transition enter-active-class="transition duration-300 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                  <div v-show="faq.isOpen" class="text-gray-600 text-lg leading-relaxed">
                    {{ faq.content }}
                  </div>
                </Transition>
              </div>
            </div>
            <button
              class="rounded-full border-2 w-10 h-10 flex  justify-center text-2xl transition-all duration-300 flex-shrink-0 mt-2"
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
import { ref, onMounted } from 'vue'
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

const faqs = ref([
  {
    title: 'How many channels of social media messengers can I add on the Mehery platform?',
    content: 'Based upon what license you have procured, you can have 1,2,7 or more channels being managed on the same platform. These channels can be of one kind e.g. messenger only, or for a mix of the available channels.',
    isOpen: false
  },
  {
    title: 'How easy is it to add a channel on the Mehery platform?',
    content: 'With the auto-configure capability, you can add a channel at will.',
    isOpen: false
  },
  {
    title: 'Can I use my existing WhatsApp number with Mehery?',
    content: 'Yes, you can use your existing WhatsApp number with Mehery. However, before onboarding, you must delete the WhatsApp account linked to that number. If your number is currently being used with another WhatsApp Business API provider (BSP), you can migrate it to Mehery after disabling the Two-Factor Authentication (2FA) PIN from your existing BSP. Alternatively, you can provide a new phone number (either a virtual number or a regular SIM number) to receive an OTP. Once your number is migrated to the WhatsApp Business API and linked to Mehery, it will be accessible only on the Mehery platform. If you are using a virtual number, regular voice calls will function as usual, but WhatsApp voice and video calls will not be supported via the WhatsApp Business API.',
    isOpen: false
  },
  {
    title: 'What is conversation-based pricing on WhatsApp?',
    content: 'WhatsApp introduced a conversation-based pricing model in February 2022. Under this structure, businesses are charged per 24-hour messaging session with a customer. This means that if you send multiple messages within a 24-hour period, you incur a single charge for that session rather than being charged per message. For more details, refer to WhatsApp’s official pricing documentation.',
    isOpen: false
  },
  {
    title: 'If WhatsApp is free, why does conversation-based pricing apply?',
    content: 'While WhatsApp is free for personal use, businesses using the WhatsApp Business API for customer engagement and marketing are charged based on conversation pricing. The cost varies depending on the customer\'s country code and the type of message templates used. For pricing details, visit WhatsApp’s official pricing page.',
    isOpen: false
  },
  {
    title: 'How many social media messenger channels can I add on Mehery?',
    content: 'The number of channels you can manage on Mehery depends on your license type. You can have one, two, three, or more channels on the same platform. These channels can be either of the same type (e.g., multiple WhatsApp or Facebook Messenger accounts) or a combination of different messaging platforms.',
    isOpen: false
  },
  {
    title: 'Can I use multiple WhatsApp Business API numbers with Mehery?',
    content: 'Yes! Mehery allows businesses to manage multiple WhatsApp Business API (WABA) numbers under the same domain. You can add up to 10 WABA numbers depending on your requirements, ensuring greater flexibility for different teams, regions, or business units.',
    isOpen: false
  },
  {
    title: 'What are the key requirements for a business to be approved for WhatsApp Business API?',
    content: 'To be approved for the WhatsApp Business API, your business must comply with: ✅ WhatsApp Business Solution Policy ✅ WhatsApp Business Solution Terms ✅ WhatsApp Commerce Policy Accessing the API requires working with a Business Solution Provider (BSP) like Mehery.',
    isOpen: false
  },
  {
    title: 'Can I use my existing customer engagement channels alongside WhatsApp Business API?',
    content: 'Yes! WhatsApp Business API can be seamlessly integrated with your existing customer engagement channels. Contact Mehery to explore how this can be set up for your business.',
    isOpen: false
  },
  {
    title: 'Are opt-ins required for WhatsApp Business API?',
    content: 'Yes. WhatsApp requires businesses to obtain customer opt-ins before initiating conversations using Message Templates to ensure a high-quality customer experience. Opt-ins can be collected both on and off WhatsApp through various methods, including: 🔹 WhatsApp Links 🔹 WhatsApp QR Codes 🔹 WhatsApp Ads 🔹 Website Contact Forms 🔹 Interactive Voice Response (IVR) For example, you can ask customers to opt in when they subscribe to your newsletter or sign up through your website.',
    isOpen: false
  },
  {
    title: 'What are the prerequisites for going live with WhatsApp API?',
    content: 'To go live with the WhatsApp Business API, you need: ✅ Facebook Business Manager ✅ Line of Credit (for billing purposes) ✅ WhatsApp Business Account (WABA)',
    isOpen: false
  },
  {
    title: 'How do I verify my WhatsApp Business API account?',
    content: 'A verified WhatsApp Business API account enhances credibility and builds customer trust. You can request verification through Mehery or via Facebook Business Manager. To be eligible, your business must be notable and comply with WhatsApp’s Commerce and Business Policies.',
    isOpen: false
  },
  {
    title: 'Does the WhatsApp Business API support multiple languages?',
    content: 'Yes! Mehery\'s WhatsApp Business API supports multiple languages, allowing businesses to engage with customers in their regional language. This multilingual support applies to both notifications and conversational flows, ensuring a personalized customer experience.',
    isOpen: false
  },
  {
    title: 'What is a Daily Active User (DAU)?',
    content: 'A Daily Active User (DAU) refers to a unique user who interacts with your business on a given calendar day. The DAU charge covers all messages exchanged with that user across all channels included in your package. How is DAU Charged? • Billing is per unique user, per day – irrespective of the number of messages exchanged within that day. • Conversations from different channels (WhatsApp, Facebook Messenger, Instagram DM, Webchat, etc.) are consolidated into a single DAU charge. Example Calculation: For the Lite Package, if: • Day 1: 20 DAUs → Cost = 20 × ₹1.25 = ₹25.00 • Day 2: 10 DAUs → Cost = 10 × ₹1.25 = ₹12.50 • Cumulative Cost (Day 1 + Day 2) = ₹37.50 Payment & Continuity: • Mehery Conversation Charges (DAU-based billing) are prepaid. • Your license remains active until the deposit amount is exhausted. • To continue using the service, you must top up your deposit once the balance runs out.',
    isOpen: false
  },
  {
    title: 'What are the messaging restrictions in the free forever plan?',
    content: 'With the Free Forever Plan, you get free access to all Mehery features. However, there are certain messaging restrictions if your Facebook Business Verification is pending. Messaging Limits: • ✅ Unlimited inbound messages – You can receive unlimited messages from users. • 🚫 Limited outbound chats – You can chat with only 10 unique users per day. • 🚫 Limited notifications – You can send WhatsApp template notifications to only 10 unique users per day. (Templates must be pre-approved by Facebook.) Important Note: To unlock full functionality, you must complete your Facebook Business Verification. Until then, your messaging access remains restricted to a limited set of phone numbers. Once verified, you will gain access to higher messaging limits and additional features on your account.',
    isOpen: false
  },
  {
    title: 'How to Get the WhatsApp Business Verified Blue Tick?',
    content: 'The Blue Tick (Official Business Account - OBA Status) on WhatsApp is granted to businesses that WhatsApp verifies as authentic and reputable. This verification ensures that your business name appears instead of your phone number, even if your number is not saved by users. How Mehery Helps You Get Verified • Since Mehery is built on the official WhatsApp Business Platform, we can apply for the Blue Tick on your behalf for free once you move to a paid subscription with Mehery. • However, approval is entirely at WhatsApp\'s discretion, and we cannot influence their decision. Factors Affecting Approval WhatsApp considers multiple factors, including: ✅ Brand credibility & recognition ✅ social media following ✅ Mentions in external media ✅ Website domain ranking How to Apply for Blue Tick Verification 1. Contact Mehery’s support team and submit a verification request. 2. The review process typically takes around 3 business days. 3. If approved, your number will display your business name along with the Blue Tick, confirming your verified status. If Your Application is Rejected: 🚫 Rejection does not impact your ability to use Mehery or the WhatsApp Business API. You can still continue using all WhatsApp features as usual.',
    isOpen: false
  },
  {
    title: 'When can I start using Mehery?',
    content: 'As an official WhatsApp Business service provider, Mehery helps you grow your online sales and transform customer experience at scale. If you’re looking to boost your revenue by leveraging WhatsApp as a sales channel, you can start using Mehery anytime. We also offer a Free forever plan, you can start using Mehery within minutes of signing up with us.',
    isOpen: false
  },
  {
    title: 'How does Mehery’s Free Forever Plan Work?',
    content: 'Mehery Free Forever Plan – Unlock Powerful Features at No Cost! With our Free Forever Plan, you gain full access to Mehery’s entire suite of powerful features—absolutely FREE! ✅ Explore all top-notch features without any subscription fees. ✅ Even if your Facebook Business Verification is pending, you can still access your inbox with limited messaging capabilities. WhatsApp Messaging Restrictions Before Facebook Verification Before completing your Facebook Business Verification, WhatsApp allows you to send messages in a restricted manner: • You can start using WhatsApp Business APIs immediately to explore their potential for customer engagement. • Facebook limits messaging initially to prevent spam and ensure only authentic businesses are onboarded. Maximize Your Free Access! Leverage Mehery\'s Free Forever Plan to test, explore, and optimize your communication strategies before scaling up. Experience firsthand how WhatsApp Business APIs can power up your customer engagement.',
    isOpen: false
  },
  {
    title: 'How does Mehery\'s pricing and Billing work?',
    content: 'The pricing of Mehery Smart Conversations is based on the plan you choose for your business. Below are the key components: 1. Subscription Charges – This is a recurring charge based on the selected plan (monthly or annual). The subscription fee is auto-deducted from your saved payment method at the start of each billing cycle. 2. Pay-As-You-Go Model (Lite Plan) – With the Lite Plan, you have the flexibility to use our platform by making a one-time deposit of $1000 towards Daily Active User (DAU) fees. The DAU fee is deducted each month based on your actual usage. 3. WhatsApp Conversation Charges – These charges apply to conversations initiated either by your business or by your customers/users. This fee is billed directly to your credit/debit card by Meta. a. Business-Initiated Conversations (e.g., one-time campaigns) are charged by Meta at the end of each month. 4. Non-WABA Channels (FB Messenger, Instagram DM, Webchat, etc.) – Charges are based on session usage. a. A session is defined as a 24-hour window in a calendar day during which unlimited messages can be exchanged between your business and the customer. Each session is billed as a single unit.',
    isOpen: false
  },
  {
    title: 'What is the Media Format supported by WhatsApp Business API?',
    content: 'Accepted File Types & Size Limits for WhatsApp Business API Meta’s WhatsApp Business API allows businesses to send various media attachments, but only in specific file formats and within defined size limits. Below are the accepted file types and their maximum size constraints: 1. Supported File Types & Formats Images • Accepted formats: JPEG, PNG • Maximum file size: 16 MB Audio • Accepted formats: AMR, MP3, Opus • Maximum file size: 16 MB • Note: Opus codec is used for voice messages. Video • Accepted formats: MP4, 3GP • Maximum file size: 16 MB • Note: Ensure proper encoding for optimal delivery. Documents • Accepted formats: o PDF o Microsoft Word: DOC, DOCX o Microsoft PowerPoint: PPT, PPTX o Microsoft Excel: XLS, XLSX o Plain text: TXT • Maximum file size: 100 MB • Note: Larger file size limits allow sharing detailed documents like contracts, reports, and presentations. Stickers • Accepted format: WebP • Recommended file size: ~100 KB (lightweight graphics) 2. Additional Considerations • Compression & Optimization: If a file is near or exceeds the limit, compressing or optimizing the file ensures faster delivery. • MIME Types & Encoding: Always specify the correct MIME type when uploading to ensure proper processing and display. • API Version & Updates: These limits may change with new API versions, so always check the official documentation for the latest updates. By adhering to these file formats and size limits, you can ensure seamless media exchange while using the WhatsApp Business API for customer engagement. 🚀',
    isOpen: false
  },
  {
    title: 'Can I send messages to customers using Instagram DM & FB Messenger?',
    content: 'Yes, you can send messages to customers on Instagram Dm & FB Messenger, but there are limitations. When a user sends a message to your chatbot, you have a 24-hour window to send an unlimited number of messages in response. However, after 24 hours from the user’s last message, you will not be able to send further messages unless the user initiates a new conversation. For example, if a user last messaged you at 11 AM on Monday, you can send messages freely until 11 AM on Tuesday. After that, you can only message them again if they reach out to you first.',
    isOpen: false
  },
  {
    title: 'What are the requirements to use the Instagram DM & FB Messenger API?',
    content: 'To use the Instagram Messenger API, you need to meet the following requirements: 1. Instagram Business Account – Your account must be a Business (Professional) account. 2. Facebook Business Account: Your account must be a Business (Professional) account. 3. Facebook Page Linkage – Your Instagram Business account must be linked to a Facebook Page. 4. API Integration – You need to integrate your chatbot with your Instagram Business or Facebook Business account on a supported platform such as Mehery. For a detailed step-by-step process, you can refer to the official integration guide.',
    isOpen: false
  },
  {
    title: 'What media formats are supported by the Instagram DM & FB Messenger API?',
    content: 'The Instagram Messenger API supports the following media formats: ✅ Text Messages ✅ Stickers ✅ Images – JPG, PNG, ICO, BMP (max size: 8MB) ✅ Videos ✅ buttons 🚫 Unsupported Media – Attachments of any kind are not supported.',
    isOpen: false
  },
]);
// const faqs = ref([

// ]);

onMounted(() => {
  loadFaqs();
});

const loadFaqs = () => {
  faqs.value = JSON.parse(localStorage.getItem('faqs') || [] );
};

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script> -->


<template>
  <Navbar />
  <div class="min-h-screen bg-white py-6 px-4 sm:px-6 lg:px-8 pb-16 ">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold mb-8 text-start">FAQs</h2>

      <div class="space-y-8">
        <div v-for="(faq, index) in faqs" :key="index"
          class="border-2 rounded-3xl p-2 cursor-pointer transition-all duration-300" :class="[
            faq.isOpen ? 'shadow-lg' : 'hover:shadow-md',
            'hover:border-gray-400'
          ]" @click="toggleFaq(index)">
          <div class="flex items-start justify-between gap-3 scale-90">
            <div class="flex gap-8 items-start flex-1">
              <span class="text-4xl font-medium text-gray-300 font-mono">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <div class="flex- min-w-0">
                <h3 class="text-xl font-medium mb-4 pt-2">{{ faq.title }}</h3>
                <Transition enter-active-class="transition duration-300 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-200 ease-in"
                  leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                  <div v-show="faq.isOpen" class="text-gray-600 text-lg leading-relaxed">
                    {{ faq.content }}
                  </div>
                </Transition>
              </div>
            </div>
            <button
              class="rounded-full border-2 w-10 h-10 flex  justify-center text-2xl transition-all duration-300 flex-shrink-0 mt-2"
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
import { ref, onMounted } from 'vue'
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

// const predefinedFaqs = [
//   {
//     title: 'How many channels of social media messengers can I add on the Mehery platform?',
//     content: 'Based upon what license you have procured, you can have 1,2,7 or more channels being managed on the same platform. These channels can be of one kind e.g. messenger only, or for a mix of the available channels.',
//     isOpen: false
//   },
//   {
//     title: 'How easy is it to add a channel on the Mehery platform?',
//     content: 'With the auto-configure capability, you can add a channel at will.',
//     isOpen: false
//   }
//   // Add other predefined FAQs here...
// ];
const predefinedFaqs = [
  {
    title: 'Can I use my existing WhatsApp number with Mehery?',
    content: 'Yes, you can use your existing WhatsApp number with Mehery. However, before onboarding, you must delete the WhatsApp account linked to that number. If your number is currently being used with another WhatsApp Business API provider (BSP), you can migrate it to Mehery after disabling the Two-Factor Authentication (2FA) PIN from your existing BSP. Alternatively, you can provide a new phone number (either a virtual number or a regular SIM number) to receive an OTP. Once your number is migrated to the WhatsApp Business API and linked to Mehery, it will be accessible only on the Mehery platform. If you are using a virtual number, regular voice calls will function as usual, but WhatsApp voice and video calls will not be supported via the WhatsApp Business API.',
    isOpen: false
  },
  {
    title: 'Can I migrate my existing WhatsApp Business Account to Mehery?',
    content: 'Yes, you can migrate your existing WhatsApp Business Account to Mehery. You need to disable the 2FA from the Facebook business manager page before initiating the migration to Mehery.',
    isOpen: false
  },
  {
    title: 'Will my templates in the existing WABA get migrated to Mehery platform?',
    content: 'Yes, when you migrate your WhatsApp Business Account to Mehery, do not create a new WABA, although Meta gives you the permission to do that. Your templates will become available within the Mehery application. Our onboarding team will help you with the mapping, so that your migration is seamless.',
    isOpen: false
  },
  {
    title: 'Is WhatsApp Business Account pricing moving from conversation-based to per-message based?',
    content: 'Yes, WhatsApp Business Account is moving back to per-message pricing in a phased manner on 1st April 2025 and 1st June 2025, based upon pre-defined groups that businesses belong to. This has been intimated to businesses by an email from Meta on 10th October 2024. With per-message pricing, businesses will be charged on the basis of: Per delivered marketing template message, Per delivered authentication template message, Per delivered utility template message, if delivered outside of a Customer Service Window. For more information on pricing updates, refer to https://developers.facebook.com/docs/whatsapp/pricing/updates-to-pricing.',
    isOpen: false
  },
  {
    title: 'How many social media messenger channels can I add on Mehery?',
    content: 'The number of channels you can manage on Mehery depends on your license type. You can have any number of channels on the same platform. These channels can be either of the same type (e.g., multiple WhatsApp or Facebook Messenger accounts) or a combination of different messaging platforms.',
    isOpen: false
  },
  {
    title: 'How easy is it to add a new channel on Mehery?',
    content: 'Mehery offers an auto-configure capability, allowing you to seamlessly add a new channel whenever needed.',
    isOpen: false
  },
  {
    title: 'Can I use multiple WhatsApp Business API numbers with Mehery?',
    content: 'Yes! Mehery allows businesses to manage multiple WhatsApp Business API (WABA) numbers under the same domain. The number of WhatsApp Business Accounts you can add is only limited by Meta’s policies. Adding more accounts gives you greater flexibility for different teams, regions, or business units.',
    isOpen: false
  },
  {
    title: 'What are the key requirements for a business to be approved for WhatsApp Business API?',
    content: 'To be approved for the WhatsApp Business API, your business must comply with: WhatsApp Business Solution Policy (add link), WhatsApp Business Solution Terms (add link), WhatsApp Commerce Policy (add link).',
    isOpen: false
  },
  {
    title: 'Can I use my existing customer engagement channels alongside WhatsApp Business API?',
    content: 'Yes! WhatsApp Business API can be seamlessly integrated with your existing customer engagement channels. Contact Mehery to explore how this can be set up for your business.',
    isOpen: false
  },
  {
    title: 'Are opt-ins required for WhatsApp Business API?',
    content: 'Yes. WhatsApp requires businesses to obtain customer opt-ins before initiating conversations using Message Templates to ensure a high-quality customer experience. Opt-ins can be collected both on and off WhatsApp through various methods, including: WhatsApp Links, WhatsApp QR Codes, WhatsApp Ads, Website Contact Forms, Interactive Voice Response (IVR). For example, you can ask customers to opt in when they subscribe to your newsletter or sign up through your website.',
    isOpen: false
  },
  {
    title: 'What are the prerequisites for going live with WhatsApp API?',
    content: 'To go live with the WhatsApp Business API, you need: Facebook Business Manager Account access, Credit or Debit Card, which will be billed for your messaging / conversation charges, by Meta from time to time, A Phone number (which is not associated with a mobile WhatsApp) which will be used to set up the WhatsApp Business Account. The phone number can be a landline, mobile or virtual.',
    isOpen: false
  },
  {
    title: 'Why does Meta block a WhatsApp Business Account?',
    content: 'There are several reasons why Meta blocks WhatsApp Business Accounts. We will try and summarise them here: When you have sent outbound messages – generally marketing, sometimes even utility messages, to your prospects / customers, they have reported them as spam messages and asked your number to be blocked. When Meta observes that this percentage of reports are more than their internally defined number, first your template is throttled and flagged. Your service provider should be able to show you that your template has been flagged, allowing you to stop the campaign. If after throttling, you continue to send out the same template, your template and then your account will be blocked. Suggestions: In early days of your campaigns, run them only with customers, to ensure that your account gets high on quality. When you run campaigns with prospects, ALWAYS have an “unsubscribe or Stop” button, allowing customers to take an action with you, rather than report you to Meta. Monitor your campaign and the impact on your template quality during the campaign. Pause the campaign immediately if you see an impact on the quality of the template. Your payment method has failed / declined a payment, leading to a block of your account, for any further outbound communication. Inbound, since it is free from Meta, will still be supported.',
    isOpen: false
  },
  {
    title: 'Can Mehery help with getting me live when I have a blocked WhatsApp Business Account?',
    content: 'Mehery has helped several customers get around this WABA Blocked situation. However, we do this on a best effort basis.',
    isOpen: false
  },
  {
    title: 'What will be the stumbling blocks to getting my WhatsApp Business Account operational?',
    content: 'There are several points of failure when you try and setup your WhatsApp Business Account. We will try and summarise them here: Your Facebook Business Account is blocked / blacklisted by Meta, Your WABA ID is blocked / blacklisted.',
    isOpen: false
  },
  {
    title: 'Why should I verify my FB Manager account (WhatsApp Business API)?',
    content: 'A verified WhatsApp Business API account enhances credibility and builds customer trust. You can request verification on Facebook Business Manager. Mehery’s customer engagement team will help you with this process. To be eligible, your business must be notable and comply with WhatsApp’s Commerce and Business Policies.',
    isOpen: false
  },
  {
    title: 'Does the WhatsApp Business API support multiple languages?',
    content: 'Yes! WhatsApp Business API supports multiple languages, allowing businesses to engage with customers in their regional language. This multilingual support applies to both notifications and conversational flows, ensuring a personalized customer experience.',
    isOpen: false
  },
  {
    title: 'What is a Daily Active User (DAU)?',
    content: 'A Daily Active User (DAU) refers to a unique user who interacts with your business on a given calendar day. The DAU charge covers all messages exchanged with that user across all channels included in your package. User mapping across channels needs to be done for this.',
    isOpen: false
  },
  {
    title: 'How is DAU Charged?',
    content: 'Billing is per unique user, per day – irrespective of the number of messages exchanged within that day. Conversations from different channels (WhatsApp, Facebook Messenger, Instagram DM, Webchat, etc.) are consolidated into a single DAU charge. Example Calculation: For the Lite Package, if: Day 1: 20 DAUs → Cost = 20 × ₹1.25 = ₹25.00, Day 2: 10 DAUs → Cost = 10 × ₹1.25 = ₹12.50, Cumulative Cost (Day 1 + Day 2) = ₹37.50. Payment & Continuity: Mehery Conversation Charges (DAU-based billing) are prepaid. Your license remains active until the deposit amount is exhausted. To continue using the service, you must top up your deposit once the balance runs out.',
    isOpen: false
  },
  {
    title: 'How does the Free Forever Plan Work?',
    content: 'Mehery Free Forever Plan – Unlock Powerful Features at No Cost! Our Free forever plan is to encourage very small businesses, individuals, developers an opportunity to preview and access our system at no cost. It also allows you to undertake a trial with no strings attached! With our Free Forever Plan, you gain full access to our entire suite of powerful features — the same as an Enterprise License, FREE within a limit of 10 DAU. You can setup your channels. Our DIY kit is available as part of the subscription. Explore all top-notch features without any subscription fees.',
    isOpen: false
  },
  {
    title: 'What are the messaging restrictions in the free forever plan?',
    content: 'With the Free Forever Plan, you get free access to all Mehery features. It is capped at a consolidated 10 DAU – 10 unique daily active users, across inbound / outbound conversations.',
    isOpen: false
  },
  {
    title: 'How to Get the WhatsApp Business Verified Blue Tick?',
    content: 'The Blue Tick (Official Business Account - OBA Status) on WhatsApp is granted to businesses that WhatsApp verifies as authentic and reputable. This verification ensures that your business name appears instead of your phone number, even if your number is not saved by users. Our Customer Engagement team will guide our customers with the WhatsApp Verification Blue Tick application process. However, approval is entirely at WhatsApp\'s / Meta’s discretion, and we cannot influence their decision. Factors Affecting Approval: WhatsApp considers multiple factors, including: Brand credibility & recognition, Social media following, Mentions in external media, Website domain ranking. If Your Application is Rejected: Rejection does not impact your ability to use Mehery or the WhatsApp Business API. You can continue using all WhatsApp features as usual.',
    isOpen: false
  },
  {
    title: 'When can I start using Mehery?',
    content: 'Today.',
    isOpen: false
  },
  {
    title: 'WhatsApp Messaging Restrictions Before Facebook Verification',
    content: 'Before completing your Facebook Business Verification, WhatsApp allows you to send messages in a restricted manner: You can have an unlimited number of inbound conversations. Your outbound conversations are limited to 250 conversations per day. Maximize Your Free Access! Leverage Mehery\'s Free Forever Plan to test, explore, and optimize your communication strategies before scaling up. Experience firsthand how WhatsApp Business APIs can power up your customer engagement.',
    isOpen: false
  },
  {
    title: 'How does Mehery\'s pricing and Billing work?',
    content: 'The pricing of Mehery Smart Conversations is based on the plan you choose for your business. Below are the key components: Subscription Charges – This is a recurring charge based on the selected plan (monthly, quarterly or annual). This can be paid by credit card or by Bank Transfer. Pay-As-You-Go Model (Lite Plan) – With the Lite Plan, you have the flexibility to use our platform by making a deposit towards Usage fees. Usage Fees are a combination of DAU, Image generation and CHAT GPT conversations. The Usage fee is deducted each month based on your actual usage. If your consumption crosses the amount deposited, you can top up the Deposit, to continue using the platform. WhatsApp Conversation Charges – These charges apply to conversations initiated either by your business or by your customers/users. This fee is billed directly to your credit/debit card by Meta. The frequency of billing and charging your card, is at Meta’s discretion and does not follow a monthly cycle.',
    isOpen: false
  },
  {
    title: 'What Media Formats are supported by WhatsApp Business API?',
    content: 'Accepted File Types & Size Limits for WhatsApp Business API: Meta’s WhatsApp Business API allows businesses to send various media attachments, but only in specific file formats and within defined size limits. Below are the accepted file types and their maximum size constraints: 1. Supported File Types & Formats: Images – Accepted formats: JPEG, PNG, Maximum file size: 16 MB. Audio – Accepted formats: AMR, MP3, Opus, Maximum file size: 16 MB. Note: Opus codec is used for voice messages. Video – Accepted formats: MP4, 3GP, Maximum file size: 16 MB. Note: Ensure proper encoding for optimal delivery. Documents – Accepted formats: PDF, Microsoft Word: DOC, DOCX, Microsoft PowerPoint: PPT, PPTX, Microsoft Excel: XLS, XLSX, Plain text: TXT, Maximum file size: 100 MB. Note: Larger file size limits allow sharing detailed documents like contracts, reports, and presentations. Stickers – Accepted format: WebP, Recommended file size: ~100 KB (lightweight graphics). 2. Additional Considerations: Compression & Optimization: If a file is near or exceeds the limit, compressing or optimizing the file ensures faster delivery. MIME Types & Encoding: Always specify the correct MIME type when uploading to ensure proper processing and display. API Version & Updates: These limits may change with new API versions, so always check the official documentation for the latest updates. By adhering to these file formats and size limits, you can ensure seamless media exchange while using the WhatsApp Business API for customer engagement. 🚀',
    isOpen: false
  },
  {
    title: 'Does Mehery Allow me to integrate my Instagram and Facebook Messengers Accounts and converse with my customers?',
    content: 'Yes, you can add Instagram DM and Messenger as channels in Mehery and seamlessly communicate with your customers for all inbound messages. You can use the CHAT GPT conversational BOT, menu-driven BOTs or human agents to engage your customers and prospects alike.',
    isOpen: false
  },
  {
    title: 'Can I initiate messages to customers using Instagram DM & FB Messenger?',
    content: 'Meta by default allows you to send / initiate outbound messages to the customer within a 24-hour window of the customer\'s first message to the business. We can guide you on how to increase this window to 7 days, allowing you to reach out to customers for extended durations.',
    isOpen: false
  },
  {
    title: 'What are the requirements to use the FB Messenger API?',
    content: 'To use the API, you need to meet the following requirements: Facebook Business Account: Your account must be a Business (Professional) account. Facebook Page Linkage – Your Instagram Business account must be linked to a Facebook Page. API Integration – You need to integrate your chatbot with your Instagram Business or Facebook Business account on a supported platform such as Mehery. For a detailed step-by-step process, you can refer to the official integration guide.',
    isOpen: false
  },
  {
    title: 'What are the requirements to use the Instagram DM API?',
    content: 'To use the API, you need to meet the following requirements: Instagram Business Account – Your account must be a Business (Professional) account. Facebook Page Linkage – Your Instagram Business account must be linked to a Facebook Page. API Integration – You need to integrate your chatbot with your Instagram Business or Facebook Business account on a supported platform such as Mehery. For a detailed step-by-step process, you can refer to the official integration guide.',
    isOpen: false
  },
  {
    title: 'What media formats are supported by the Instagram DM & FB Messenger API?',
    content: 'The Instagram Messenger API supports the following media formats: Text Messages, Stickers, Images – JPG, PNG, ICO, BMP (max size: 8MB), Videos, buttons. 🚫 Unsupported Media – Attachments of any kind are not supported.',
    isOpen: false
  }
];

const faqs = ref(predefinedFaqs);

onMounted(() => {
  loadFaqs();
});

const loadFaqs = () => {
  const storedFaqs = JSON.parse(localStorage.getItem('faqs') || []);
  // Merge stored FAQs with predefined FAQs, avoiding duplicates
  const mergedFaqs = [...predefinedFaqs, ...storedFaqs.filter(storedFaq => 
    !predefinedFaqs.some(predefinedFaq => predefinedFaq.title === storedFaq.title)
  )];
  faqs.value = mergedFaqs;
  // Optionally, save the merged list back to local storage
  localStorage.setItem('faqs', JSON.stringify(mergedFaqs));
};

const toggleFaq = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};
</script>