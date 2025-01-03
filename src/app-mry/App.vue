<template>
    <router-view />
</template>

<script>
console.log("app loaded");

import { defineComponent } from "vue";
import "@assets/app/app.scss";

export default defineComponent({
    name: "App"
});
</script>

<style lang="scss"></style>