<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="mb-10">
            <section id="relation" class="lg:-mt-2">
                <div class="container text-center mx-auto px-4 sm:px-6 lg:px-8">
                    <div class=" gap-12 items-center">
                        <div class="space-y-6">
                            <h3 class="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight ">
                                About Us
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Mehery is a young, one year old company, building solutions in the digital space.  
                            </p>
                            <p class="text-gray-600 text-lg">
                                It’s been founded by a team of technocrats and technologists with cumulative experience of over a 100 years and with extensive experience in the digitization of enterprise systems, digital transformation journeys of large enterprises, and building to scale, social media management systems.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Mehery has been born of an idea to democratize customer engagements – informative, acquisitive, proactive, and reactive across all digital assets of an organization. We believe that getting the digitalization correct and providing the ability to mine it on a no-code, digital marketing driven non-event, will be the key to enterprise successes moving forward.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Our customers, are our partners, in mutual successes.
                            </p>
                            <p class="text-gray-600 text-lg">
                                Our journey, together, has just begun.
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
</script>
