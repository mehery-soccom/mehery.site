<template>
  <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">FAQ Editor</h2>

    <form @submit.prevent="saveFaq" class="space-y-6">
      <div>
        <label for="title" class="block text-sm font-medium text-gray-700">Question</label>
        <input type="text" id="title" v-model="faq.title" required
               class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent">
      </div>
      <div>
        <label for="content" class="block text-sm font-medium text-gray-700">Answer</label>
        <textarea id="content" v-model="faq.content" required
                  class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent h-48 resize-y"></textarea>
      </div>

      <button type="submit" class="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
        Save FAQ
      </button>
    </form>

    <div v-if="faqs.length" class="mt-12">
      <h3 class="text-2xl font-semibold text-gray-800 mb-4">Manage FAQs</h3>
      <div class="space-y-4">
        <div v-for="(f, index) in faqs" :key="f.id" class="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
          <div>
            <h4 class="text-lg font-medium text-gray-800">{{ f.title }}</h4>
          </div>
          <button @click="deleteFaq(index)" class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: {
        title: '',
        content: ''
      },
      faqs: []
    };
  },
  mounted() {
    this.loadFaqs();
  },
  methods: {
    loadFaqs() {
      this.faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
    },
    saveFaq() {
      const existingFaqs = JSON.parse(localStorage.getItem('faqs') || '[]');
      const newFaq = {
        ...this.faq,
        id: Date.now()
      };
      const updatedFaqs = [newFaq, ...existingFaqs];
      localStorage.setItem('faqs', JSON.stringify(updatedFaqs));
      this.faqs = updatedFaqs;
      this.resetForm();
      this.$router.push('/faq'); // Redirect to FAQ page after saving
    },
    deleteFaq(index) {
      const faqs = JSON.parse(localStorage.getItem('faqs') || '[]');
      faqs.splice(index, 1);
      localStorage.setItem('faqs', JSON.stringify(faqs));
      this.loadFaqs();
    },
    resetForm() {
      this.faq = {
        title: '',
        content: ''
      };
    }
  }
};
</script>