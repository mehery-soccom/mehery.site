<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <Navbar />
    <main class="py-16 px-4 sm:px-6 lg:px-8">
            <section id="customer" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="space-y-8 max-w-2xl">
                            <h3 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                API Services
              </h3>
              <p class="text-gray-600 text-lg sm:text-xl">
                At Mehery, innovation is at our core, with an open architecture 
designed for easy integration of new channels, features, and 
emerging technologies.

 Our flexible API framework ensures your organization can seamlessly connect Mehery with any system—whether it’s an eCommerce platform, Customer Data Platform (CDP), CRM system, or web engagement tool.
              </p>
              <p class="text-gray-600 text-lg">
                 Our APIs are fully documented and trusted by over 30 platforms and customers, enabling smooth, efficient communication with your end customers across all touchpoints. We also offer ready-to-use integrations with leading third-party contact centre solutions, including HoduSoft (HoduCC), Mitel (MiccB), Contaque, Centrix Plus, and more, ensuring your ecosystem remains interconnected and future-ready.
              </p>
              <p class="text-gray-600 text-lg">
                   Recognized as one of the “10 Best API Startups of 2023” by Silicon India Magazine, Mehery stands at the forefront of API innovation, empowering businesses to unlock new levels of operational efficiency and customer engagement.
              </p>
            </div>
            <div class="relative">
              <img 
                src="../../@assets/images/image 9.svg" 
                alt="Customer Management Illustration" 
                class="w-full h-auto"
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