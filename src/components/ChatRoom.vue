<template>
  <div>
    <Enter roomName="first chatroom"/>
    <div v-if="this.entered()">
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
      <button v-on:click="leaveRoom">退出</button>
    </div>
    <!-- ここから下Enterに入れたい -->
    <div v-else>
      <p class="register-name">
        Your name?
        <input type="text" v-model="userName"/>
        <button v-on:click="registerName">入室</button>
      </p>
    </div>
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
      },
      entered: function(){
        return localStorage.getItem("entered") ? localStorage.getItem("entered") : false
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
    registerName: function() {
      localStorage.setItem('userName', this.userName)
      localStorage.setItem('entered', true)
      this.userName = ''
    },
    leaveRoom: function() {
      localStorage.removeItem('userName')
      localStorage.removeItem('entered')
      location.reload() // DOM更新でできないか？
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
.register-name {
  text-align: center;
}
</style>
