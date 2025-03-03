<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />

    <main class="py-6 px-4 sm:px-6 lg:px-8">
        <section id="about" class="max-w-7xl mx-auto">
            <div class="container mx-auto">
                <!-- Hero Section: Left Text, Right Image -->
                <div class="grid lg:grid-cols-2 gap-10 items-center mb-16">
                    <div class="space-y-6 max-w-2xl">
                        <h3
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            About Us
                        </h3>
                        <p class="text-gray-600 text-base sm:text-lg">
                            At Mehery, we believe in the power of conversations. Conversations are the cornerstone of
                            building strong customer relationships and play a pivotal role in converting prospects into
                            loyal customers.

                            While large enterprises have the resources to create bespoke tools for customer
                            interactions, small and medium-sized businesses often lack the expertise and infrastructure
                            to do so. That's where Mehery comes in. We make it easy for businesses of all sizes to
                            automate customer interactions, transforming conversations into transactions with ease.

                        </p>
                    </div>
                    <div class="relative lg:pl-8">
                        <img src="../../@assets/images/5495.jpg" alt="About Us Illustration"
                            class="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" />
                    </div>
                </div>

                <!-- Content Section: Left Image, Right Text -->

                <!-- Values Section: Left Text, Right Image -->
                <div class="grid lg:grid-cols-2 gap-10 items-center mb-16">
                    <div class="relative lg:pl-8">
                        <img src="../../@assets/images/core.png" alt="Core Values Illustration"
                            class="w-full h-auto max-w-2xl mx-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div class="space-y-6 max-w-2xl">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Our Core Values
                        </h4>
                        <ul class="space-y-4">
                            <li v-for="(point, index) in bulletPoints" :key="index" class="flex items-start space-x-3">
                                <span class="text-xl text-blue-600">📌</span>
                                <div>
                                    <p class="text-gray-600 text-sm">{{ point }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <!-- Journey Section: Left Image, Right Text -->
                <div class="grid lg:grid-cols-2 items-center">

                    <div class="space-y-6 max-w-2xl">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Our Journey
                        </h4>
                        <p class="text-gray-600 text-base sm:text-lg">
                            Our story is one of innovation, collaboration, and a relentless pursuit of excellence.
                            Though young, our journey has only just begun, and we invite you to join us as we shape the
                            future of customer engagement—one meaningful conversation at a time.
                        </p>
                    </div>
                    <div class="relative pl-48 ">
                        <img src="../../@assets/images/journey.jpg" alt="Our Journey Illustration"
                            class="w-full h-auto max-w-2xlp  " />
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
import ConversationalBot from "./Conversational.vue";
import SOcialPopup from "./SocialPopup.vue";

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const bulletPoints = ref([
    "Putting Customers First: Our purpose is rooted in helping our customers succeed. When they grow, we grow.",
    "Striving for Excellence: We challenge ourselves to raise the bar every day, staying curious, innovative, and relentless in improving what we do.",
    "Simplicity is Our Superpower: We take pride in creating solutions that are intuitive, elegant, and easy to use—because simplicity drives impact.",
    "Fostering Collaboration: We believe in the power of diversity—of people, ideas, and perspectives. Together, we achieve more.",
    "Acting with Agility: Speed and precision define our approach. We move swiftly, deliver with quality, and stay laser-focused until the goal is achieved.",
    "Leading with Integrity: We stand by our commitments, take ownership of our actions, and make decisions that reflect our values."
]);
</script>