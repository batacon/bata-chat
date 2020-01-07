<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ChatRoom roomName="ChatRoom"/>
  </div>
</template>

<script>
import ChatRoom from './components/ChatRoom.vue'

export default {
  name: 'app',
  components: {
    ChatRoom,
  }
}
</script>

<style>
html {
  background-color: #000;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
