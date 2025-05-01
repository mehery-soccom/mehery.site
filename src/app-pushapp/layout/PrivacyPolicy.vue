<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <main class="pt-36 pb-6 px-4 sm:px-6 lg:px-8">
        <section id="privacy-policy" class="max-w-7xl mx-auto">
          <div class="container mx-auto">
            <!-- Header -->
            <div class="space-y-4 mb-8">
              <h3
                class="text-left text-2xl sm:text-2xl lg:text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                PushApp Privacy Policy
              </h3>
              <p class="text-gray-600 text-base sm:text-lg">Last Updated: April 22, 2025</p>
              <p class="text-gray-600 text-base sm:text-lg">
                PushApp ("we", "us", or "our") is a service owned and operated by <span class="font-bold">Mehery Soccom Pvt Ltd,</span> a company
                registered in Mumbai, India. This Privacy Policy explains how we collect, use, and protect your
                information when you use our services, including our website, software, and communication platforms
                (the “Service”). 
              </p>
              <p class="text-gray-600 text-base sm:text-lg">By using PushApp, you agree to the practices described in this policy.</p>
            </div>
  
            <!-- 1. Information We Collect -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                1. Information We Collect
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">We collect the following types of information:</p>
  
              <h5 class="text-xl font-semibold text-gray-900">a. Account Information</h5>
              <p class="text-gray-600 text-base sm:text-lg">Includes your name, email address, company name, billing information, and any details you provide while registering or subscribing.</p>
  
              <h5 class="text-xl font-semibold text-gray-900 mt-4">b. Usage Data</h5>
              <p class="text-gray-600 text-base sm:text-lg">We collect technical and usage data including:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 pl-6 text-base sm:text-lg">
                <li v-for="(item, i) in usageData" :key="i">
                    <template v-if="typeof item === 'string'">
                    {{ item }}
                    </template>
                    <template v-else>
                    <span class="font-semibold">{{ item.title }}</span>, such as:
                    <ul class="list-[circle] ml-6 mt-2 space-y-1">
                        <li v-for="(subItem, j) in item.subItems" :key="`sub-${j}`">{{ subItem }}</li>
                    </ul>
                    </template>
                </li>
                </ul>
  
              <h5 class="text-xl font-semibold text-gray-900 mt-4">c. Customer Data</h5>
              <p class="text-gray-600 text-base sm:text-lg">
                Any data or content you submit through our platform (e.g., notification campaigns, user data uploads)
                is treated as confidential and owned by you.
              </p>
            </div>
  
            <!-- 2. How We Use Your Information -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                2. How We Use Your Information
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">We use your data to:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 pl-6 text-base sm:text-lg">
                <li v-for="(item, i) in howUse" :key="`use-${i}`" v-html="item"></li>
              </ul>
            </div>
  
            <!-- 3. Data Sharing -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                3. Data Sharing
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">We <span class="font-bold">do not sell</span> your personal data.</p>
              <p class="text-gray-600 text-base sm:text-lg">We may share data only under these conditions:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 pl-6 text-base sm:text-lg">
                <li v-for="(item, i) in dataSharing" :key="`share-${i}`" v-html="item"></li>
              </ul>
              <p class="text-gray-600 text-base sm:text-lg mt-2">
                <span class="font-bold">Note:</span> Although our infrastructure is hosted on a third-party cloud provider,<span class="font-bold"> we do not voluntarily share</span>
                 customer data with them. The data remains under our control, used only for hosting purposes.
              </p>
            </div>
  
            <!-- 4. Data Retention -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                4. Data Retention
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                We retain your data for the duration of your subscription. Once your subscription ends:
              </p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 pl-6 text-base sm:text-lg">
                <li>Your account and data will remain accessible for <span class="font-bold">3 months</span></li>
                <li>After this 3-month period, <span class="font-bold">all associated data will be permanently deleted</span>  from our systems unless legally required to retain it longer</li>
              </ul>
              <p class="text-gray-600 text-base sm:text-lg mt-2">
                You may also request deletion at any time by contacting us (see Contact section below).
              </p>
            </div>
  
            <!-- 5. Security -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                5. Security
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                We implement industry-standard encryption and access controls to protect your data. While we take
                reasonable precautions, no method of electronic transmission or storage is 100% secure.
              </p>
            </div>
  
            <!-- 6. Your Rights -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                6. Your Rights
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">Depending on your jurisdiction, you may have the right to:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 pl-6 text-base sm:text-lg">
                <li v-for="(item, i) in yourRights" :key="`rights-${i}`">{{ item }}</li>
              </ul>
              <p class="text-gray-600 text-base sm:text-lg mt-2 ">
                To exercise these rights, contact us at <a href="mailto:privacy@pushapp.io" class="text-blue-600 hover:text-blue-800"><span class="font-bold">privacy@pushapp.io</span></a>.
              </p>
            </div>
  
            <!-- 7. Cookies & Tracking -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                7. Cookies & Tracking
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">We use cookies and similar technologies for:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 pl-6 text-base sm:text-lg">
                <li v-for="(item, i) in cookiesTracking" :key="`cookie-${i}`">{{ item }}</li>
              </ul>
              <p class="text-gray-600 text-base sm:text-lg mt-2">
                You can control cookies through your browser settings.
              </p>
            </div>
  
            <!-- 8. Children’s Privacy -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                8. Children’s Privacy
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                Our Service is not intended for individuals under 13 years of age. We do not knowingly collect
                data from children.
              </p>
            </div>
  
            <!-- 9. International Data Transfers -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                9. International Data Transfers
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                Your data may be stored or processed in jurisdictions outside your country. By using our Service,
                you consent to such transfers, provided they are compliant with applicable data protection laws.
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
                This Privacy Policy is governed by the laws of <span class="font-bold">India</span>. Any disputes will fall under the exclusive jurisdiction of the courts of <span class="font-bold">Mumbai, Maharashtra, India,</span> where <span class="font-bold">Mehery Soccom Pvt Ltd</span>  is registered.
              </p>
            </div>
  
            <!-- 11. Changes to This Policy -->
            <div class="space-y-4 mb-8">
              <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                       bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
              >
                11. Changes to This Policy
              </h4>
              <p class="text-gray-600 text-base sm:text-lg">
                We may update this Privacy Policy from time to time. If changes are significant, we will notify you
                via email or through the platform.
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
                If you have questions or concerns about this policy or your data, contact us at:
                <br />
                <a href="mailto:privacy@mehery.com" class="text-blue-600 hover:text-blue-800"><span class="font-bold">privacy@mehery.com</span></a>
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
  import { ref, onMounted } from 'vue'
  import Navbar from '../Components/Navbar.vue'
  import Footer from '../Components/Footer.vue'
  
  onMounted(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
  
  const accountInfo = ref([
    'Name',
    'Email address',
    'Company name',
    'Billing information',
    'Any details you provide while registering or subscribing'
  ])
  
  const usageData = ref([
        'Logs of interactions with our platform',
        'IP address',
        'Device identifiers',
        'Operating System version',
        'Approximate geolocation (inferred from IP)',
        {
            title: 'App-related events',
            subItems: [
            'App installs',
            'App opens',
            'App interaction events (e.g., taps, scrolls, form submissions)',
            'Time spent on screens, clicks, and session duration'
            ]
        }
        ])

  
  const howUse = ref([
    'Provide and operate the Service',
    'Monitor performance and ensure system stability',
    'Communicate with you (e.g., support, billing, updates)',
    'Improve product features and user experience',
    'Ensure legal compliance',
    '<strong>Write white papers, reports, and insights on industry trends</strong> using only aggregated and anonymized data — never in a way that identifies individual users or customers'
  ])
  
  const dataSharing = ref([
    '<strong>With trusted service providers</strong> under strict data processing agreements',
    'To comply with legal obligations or respond to lawful requests'
  ])
  
  const yourRights = ref([
    'Access your personal data',
    'Request correction or deletion',
    'Object to certain processing activities',
    'Withdraw consent at any time'
  ])
  
  const cookiesTracking = ref([
    'Functionality and session management',
    'Usage analytics',
    'Performance monitoring'
  ])
  </script>
  
  <style lang="css">
  /* page-specific overrides if needed */
  </style>
  