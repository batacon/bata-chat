<template>
  <div>
    <h2>{{roomName}}</h2>
    <MessagesList :chats="chats" :userName="userName"/>
    <MessageForm :message="message" @updateMessage="updateMessage" @addMessage="addMessage"/>
    <button v-on:click="$emit('leaveRoom')">退出</button>
  </div>
</template>

<script>
import MessagesList from './ChatRoom/MessagesList.vue'
import MessageForm from './ChatRoom/MessageForm.vue'

export default {
  name: 'ChatRoom',
  components: {
    MessagesList,
    MessageForm
  },
  data() {
    return {
      message: '',
      chats: []
    }
  },
  watch: {
    chats(){
      localStorage.setItem('chats', JSON.stringify(this.chats))
    },
  },
  props: {
    userName: {
      type: String,
      default: '名無しさん'
    },
    roomName: {
      type: String,
      required: true
    }
    // roomMember: Array,
  },
  methods: {
    updateMessage(message) {
      this.message = message
    },
    addMessage() {
      this.chats.push({userName: this.userName, message: this.message, timestamp: new Date().toLocaleString('ja-JP')})
    },
  },
  created(){
    this.chats = localStorage.getItem("chats") ? JSON.parse(localStorage.getItem("chats")) : []
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

.register-name {
  text-align: center;
}
.message-textarea {
  font-size: 1.4rem;
  width: 100%;
}
button {
  margin-top: 20px;
  transition: .2s;
  border: solid 1px red;
}
button:hover {
  background: red;
  color: white;
}
</style>
