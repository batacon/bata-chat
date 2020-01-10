<template>
  <div class="entrance">
    <h1>{{ roomName }}</h1>
    <p>
      Welcome to ChatRoom
    </p>
    <p class="register-name">
      Your name?
      <input type="text" v-model="userName"/>
      <button @click="enterRoom">入室</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Entrance',
  props: {
    roomName: String,
  },
  data(){
    return {
      userName: ''
    }
  },
  methods: {
    enterRoom(){
      const userName = this.userName ? this.userName : undefined
      this.$emit('enterRoom', userName)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.entrance {
  text-align: center;
  margin-bottom: 2em;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
