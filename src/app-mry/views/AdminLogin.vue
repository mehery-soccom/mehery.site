<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-3xl font-bold text-center mb-6">Admin Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-1">Username</label>
          <input
            type="text"
            v-model="username"
            placeholder="Enter username"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-1">Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="Enter password"
            class="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div v-if="error" class="mb-4 text-red-500 text-sm">
          {{ error }}
        </div>
        <button type="submit" class="text-center w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { fakeAuth, ADMIN_CREDS } from "../utils/auth";
export default {
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    handleLogin() {
      if (this.username === ADMIN_CREDS.username && this.password === ADMIN_CREDS.password) {
        fakeAuth.login(() => {
          this.$router.push("/admin/edit");
        });
      } else {
        this.error = "Invalid username or password. Use username: admin and password: blog123";
      }
    }
  }
};
</script>

<style scoped>
/* No additional styles needed as TailwindCSS classes are in use */
</style>