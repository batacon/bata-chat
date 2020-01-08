<template>
  <div>
    <Enter roomName="first chatroom"/>
    <input type="text" v-model="userName"/>
    <button v-on:click="addName">登録</button>
    <ul>
      <li v-for="(item, index) in items()" v-bind:key=index>
        <div class="message-header">
          {{ index+1 }} <span class="user-name">{{item.userName}}</span> {{item.timestamp}}
        </div>
        <div class="message-text">
          {{ item.message }}
        </div>
      </li>
    </ul>
    <textarea class="message-textarea" type="text" v-model="newMessage"/>
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
  margin: 0 10px 10px;
  background-color: #f1f1f1;
  /* background-color: #3f3f3f; */
}
.message-textarea {
  font-size: 1.4rem;
  width: 100%;
}
.user-name {
  color: blue;
  font-size: 1.4rem;
  font-weight: 900;
}
.message-header {
  font-size: 1.2rem;
}
.message-text {
  padding: .8em;
  font-size: 1.4rem;
}
</style>
