<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="mb-10">
            <section id="" class="lg:mt-24">
                <div class="container mx-auto px-4 sm:px-6 lg:px-20">
                    <div class="gap-12 items-center">
                        <div class="space-y-6">
                            <h3
                                class="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 leading-tight lg:-mt-20"
                            >
                                Whatsapp - Click to Connect
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Ads that click to WhatsApp can be placed across Facebook and Instagram (News Feed,
                                Stories, and Marketplace) and help support business objectives across lead generation,
                                sales and marketing i.e. if you want a customer to move from Facebook or Instagram to
                                WhatsApp. You can add a Send message button to your Facebook or Instagram ads that will
                                open a conversation thread in the WhatsApp Business App. This allows customers to
                                connect with your business on WhatsApp after clicking the button on your ad. However,
                                with Mehery’s omnichannel platform, Advertisements on Facebook and Instagram, can
                                communicate with you on FB messenger and Instagram DM, itself and can be self-serviced
                                using BOT and a human sales force.
                            </p>
                        </div>
                        <div class="mt-10 flex justify-center items-center">
                            <img src="../../@assets/images/image 13.svg" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="" class="lg:mt-40">
                <div class="container mx-auto px-4 sm:px-6 lg:px-20">
                    <div class="gap-12 items-center">
                        <div class="space-y-6">
                            <h3
                                class="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 leading-tight lg:-mt-20"
                            >
                                WhatsApp Flows
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                WhatsApp Flows is a way to build structured interactions for business messaging. With
                                Flows, businesses can define, configure, and customize messages with rich interactions
                                that give customers more structure in the way they communicate. You can use Flows to
                                generate leads, recommend products, get new sales leads, or anything else where
                                structured communication is more natural or comfortable for your customers. Flows allow
                                you a variety of data elements for capturing responses – email id, dates, numbers, text,
                                radio buttons, check boxes, drop down and opt-in. You can also push out images as part
                                of the flow sequencing for greater customer engagement.
                            </p>
                        </div>
                        <div class="mt-10 flex justify-center items-center">
                            <img src="../../@assets/images/image 14.svg" />
                        </div>
                        <h3 class="text-3xl sm:text-5xl lg:text-3xl font-semibold text-gray-900 leading-tight lg:mt-10">
                            A few sample flows:
                        </h3>
                        <p class="text-gray-600 mt-4 text-lg sm:text-xl">
                            Drive lead generation for pre-approved loans
                        </p>
                        <div class="mt-10 flex justify-center items-center">
                        <img src="../../@assets/images/image 15.svg" />
                        </div>
                        <h3 class="text-3xl sm:text-5xl lg:text-3xl font-semibold text-gray-900 leading-tight lg:mt-10">
                            Send out an insurance Quote:
                        </h3>
                    
                        <div class="mt-10 flex justify-center items-center">
                        <img src="../../@assets/images/image 16.svg" />
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

const bulletPoints = ref([]);
</script>
