<template>
  <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-3xl font-bold text-gray-800">Create New Blog Post</h2>
      <button @click="logout" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
        Logout
      </button>
    </div>

    <div v-if="errorMessage" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
      {{ errorMessage }}
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
        <label for="file-upload" class="block text-sm font-medium text-gray-700">Upload Image (smaller than 900KB)</label>
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
import { blogService, authService } from "../../firebase/index";

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
      posts: [],
      errorMessage: ""
    };
  },
  mounted() {
    this.loadPosts();
    console.log("BlogEditor component mounted");
  },
  methods: {
    async loadPosts() {
      console.log("Loading blog posts");
      try {
        this.posts = await blogService.getPosts();
        console.log("Posts loaded:", this.posts.length);
      } catch (error) {
        this.errorMessage = "Error loading posts: " + error.message;
      }
    },
    async savePost() {
      console.log("Saving blog post");
      this.errorMessage = "";
      
      try {
        const newPost = {
          ...this.post,
          date: new Date().toLocaleDateString()
        };
        
        console.log("Saving post:", newPost.title);
        const result = await blogService.savePost(newPost);
        console.log("Post saved:", result);
        
        if (result) {
          alert("Post published successfully!");
          this.resetForm();
          await this.loadPosts();
          
          // Uncomment if you want to navigate to blog page
          // this.$router.push("/blog");
        }
      } catch (error) {
        console.error("Error saving post:", error);
        this.errorMessage = "Error saving post: " + error.message;
      }
    },
    async deletePost(id) {
      console.log("Deleting post:", id);
      try {
        await blogService.deletePost(id);
        alert("Post deleted successfully");
        await this.loadPosts();
      } catch (error) {
        this.errorMessage = "Error deleting post: " + error.message;
      }
    },
    handleImageUpload(e) {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 900000) {
          this.errorMessage = "Image is too large. Please select an image smaller than 900KB.";
          return;
        }
        
        const reader = new FileReader();
        reader.onload = () => {
          this.post.image = reader.result;
        };
        reader.readAsDataURL(file);
      }
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
    async logout() {
      try {
        await authService.logout();
        this.$router.push("/admin/login");
      } catch (error) {
        this.errorMessage = "Error during logout: " + error.message;
      }
    }
  }
};
</script>