<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="mb-16 mt-8">
            <section id="partner" class="lg:mt-4">
                <div class="container text-start mx-auto px-6 sm:px-8 lg:px-12 max-w-8xl">
                    <div class="space-y-12">
                        <!-- Header Section -->
                        <div class="space-y-6">
                            <h3 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8">
                                Partner Program
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl leading-relaxed mb-8">
                                Join forces with Mehery to unlock revenue opportunities while delivering innovative
                                customer engagement solutions to your clients.
                            </p>
                            <button class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-8 py-4 rounded-xl font-bold flex justify-center items-center transition-colors duration-300 mb-12">
                                Become a Partner
                            </button>
                        </div>

                        <!-- Why Partner Section -->
                        <div class="space-y-6">
                            <h4 class="text-2xl font-bold text-gray-900">
                                Why Partner with Us?
                            </h4>
                            <p class="text-gray-600 text-lg leading-relaxed">
                                Collaborate with us to accelerate growth, drive innovation, and unlock new opportunities in the digital landscape.
                            </p>
                        </div>

                        <!-- Partner Types Section -->
                        <div class="space-y-8">
                            <h4 class="text-2xl font-bold text-gray-900">
                                Partner with Purpose
                            </h4>
                            <p class="text-gray-600 text-lg leading-relaxed">
                                Discover tailored programs designed to suit your business expertise:
                            </p>

                            <div class="space-y-12">
                                <!-- Growth & Technology Partners -->
                                <div class="space-y-4">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Independent Service Providers (ISV): Innovate & Elevate
                                    </h5>
                                    <p class="text-gray-600 text-lg leading-relaxed">
                                        Expand your solution offering to your customer base. If your focus is digital marketing, lead generation, customer relationship management solutions or AI powered conversational BOTs for your customer base, our solutions will give a zip to your portfolio.
                                    </p>
                                </div>

                                <!-- Consulting Firms -->
                                <div class="space-y-4">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Consulting Firms
                                    </h5>
                                    <p class="text-gray-600 text-lg leading-relaxed">
                                        Firms with a deep understanding of their customer's business can use our GPT 4o based Open AI, Azure Open AI infrastructure to build and deploy, deep engagement BOTs for your customer base.
                                    </p>
                                </div>

                                <!-- Creative Agencies -->
                                <div class="space-y-4">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Creative Ad & Media Agencies
                                    </h5>
                                    <p class="text-gray-600 text-lg leading-relaxed">
                                        Use our integrated multi-channel engagement platform to create and manage impactful AI-driven campaigns and offer ROI-focused solutions to your clients.
                                    </p>
                                </div>

                                <!-- Freelancers -->
                                <div class="space-y-4">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Freelancers & Referral Partners
                                    </h5>
                                    <p class="text-gray-600 text-lg leading-relaxed">
                                        Introduce Mehery to businesses and earn commissions on every successful deal.
                                    </p>
                                </div>

                                <!-- Start-up Accelerators -->
                                <div class="space-y-4">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Start-up Accelerators
                                    </h5>
                                    <p class="text-gray-600 text-lg leading-relaxed">
                                        Help start-ups adopt Mehery to accelerate growth and gain a share of the success.
                                    </p>
                                </div>

                                <!-- Regional Focus -->
                                <div class="space-y-4">
                                    <h5 class="text-xl font-bold text-gray-800">
                                        Regional Focus
                                    </h5>
                                    <p class="text-gray-600 text-lg leading-relaxed">
                                        We seek partners in India, Southeast Asia, the Middle East, and Africa to scale our growth and impact.
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
import { ref, onMounted } from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
</script>