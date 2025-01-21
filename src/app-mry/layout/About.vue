<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="mb-10">
            <section id="about" class="lg:-mt-2">
                <div class="container text-start mx-auto px-4 sm:px-6 lg:px-8">
                    <div class=" gap-12 items-center">
                        <div class="space-y-6">
                            <h3 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight ">
                                About Us
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                At Mehery, we believe in the power of conversations. Conversations are the cornerstone of building strong customer relationships and play a pivotal role in converting prospects into loyal customers. Sales, the lifeblood of every business, thrives on these meaningful exchanges. 
                            </p>
                            <p class="text-gray-600 text-lg">
                                While large enterprises have the resources to create bespoke tools for customer interactions, small and medium-sized businesses often lack the expertise and infrastructure to do so. That’s where Mehery comes in. We make it easy for businesses of all sizes to automate customer interactions, transforming conversations into transactions with ease.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Founded three years ago, Mehery is the brainchild of a team of technocrats and technologists with over a century of collective experience. With deep roots in enterprise digitization, digital transformation, and building scalable social media management systems, our mission is to empower businesses to succeed in the digital era.
                            </p>
                            <p class="text-gray-600 text-lg">
                                We are driven by the vision to democratize customer engagement—be it informative, acquisitive, proactive, or reactive—across all digital assets of an enterprise. Our no-code, data-driven solutions are designed to simplify the complexities of digitalization, helping businesses focus on what truly matters: growth and customer satisfaction.
                            </p>
                            <p class="text-gray-600 text-lg">
                                We are driven by the vision to democratize customer engagement—be it informative, acquisitive, proactive, or reactive—across all digital assets of an enterprise. Our no-code, data-driven solutions are designed to simplify the complexities of digitalization, helping businesses focus on what truly matters: growth and customer satisfaction.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Our customers are more than clients—they are our partners in mutual success. Together, we aim to redefine what’s possible in customer engagement, creating innovative solutions that meet today’s needs and anticipate tomorrow’s challenges.
                            </p>
                            <p class="text-gray-600 font-bold text-xl">
                                Our Core Values: Guiding Principles That Define Us
                            </p>
                            <ul class="space-y-3 mb-10 text-gray-600">
                                <li v-for="(point, index) in bulletPoints" :key="index" class="flex items-start">
                                    <span
                                        class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                                    ></span>
                                    <span class="text-lg">{{ point }}</span>
                                </li>
                            </ul>
                            <p class="text-gray-600 font-bold text-xl">
                                Our Journey:
                            </p>
                            <p class="text-gray-600 text-lg">
                                Our story is one of innovation, collaboration, and a relentless pursuit of excellence. Though young, our journey has only just begun, and we invite you to join us as we shape the future of customer engagement—one meaningful conversation at a time.
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
