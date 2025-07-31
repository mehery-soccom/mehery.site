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
      "chatWindow.theme.color": "#b98e33",

      'header.text.color': '#ffffff',
      'header.icon.url': 'https://cdn.jsdelivr.net/gh/mehery-soccom/mehery-web-dist@834bfa2c3b8060cac2ebcd7778758d6021be2dca/dist/logo/logo-tiny-o.png',
      'header.title.text': 'Lets Chat ...',

      "launcher.autoOpen.active": "true",
      'launcher.bg.color': '#b98e33',

      'messageList.bg.color': '#ffffff',

      "sentMessage.text.color" : "#ffffff",

      "receivedMessage.bg.color" : "#eaeaea",
      "receivedMessage.text.color" : "#222222",

      "userInput.bg.color" : "#f4f7f9",
      "userInput.text.color" : "#565867",
      "userInput.button.color" : "#ffffff",
    }
  })
  document.body.appendChild(webchatScript)
})
</script>
