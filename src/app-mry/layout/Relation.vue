<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main class="py-6 px-4 sm:px-6 lg:px-8">
            <section id="relation" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <div class="grid lg:grid-cols-2 gap-10 items-center">
                        <div class="space-y-6 max-w-2xl">
                            <h3 class="text-left text-2xl sm:text-4xl lg:text-2xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                Stronger Relationships, Greater Loyalty 🤝
                            </h3>
                            <div class="space-y-4">
                                <p class="text-gray-600 text-base sm:text-md">
                                    Building lasting relationships is key to successful B2C engagement. Our Relationship Management module helps you strengthen customer bonds while unlocking new revenue opportunities.
                                </p>
                                <ul class="space-y-4">
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600">🌟</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Dedicated Relationship Managers 👤</h4>
                                            <p class="text-gray-600 text-sm">Assign Relationship Managers or Sales Agents to high-value customers, adding a personal touch that boosts loyalty and retention.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600">🔄</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Seamless Integration 🔗</h4>
                                            <p class="text-gray-600 text-sm">Sync effortlessly with Customer and Lead Management to gain a 360° view of each customer's journey.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600">📊</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Data-Driven Personalization 💡</h4>
                                            <p class="text-gray-600 text-sm">Equip your team with customer insights and communication history across multiple channels for impactful, personalized interactions.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-purple-600">📌</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Organized & Structured Outreach 📅</h4>
                                            <p class="text-gray-600 text-sm">All interactions are centrally recorded, ensuring better monitoring, compliance, and seamless coordination across teams.</p>
                                        </div>
                                    </li>
                                    <li class="flex items-start space-x-3">
                                        <span class="text-xl text-blue-600">🚀</span>
                                        <div>
                                            <h4 class="text-base font-semibold text-gray-800">Maximize Revenue Potential 💰</h4>
                                            <p class="text-gray-600 text-sm">Deepen customer relationships, enhance engagement, and drive long-term business growth through meaningful, tailored support.</p>
                                        </div>
                                    </li>
                                </ul>
                                <p class="text-gray-600 text-base sm:text-lg font-semibold">
                                    Turn customer connections into lasting partnerships with our Relationship Management module!
                                </p>
                            </div>
                        </div>
                        <div class="relative ">
                            <img
                                src="../../@assets/images/image4.png"
                                alt="Relationship Management Illustration"
                                class="w-full h-auto max-w-2xl  transform scale-105 transition-transform duration-300 ml-20"
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
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
</script>