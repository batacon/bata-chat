<template>
  <div id="app">
    <div class='logo'>
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
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
  color: #fff;
  width: 40vw;
  min-width: 300px;
  margin: 0 auto;
}

.logo {
  text-align: center;
}
</style>
