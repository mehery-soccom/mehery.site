<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <!-- <ConversationalBot /> -->

        <main class="mb-12 mt-6">
            <section id="partner">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div class="space-y-8">
                        <!-- Hero Section with Image -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 ">
                            <div class="order-2 md:order-1">
                                <h3 class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                    Partner Program
                                </h3>
                                <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
                                    Join forces with Mehery to unlock revenue opportunities while delivering innovative customer engagement solutions to your clients.
                                </p>
                                <button class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-8 py-4 rounded-lg font-bold mt-20 text-lg transition-colors duration-300 ">BECOME A PARTNER
                                </button>
                            </div>
                            <div class="order-1 md:order-2 rounded-lg overflow-hidden shadow-md bg-gray-100 max-h-[300px]">
                                <img 
                                    src="../../@assets/images/partner.png" 
                                    alt="Partner Program" 
                                    class="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <!-- Why Partner Section -->
                        <div class="space-y-6">
                            <h4 class="text-2xl font-bold text-gray-900">
                                Why Partner with Us?
                            </h4>
                            <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
                                Collaborate with us to accelerate growth, drive innovation, and unlock new opportunities in the digital landscape.
                            </p>
                        </div>

                        <!-- Partner Types Section -->
                        <div class="space-y-8">
                            <h4 class="text-2xl font-bold text-gray-900">
                                Partner with Purpose
                            </h4>
                            <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
                                Discover tailored programs designed to suit your business expertise:
                            </p>

                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div class="bg-[#daf0ff] p-6 rounded-lg shadow-sm">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Independent Service Providers (ISV)
                                    </h5>
                                    <p class="text-gray-600 text-base leading-relaxed mt-2">
                                        Expand your solution offering to your customer base with our AI-powered tools for marketing, CRM, and lead generation.
                                    </p>
                                </div>
                                
                                <div class="bg-[#daf0ff] p-6 rounded-lg shadow-sm">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Consulting Firms
                                    </h5>
                                    <p class="text-gray-600 text-base leading-relaxed mt-2">
                                        Utilize our Open AI infrastructure to build deep engagement BOTs for your clients.
                                    </p>
                                </div>
                                
                                <div class="bg-[#daf0ff] p-6 rounded-lg shadow-sm">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Creative Ad & Media Agencies
                                    </h5>
                                    <p class="text-gray-600 text-base leading-relaxed mt-2">
                                        Use our AI-driven engagement platform to create and manage impactful marketing campaigns.
                                    </p>
                                </div>

                                <div class="bg-[#daf0ff] p-6 rounded-lg shadow-sm">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Freelancers & Referral Partners
                                    </h5>
                                    <p class="text-gray-600 text-base leading-relaxed mt-2">
                                        Introduce Mehery to businesses and earn commissions on successful deals.
                                    </p>
                                </div>
                                
                                <div class="bg-[#daf0ff] p-6 rounded-lg shadow-sm">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Start-up Accelerators
                                    </h5>
                                    <p class="text-gray-600 text-base leading-relaxed mt-2">
                                        Help start-ups adopt Mehery to accelerate growth and gain a share of success.
                                    </p>
                                </div>
                                
                                <div class="bg-[#daf0ff] p-6 rounded-lg shadow-sm">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Regional Focus
                                    </h5>
                                    <p class="text-gray-600 text-base leading-relaxed mt-2">
                                        We seek partners in India, Southeast Asia, the Middle East, and Africa to scale our impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import ConversationalBot from "./Conversational.vue";


onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
</script>
<!-- <style scoped>
.shadow-sm {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
</style> -->
            