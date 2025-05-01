<template>
    <div class="btn-cnt">
      <button>
        <component :is="icon" />
        {{ value }}
      </button>
    </div>
</template>
  
<script>
  export default {
    name: 'Button',
    props: {
      icon: {
        type: [Object, String],
        default: null,
      },
      value: {
        type: String,
        default: '',
      },
    },
  };
</script>
  
<style scoped>
</style>
  