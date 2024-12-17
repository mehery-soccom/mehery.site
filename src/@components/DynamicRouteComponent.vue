<template>
    <component :is="componentInstance" />
</template>

<script>
export default {
    computed: {
        componentInstance() {
            /* use case 1 */
            return () =>
                import(
                    `@src/${
                        this.$globals.APP === "app" ? "app" : "app-" + this.$globals.APP
                    }/layout/${this.$utils.toTitleCase(this.$route.params.page)}.vue`
                )
                    .then(m => {
                        return m.default;
                    })
                    .catch(err => {
                        console.log(err);
                        console.log(`falling back to @components/Page.vue`);

                        return () => import(`@components/Page.vue`);
                    });

            /* use case 2 */
            // try {
            //     require(`@src/${this.$globals.APP}/layout/${this.$utils.toTitleCase(this.$route.params.page)}.vue`);

            //     return () =>
            //         import(`@src/${this.$globals.APP}/layout/${this.$utils.toTitleCase(this.$route.params.page)}.vue`);
            // } catch (error) {
            //     console.log(
            //         `cannot find :: @src/${this.$globals.APP}/layout/${this.$utils.toTitleCase(
            //             this.$route.params.page
            //         )}.vue`
            //     );
            //     console.log(`falling back to :: @components/Page.vue`);

            //     return () => import(`@components/Page.vue`);
            // }
        }
    }
};
</script>
