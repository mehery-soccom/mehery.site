<!-- Conversation.vue -->
<template>
  <div />
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const webchatScript = document.createElement('script')
  webchatScript.src = 'https://mehery.pages.dev/plugins/customer.js'
  webchatScript.type = 'text/javascript'
  webchatScript.innerHTML = JSON.stringify({
    domain: 'sales.mehery.com',
    channelId: 'web:meherysitepagesdev',
    channelKey: '1joi34fachojo9OAG550I72',
    config: {
      'header.bg.color': '#78bffd',
      'header.text.color': '#000000',
      'header.icon.url': 'https://cdn.jsdelivr.net/gh/mehery-soccom/mehery-web-dist@834bfa2c3b8060cac2ebcd7778758d6021be2dca/dist/logo/logo-tiny-o.png',
      'header.title.text': 'Lets Chat ...',
      'launcher.bg.color': '#4f46e5',
      'messageList.bg.color': '#ffffff',
      'sentMessage.bg.color': '#78bffd',
      'sentMessage.text.color': '#000000',
      'receivedMessage.bg.color': '#ffd898',
      'receivedMessage.text.color': '#000000',
      'userInput.bg.color': '#78bffd',
      'userInput.text.color': '#000000'
    }
  })
  document.body.appendChild(webchatScript)
})
</script>
