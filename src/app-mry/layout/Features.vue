<template>
    <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <!-- Features Heading -->
        <h2 class="text-3xl font-bold mb-2">Features</h2>
        <p class="text-base text-gray-600 max-w-3xl">
            Leverage the power of the WhatsApp Business API—the most advanced communication platform to connect and
            engage with your users effectively. More on WhatsApp and the channel capability, is available here
        </p>

        <!-- Team Inbox Section -->
        <div class="grid lg:grid-cols-2 gap-8 mb-8 items-center">
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-bold mb-2">Team Inbox</h3>
                    <p class="text-gray-600 mb-4">
                        Empower your team to engage with customers seamlessly through a centralized inbox that
                        aggregates all conversations across multiple channels.
                    </p>
                </div>

                <div class="space-y-4">
                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm"
                                >Centralized Inbox for All Channel</span
                            >
                            <p class="mt-1 text-gray-600">
                                Communicate with customers on WhatsApp, Messenger, Instagram DM, Telegram
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm"
                                >Predefined Message Templates</span
                            >
                            <p class="mt-1 text-gray-600">
                                Start new conversations or continue existing ones using predefined messages
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm">Prioritization</span>
                            <p class="mt-1 text-gray-600">
                                Start new conversations or continue existing ones using predefined messages
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    @click="handleteamInbox"
                    class="bg-[#FFA726] hover:bg-[#FB8C00] text-black px-4 py-1 rounded-md font-medium transition-colors"
                >
                    Learn More
                </button>
            </div>

            <div class="rounded-lg">
                <img src="../../@assets/images/feature1.png" class="w-full h-auto" />
            </div>
        </div>

        <!-- BOT Builder Section -->
        <div class="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div class="rounded-lg">
                <img src="../../@assets/images/feature2.png" class="w-full h-auto" />
            </div>

            <div class="space-y-6 lg:order-2 order-1">
                <div>
                    <h3 class="text-xl font-bold mb-2">BOT Builder</h3>
                    <p class="text-gray-600 mb-4">
                        Our BOT Builder empowers marketing teams to create and deploy bots independently, without
                        needing a developer. It's a DIY toolkit designed to give you a competitive edge
                    </p>
                </div>

                <div class="space-y-4">
                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm"
                                >Intuitive BOT Flow Builder</span
                            >
                            <p class="mt-1 text-gray-600">
                                Create bots using an extremely user-friendly, UI-based BOT flow builder.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm">Quick Deployment</span>
                            <p class="mt-1 text-gray-600">
                                Start new conversations or continue existing ones using predefined messages
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm"
                                >Event-Driven and Timed Responses</span
                            >
                            <p class="mt-1 text-gray-600">
                                Start new conversations or continue existing ones using predefined messages
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    @click="handleBotBuilder"
                    class="bg-[#FFA726] hover:bg-[#FB8C00] text-black px-4 py-1 rounded-md font-medium transition-colors"
                >
                    Learn More
                </button>
            </div>
        </div>

        <!-- Marketing Campaign Section -->
        <div class="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-bold mb-2">Marketing Campaigns</h3>
                    <p class="text-gray-600 mb-4">
                        Professional marketing campaigns are essential for lead generation, customer acquisition, and
                        ongoing customer engagement. Our campaign management component is highly user-friendly and works
                        seamlessly
                    </p>
                </div>

                <div class="space-y-4">
                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm">Cohort Creation</span>
                            <p class="mt-1 text-gray-600">
                                Build customer cohorts from your customer management module using dynamic filters,
                                session tags from conversations, or external data sources
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm"
                                >Flexible Campaign Execution</span
                            >
                            <p class="mt-1 text-gray-600">
                                Run campaigns on demand or schedule them for optimal dates and times to suit your
                                customers
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm">A/B Testing</span>
                            <p class="mt-1 text-gray-600">
                                Test campaign effectiveness by running A/B campaigns with a small test group before
                                rolling out to a larger audience.
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    @click="handleMarketing"
                    class="bg-[#FFA726] hover:bg-[#FB8C00] text-black px-4 py-1 rounded-md font-medium transition-colors"
                >
                    Learn More
                </button>
            </div>

            <div class="rounded-lg">
                <img src="../../@assets/images/feature3.png" class="w-full h-auto" />
            </div>
        </div>

        <!-- Customer Cohort Section -->
        <div class="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div class="rounded-lg">
                <img src="../../@assets/images/feature4.png" class="w-full h-auto" />
            </div>

            <div class="space-y-6 lg:order-2 order-1">
                <div>
                    <h3 class="text-xl font-bold mb-2">Customer Cohorts</h3>
                    <p class="text-gray-600 mb-4">
                        Build dynamic customer cohorts with our advanced filtering system, and leverage these cohorts
                        for lead management and customer acquisition campaigns.
                    </p>
                </div>

                <div class="space-y-4">
                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm"
                                >Effortless Cohort Creation</span
                            >
                            <p class="mt-1 text-gray-600">Easily create cohorts from the Customer Management module.</p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm">Reusable Cohorts</span>
                            <p class="mt-1 text-gray-600">
                                Use cohorts on demand in outbound campaigns for lead management, customer engagement, or
                                marketing.
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    @click="handleCohort"
                    class="bg-[#FFA726] hover:bg-[#FB8C00] text-black px-4 py-1 rounded-md font-medium transition-colors"
                >
                    Learn More
                </button>
            </div>
        </div>

        <!-- Analytics Section -->
        <div class="grid lg:grid-cols-2 gap-8 mb-16 items-center">
            <div class="space-y-6">
                <div>
                    <h3 class="text-xl font-bold mb-2">Analytics</h3>
                    <p class="text-gray-600 mb-4">
                        Analytics is a crucial component of any customer engagement system. Our analytics cover various
                        segments of the platform based on utility and applicability.
                    </p>
                </div>

                <div class="space-y-4">
                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm"
                                >Conversational Analytics</span
                            >
                            <p class="mt-1 text-gray-600">
                                Get a bird’s-eye view of inbound and outbound communication, with insights on agent,
                                channel, and team-specific performance, as well as response and closure analytics.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm"
                                >Segmented Channel-Specific Daily Analytics</span
                            >
                            <p class="mt-1 text-gray-600">
                                Drill down into the number of inbound and outbound messages and conversations handled by
                                each channel, broken down by hour and day.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm">Campaign Analytics</span>
                            <p class="mt-1 text-gray-600">
                                Monitor campaign delivery, read rates, and response rates, along with user-specific
                                responses. View analytics online or download data for further analysis.
                            </p>
                        </div>
                    </div>

                    <div class="flex items-start gap-3">
                        <CheckCircleIcon class="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" />
                        <div>
                            <span class="bg-gray-900 text-white px-2 py-1 rounded text-sm">BOT Analytics</span>
                            <p class="mt-1 text-gray-600">
                                Track BOT flow execution to determine if success criteria are met, providing visibility
                                into BOT performance and customer interactions.
                            </p>
                        </div>
                    </div>
                </div>

                <button
                    @click="handleAnalytics"
                    class="bg-[#FFA726] hover:bg-[#FB8C00] text-black px-4 py-1 rounded-md font-medium transition-colors"
                >
                    Learn More
                </button>
            </div>

            <div class="rounded-lg">
                <img src="../../@assets/images/feature5.png" class="w-full h-auto" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { CheckCircleIcon } from "vue-feather-icons";
import { useRouter } from "vue-router";

const router = useRouter();

const handleteamInbox = () => {
    router.push("/inbox");
};

const handleBotBuilder = () => {
  router.push("/builder")
}

const handleMarketing = () => {
  router.push("/marketing")
}

const handleCohort = () => {
  router.push("/cohort")
}

const handleAnalytics = () => {
  router.push("/analytics")
}
</script>