<template>
  <div>
    <ChatRoom v-if="this.entered" :userName="userName" @leaveRoom="leaveRoom"/>
    <Entrance v-else @enterRoom="enterRoom" roomName="ChatRoom"/>
  </div>
</template>

<script>
import ChatRoom from './components/ChatRoom.vue'
import Entrance from './components/Entrance.vue'

export default {
  name: 'app',
  components: {
    ChatRoom,
    Entrance
  },
  data() {
    return {
      entered: false,
      userName: '',
    }
  },
  methods: {
    enterRoom(userName) {
      this.entered = true
      this.userName = userName
    },
    leaveRoom() {
      this.userName = ''
      this.entered = false
    },
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
