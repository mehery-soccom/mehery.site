<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
    <Navbar />
    <main class="py-6 px-4 sm:px-6 lg:px-8">
      <section id="customer" class="max-w-7xl mx-auto">
        <div class="container mx-auto">
          <div class="grid lg:grid-cols-2 gap-10 items-center">
            <div class="space-y-6 max-w-2xl">
              <h3 class="text-left text-3xl sm:text-4xl lg:text-3xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Powerful & Flexible API Services 🔗🚀
              </h3>
              <div class="space-y-4">
                <p class="text-gray-600 text-base sm:text-md ">
                  At Mehery, innovation drives everything we do. Our open API architecture enables seamless integration with new channels, features, and emerging technologies.
                </p>
                <ul class="space-y-4">
                  <li class="flex items-start space-x-3">
                    <span class="text-xl text-blue-600">⚡</span>
                    <div>
                      <h4 class="text-base font-semibold text-gray-800">Seamless System Integration 🔄</h4>
                      <p class="text-gray-600 text-sm">Effortlessly connect Mehery with your eCommerce platform, CDP, CRM, or web engagement tools for a unified experience.</p>
                    </div>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-xl text-purple-600">📚</span>
                    <div>
                      <h4 class="text-base font-semibold text-gray-800">Fully Documented & Trusted APIs ✅</h4>
                      <p class="text-gray-600 text-sm">Our APIs are trusted by 30+ platforms and customers, ensuring smooth, efficient communication across all customer touchpoints.</p>
                    </div>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-xl text-blue-600">🔌</span>
                    <div>
                      <h4 class="text-base font-semibold text-gray-800">Pre-Built Contact Center Integrations 🎧</h4>
                      <p class="text-gray-600 text-sm">Instantly integrate with leading third-party solutions like HoduSoft (HoduCC), Mitel (MiccB), Contaque, Centrix Plus, and more.</p>
                    </div>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-xl text-purple-600">🏆</span>
                    <div>
                      <h4 class="text-base font-semibold text-gray-800">Award-Winning API Innovation 🏅</h4>
                      <p class="text-gray-600 text-sm">Recognized as one of the “10 Best API Startups of 2023” by Silicon India Magazine, Mehery is at the forefront of API-driven transformation.</p>
                    </div>
                  </li>
                  <li class="flex items-start space-x-3">
                    <span class="text-xl text-blue-600">🔮</span>
                    <div>
                      <h4 class="text-base font-semibold text-gray-800">Future-Ready & Scalable 📈</h4>
                      <p class="text-gray-600 text-sm">Our API ecosystem is built for growth, ensuring your business stays agile, efficient, and ahead of the curve.</p>
                    </div>
                  </li>
                </ul>
                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                  Unlock seamless connectivity, automation, and customer engagement with Mehery’s powerful API services! 🔥
                </p>
              </div>
            </div>
            <div class="relative lg:pl-8">
              <img
                src="../../@assets/images/image 9.svg"
                alt="API Services Illustration"
                class="w-full h-auto max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
</script>