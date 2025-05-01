<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <main class="pt-36 pb-6 px-4 sm:px-6 lg:px-8">
        <section id="terms-of-use" class="max-w-7xl mx-auto">
          <div class="container mx-auto">
            <!-- Header -->
            <div class="space-y-4 mb-8">
              <h3
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                PushApp Terms of Use
              </h3>
              <p class="text-gray-600 text-base sm:text-lg">Last Updated: April 22, 2025</p>
              <p class="text-gray-600 text-base sm:text-lg">
                Welcome to PushApp! These Terms of Use ("Terms") govern your access and use of PushApp’s services, including our website,
                notification services, SDKs, in-app messaging features, and any associated software (collectively, the “Service”).
              </p>
              <p class="text-gray-600 text-base sm:text-lg">
                PushApp is a product owned and operated by <span class="font-bold">Mehery Soccom Pvt Ltd</span>, a company incorporated in Mumbai,
                India. By using the Service, you agree to be bound by these Terms.
              </p>
            </div>
  
            <!-- 1. Eligibility -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                1. Eligibility
              </h4>
              <ul class="list-disc list-inside space-y-2 text-gray-600 pl-6 text-base sm:text-lg">
                <li v-for="(item, i) in eligibility" :key="i">{{ item }}</li>
              </ul>
            </div>
  
            <!-- 2. Account Registration -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                2. Account Registration
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">To use PushApp, you may need to create an account. You agree to:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 pl-6 text-base sm:text-lg">
                <li v-for="(item, i) in accountRegistration" :key="i">{{ item }}</li>
              </ul>
            </div>
  
            <!-- 3. Acceptable Use -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                3. Acceptable Use
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">You agree not to:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 pl-6 text-base sm:text-lg">
                <li v-for="(item, i) in acceptableUse" :key="i">{{ item }}</li>
              </ul>
            </div>
  
            <!-- 4. Intellectual Property -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                4. Intellectual Property
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                All intellectual property rights related to the Service (excluding your content) are owned by or
                licensed to <span class="font-bold">Mehery Soccom Pvt Ltd.</span>  You may not copy, modify, or distribute any part of the Service
                without written permission.
              </p>
            </div>
  
            <!-- 5. Your Content -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                5. Your Content
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">You retain full ownership of any content or data you submit through the Service, including campaign material, customer lists, events, or app interaction logs.</p>
              <p class="text-gray-600 text-base sm:text-lg">We <span class="font-bold">do not claim ownership</span>  or rights to use your content for our own purposes, beyond what is required to deliver the Service.</p>
              <p class="text-gray-600 text-base sm:text-lg">
                We may use <span class="font-bold">aggregated, anonymized data</span>  to generate insights and trends for platform improvements or for publishing white papers and reports. No identifiable user or customer data is included in such use.
              </p>
            </div>
  
            <!-- 6. Data Hosting and Privacy -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                6. Data Hosting and Privacy
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                PushApp is hosted on third-party cloud providers. While data is stored on their infrastructure, 
                we <span class="font-bold">do not voluntarily share</span>  customer data with these providers. All data remains under our control 
                and is used solely for the delivery of the Service. Please review our Privacy Policy for full details on data handling, usage, and security practices.
              </p>
            </div>
  
            <!-- 7. Subscription and Termination -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                7. Subscription and Termination
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                Your subscription to PushApp is active until you or we terminate it. Upon cancellation:
              </p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 pl-6 text-base sm:text-lg">
                <li>You will continue to have access to your data for <span class="font-bold">3 months</span> </li>
                <li>After that, all data will be <span class="font-bold">permanently deleted</span> , unless required by law</li>
              </ul>
              <p class="text-gray-600 text-base sm:text-lg mt-2">
                We reserve the right to suspend or terminate your access at any time for violations of these Terms.
              </p>
            </div>
  
            <!-- 8. Disclaimers -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                8. Disclaimers
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                The Service is provided “as is” and “as available.” We do not warrant that the Service will be
                uninterrupted, secure, or error-free. Your use is at your own risk.
              </p>
            </div>
  
            <!-- 9. Limitation of Liability -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                9. Limitation of Liability
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                To the maximum extent permitted by law, Mehery Soccom Pvt Ltd shall not be liable for indirect,
                incidental, or consequential damages arising out of or related to your use of the Service.
              </p>
            </div>
  
            <!-- 10. Governing Law -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                10. Governing Law
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                These Terms shall be governed by and construed in accordance with the laws of India.
                Any disputes shall be subject to the exclusive jurisdiction of the courts of <span class="font-bold">Mumbai, 
                    Maharashtra</span>, where <span class="font-bold">Mehery Soccom Pvt Ltd</span> is headquartered.
              </p>
            </div>
  
            <!-- 11. Changes to These Terms -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                11. Changes to These Terms
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                We may revise these Terms from time to time. We will notify you of material changes via email
                or through the Service. Continued use after such updates constitutes your acceptance.
              </p>
            </div>
  
            <!-- Contact -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                Contact
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                For any questions about these Terms, please contact:
                <br />
                <a href="mailto:legal@mehery.com" class="text-blue-600 hover:text-blue-800"><span class="font-bold">legal@mehery.com</span> </a>
                <br />
                <span class="font-bold">Mehery Soccom Pvt Ltd</span> <br />
                Mumbai, Maharashtra, India
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  import Navbar from '../Components/Navbar.vue'
  import Footer from '../Components/Footer.vue'
  
  onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
  
  const eligibility = ref([
    'You must be at least 18 years old and have the legal authority to enter into these Terms.By using the Service, you represent and warrant that you meet these criteria.'
  ])
  
  const accountRegistration = ref([
    'Provide accurate, complete, and current information',
    'Maintain the security of your credentials',
    'Notify us immediately of any unauthorized access'
  ])
  
  const acceptableUse = ref([
    'Use the Service for any unlawful, harmful, or abusive purpose',
    'Violate any applicable laws or third-party rights',
    'Interfere with or disrupt the Service or servers',
    'Attempt to reverse engineer or extract source code from any part of our software'
  ])
  </script>
  
  <style lang="css">
  /* page-specific overrides if needed */
  </style>
  