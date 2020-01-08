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
  /* background-color: #131a1a; */
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #262626;
  width: 40vw;
  min-width: 300px;
  margin: 0 auto;
}

.logo {
  text-align: center;
}
</style>
