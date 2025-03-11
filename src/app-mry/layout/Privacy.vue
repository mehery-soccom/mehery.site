<template>
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
        <Navbar />
        <main class="py-6 px-4 sm:px-6 lg:px-8">
            <section id="privacy" class="max-w-7xl mx-auto">
                <div class="container mx-auto">
                    <!-- Privacy Policy Header -->
                    <div class="space-y-6 mb-16">
                        <h3
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Privacy Policy
                        </h3>
                        <p class="text-gray-600 text-base sm:text-lg">
                            Effective date: Sept 1, 2021
                        </p>
                        <p class="text-gray-600 text-base sm:text-lg">
                            Mehery SocCom Pvt Ltd (“us”, “we”, or “our”) operates the website and the Mehery
                            application, which is a message aggregation and distribution service (the “Service”).
                            This page informs you of our policies regarding the collection, use, and disclosure of
                            personal data when you use our Service and the choices you have associated with that
                            data. We use your data to provide and improve the Service. By using the Service, you
                            agree to the collection and use of information in accordance with this policy. Unless
                            otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the
                            same meanings as in our Terms and Conditions.
                        </p>
                    </div>

                    <!-- Information Collection and Use -->
                    <div class="space-y-6 mb-16">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Information Collection and Use
                        </h4>
                        <p class="text-gray-600 text-base sm:text-lg">
                            We collect personal information about you from a variety of sources and you agree to the
                            processing of this information for the purposes and ways utilized to improve the
                            Services including the transfer of your personal information outside of your country to
                            other countries. We collect personal information when you (a) submit personal
                            information to us directly, (b) when it is made available to us through the Social Media
                            Messengers that you use, or (c) when it is made available to us by our enterprise
                            customers utilizing their own resources and integrations. We collect personal
                            information about the domain and host from which you access the Internet, your device IP
                            address, browser and operating system software, the date and time you access our website
                            and the address of the site from which you linked to our website when you visit us; We
                            may collect and retain your bank, payment card and other payment details when you use
                            our services and for use in future transactions and services; and We collect personal
                            information on your online activity as described in the paragraph below titled “TRACKING
                            and COOKIES DATA .” The personal information we collect includes, but is not limited to,
                            name, address, and telephone number, information about the form of identification used
                            to send or receive messages, the products and services you have with us and your use of
                            them, and your device’s IP address and other online activity details, the type of mobile
                            device you use, your mobile device unique ID, the IP address of your mobile device, your
                            mobile operating system, the type of mobile Internet browser you use, unique device
                            identifiers and other diagnostic data.
                        </p>
                    </div>

                    <!-- Types of Data Collected -->
                    <div class="space-y-6 mb-16">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Types of Data Collected
                        </h4>
                        <h5 class="text-left text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                            Personal Data
                        </h5>
                        <p class="text-gray-600 text-base sm:text-lg">
                            While using our Service, we may ask you to provide us with certain personally
                            identifiable information that can be used to contact or identify you (“Personal Data”).
                            Personally identifiable information may include, but is not limited to:
                        </p>
                        <ul class="space-y-4">
                            <li v-for="(point, index) in bulletPoints" :key="index" class="flex items-start space-x-3">
                                <span class="text-xl text-blue-600">📌</span>
                                <div>
                                    <p class="text-gray-600 text-sm">{{ point }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- Usage Data -->
                    <div class="space-y-6 mb-16">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Usage Data
                        </h4>
                        <p class="text-gray-600 text-base sm:text-lg">
                            We may also collect information that your browser sends whenever you visit our Service
                            or when you access the Service by or through a computing device (“Usage Data”). This
                            Usage Data may include information such as your computer’s Internet Protocol address
                            (e.g. IP address), browser type, browser version, the pages of our Service that you
                            visit, the time and date of your visit, the time spent on those pages, unique device
                            identifiers and other diagnostic data. When you access the Service by or through a
                            mobile device, this Usage Data may include information such as the type of mobile device
                            you use, your mobile device unique ID, the IP address of your mobile device, your mobile
                            operating system, the type of mobile Internet browser you use, unique device identifiers
                            and other diagnostic data.
                        </p>
                    </div>

                    <!-- Tracking & Cookies Data -->
                    <div class="space-y-6 mb-16">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Tracking & Cookies Data
                        </h4>
                        <p class="text-gray-600 text-base sm:text-lg">
                            We use cookies and similar tracking technologies to track the activity on our Service
                            and hold certain information. Cookies are files with small amount of data which may
                            include an anonymous unique identifier. Cookies are sent to your browser from a website
                            and stored on your device. Tracking technologies also used are beacons, tags, and
                            scripts to collect and track information and to improve and analyze our Service. You can
                            instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                            However, if you do not accept cookies, you may not be able to use some portions of our
                            Service. Examples of Cookies we use:
                        </p>
                        <ul class="space-y-4">
                            <li v-for="(point, index) in somethingPoints" :key="index" class="flex items-start space-x-3">
                                <span class="text-xl text-blue-600">📌</span>
                                <div>
                                    <p class="text-gray-600 text-sm">{{ point }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- Use of Data -->
                    <div class="space-y-6 mb-16">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Use of Data
                        </h4>
                        <p class="text-gray-600 text-base sm:text-lg">
                            We use the collected data for various purposes:
                        </p>
                        <ul class="space-y-4">
                            <li v-for="(point, index) in usagePoints" :key="index" class="flex items-start space-x-3">
                                <span class="text-xl text-blue-600">📌</span>
                                <div>
                                    <p class="text-gray-600 text-sm">{{ point }}</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- Third-Party Services -->
                    <div class="space-y-6 mb-16">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Firebase
                        </h4>
                        <p class="text-gray-600 text-base sm:text-lg">
                            Firebase is analytics service provided by Google Inc. You may opt-out of certain
                            Firebase features through your mobile device settings, such as your device advertising
                            settings or by following the instructions provided by Google in their Privacy Policy:
                            https://policies.google.com/privacy?hl=en We also encourage you to review the Google’s
                            policy for safeguarding your data: https://support.google.com/analytics/answer/6004245.
                            For more information on what type of information Firebase collects, please visit please
                            visit the Google Privacy & Terms web page: https://policies.google.com/privacy?hl=en
                        </p>
                    </div>

                    <div class="space-y-6 mb-16">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Flurry Analytics
                        </h4>
                        <p class="text-gray-600 text-base sm:text-lg">
                            Flurry Analytics service is provided by Yahoo! Inc. You can opt-out from Flurry
                            Analytics service to prevent Flurry Analytics from using and sharing your information by
                            visiting the Flurry’s Opt-out page: https://dev.flurry.com/secure/optOut.do For more
                            information on the privacy practices and policies of Yahoo!, please visit their Privacy
                            Policy page: https://policies.yahoo.com/us/en/yahoo/privacy/policy/index.htm
                        </p>
                    </div>

                    <!-- Children’s Privacy -->
                    <div class="space-y-6 mb-16">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Children’s Privacy
                        </h4>
                        <p class="text-gray-600 text-base sm:text-lg">
                            Our Service does not address anyone under the age of 18 (“Children”). We do not
                            knowingly collect personally identifiable information from anyone under the age of 18.
                            If you are a parent or guardian and you are aware that your Children has provided us
                            with Personal Data, please contact us. If we become aware that we have collected
                            Personal Data from children without verification of parental consent, we take steps to
                            remove that information from our servers.
                        </p>
                    </div>

                    <!-- Changes to Privacy Policy -->
                    <div class="space-y-6 mb-16">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Changes To This Privacy Policy
                        </h4>
                        <p class="text-gray-600 text-base sm:text-lg">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by
                            posting the new Privacy Policy on this page. We will let you know via email and/or a
                            prominent notice on our Service, prior to the change becoming effective and update the
                            “effective date” at the top of this Privacy Policy. You are advised to review this
                            Privacy Policy periodically for any changes. Changes to this Privacy Policy are
                            effective when they are posted on this page.
                        </p>
                    </div>

                    <!-- Contact Us -->
                    <div class="space-y-6 mb-16">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Contact Us
                        </h4>
                        <p class="text-gray-600 text-base sm:text-lg">
                            If you have any questions about this Privacy Policy, please contact us at legal@mehery.com
                        </p>
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

const bulletPoints = ref([
    "Email address",
    "Phone Number",
    "First name and last name",
    "Company name",
    "Name of Regulator for Companies",
    "Address, State, Province, ZIP/Postal code, City",
    "Cookies and Usage Data"
]);
const somethingPoints = ref([
    "Session Cookies. We use Session Cookies to operate our Service.",
    "Preference Cookies. We use Preference Cookies to remember your preferences and various settings",
    "Security Cookies. We use Security Cookies for security purposes"
]);
const usagePoints = ref([
    "To provide and maintain the Service",
    "To notify you about changes to our Service",
    "To allow you to participate in interactive features of our Service when you choose to do so",
    "To provide customer care and support",
    "To provide analysis or valuable information so that we can improve the Service",
    "To monitor the usage of the Service",
    "To detect, prevent and address technical issues"
]);
</script>