<template>
    <div id="page-top">
        <!-- Header -->
        <Navbar />

        <div class="page-section-wrapper">
            <!-- About Section -->
            <section class="page-section header-offset">
                <b-container>
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">BLOGS</h2>
                        <div class="section-heading-underline"></div>
                    </div>

                    <div v-if="!$route.params.contentName">Invalid content details. Check url and try again.</div>
                    <div v-else>
                        <!-- This will render content dynamically based on the route params -->
                        <div class="about-content">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div class="order-2 md:order-1">
                                    <h3 class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
                                        Blog
                                    </h3>
                                    <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
                                        At Mehery, we believe in the power of conversations. Conversations are the
                                        cornerstone of building strong customer relationships and play a pivotal role in
                                        converting prospects into loyal customers.
                                    </p>
                                </div>
                                <div
                                    class="order-1 md:order-2 rounded-lg overflow-hidden shadow-md bg-gray-100 max-h-[300px]">
                                    <img src="https://picsum.photos/600/300" alt="About Us"
                                        class="w-full h-full object-cover" />
                                </div>
                            </div>

                            <div class="space-y-6">
                                <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
                                    While large enterprises have the resources to create bespoke tools for customer
                                    interactions, small and medium-sized businesses often lack the expertise and
                                    infrastructure to do so. That's where Mehery comes in. We make it easy for
                                    businesses of all sizes to automate customer interactions, transforming
                                    conversations into transactions with ease.
                                </p>

                                <!-- Team Photo Section -->
                                <div class="my-8 rounded-lg overflow-hidden shadow-md bg-gray-100 max-h-[250px]">
                                    <img src="https://picsum.photos/600/250" alt="Our Team"
                                        class="w-full h-full object-cover" />
                                </div>

                                <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
                                    Founded three years ago, Mehery is the brainchild of a team of technocrats and
                                    technologists with over a century of collective experience. With deep roots in
                                    enterprise digitization, digital transformation, and building scalable social media
                                    management systems, our mission is to empower businesses to succeed in the digital
                                    era.
                                </p>

                                <!-- Values Section -->
                                <div class="mt-8 bg-white rounded-lg p-6 sm:p-8 shadow-sm">
                                    <h4 class="text-gray-800 font-bold text-xl mb-6">
                                        Our Core Values: Guiding Principles That Define Us
                                    </h4>
                                    <ul class="space-y-4 text-gray-600">
                                        <li v-for="(point, index) in bulletPoints" :key="index"
                                            class="flex items-start">
                                            <span
                                                class="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span class="text-base leading-relaxed">{{ point }}</span>
                                        </li>
                                    </ul>
                                </div>

                                <!-- Journey Section -->
                                <div class="mt-8 border-l-4 border-blue-500 pl-4">
                                    <h4 class="text-gray-800 font-bold text-xl mb-4">
                                        Our Journey
                                    </h4>
                                    <p class="text-gray-600 text-base sm:text-lg leading-relaxed">
                                        Our story is one of innovation, collaboration, and a relentless pursuit of
                                        excellence. Though young, our journey has only just begun, and we invite you to
                                        join us as we shape the future of customer engagement—one meaningful
                                        conversation at a time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-container>
            </section>
        </div>

        <!-- Footer -->
        <Footer></Footer>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";


const bulletPoints = ref([
    "Putting Customers First: Our purpose is rooted in helping our customers succeed. When they grow, we grow.",
    "Striving for Excellence: We challenge ourselves to raise the bar every day, staying curious, innovative, and relentless in improving what we do",
    "Simplicity is Our Superpower: We take pride in creating solutions that are intuitive, elegant, and easy to use—because simplicity drives impact.",
    "Fostering Collaboration: We believe in the power of diversity—of people, ideas, and perspectives. Together, we achieve more.",
    "Acting with Agility: Speed and precision define our approach. We move swiftly, deliver with quality, and stay laser-focused until the goal is achieved.",
    "Leading with Integrity: We stand by our commitments, take ownership of our actions, and make decisions that reflect our values."
]);

onMounted(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
</script>

<style scoped>
.page-section-wrapper {
    padding: 20px 0;
}

.header-offset {
    margin-top: 80px;
}

.text-center {
    text-align: center;
}

.section-heading {
    font-size: 2.5rem;
    text-transform: uppercase;
}

.section-heading-underline {
    width: 60px;
    height: 3px;
    background-color: #FFA726;
    margin: 1rem auto;
}

.about-content {
    margin-top: 140px;
}

.grid {
    display: grid;
    grid-template-columns: 1fr;
}

.grid-cols-1 {
    grid-template-columns: 1fr;
}

.md\\:grid-cols-2 {
    @media(min-width: 768px) {
        grid-template-columns: 1fr 1fr;
    }
}

.gap-8 {
    gap: 2rem;
}

.text-gray-600 {
    color: #4A4A4A;
}

.text-gray-900 {
    color: #1A202C;
}

.bg-gray-100 {
    background-color: #F7FAFC;
}

.bg-white {
    background-color: #FFFFFF;
}

.rounded-lg {
    border-radius: 0.375rem;
}

.shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}



.mt-8 {
    margin-top: 2rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.mb-12 {
    margin-bottom: 3rem;
}

.space-y-6 {
    margin-bottom: 1.5rem;
}

.space-y-4 {
    margin-bottom: 1rem;
}

.font-bold {
    font-weight: 700;
}

.leading-relaxed {
    line-height: 1.625;
}

.text-base {
    font-size: 1rem;
}

.text-xl {
    font-size: 1.25rem;
}

.text-lg {
    font-size: 1.125rem;
}

.px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.sm\\:px-6 {
    @media(min-width: 640px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}

.lg\\:px-8 {
    @media(min-width: 1024px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
}
</style>
