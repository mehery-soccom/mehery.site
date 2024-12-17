<template>
    <div id="page-top">
        <!-- Header -->
        <Header :containerClass="'bg-dark'"></Header>

        <div class="page-section-wrapper">
            <!-- Section 1 -->
            <section class="page-section header-offset">
                <b-container>
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Page</h2>
                        <div class="section-heading-underline"></div>
                    </div>

                    <div v-if="!$route.params.contentName">Invalid content details. Check url and try again.</div>
                    <div v-else>
                        <Article :src="$route.params.contentName" :query="$route.query"></Article>
                    </div>
                </b-container>
            </section>
        </div>

        <!-- Footer -->
        <Footer></Footer>
    </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "@layout/Header.vue";
import Footer from "@layout/Footer.vue";
import Article from "@components/Article.vue";

export default defineComponent({
    name: "Page",
    components: {
        Header,
        Footer,
        Article
    },
    mounted: function () {
        console.log("Page mounted");
    }
});
</script>

<style lang="scss">
.blog-content {
    margin-top: 140px;

    .blog-preview {
        border-bottom: 3px solid var(--bs-primary);
        margin-bottom: 12px;

        img {
            width: 100%;
        }
    }

    .blog-extra {
        border-top: 1px solid #eee;
        padding-top: 30px;

        .share {
            float: right;

            em {
                float: left;
                font-style: normal;
                line-height: 24px;
            }

            .share-social {
                padding: 0;
                position: relative;
                display: inline-block;

                li {
                    float: left;
                    margin: 0 6px;
                    list-style: none;
                }
            }
        }
    }

    h2 {
        a {
            text-decoration: none;
        }
        &:hover {
            border-bottom: 2px solid var(--bs-primary);
            color: var(--bs-primary) !important;
        }
    }

    .informers {
        list-style: none;
        width: 100%;
        display: inline-block;
        color: #707070;
        font-size: 16px;
        margin-bottom: 30px;
        margin-top: 12px;
        padding: 0;

        li .far {
            color: var(--bs-primary);
            margin-right: 10px;
        }
    }
}

.justify-center {
    justify-content: center;
}
</style>
