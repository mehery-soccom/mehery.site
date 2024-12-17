<template>
    <slot :loading="loading" :results="results">
        <div v-if="slotFallback">fallback</div>
    </slot>
</template>

<script>
import { defineComponent } from "vue";
import resource from "./index.js";

export default defineComponent({
    name: "resource-renderer",
    props: {
        contentType: { type: String, required: false },
        src: { type: String, required: true },
        query: { type: Object, required: false },
        slotFallback: { type: Boolean, required: false }
    },
    data: () => ({
        loading: false,
        results: null
    }),
    computed: {},
    mounted: function () {
        this.init();
    },
    methods: {
        async init() {
            if (this.src) this.loadContent();
        },
        async loadContent() {
            try {
                this.loading = true;
                const res = await resource.read({
                    contentType: this.contentType,
                    src: this.src,
                    query: this.query || this.$route.query
                });
                this.results = res.results;
            } catch (error) {
                console.error("resource not found", error);
            } finally {
                this.loading = false;
            }
        }
    }
});
</script>

<style lang="scss"></style>
