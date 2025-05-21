<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <Navbar />
    <main class="py-6 px-4 sm:px-6 lg:px-8">
      <section id="privacy-policy" class="max-w-7xl mx-auto">
        <div class="container mx-auto space-y-8">
          <!-- Header -->
          <div class="space-y-4 mb-8">
            <h3 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Privacy Policy
            </h3>
            <p class="text-gray-600 text-base sm:text-lg"><span class="font-bold">Effective date: Sept 1, 2021</span></p>
            <p class="text-gray-600 text-base sm:text-lg"><span class="font-bold">Last Updated: May 17, 2025</span></p>
            <p class="text-gray-600 text-base sm:text-lg">
              Mehery SocCom Pvt Ltd ("us", "we", or "our") operates the website and the Mehery application,
              which is a message aggregation and distribution service (the "Service"). This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you use our Service. It also
              outlines your choices regarding that data.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              By using the Service, you agree to the collection and use of information in accordance with this policy.
              Unless otherwise defined, terms in this Privacy Policy have the same meanings as in our Terms and Conditions.
            </p>
          </div>

          <!-- 1. Information Collection and Use -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              1. Information Collection and Use
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              We collect personal data from you through various sources. You agree to this data being processed for purposes such as service improvement, customer support, analytics, and, where applicable, marketing and legal compliance. This includes the transfer of your data outside your country to jurisdictions with different data protection laws.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">We collect information when:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in infoPoints" :key="i">{{ item }}</li>
            </ul>
          </div>

          <!-- 2. Types of Data Collected -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              2. Types of Data Collected
            </h4>

            <h5 class="text-left text-xl font-semibold text-gray-900">Personal Data</h5>
            <p class="text-gray-600 text-base sm:text-lg">
              We may collect personally identifiable information including, but not limited to:
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in personalDataPoints" :key="i">{{ item }}</li>
            </ul>

            <h5 class="text-left text-xl font-semibold text-gray-900 mt-4">Usage Data</h5>
            <p class="text-gray-600 text-base sm:text-lg">When accessing the Service, we may automatically collect:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in usageDataPoints" :key="i">{{ item }}</li>
            </ul>
          </div>

          <!-- 3. Tracking & Cookies Data -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              3. Tracking & Cookies Data
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              We use cookies and similar tracking technologies (e.g., beacons, tags, scripts) to enhance user experience and analyze usage.
            </p>
            <p class="text-gray-600 text-base sm:text-lg"><span class="font-bold">Types of Cookies:</span></p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(cookie, i) in cookieTypes" :key="i">
                <span class="font-bold">{{ cookie.title }}:</span> {{ cookie.description }}
              </li>
            </ul>
            <p class="text-gray-600 text-base sm:text-lg">
              You can control cookie preferences through your browser. Disabling cookies may limit functionality.
            </p>
          </div>

          <!-- 4. Use of Data -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              4. Use of Data
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">We use your data to:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in useDataPoints" :key="i">{{ item }}</li>
            </ul>
          </div>

          <!-- 5. Transfer of Data -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              5. Transfer of Data
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Your personal data may be transferred and maintained on servers located outside your country. We take reasonable steps to ensure that your data is treated securely and in accordance with this Privacy Policy.
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
              Your submission of data represents your consent to this transfer.
            </p>
          </div>

          <!-- 6. Disclosure of Data -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              6. Disclosure of Data
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">We may disclose your personal data:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in disclosurePoints" :key="i">{{ item }}</li>
            </ul>
          </div>

          <!-- 7. Security of Data -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              7. Security of Data
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              We use commercially acceptable means to protect your data but cannot guarantee absolute security. You are responsible for protecting access credentials to the Service.
            </p>
          </div>

          <!-- 8. Service Providers -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              8. Service Providers
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">We may employ third parties to:</p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in serviceProvidersPoints" :key="i">{{ item }}</li>
            </ul>
            <p class="text-gray-600 text-base sm:text-lg">
              These third parties have access to your personal data only to perform their roles and are bound by confidentiality.
            </p>
          </div>

          <!-- 9. Analytics -->
        <div class="space-y-4 mb-8">
            <h4
                class="text-left text-2xl font-bold text-gray-900 leading-tight
                    bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
            >
                9. Analytics
            </h4>

            <p class="text-gray-600 text-base sm:text-lg">
                We use third-party services including:            
            </p>
            <p class="text-gray-600 text-base sm:text-lg">
                <strong>Firebase (Google Inc.)</strong><br>
                More: <a
                href="https://policies.google.com/privacy?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800"
                >Google Privacy</a><br>
                Opt-out: Via your mobile device settings
            </p>

            <p class="text-gray-600 text-base sm:text-lg">
                <strong>Flurry Analytics (Yahoo! Inc.)</strong><br>
                More: <a
                href="https://policies.yahoo.com/us/en/yahoo/privacy/policy/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800"
                >Yahoo Privacy</a><br>
                Opt-out: <a
                href="https://dev.flurry.com/secure/optOut.do"
                target="_blank"
                rel="noopener noreferrer"
                class="text-blue-600 hover:text-blue-800"
                >Flurry Opt-out</a>
            </p>
        </div>


          <!-- 10. Conversational AI and ChatGPT Integration -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              10. Conversational AI and ChatGPT Integration
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              We use conversational AI powered by OpenAI’s ChatGPT API to respond to queries submitted via our webchat, embedded demos, or support interfaces.
            </p>
            <p class="text-gray-600 text-base sm:text-lg"><strong>What We Collect:</strong></p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in aiCollectPoints" :key="i">{{ item }}</li>
            </ul>
            <p class="text-gray-600 text-base sm:text-lg"><strong>Purpose:</strong></p>
            <ul class="list-disc list-inside space-y-2 text-gray-600 text-base sm:text-lg pl-6">
              <li v-for="(item, i) in aiPurposePoints" :key="i">{{ item }}</li>
            </ul>
            <p class="text-gray-600 text-base sm:text-lg">
              Your inputs are not used to train OpenAI’s models and are processed in accordance with OpenAI’s API terms, which ensure strict data security and privacy.<br><br> If you do not want your data used in this manner, please avoid using the demo or chat features.
            </p>
        </div>

          <!-- 11. Links to Other Sites -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              11. Links to Other Sites
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Our Service may link to third-party websites not operated by us. We recommend reviewing their privacy policies, as we have no control over their content or practices.
            </p>
          </div>

          <!-- 12. Children’s Privacy -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              12. Children’s Privacy
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              Our Service is not intended for users under the age of 18. We do not knowingly collect data from children. If you believe a child has provided personal data, please contact us, and we will remove it promptly.
            </p>
          </div>

          <!-- 13. Changes to This Privacy Policy -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              13. Changes to This Privacy Policy
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              We may update this Privacy Policy periodically. Changes will be posted on this page and, when appropriate, notified via email or a prominent notice on our Service.<br><br> Please review this page periodically for updates.
            </p>
          </div>

          <!-- 14. Contact Us -->
          <div class="space-y-4 mb-8">
            <h4 class="text-left text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              14. Contact Us
            </h4>
            <p class="text-gray-600 text-base sm:text-lg">
              If you have questions about this Privacy Policy, please contact us at: <a href="mailto:legal@mehery.com" class="text-blue-600 hover:text-blue-800">legal@mehery.com</a>
            </p>
          </div>

        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '../components/common/Navbar.vue';
import Footer from '../components/common/Footer.vue';

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const infoPoints = ref([
  'You provide it directly',
  'It is made available via Social Media Messengers you use',
  'Our enterprise customers provide it through their integrations with us'
]);

const personalDataPoints = ref([
  'Email address',
  'Phone number',
  'First and last name',
  'Company name',
  'Name of regulator (for businesses)',
  'Address, State, Province, ZIP/Postal code, City',
  'Cookies and usage data'
]);

const usageDataPoints = ref([
  'IP address, browser type/version, device type',
  'Date/time of access, referring URL',
  'Mobile device identifiers, operating system, Internet browser',
  'Pages visited, time spent on each page, clickstream data'
]);

const cookieTypes = ref([
  { title: 'Session Cookies', description: 'For basic operation' },
  { title: 'Preference Cookies', description: 'For remember settings' },
  { title: 'Security Cookies', description: 'For security purposes' }
]);

const useDataPoints = ref([
  'Provide and maintain the Service',
  'Notify you about changes to our Service',
  'Allow participation in interactive features',
  'Provide customer support',
  'Analyze usage and improve services',
  'Monitor for security, technical, or fraud-related issues'
]);

const disclosurePoints = ref([
  'To comply with legal obligations',
  'To protect rights, property, or safety of Mehery or its users',
  'To investigate fraud or misconduct',
  'As required by law enforcement or regulators, both domestic and foreign'
]);

const serviceProvidersPoints = ref([
  'Facilitate and operate the Service',
  'Perform Service-related services',
  'Analyze Service usage'
]);

const aiCollectPoints = ref([
  'Your typed messages/questions',
  'Metadata such as interaction timestamps, session IDs, and browser/device data'
]);

const aiPurposePoints = ref([
  'Responding with AI-generated assistance',
  'Improving and training our library for effectiveness and chat quality',
  'Understanding product interest and intent'
]);
</script>
