<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl font-bold mb-12">WhatsApp Specific Features</h1>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Feature Cards -->
            <div
                v-for="(feature, index) in features"
                :key="index"
                @click="handleCardClick(feature)"
                class="bg-white rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
                <!-- Dot Indicator -->
                <div :class="`w-2 h-2 rounded-full mb-6 ${feature.dotColor}`"></div>

                <!-- Content -->
                <div class="space-y-4 pr-12">
                    <h2 class="text-xl font-semibold">{{ feature.title }}</h2>
                    <p class="text-gray-600 text-sm leading-relaxed">{{ feature.description }}</p>
                </div>

                <!-- Arrow Button -->
                <div
                    :class="`absolute right-8 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors duration-300 
          ${
              feature.darkButton
                  ? 'bg-black hover:bg-gray-800'
                  : 'bg-white border border-gray-200 hover:border-gray-300'
          }`"
                >
                    <ArrowRightIcon :class="`w-4 h-4 ${feature.darkButton ? 'text-white' : 'text-black'}`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ArrowRightIcon } from "vue-feather-icons";
import { useRouter } from "vue-router";

const router = useRouter();

const features = [
    {
        title: "Whatsapp - Click to Connect",
        description:
            "Ads that click to WhatsApp can be placed across Facebook and Instagram (News Feed, Stories, and Marketplace) and help support business objectives across lead generation, sales and marketing",
        dotColor: "bg-blue-500",
        darkButton: true,
        route: "/Connect",
        hash: "#click-to-connect"
    },
    {
        title: "WhatsApp - Flows",
        description:
            "WhatsApp Flows is a way to build structured interactions for business messaging. With Flows, businesses can define, configure, and customize messages with rich interactions that give customers more structure in the way they communicate",
        dotColor: "bg-red-500",
        darkButton: true,
        route: "/Connect",
        hash: "#flows"
    },
    {
        title: "WhatsApp - Media Card Carousel",
        description:
            "Media card carousel templates allow you to send a single text message accompanied by a set of up to 10 media cards in a horizontally scrollable view.",
        dotColor: "bg-orange-500",
        darkButton: true,
        route: "/Connect",
        hash: "#carousel"
    },
    {
        title: "Whatsapp - Single Product Message",
        description:
            "SPM templates are marketing templates that allow you to present a single product from your ecommerce catalog, accompanied by a product image",
        dotColor: "bg-blue-500",
        darkButton: true,
        route: "/Connect",
        hash: "#single-product"
    },
    {
        title: "WhatsApp - Authentication",
        description:
            "One-tap autofill authentication templates allow you to send a one-time password or code along with an one-tap autofill button to your users. When a WhatsApp user taps the autofill button, the WhatsApp client triggers an activity",
        dotColor: "bg-red-500",
        darkButton: true,
        route: "/Connect",
        hash: "#authentication"
    }
];

const handleCardClick = (feature) => {
  router.push(`${feature.route}${feature.hash}`);
};
</script>
