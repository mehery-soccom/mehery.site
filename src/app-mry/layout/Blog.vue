<template>
  <div id="page-top">
    <!-- Header -->
    <Navbar />

    <div class="blog-container">
      <section class="blog-section">
        <div class="header-area">
          <h2 class="section-title">BLOGS</h2>
          <div class="underline"></div>
          <p class="intro-text">
            At Mehery, we celebrate conversations. Explore our collection of blog posts
            and discover engaging stories and insights.
          </p>
        </div>

        <div class="posts-container">
          <div v-if="posts.length" class="posts-grid">
            <div
              v-for="post in posts"
              :key="post.id"
              class="post-card"
              @click="openPost(post)"
            >
              <div v-if="post.image" class="post-image">
                <img :src="post.image" alt="Post Image" />
              </div>
              <div class="post-content">
                <h3 class="post-title">{{ post.title }}</h3>
                <p class="post-meta">By {{ post.author }} on {{ post.date }}</p>
                <p class="post-text">{{ truncated(post.content) }}</p>
              </div>
            </div>
          </div>
          <div v-else class="no-posts">
            <p>No posts available yet. Please check back later!</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Modal Popup for Full Blog Details -->
    <div v-if="selectedPost" class="modal-overlay" @click.self="closeModal">
      <div class="modal-box">
        <button class="modal-close" @click="closeModal">×</button>
        <div class="modal-content-wrapper">
          <div v-if="selectedPost.image" class="modal-image">
            <img :src="selectedPost.image" alt="Post Image" />
          </div>
          <h2 class="modal-title">{{ selectedPost.title }}</h2>
          <p class="modal-meta">By {{ selectedPost.author }} on {{ selectedPost.date }}</p>
          <p class="modal-content">{{ selectedPost.content }}</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { blogService } from "../../firebase/index";
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";

const posts = ref([]);
const selectedPost = ref(null);

const openPost = (post) => {
  selectedPost.value = post;
};

const closeModal = () => {
  selectedPost.value = null;
};

const truncated = (text) => {
  const maxLength = 100;
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

onMounted(async () => {
  posts.value = await blogService.getPosts();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<style scoped>
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
  font-size: 1.5rem;
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

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-box {
  background: #fff;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  animation: slideIn 0.3s;
}

@keyframes slideIn {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #42b983;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.modal-close:hover {
  background: #369870;
}

.modal-content-wrapper {
  margin-top: 1.5rem;
}

.modal-image img {
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
  border-radius: 8px;
}

.modal-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: #333;
}

.modal-meta {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
}

.modal-content {
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
}
</style>