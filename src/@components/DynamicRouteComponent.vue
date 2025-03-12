<template>

    <component :is="componentInstance" />
    <Navbar />

    <div>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <main class="mt-16">
                <section class="space-y-16">
                    <div class="space-y-6">
                        <h4
                            class="text-left text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Page Not Found
                        </h4>
                        <p class="text-gray-600 text-base sm:text-l p-16g">
                            The page you are looking for does not exist. It may have been moved, or removed altogether. Perhaps you can return back to the site's homepage and see if you can find what you are looking for.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    </div>
    <Footer />

</template>

<script>
import Navbar from '../app-mry/layout/Navbar.vue';
import Footer from '../app-mry/layout/Footer.vue';


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
