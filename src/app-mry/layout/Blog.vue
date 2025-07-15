<template>
    <div id="page-top">
        <Navbar />

        <div class="blog-container">
            <section class="blog-section">
                <div class="header-area">
                    <h2 class="section-title">BLOGS</h2>
                    <div class="underline"></div>
                    <p class="intro-text">
                        At Mehery, we celebrate conversations. Explore our collection of blog posts and discover
                        engaging stories and insights.
                    </p>
                </div>

                <ArticleList :contentType="'blog'" v-slot="{ loading, results }">
                    <div v-if="loading" class="text-center py-8">
                        <p>Loading blogs...</p>
                    </div>

                    <div v-else-if="results.length" class="posts-grid">
                        <div v-for="(item, index) in results" :key="index" class="post-card" @click="navigateToPost(item.info.hyperlink)">
                        <div v-if="item.info.image" class="post-image">
                            <img :src="resolveLink(item.info.image)" alt="Post Image" />
                        </div>
                        <div class="post-content">
                            <h3 class="post-title">{{ item.info.title }}</h3>
                            <p class="post-meta">By {{ item.info.author }} on {{ item.info.date }}</p>
                            <!-- <p class="post-text" v-html="truncated(item.info.content)"></p> -->
                        </div>
                        </div>
                    </div>

                    <div v-else class="no-posts">
                        <p>No posts available yet. Please check back later!</p>
                    </div>
                </ArticleList>
            </section>
        </div>

        <Footer />
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Navbar from "../components/common/Navbar.vue";
import Footer from "../components/common/Footer.vue";
import ArticleList from "@components/ArticleList.vue";
import { resolveLink } from "../../@utils/linkResolver";

const router = useRouter();

const navigateToPost = (link) => {
    router.push(link);
};

</script>

<style scoped>
.post-title,
.modal-title {
    text-align: left;
}

.blog-container {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.blog-section {
    background: #f7f7f7;
    padding: 2rem;
    border-radius: 12px;
}

.header-area {
    text-align: center;
    margin-bottom: 2rem;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: #333;
}

.underline {
    width: 100px;
    height: 4px;
    background: #42b983;
    margin: 0.5rem auto 1rem;
    border-radius: 2px;
}

.intro-text {
    font-size: 1.1rem;
    color: #555;
}

.posts-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

/* Ensure max 3 cards per row on larger screens */
.posts-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
@media (min-width: 900px) {
    .posts-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.post-card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
}

.post-card:hover {
    transform: translateY(-5px);
}

.post-image img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.post-content {
    padding: 1rem;
    height: 150px; /* fixed height to display preview */
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.post-title {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    color: #333;
}

.post-meta {
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 0.5rem;
}

.post-text {
    font-size: 1rem;
    color: #555;
    flex-grow: 1;
    overflow: hidden;
}

.no-posts {
    text-align: center;
    font-size: 1.2rem;
    color: #666;
}
</style>
