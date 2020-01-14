<template>
  <div class="entrance">
    <h1>{{ roomName }}</h1>
    <p>
      Welcome to {{roomName}}
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
input {
  margin-right: 1em;
}

button {
  display: inline-block;
  font-size: 1rem;
  text-decoration: none;
  color: #67c5ff;
  border: solid 2px #67c5ff;
  border-radius: 3px;
  transition: .2s;
}

button:hover {
  background: #67c5ff;
  color: white;
}


</style>
