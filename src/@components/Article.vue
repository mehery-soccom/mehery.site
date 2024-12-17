<template>
    <v-runtime-template :template="template"></v-runtime-template>
    <div v-if="notFound">Content not found. Check url and try again.</div>
</template>

<script>
import { defineComponent } from "vue";
import VRuntimeTemplate from "vue3-runtime-template";

export default defineComponent({
    name: "Article",
    props: {
        contentType: { type: String, required: false },
        src: { type: String, required: true },
        query: { type: Object, required: false }
    },
    components: {
        VRuntimeTemplate
    },
    data: () => ({
        template: ``,
        notFound: false
    }),
    mounted: function () {
        this.init();
    },
    methods: {
        async init() {
            if (this.src) this.loadContent();
        },
        async loadContent() {
            const _contentType = this.contentType || "content";
            const _src = this.src.split(".")[0];

            try {
                const resp = await this.$dataService.searchResourceByName({
                    name: `${_contentType}/${_src}`,
                    query: this.query || this.$route.query
                });
                console.log(resp)
                let htmlStr = resp.data;

                /* match all img tags src value in the string */
                let match;
                let matches = [];
                let regex = /<img[^>]+src=['"]?([^'"]+)['"]?[^/>]*\/>*/g;
                while ((match = regex.exec(htmlStr))) {
                    matches.push(match[1]);
                }

                /* replace each match in the string with desired value */
                for (let i = 0; i < matches.length; i++) {
                    let match = matches[i];
                    let desiredValue = `${
                        this.$globals.remoteJsUrl
                    }${this.$dataService.getResourcePath()}/${match.replace(
                        "./",
                        `${_contentType === "content" ? "content" : "content/" + _contentType}/`
                    )}`;
                    htmlStr = htmlStr.replaceAll(match, desiredValue);
                }

                this.template = htmlStr;
            } catch (error) {
                console.error(error);

                this.notFound = true;
            }
        }
        /*
        async loadHtmlStr(fileName) {
            const path = `/${fileName}`;
            const response = await fetch(path);
            const htmlStr = await response.text();
            console.log(response);
            return htmlStr;
        }
        htmlStrToDocument(htmlStr) {
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(htmlStr, "text/html");
            return htmlDoc;
        }
        */
    }
});
</script>

<style lang="scss"></style>
