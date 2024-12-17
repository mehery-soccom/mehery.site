<template>
    <div id="page-top">
        <!-- Header -->
        <Header :containerClass="'bg-dark'"></Header>

        <div class="page-section-wrapper">
            <!-- Section -->
            <section class="page-section">Section</section>
        </div>

        <!-- Footer -->
        <Footer></Footer>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@layout/Header.vue";
import Footer from "@layout/Footer.vue";

export default defineComponent({
    name: "Layout",
    components: {
        Header,
        Footer
    }
});
</script>

<style lang="scss"></style>
