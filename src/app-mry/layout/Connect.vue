<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main class="-mb-16">
            <section id="click-to-connect" class="lg:mt-24">
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
            <section id="flows" class="lg:mt-40">
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
            <section id="carousel" class="lg:mt-32">
                <div class="container mx-auto px-4 sm:px-6 lg:px-20">
                    <div class="gap-12 items-center">
                        <div class="space-y-6">
                            <h3
                                class="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 leading-tight lg:-mt-20"
                            >
                                WhatsApp – Media Card Carousel
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                Media card carousel templates allow you to send a single text message accompanied by a
                                set of up to 10 media cards in a horizontally scrollable view. These can be very
                                effectively used when you want to run a marketing campaign for multiple products of a
                                similar kind or otherwise.
                            </p>
                        </div>
                        <div class="-mt-32 scale-75 flex justify-center items-center">
                            <img src="../../@assets/images/image 16(1).svg" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="single-product" class="-mt-20">
                <div class="container mx-auto px-4 sm:px-6 lg:px-20">
                    <div class="gap-12 items-center">
                        <div class="space-y-6">
                            <h3
                                class="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 leading-tight lg:-mt-20"
                            >
                                WhatsApp – Single Product Message
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                SPM templates are marketing templates that allow you to present a single product from
                                your ecommerce catalog, accompanied by a product image, product title, and product price
                                (all pulled from your product within your catalog), along with customizable body text,
                                optional footer text, and an interactive View button.
                            </p>
                        </div>
                        <div class="-mt-28 mr-40 scale-75 flex justify-center items-center">
                            <img src="../../@assets/images/image 17.svg" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="authentication" class="-mt-20">
                <div class="container mx-auto px-4 sm:px-6 lg:px-20">
                    <div class="gap-12 items-center">
                        <div class="space-y-6">
                            <h3
                                class="text-4xl sm:text-5xl lg:text-4xl font-bold text-gray-900 leading-tight lg:-mt-20"
                            >
                                WhatsApp – Authentication
                            </h3>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                If your mobile app offers users the option to receive one-time passwords or verification
                                codes via WhatsApp, you must use an authentication template.<br />
                                Authentication templates consist of:
                            </p>
                            <ul class="space-y-3 mb-10 text-gray-600">
                                <li v-for="(point, index) in bulletPoints" :key="index" class="flex items-start">
                                    <span
                                        class="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                                    ></span>
                                    <span class="text-lg">{{ point }}</span>
                                </li>
                            </ul>
                            <p class="text-gray-600 text-lg sm:text-xl">
                                One-tap autofill authentication templates allow you to send a one-time password or code
                                along with an one-tap autofill button to your users. When a WhatsApp user taps the
                                autofill button, the WhatsApp client triggers an activity which opens your app and
                                delivers it the password or code. Copy code authentication templates allow you to send a
                                one-time password or code along with a copy code button to your users. When a WhatsApp
                                user taps the copy code button, the WhatsApp client copies the password or code to the
                                device's clipboard. The user can then switch to your app and paste the password or code
                                into your app.
                                <br class="" /> 
                                Zero-tap authentication templates allow your users to receive one-time
                                passwords or codes via WhatsApp without having to leave your app. When a user in your
                                app requests a password or code and you deliver it using a zero-tap authentication
                                template, the WhatsApp client simply broadcasts the included password or code and your
                                app can capture it immediately with a broadcast receiver.
                                </br>
                            </p>
                        </div>
                        <div class="-mt-28  scale-75 flex justify-center items-center">
                            <img src="../../@assets/images/image 18.svg" />
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

const bulletPoints = ref([
    "Fixed preset text: <VERIFICATION_CODE> is your verification code.",
    " An optional security disclaimer: For your security, do not share this code.",
    " An optional expiration warning: This code expires in <NUM_MINUTES> minutes.",
    "Either a one-tap autofill button, a copy code button, or no button at all if using zero tap."
]);
</script>
