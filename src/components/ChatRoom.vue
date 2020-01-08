<template>
  <div>
    <Enter roomName="first room"/>
    <input type="text" v-model="userName"/>
    <button v-on:click="addName">登録</button>
    <ul>
      <li v-for="(item, index) in items()" v-bind:key=index>
        {{ index+1 }} {{item.userName}} {{item.timestamp}}
        {{ item.message }}
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
      userName: '',
      items: function(){
        return localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []
      }
    }
  },
  props: {
    // roomName: String,
    // roomMember: Array,
  },
  methods: {
    addMessage: function() {
      const newItems = this.items()
      newItems.push({userName: localStorage.getItem('userName'), message: this.newMessage, timestamp: new Date().toLocaleString('ja-JP')})
      localStorage.setItem('items', JSON.stringify(newItems))
      this.newMessage = ''
    },
    addName: function() {
      localStorage.setItem('userName', this.userName)
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
