<template>
    <!-- Main App Container -->
    <div>
        <!-- Router View for Pages -->
        <router-view />

        <!-- Global Components -->
        <ConversationalBot />
        <SocialPopup />
    </div>
</template>

<script>
import { defineComponent } from "vue";
import ConversationalBot from "./layout/Conversational.vue"; // Adjust the path as needed
import SocialPopup from "./layout/SocialPopup.vue"; // Adjust the path as needed
import "@assets/app-mry/app.css";
import "@assets/app-mry/app.scss";

export default defineComponent({
    name: "App",
    components: {
        ConversationalBot,
        SocialPopup
    }
});
</script>

<style lang="scss">
/* Global styles can go here */
</style>
