<template>
    <div class="min-h-screen bg-white">
        <!-- Navigation -->
        <nav class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <span class="text-4xl font-bold text-[#4B0082]">mehery</span>
                    <div class="flex space-x-1 -mt-4 ml-1">
                        <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                        <div class="w-2 h-2 rounded-full bg-orange-400"></div>
                        <div class="w-2 h-2 rounded-full bg-red-400"></div>
                    </div>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#" class="text-gray-800 hover:text-gray-600">Solutions</a>
                    <a href="#" class="text-gray-800 hover:text-gray-600">Features</a>
                    <a href="#" class="text-gray-800 hover:text-gray-600">Pricing</a>
                    <a href="#" class="text-gray-800 hover:text-gray-600">FAQs</a>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <div class="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
            <!-- Left Column -->
            <div class="md:w-1/2 lg:pr-20">
                <h1 class="text-5xl md:text-6xl font-bold leading-tight mb-8">
                    Engage Customers Seamlessly with Unified Messaging
                </h1>
                <p class="text-gray-600 text-lg mb-8">
                    Set up is fast and intuitive, with automatic configuration to get you up and running in minutes. As
                    a proud Meta Technology Partner, we ensure top-tier integration and reliability across channels.
                </p>
                <button
                    class="bg-[#F4B860] hover:bg-[#f3a840] text-black px-8 py-3 rounded-lg font-medium transition-colors duration-300"
                >
                    Free Trial
                </button>
            </div>

            <!-- Right Column -->
            <div class="md:w-1/2 mt-12 md:mt-0 relative">
                <div class="relative">
                    <!-- Megaphone Illustration -->
                    <div class="relative w-full h-[400px]">
                        <!-- Social Icons -->
                        <div class="absolute top-0 right-0 flex space-x-4">
                            <div class="bg-black rounded-full p-3">
                                <div class="w-6 h-6 text-white">❤️</div>
                            </div>
                            <div class="bg-[#F4B860] rounded-full p-3">
                                <div class="w-6 h-6">↗️</div>
                            </div>
                        </div>

                        <!-- Play Button -->
                        <div class="absolute right-20 top-1/2 bg-black rounded-full p-3">
                            <div class="w-6 h-6 text-white">▶️</div>
                        </div>

                        <!-- Location Icon -->
                        <div class="absolute bottom-0 right-10 bg-[#F4B860] rounded-full p-3">
                            <div class="w-6 h-6">📍</div>
                        </div>

                        <!-- Decorative Elements -->
                        <div class="absolute top-20 left-20 w-8 h-8 bg-[#5DADE2] rounded-full"></div>
                        <div class="absolute bottom-20 left-40 w-8 h-8 bg-[#F4B860] rounded-full"></div>
                        <div class="absolute top-40 right-20 w-8 h-8 bg-red-500 transform rotate-45"></div>
                        <div class="absolute bottom-10 left-10 w-8 h-8 bg-blue-400 transform rotate-45"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
/* Add any additional custom styles here if needed */
</style>
