<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="mb-10">
            <section id="about" class="lg:-mt-2">
                <div class="container text-start mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="gap-12 items-center">
                        <div class="space-y-6">
                            <h3 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">Partner Program</h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Join forces with Mehery to unlock revenue opportunities while delivering innovative
                                customer engagement solutions to your clients.
                            </p>
                            <button
                                
                                class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-3 py-3 rounded-xl font-bold flex justify-center items-center transition-colors duration-300"
                            >
                                Become a Partner
                            </button>
                    
                            <p class="text-gray-600 font-bold text-xl">
                                Why Partner with Us?
                            </p>
                            <p class="text-gray-600 text-lg">
                                Collaborate with us to accelerate growth, drive innovation, and unlock new opportunities in the digital landscape.
                            </p>
                            <p class="text-gray-600 font-bold text-xl">
                                Partner with Purpose:
                            </p>
                            <p class="text-gray-600 text-lg">
                                Discover tailored programs designed to suit your business expertise:
                            </p>
                            <p class="text-gray-600 font-bold text-2xl">
                                Growth & Technology Partners
                            </p>
                            <p class="text-gray-600 font-bold text-xl">
                                Independent Service Providers (ISV): Innovate & Elevate
                            </p>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Expand your solution offering to your customer base. If your focus is digital marketing, lead generation, customer relationship management solutions or AI powered conversational BOTs for your customer base, our solutions will give a zip to your portfolio.
                            </p>
                            <p class="text-gray-600 font-bold text-xl">
                                Consulting Firms:
                            </p>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Firms with a deep understanding of their customer's business can use our GPT 4o based Open AI, Azure Open AI infrastructure to build and deploy, deep engagement BOTs for your customer base.
                            </p>
                            <p class="text-gray-600 font-bold text-xl">
                                Creative Ad & Media Agencies:
                            </p>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Use our integrated multi-channel engagement platform to create and manage impactful AI-driven campaigns and offer ROI-focused solutions to your clients.
                            </p>
                            <p class="text-gray-600 font-bold text-xl">
                                Freelancers & Referral Partners:
                            </p>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Introduce Mehery to businesses and earn commissions on every successful deal.
                            </p>
                            <p class="text-gray-600 font-bold text-xl">
                                Start-up Accelerators:
                            </p>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Help start-ups adopt Mehery to accelerate growth and gain a share of the success.
                            </p>
                            <p class="text-gray-600 font-bold text-xl">
                                Regional Focus:
                            </p>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                We seek partners in India, Southeast Asia, the Middle East, and Africa to scale our growth and impact.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const bulletPoints = ref([
    "Putting Customers First: Our purpose is rooted in helping our customers succeed. When they grow, we grow.",
    "Striving for Excellence: We challenge ourselves to raise the bar every day, staying curious, innovative, and relentless in improving what we do",
    "Simplicity is Our Superpower: We take pride in creating solutions that are intuitive, elegant, and easy to use—because simplicity drives impact.",
    "Fostering Collaboration: We believe in the power of diversity—of people, ideas, and perspectives. Together, we achieve more.",
    "Acting with Agility: Speed and precision define our approach. We move swiftly, deliver with quality, and stay laser-focused until the goal is achieved.",
    "Leading with Integrity: We stand by our commitments, take ownership of our actions, and make decisions that reflect our values."
]);
</script>
