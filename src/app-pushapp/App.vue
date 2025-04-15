<template>
    <router-view />
</template>

<script>
console.log("app loaded");

import { defineComponent } from "vue";
import "@assets/app-pushapp/app.css";
import "@assets/app-pushapp/app.scss";

export default defineComponent({
    name: "App"
});
</script>

<style lang="scss"></style>
