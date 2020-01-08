<template>
  <div>
    <Enter roomName="first room"/>
    <ul>
      <li v-for="(message, index) in messages()" v-bind:key=index>
        {{ message }}
      </li>
    </ul>
    <input type="text" v-model="newMessage"/>
    <button v-on:click="addMessage">送信</button>
  </div>
</template>

<script>
import Enter from './Enter.vue'

export default {
  name: 'ChatRoom',
  components: {
    Enter,
  },
  data: function() {
    return {
      newMessage: '',
      messages: function(){
        return localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
      }
    }
  },
  props: {
    // roomName: String,
    // roomMember: Array,
    // userName: String
  },
  methods: {
    addMessage: function() {
      const newMessages = this.messages()
      newMessages.push(this.newMessage)
      localStorage.setItem('items', JSON.stringify(newMessages))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  width: 100%;
}
</style>
