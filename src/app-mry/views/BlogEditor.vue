<template>
  <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800">Create New Blog Post</h2>
      <button @click="logout" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
        Logout
      </button>
    </div>

    <form @submit.prevent="savePost" class="space-y-6">
      <div>
        <input v-model="post.title" placeholder="Blog Title" required
               class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
      </div>
      <div>
        <textarea v-model="post.content" placeholder="Blog Content" required
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent h-48 resize-y"></textarea>
      </div>
      <div>
        <input v-model="post.author" placeholder="Author" required
               class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
      </div>
      <div class="space-y-2">
        <label for="file-upload" class="block text-sm font-medium text-gray-700">Upload Image</label>
        <input id="file-upload" type="file" @change="handleImageUpload" accept="image/*"
               class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
      </div>
      <div v-if="post.image" class="mt-4">
        <img :src="post.image" alt="Image Preview" class="max-w-full h-auto rounded-lg shadow-md">
      </div>
      <button type="submit" class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
        Publish Post
      </button>
    </form>

    <div v-if="posts.length" class="mt-12">
      <h3 class="text-2xl font-semibold text-gray-800 mb-4">Manage Posts</h3>
      <div class="space-y-4">
        <div v-for="p in posts" :key="p.id" class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 class="text-lg font-medium text-gray-800">{{ p.title }}</h4>
            <p class="text-sm text-gray-600">By {{ p.author }} on {{ p.date }}</p>
          </div>
          <button @click="deletePost(p.id)" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fakeAuth } from "../utils/auth";

export default {
  data() {
    return {
      post: {
        title: "",
        content: "",
        author: "",
        date: "",
        image: ""
      },
      posts: []
    };
  },
  mounted() {
    this.loadPosts();
  },
  methods: {
    loadPosts() {
      this.posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    },
    savePost() {
      const existingPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
      const newPost = {
        ...this.post,
        id: Date.now(),
        date: new Date().toLocaleDateString()
      };
      const updatedPosts = [newPost, ...existingPosts];
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
      
      // Check if the toast plugin is available
      if (this.$toast) {
        this.$toast.success("Post saved successfully!", { duration: 3000 });
      } else {
        console.log("Post saved successfully!");
      }
      
      this.resetForm();
      this.loadPosts();
      // Redirect to blog page to see the new post
      this.$router.push("/blog");
    },
    resetForm() {
      this.post = {
        title: "",
        content: "",
        author: "",
        date: "",
        image: ""
      };
    },
    handleImageUpload(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.post.image = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    deletePost(id) {
      const posts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
      const updatedPosts = posts.filter(post => post.id !== id);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
      this.loadPosts();
      if (this.$toast) {
        this.$toast.success("Post deleted successfully!", { duration: 3000 });
      } else {
        console.log("Post deleted successfully!");
      }
    },
    logout() {
      fakeAuth.logout(() => {
        this.$router.push("/admin/login");
        if (this.$toast) {
          this.$toast.info("You have been logged out.", { duration: 3000 });
        } else {
          console.log("You have been logged out.");
        }
      });
    }
  }
};
</script>