<template>
    <!-- Main App Container -->
    <div>
        <!-- Router View for Pages -->
        <router-view />

        <!-- Global Components -->
         <!-- <SocialWhatsapp/> -->
        <WebChat/>
        <!-- <ConversationalBot /> -->
        <SocialPopup />
    </div>
</template>

<script>
import { defineComponent } from "vue";
// import ConversationalBot from "./layout/Conversational.vue"; // Adjust the path as needed
import SocialPopup from "./layout/SocialPopup.vue"; // Adjust the path as needed
import WebChat from "./layout/WebChat.vue"; // Adjust the path as needed
// import SocialWhatsapp from "./layout/SocialWhatsapp.vue";
import "@assets/app-mry/app.css";
import "@assets/app-mry/app.scss";

export default defineComponent({
    name: "App",
    components: {
        // ConversationalBot,
        SocialPopup,
        WebChat,
        // SocialWhatsapp
    }
});
</script>

<style lang="scss">
/* Global styles can go here */
</style>
